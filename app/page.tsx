"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";
import type { Theme } from "@/contexts/theme-context";

interface LayoutProps {
  theme: Theme;
}

export default function Home() {
  const { currentTheme } = useTheme();

  const layouts = {
    default: DefaultLayout,
    ecommerce: EcommerceLayout,
    minimal: MinimalLayout,
  };

  const LayoutComponent = layouts[currentTheme.layout] || DefaultLayout;

  return <LayoutComponent theme={currentTheme} />;
}

function DefaultLayout({ theme }: LayoutProps) {
  const { hero, features } = theme.content;
  const { currentTheme } = useTheme();


  return (
    <div className="flex-1 ">
      <section
        className={cn(
          "space-y-6 pb-4 pt-6 md:pb-6 md:pt-10 lg:py-16",
          theme.styles.heroStyle
        )}
      >
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
            {hero.description}
          </p>
          {hero.actions && (
            <div className="space-x-4 flex justify-center">
              {hero.actions.map((action) => (
                <Button
                  key={action.label}
                  variant={action.variant}
                  asChild
                  className={
                    action.variant === "default"
                      ? theme.styles.buttonStyle
                      : undefined
                  }
                >
                  <Link href={action.href}>
                    {action.label}
                    {action.icon && <action.icon className="ml-2 h-4 w-4" />}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>
      <section
        className={cn("py-4 md:py-6 lg:py-12", currentTheme.styles.contentStyle)}
      >
        <div className="container">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "relative overflow-hidden rounded-lg p-2 text-center",
                    theme.styles.cardStyle
                  )}
                >
                  <div className="flex h-[180px] flex-col items-center justify-between rounded-md p-6">
                    <Icon className="h-12 w-12" />
                    <div className="space-y-2">
                      <h3 className="font-bold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function EcommerceLayout({ theme }: LayoutProps) {
  const { hero, features, products } = theme.content;

  return (
    <div className="flex-1">
      <section
        className={cn("relative overflow-hidden", theme.styles.heroStyle)}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                {hero.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {hero.description}
              </p>
              {hero.actions && (
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {hero.actions.map((action) => (
                    <Button
                      key={action.label}
                      variant={action.variant}
                      asChild
                      className={
                        action.variant === "default"
                          ? theme.styles.buttonStyle
                          : undefined
                      }
                    >
                      <Link href={action.href}>
                        {action.label}
                        {action.icon && (
                          <action.icon className="ml-2 h-4 w-4" />
                        )}
                      </Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              {/* Add a featured product image here */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/20" />
            </div>
          </div>
        </div>
      </section>
      <section className={cn("py-12", theme.styles.contentStyle)}>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "group relative overflow-hidden rounded-lg",
                    theme.styles.cardStyle
                  )}
                >
                  <div className="flex items-center justify-center p-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function MinimalLayout({ theme }: LayoutProps) {
  const { hero, features } = theme.content;

  return (
    <div className="flex-1">
      <section className={cn("py-16 md:py-24", theme.styles.heroStyle)}>
        <div className="container max-w-[64rem] mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-[42rem] mx-auto">
            {hero.description}
          </p>
          {hero.actions && (
            <div className="mt-8 flex justify-center gap-4">
              {hero.actions.map((action) => (
                <Button
                  key={action.label}
                  variant={action.variant}
                  asChild
                  className={
                    action.variant === "default"
                      ? theme.styles.buttonStyle
                      : undefined
                  }
                >
                  <Link href={action.href}>
                    {action.label}
                    {action.icon && <action.icon className="ml-2 h-4 w-4" />}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>
      {features && (
        <section className={cn("py-8", theme.styles.contentStyle)}>
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3 max-w-[64rem] mx-auto">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={cn(
                      "flex flex-col items-center text-center p-4",
                      theme.styles.cardStyle
                    )}
                  >
                    <Icon className="h-8 w-8 mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
