import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  User,
  Share2,
  Copy,
  Check,
  Tag,
  AlertCircle,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";
import { getBlogBySlug } from "@/services/blogApi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadArticle() {
      if (!slug) return;
      setLoading(true);
      setError(null);
      try {
        const res = await getBlogBySlug(slug);
        if (res && res.data) {
          setBlog(res.data);
          // Set dynamic document title and meta description
          document.title = `${res.data.title} | OTAS Insights`;
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc && res.data.excerpt) {
            metaDesc.setAttribute("content", res.data.excerpt);
          }
        } else {
          setError("ဆောင်းပါး ရှာမတွေ့ပါ");
        }
      } catch (err) {
        console.error("Failed to load article:", err);
        setError(
          err.message ||
            "ဆောင်းပါး အချက်အလက်များ ရယူရာတွင် ချို့ယွင်းချက်ရှိနေပါသည်။"
        );
      } finally {
        setLoading(false);
      }
    }

    loadArticle();
    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      document.title = "OTAS Tech Solutions | Best Tech Partner in Myanmar";
    };
  }, [slug]);

  // Format date helper
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  // Social Share Handlers
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    toast.success("Link ကို Copy ကူးယူပြီးပါပြီ!");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareTwitter = () => {
    const titleText = blog?.title || "OTAS Insights";
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        titleText
      )}&url=${encodeURIComponent(currentUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        currentUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareTelegram = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(
        currentUrl
      )}&text=${encodeURIComponent(blog?.title || "")}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FBFBFF] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button skeleton */}
          <div className="h-6 w-32 bg-slate-200 rounded-md animate-pulse mb-8" />

          {/* Header skeleton */}
          <div className="space-y-4 mb-8">
            <div className="h-6 w-24 bg-slate-200 rounded-md animate-pulse" />
            <div className="h-10 w-full bg-slate-200 rounded-md animate-pulse" />
            <div className="h-10 w-3/4 bg-slate-200 rounded-md animate-pulse" />
            <div className="flex gap-4 pt-2">
              <div className="h-4 w-28 bg-slate-200 rounded-md animate-pulse" />
              <div className="h-4 w-20 bg-slate-200 rounded-md animate-pulse" />
            </div>
          </div>

          {/* Cover image skeleton */}
          <div className="h-80 w-full bg-slate-200 rounded-2xl animate-pulse mb-10" />

          {/* Body paragraphs skeleton */}
          <div className="space-y-4">
            <div className="h-4 w-full bg-slate-200 rounded-md animate-pulse" />
            <div className="h-4 w-full bg-slate-200 rounded-md animate-pulse" />
            <div className="h-4 w-5/6 bg-slate-200 rounded-md animate-pulse" />
            <div className="h-4 w-4/5 bg-slate-200 rounded-md animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#FBFBFF] py-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="inline-flex p-4 rounded-3xl bg-red-50 text-red-500 mb-4">
            <AlertCircle className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            ဆောင်းပါး ရှာမတွေ့ပါ
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            {error || "ဤဆောင်းပါးကို ရှာမတွေ့နိုင်ပါ သို့မဟုတ် ဖယ်ရှားလိုက်ပါပြီ။"}
          </p>
          <Button
            onClick={() => navigate("/blog")}
            className="bg-primary hover:bg-primary-dark text-white rounded-xl shadow-xs"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>ဆောင်းပါးများ စာမျက်နှာသို့ ပြန်သွားမည်</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#FBFBFF] py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>ဆောင်းပါးများ အားလုံးသို့ ပြန်သွားရန်</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          {/* Category */}
          {blog.category && (
            <div className="mb-4">
              <Link to={`/blog?category=${encodeURIComponent(blog.category)}`}>
                <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-xs px-3.5 py-1 rounded-lg font-medium">
                  {blog.category}
                </Badge>
              </Link>
            </div>
          )}

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-aj11 text-slate-900 leading-tight tracking-tight">
            {blog.title}
          </h1>

          {/* Meta Info Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-500 pb-6 border-b border-slate-200">
            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                {blog.authorName ? blog.authorName.charAt(0).toUpperCase() : <User className="h-4 w-4" />}
              </div>
              <span className="font-semibold text-slate-800">
                {blog.authorName || "OTAS Team"}
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-slate-400" />
              <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
            </div>

            {/* Read Time */}
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-slate-400" />
              <span>{blog.readTime || 5} မိနစ်ဖတ်ရန်</span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-1.5 ml-auto text-slate-400">
              <Eye className="h-4 w-4" />
              <span>{blog.views || 0} ကြိမ် ဖတ်ရှုပြီး</span>
            </div>
          </div>
        </motion.header>

        {/* Featured Cover Image */}
        {blog.coverImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-100"
          >
            <img
              src={blog.coverImage}
              alt={blog.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/HeroBanner.png";
              }}
              className="w-full max-h-[460px] object-cover"
            />
          </motion.div>
        )}

        {/* Article Excerpt / Highlight Box if available */}
        {blog.excerpt && (
          <div className="mb-8 p-5 bg-blue-50/60 border-l-4 border-primary rounded-r-2xl text-slate-700 italic text-base sm:text-lg leading-relaxed">
            {blog.excerpt}
          </div>
        )}

        {/* Main Article Content (Safe HTML Rendering) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="blog-content font-sans bg-white p-6 sm:p-10 md:p-12 rounded-3xl border border-slate-100 shadow-xs"
          dangerouslySetInnerHTML={{ __html: blog.content || "<p>ဆောင်းပါး အကြောင်းအရာ မရှိသေးပါ။</p>" }}
        />

        {/* Tags Section */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mr-2">
              <Tag className="h-3.5 w-3.5" />
              <span>Tags:</span>
            </div>
            {blog.tags.map((tag, idx) => (
              <Link
                key={idx}
                to={`/blog?tag=${encodeURIComponent(tag)}`}
                className="px-3 py-1 bg-slate-100 hover:bg-primary/10 hover:text-primary text-slate-600 rounded-lg text-xs font-medium transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* Social Share Bar */}
        <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
            <Share2 className="h-4 w-4 text-primary" />
            <span>ဤဆောင်းပါးကို မျှဝေရန်:</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              title="Copy Link"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            {/* Facebook */}
            <button
              onClick={handleShareFacebook}
              title="Share on Facebook"
              className="p-2.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] transition-colors cursor-pointer"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            {/* Twitter / X */}
            <button
              onClick={handleShareTwitter}
              title="Share on X (Twitter)"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors cursor-pointer"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>

            {/* LinkedIn */}
            <button
              onClick={handleShareLinkedIn}
              title="Share on LinkedIn"
              className="p-2.5 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] transition-colors cursor-pointer"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </button>

            {/* Telegram */}
            <button
              onClick={handleShareTelegram}
              title="Share on Telegram"
              className="p-2.5 rounded-xl bg-[#229ED9]/10 hover:bg-[#229ED9]/20 text-[#229ED9] transition-colors cursor-pointer"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Back to blogs CTA Footer */}
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-xl border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-5 font-sans"
          >
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>ဆောင်းပါးများ စာရင်းသို့ ပြန်သွားမည်</span>
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
export default BlogDetail;
