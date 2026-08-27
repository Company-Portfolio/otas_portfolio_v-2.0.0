import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/public";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Fetch paginated & filtered list of published blogs
 * @param {Object} params
 * @param {number} [params.page=1]
 * @param {number} [params.limit=9]
 * @param {string} [params.category]
 * @param {string} [params.search]
 * @param {string} [params.tag]
 * @param {string} [params.sort] - 'latest' | 'popular' | 'oldest'
 */
export async function getBlogs(params = {}) {
  try {
    const cleanParams = {};
    if (params.page) cleanParams.page = params.page;
    if (params.limit) cleanParams.limit = params.limit;
    if (params.category && params.category !== "All" && params.category !== "အားလုံး") {
      cleanParams.category = params.category;
    }
    if (params.search && params.search.trim()) {
      cleanParams.search = params.search.trim();
    }
    if (params.tag && params.tag.trim()) {
      cleanParams.tag = params.tag.trim();
    }
    if (params.sort) {
      cleanParams.sort = params.sort;
    }

    const response = await apiClient.get("/blogs", { params: cleanParams });
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error?.response?.data || error;
  }
}

/**
 * Fetch a single blog by slug (also auto-increments view count on backend)
 * @param {string} slug
 */
export async function getBlogBySlug(slug) {
  try {
    const response = await apiClient.get(`/blogs/${encodeURIComponent(slug)}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog [${slug}]:`, error);
    throw error?.response?.data || error;
  }
}

/**
 * Fetch category list with counts
 */
export async function getBlogCategories() {
  try {
    const response = await apiClient.get("/blogs/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error?.response?.data || error;
  }
}
