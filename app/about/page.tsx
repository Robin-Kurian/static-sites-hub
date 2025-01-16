"use client";

import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const { currentTheme } = useTheme();
  const { about } = currentTheme.content;

  return (
    <div className={cn("flex-1", currentTheme.styles.contentStyle)}>
      <div className="container max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-8">{about.title}</h1>
        <div className="prose dark:prose-invert mx-auto">
          <p className="text-lg mb-6">{about.description}</p>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-6">{about.mission}</p>
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className={cn("p-6 rounded-lg", currentTheme.styles.cardStyle)}>
            <ul className="list-none space-y-2">
              {about.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
