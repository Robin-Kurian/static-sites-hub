"use client";

import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Clock, User } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt:
      "Exploring upcoming trends and technologies that will shape web development",
    category: "Technology",
    author: "Sarah Johnson",
    readTime: "8 min read",
    date: "March 15, 2024",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Mastering Modern UI Design Principles",
    excerpt:
      "A comprehensive guide to creating beautiful and functional user interfaces",
    category: "Design",
    author: "Michael Chen",
    readTime: "6 min read",
    date: "March 14, 2024",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: 3,
    title: "Building Scalable Applications with Next.js",
    excerpt:
      "Best practices for creating enterprise-level applications using Next.js",
    category: "Development",
    author: "Alex Rivera",
    readTime: "10 min read",
    date: "March 13, 2024",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

export default function ArticlesPage() {
  const { currentTheme } = useTheme();

  return (
    <div className={cn("flex-1", currentTheme.styles.contentStyle)}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Latest Articles</h1>
            <p className="text-muted-foreground">
              Discover insights and knowledge
            </p>
          </div>
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </div>

        <div className="grid gap-8">
          {articles.map((article, index) => (
            <Link href={`/articles/${article.id}`} key={article.id}>
              <article
                className={cn(
                  "group grid md:grid-cols-2 gap-6 rounded-lg overflow-hidden",
                  currentTheme.styles.cardStyle,
                  index === 0 && "md:grid-cols-3"
                )}
              >
                <div
                  className={cn(
                    "aspect-video md:aspect-auto relative overflow-hidden",
                    index === 0 && "md:col-span-2"
                  )}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs",
                        currentTheme.styles.buttonStyle
                      )}
                    >
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
