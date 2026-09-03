import { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  Eye,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Filter,
  Tag,
  X,
  BookOpen,
  Sparkles,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import { getBlogs, getBlogCategories } from "@/services/blogApi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BlogList() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL state
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const selectedCategory = searchParams.get("category") || "All";
  const searchQuery = searchParams.get("search") || "";
  const selectedTag = searchParams.get("tag") || "";
  const selectedSort = searchParams.get("sort") || "latest";

  // Local state
  const [searchInput, setSearchInput] = useState(searchQuery);
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    pages: 1,
    limit: 9,
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories
  useEffect(() => {
    let isMounted = true;
    async function loadCategories() {
      try {
        const res = await getBlogCategories();
        if (isMounted && res && res.data) {
          setCategories(res.data);
        }
      } catch (err) {
        console.warn("Could not load categories:", err);
      }
    }
    loadCategories();
    return () => {
      isMounted = false;
    };
  }, []);

  // Fetch blogs when query parameters change
  useEffect(() => {
    let isMounted = true;

    async function loadBlogs() {
      setLoading(true);
      setError(null);
      try {
        const res = await getBlogs({
          page: currentPage,
          limit: 9,
          category: selectedCategory !== "All" ? selectedCategory : undefined,
          search: searchQuery || undefined,
          tag: selectedTag || undefined,
          sort: selectedSort,
        });

        if (isMounted) {
          if (res && res.data) {
            setBlogs(res.data.blogs || []);
            setPagination(
              res.data.pagination || {
                total: res.data.blogs?.length || 0,
                page: currentPage,
                pages: 1,
                limit: 9,
              }
            );
          } else {
            setBlogs([]);
          }
        }
      } catch (err) {
        if (isMounted) {
          console.error("Failed to fetch blogs:", err);
          setError(
            err.message ||
              "ဆောင်းပါးများ ရယူရာတွင် အခက်အခဲရှိနေပါသည်။ ကျေးဇူးပြု၍ ပြန်လည်ကြိုးစားပေးပါ။"
          );
          setBlogs([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadBlogs();
    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      isMounted = false;
    };
  }, [currentPage, selectedCategory, searchQuery, selectedTag, selectedSort]);

  // Refresh data handler
  const handleRetry = useCallback(() => {
    setLoading(true);
    setError(null);
    getBlogs({
      page: currentPage,
      limit: 9,
      category: selectedCategory !== "All" ? selectedCategory : undefined,
      search: searchQuery || undefined,
      tag: selectedTag || undefined,
      sort: selectedSort,
    })
      .then((res) => {
        if (res && res.data) {
          setBlogs(res.data.blogs || []);
          setPagination(
            res.data.pagination || {
              total: res.data.blogs?.length || 0,
              page: currentPage,
              pages: 1,
              limit: 9,
            }
          );
        }
      })
      .catch((err) => {
        setError(
          err.message ||
            "ဆောင်းပါးများ ရယူရာတွင် အခက်အခဲရှိနေပါသည်။ ကျေးဇူးပြု၍ ပြန်လည်ကြိုးစားပေးပါ။"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage, selectedCategory, searchQuery, selectedTag, selectedSort]);

  // Update query params helper
  const updateParams = (newParams) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "" || value === "All") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    setSearchParams(params);
  };

  // Search handler
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateParams({ search: searchInput, page: 1 });
  };

  const handleClearSearch = () => {
    setSearchInput("");
    updateParams({ search: "", page: 1 });
  };

  const handleClearTag = () => {
    updateParams({ tag: "", page: 1 });
  };

  const handleCategoryChange = (categoryName) => {
    updateParams({ category: categoryName, page: 1 });
  };

  const handleSortChange = (sortVal) => {
    updateParams({ sort: sortVal, page: 1 });
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.pages) {
      updateParams({ page: newPage });
    }
  };

  // Format date helper
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFF] py-12 md:py-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-12 md:pb-16">
        {/* Background Glow Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-primary/15 via-sky-300/10 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs sm:text-sm font-medium mb-4 shadow-xs">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>OTAS Insights & Articles</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-aj11 text-slate-900 tracking-tight leading-tight">
              ဗဟုသုတ နှင့် နည်းပညာ <span className="text-primary">ဆောင်းပါးများ</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              စီးပွားရေးလုပ်ငန်းများအတွက် ခေတ်မီနည်းပညာ၊ AI Solutions နှင့် Software Development ဆိုင်ရာ အသုံးဝင်သော ဗဟုသုတများကို မျှဝေပေးထားပါသည်။
            </p>

            {/* Search Input Box */}
            <form
              onSubmit={handleSearchSubmit}
              className="mt-8 relative max-w-xl mx-auto flex items-center"
            >
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="ဆောင်းပါး ခေါင်းစဉ် သို့မဟုတ် အကြောင်းအရာ ရှာဖွေပါ..."
                  className="w-full pl-12 pr-24 py-3.5 bg-white border border-slate-200 rounded-2xl shadow-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm sm:text-base font-sans"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute right-20 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <Button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-primary hover:bg-primary-dark text-white rounded-xl shadow-xs transition-all font-sans text-sm"
              >
                ရှာမည်
              </Button>
            </form>

            {/* Active Tag indicator if filtered */}
            {selectedTag && (
              <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                <Tag className="h-3.5 w-3.5" />
                <span>Tag: {selectedTag}</span>
                <button
                  onClick={handleClearTag}
                  className="hover:text-blue-950 ml-1 p-0.5 rounded-full"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills & Sorting Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <button
              onClick={() => handleCategoryChange("All")}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap cursor-pointer",
                selectedCategory === "All"
                  ? "bg-primary text-white shadow-sm shadow-primary/25"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              )}
            >
              အားလုံး (All)
            </button>

            {categories.map((cat) => (
              <button
                key={cat.name || cat._id}
                onClick={() => handleCategoryChange(cat.name)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer",
                  selectedCategory === cat.name
                    ? "bg-primary text-white shadow-sm shadow-primary/25"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                )}
              >
                <span>{cat.name}</span>
                {cat.count !== undefined && (
                  <span
                    className={cn(
                      "text-xs px-1.5 py-0.5 rounded-full font-mono",
                      selectedCategory === cat.name
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600"
                    )}
                  >
                    {cat.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <Filter className="h-4 w-4 text-slate-400" />
            <span className="text-xs text-slate-500 font-medium">စီစဉ်ရန်:</span>
            <select
              value={selectedSort}
              onChange={(e) => handleSortChange(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer"
            >
              <option value="latest">နောက်ဆုံးရ (Latest)</option>
              <option value="popular">လူကြိုက်များ (Popular)</option>
              <option value="oldest">အရင်ဆုံး (Oldest)</option>
            </select>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="py-10">
          {/* Loading Skeletons */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs animate-pulse"
                >
                  <div className="h-52 bg-slate-200" />
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="h-5 bg-slate-200 rounded-md w-24" />
                      <div className="h-4 bg-slate-200 rounded-md w-16" />
                    </div>
                    <div className="h-6 bg-slate-200 rounded-md w-4/5" />
                    <div className="space-y-2">
                      <div className="h-4 bg-slate-200 rounded-md w-full" />
                      <div className="h-4 bg-slate-200 rounded-md w-3/4" />
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                      <div className="h-4 bg-slate-200 rounded-md w-24" />
                      <div className="h-4 bg-slate-200 rounded-md w-12" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-red-100 shadow-xs max-w-xl mx-auto">
              <div className="inline-flex p-3 rounded-2xl bg-red-50 text-red-500 mb-4">
                <AlertCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                ဆောင်းပါးများ ရယူရာတွင် ချို့ယွင်းချက်ဖြစ်ပေါ်နေပါသည်
              </h3>
              <p className="text-slate-500 text-sm mb-6">{error}</p>
              <Button
                onClick={handleRetry}
                variant="outline"
                className="inline-flex items-center gap-2 border-primary text-primary hover:bg-primary/5 rounded-xl cursor-pointer"
              >
                <RotateCcw className="h-4 w-4" />
                <span>ပြန်လည်ကြိုးစားမည်</span>
              </Button>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && blogs.length === 0 && (
            <div className="text-center py-20 px-4 bg-white rounded-3xl border border-slate-100 shadow-xs max-w-lg mx-auto">
              <div className="inline-flex p-4 rounded-3xl bg-blue-50 text-primary mb-4">
                <BookOpen className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                ဆောင်းပါး မတွေ့ရှိပါ
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                ရှာဖွေထားသော စကားလုံး သို့မဟုတ် ကဏ္ဍအတွက် ဆောင်းပါးများ မရှိသေးပါ။
              </p>
              <Button
                onClick={() => {
                  setSearchInput("");
                  setSearchParams({});
                }}
                className="bg-primary hover:bg-primary-dark text-white rounded-xl shadow-xs font-sans text-sm"
              >
                အားလုံးကို ပြန်ပြပါ
              </Button>
            </div>
          )}

          {/* Blogs Grid */}
          {!loading && !error && blogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {blogs.map((blog, idx) => (
                  <motion.article
                    key={blog._id || blog.slug || idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col"
                  >
                    {/* Cover Image */}
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="relative block h-52 overflow-hidden bg-slate-100"
                    >
                      <img
                        src={blog.coverImage || "/images/HeroBanner.png"}
                        alt={blog.title}
                        style={{ objectPosition: blog.coverImagePosition || '50% 50%' }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/HeroBanner.png";
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Category Badge overlay */}
                      {blog.category && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary/90 hover:bg-primary text-white backdrop-blur-xs font-medium text-xs shadow-xs px-3 py-1 rounded-lg">
                            {blog.category}
                          </Badge>
                        </div>
                      )}

                      {/* Read time badge */}
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{blog.readTime || 5} min read</span>
                      </div>
                    </Link>

                    {/* Content Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Meta: Date & Views */}
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(blog.publishedAt || blog.createdAt)}
                          </span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <Eye className="h-3.5 w-3.5" />
                            {blog.views || 0} views
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                        </h3>

                        {/* Excerpt */}
                        <p className="mt-2.5 text-sm text-slate-600 line-clamp-3 leading-relaxed font-sans">
                          {blog.excerpt}
                        </p>
                      </div>

                      {/* Card Footer: Tags & Read more */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 overflow-hidden">
                          {blog.tags && blog.tags.length > 0 ? (
                            <span className="text-xs text-slate-500 truncate">
                              #{blog.tags[0]}
                              {blog.tags.length > 1 && ` +${blog.tags.length - 1}`}
                            </span>
                          ) : (
                            <span className="text-xs text-slate-400">
                              {blog.authorName || "OTAS Team"}
                            </span>
                          )}
                        </div>

                        <Link
                          to={`/blog/${blog.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform"
                        >
                          <span>ဆက်ဖတ်ရန်</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {!loading && pagination.pages > 1 && (
          <div className="pt-6 pb-12 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page <= 1}
              className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              <span>ရှေ့သို့</span>
            </Button>

            {/* Page numbers */}
            <div className="flex items-center gap-1.5 mx-2">
              {[...Array(pagination.pages)].map((_, i) => {
                const pageNum = i + 1;
                // Show first, last, and pages around current
                if (
                  pageNum === 1 ||
                  pageNum === pagination.pages ||
                  (pageNum >= pagination.page - 1 && pageNum <= pagination.page + 1)
                ) {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={cn(
                        "w-9 h-9 rounded-xl text-sm font-medium transition-all cursor-pointer",
                        pagination.page === pageNum
                          ? "bg-primary text-white shadow-xs font-bold"
                          : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                      )}
                    >
                      {pageNum}
                    </button>
                  );
                } else if (
                  pageNum === pagination.page - 2 ||
                  pageNum === pagination.page + 2
                ) {
                  return (
                    <span key={pageNum} className="text-slate-400 px-1">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={pagination.page >= pagination.pages}
              className="rounded-xl border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40"
            >
              <span>နောက်သို့</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
export default BlogList;
