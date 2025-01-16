"use client";

import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Web Application",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "A modern web application built with Next.js and TypeScript",
    link: "#",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    description: "Complete brand identity design for a tech startup",
    link: "#",
  },
  {
    id: 3,
    title: "Mobile App UI/UX",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=800&q=80",
    description:
      "User interface and experience design for a mobile application",
    link: "#",
  },
];

export default function PortfolioPage() {
  const { currentTheme } = useTheme();

  return (
    <div className={cn("flex-1", currentTheme.styles.contentStyle)}>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Creative Portfolio</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing our best work in web development, design, and branding
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-lg",
                currentTheme.styles.cardStyle
              )}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button size="sm" className={currentTheme.styles.buttonStyle}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <span className="text-sm text-muted-foreground">
                  {project.category}
                </span>
                <h3 className="font-semibold mt-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
