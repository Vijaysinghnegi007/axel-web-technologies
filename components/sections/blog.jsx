"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching blog posts
    const fetchPosts = () => {
      setTimeout(() => {
        setPosts(blogPosts);
        setLoading(false);
      }, 1000);
    };

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2 max-w-[800px]"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Our <span className="text-gradient">Blog</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest insights, trends, and news in the tech world.
            </p>
          </motion.div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="card overflow-hidden h-full">
                <div className="card-content p-0">
                  <div className="h-48 bg-muted animate-pulse" />
                  <div className="p-6 space-y-4">
                    <div className="h-4 w-1/4 bg-muted animate-pulse rounded" />
                    <div className="h-6 bg-muted animate-pulse rounded" />
                    <div className="h-4 bg-muted animate-pulse rounded" />
                    <div className="h-4 bg-muted animate-pulse rounded" />
                    <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
                    <div className="h-10 w-1/3 bg-muted animate-pulse rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="button large">
            <a href="#">
              View All Posts
              {/* Replace ArrowRight icon with a placeholder or simple text */}
              <span className="ml-2">→</span>
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function BlogCard({ post }) {
  return (
    <div className="card overflow-hidden h-full group">
      <div className="card-content p-0">
        <a href={`/blog/${post.slug}`} className="block overflow-hidden">
          {/* Replace Next.js Image with standard img tag */}
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={400}
            height={225}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3">
            {/* Replace Badge with span */}
            <span className="badge outline bg-primary/5">
              {post.category}
            </span>
            <div className="flex items-center text-xs text-muted-foreground">
              {/* Replace Calendar icon with a placeholder or simple text */}
              <span className="h-3 w-3 mr-1">📅</span>
              {post.date}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              {/* Replace Clock icon with a placeholder or simple text */}
              <span className="h-3 w-3 mr-1">⏰</span>
              {post.readTime} min read
            </div>
          </div>
          <a href={`/blog/${post.slug}`}>
            <h3 className="card-title mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
          </a>
          <p className="card-description mb-4">{post.excerpt}</p>
          {/* Replace Button with anchor tag or button */}
          <button className="button ghost p-0 h-auto text-primary">
            <a href={`/blog/${post.slug}`}>
              Read More
              {/* Replace ArrowRight icon with a placeholder or simple text */}
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    slug: "future-web-development-trends-2024",
    excerpt:
      "Explore the emerging technologies and methodologies that will shape the web development landscape in 2024 and beyond.",
    content: "",
    image: "/placeholder.svg",
    category: "Web Development",
    date: "Mar 15, 2024",
    readTime: 5,
    author: {
      name: "Alex Johnson",
      image: "/placeholder-user.jpg",
      role: "CTO",
    },
  },
  {
    id: 2,
    title: "How AI is Transforming Mobile App Development",
    slug: "ai-transforming-mobile-app-development",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way mobile applications are designed, developed, and maintained.",
    content: "",
    image: "/placeholder.svg",
    category: "Mobile Development",
    date: "Mar 8, 2024",
    readTime: 4,
    author: {
      name: "Sarah Williams",
      image: "/placeholder-user.jpg",
      role: "Lead Developer",
    },
  },
  {
    id: 3,
    title: "Building Accessible Websites: A Comprehensive Guide",
    slug: "building-accessible-websites-guide",
    excerpt:
      "Learn the best practices and techniques for creating websites that are accessible to all users, including those with disabilities.",
    content: "",
    image: "/placeholder.svg",
    category: "Accessibility",
    date: "Feb 28, 2024",
    readTime: 6,
    author: {
      name: "Michael Chen",
      image: "/placeholder-user.jpg",
      role: "UX Designer",
    },
  },
];
