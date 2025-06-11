// Local storage utilities for admin data management

// Blog storage operations
export const blogStorage = {
  getAll: () => {
    if (typeof window === "undefined") return []
    const stored = localStorage.getItem("admin_blog_posts")
    return stored ? JSON.parse(stored) : getDefaultBlogPosts()
  },

  getById: (id) => {
    const posts = blogStorage.getAll()
    return posts.find((post) => post.id === id) || null
  },

  create: (post) => {
    const posts = blogStorage.getAll()
    const newPost = {
      ...post,
      id: Date.now().toString(),
    }
    posts.push(newPost)
    localStorage.setItem("admin_blog_posts", JSON.stringify(posts))
    return newPost
  },

  update: (id, updates) => {
    const posts = blogStorage.getAll()
    const index = posts.findIndex((post) => post.id === id)
    if (index === -1) return null

    posts[index] = { ...posts[index], ...updates }
    localStorage.setItem("admin_blog_posts", JSON.stringify(posts))
    return posts[index]
  },

  delete: (id) => {
    const posts = blogStorage.getAll()
    const filteredPosts = posts.filter((post) => post.id !== id)
    if (filteredPosts.length === posts.length) return false

    localStorage.setItem("admin_blog_posts", JSON.stringify(filteredPosts))
    return true
  },
}

// Portfolio storage operations
export const portfolioStorage = {
  getAll: () => {
    if (typeof window === "undefined") return []
    const stored = localStorage.getItem("admin_portfolio_items")
    return stored ? JSON.parse(stored) : getDefaultPortfolioItems()
  },

  getById: (id) => {
    const items = portfolioStorage.getAll()
    return items.find((item) => item.id === id) || null
  },

  create: (item) => {
    const items = portfolioStorage.getAll()
    const newItem = {
      ...item,
      id: Date.now().toString(),
    }
    items.push(newItem)
    localStorage.setItem("admin_portfolio_items", JSON.stringify(items))
    return newItem
  },

  update: (id, updates) => {
    const items = portfolioStorage.getAll()
    const index = items.findIndex((item) => item.id === id)
    if (index === -1) return null

    items[index] = { ...items[index], ...updates }
    localStorage.setItem("admin_portfolio_items", JSON.stringify(items))
    return items[index]
  },

  delete: (id) => {
    const items = portfolioStorage.getAll()
    const filteredItems = items.filter((item) => item.id !== id)
    if (filteredItems.length === items.length) return false

    localStorage.setItem("admin_portfolio_items", JSON.stringify(filteredItems))
    return true
  },
}

// Default blog posts
function getDefaultBlogPosts() {
  return [
    {
      id: "1",
      title: "The Future of Web Development in 2024",
      category: "web-development",
      image: "/placeholder.svg?height=600&width=800",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
      content: "Full blog post content here...",
      author: "John Smith",
      date: "May 10, 2023",
      status: "published",
      readTime: "5 min read",
      tags: ["web development", "trends", "2024"],
    },
    {
      id: "2",
      title: "How AI is Transforming the Tech Industry",
      category: "artificial-intelligence",
      image: "/placeholder.svg?height=600&width=800",
      excerpt: "An in-depth look at how artificial intelligence is revolutionizing technology.",
      content: "Full blog post content here...",
      author: "Jane Doe",
      date: "April 22, 2023",
      status: "published",
      readTime: "8 min read",
      tags: ["AI", "technology", "innovation"],
    },
    {
      id: "3",
      title: "Best Practices for Mobile App Development",
      category: "mobile-development",
      image: "/placeholder.svg?height=600&width=800",
      excerpt: "Essential tips and best practices for creating successful mobile applications.",
      content: "Full blog post content here...",
      author: "Mike Johnson",
      date: "March 15, 2023",
      status: "published",
      readTime: "6 min read",
      tags: ["mobile", "development", "best practices"],
    },
  ]
}

// Default portfolio items
function getDefaultPortfolioItems() {
  return [
    {
      id: "1",
      title: "E-Commerce Platform",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "A modern e-commerce platform built with Next.js and Stripe integration.",
      content: "Full project description here...",
      client: "RetailTech Inc.",
      date: "June 2023",
      status: "published",
      technologies: ["Next.js", "React", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: "2",
      title: "Health & Fitness App",
      category: "mobile",
      image: "/placeholder.svg?height=600&width=800",
      description: "A comprehensive health and fitness mobile application.",
      content: "Full project description here...",
      client: "FitLife Solutions",
      date: "April 2023",
      status: "published",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://example.com",
    },
  ]
}
