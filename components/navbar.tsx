"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, Palette, LayoutTemplate } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useTheme } from "@/contexts/theme-context";

const baseRoutes = [
  {
    href: "/",
    label: "Home",
  },
];

const themeSpecificRoutes = {
  "E-commerce Store": [
    {
      href: "/shop",
      label: "Shop",
    },
  ],
  "Blog Magazine": [
    {
      href: "/blog",
      label: "Blogs",
    },
  ],
};

const commonRoutes = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const demoThemes = [
  {
    name: "Modern Business",
    description: "Professional business template with modern design",
  },
  {
    name: "Creative Portfolio",
    description: "Showcase creative work with style",
  },
  {
    name: "E-commerce Store",
    description: "Full-featured online store template",
  },
  {
    name: "Blog Magazine",
    description: "Content-focused blog and magazine layout",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { currentTheme, setThemeName } = useTheme();

  const handleThemeChange = (themeName: string) => {
    setThemeName(themeName);
    if (pathname !== "/") {
      router.push("/");
    }
  };

  // Combine routes
  const routes = [
    ...baseRoutes,
    ...(currentTheme.name === "E-commerce Store"
      ? themeSpecificRoutes["E-commerce Store"]
      : []),
    ...(currentTheme.name === "Blog Magazine"
      ? themeSpecificRoutes["Blog Magazine"]
      : []),
    ...commonRoutes,
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60",
        currentTheme.styles.headerStyle
      )}
    >
      <div className="container mx-auto flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Palette className="h-6 w-6 text-foreground" />
            <span className="font-bold inline-block text-foreground">
              Themeify
            </span>
          </Link>
          <div className="bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 px-2.5 py-0.5 rounded-full text-xs font-medium">
            {currentTheme.name}
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === route.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5 text-foreground" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="flex flex-col space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-foreground/60 transition-colors hover:text-foreground",
                    pathname === route.href && "text-foreground"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground hidden sm:inline-block">
            Try different templates:
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <LayoutTemplate className="h-5 w-5 text-foreground" />
                <span className="sr-only">Switch template</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[240px]">
              <DropdownMenuLabel>Switch Template Style</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {demoThemes.map((theme) => (
                <DropdownMenuItem
                  key={theme.name}
                  className={cn(
                    "flex flex-col items-start",
                    currentTheme.name === theme.name && "bg-accent"
                  )}
                  onClick={() => handleThemeChange(theme.name)}
                >
                  <span className="font-medium">{theme.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {theme.description}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
