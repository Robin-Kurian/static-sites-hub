"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

export default function Home() {
  const { currentTheme } = useTheme();
  const { hero, features } = currentTheme.content;

  return (
    <div className="flex-1">
      <section
        className={cn(
          "space-y-6 pb-4 pt-6 md:pb-6 md:pt-10 lg:py-16",
          currentTheme.styles.heroStyle
        )}
      >
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
            {hero.title}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
            {hero.description}
          </p>
          <div className="space-x-4 flex justify-center">
            <Button asChild className={currentTheme.styles.buttonStyle}>
              <Link href="/blog">
                Read Blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </section>
      <section
        className={cn(
          "py-4 md:py-6 lg:py-12",
          currentTheme.styles.contentStyle
        )}
      >
        <div className="container">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={cn(
                  "relative overflow-hidden rounded-lg p-2 text-center",
                  currentTheme.styles.cardStyle
                )}
              >
                <div className="flex h-[180px] flex-col items-center justify-between rounded-md p-6">
                  <feature.icon className="h-12 w-12" />
                  <div className="space-y-2">
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
