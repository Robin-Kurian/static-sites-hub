"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
  category: string;
};

export default function BlogPage() {
  const { currentTheme } = useTheme();
  const { blog } = currentTheme.content;

  return (
    <div className={cn("flex-1", currentTheme.styles.contentStyle)}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {blog.map((post: BlogPost) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card
                className={cn(
                  "h-full hover:bg-muted/50 transition-colors text-center",
                  currentTheme.styles.cardStyle
                )}
              >
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    {post.date} · {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                  <div className="mt-4 flex justify-center">
                    <span
                      className={cn(
                        "px-2 py-1 text-xs rounded",
                        currentTheme.styles.buttonStyle
                      )}
                    >
                      {post.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
