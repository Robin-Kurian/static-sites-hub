"use client";

import React, { createContext, useContext, useState } from "react";
import {
  LucideIcon,
  Building2,
  Palette,
  ShoppingBag,
  Newspaper,
} from "lucide-react";

type BaseContent = {
  hero: {
    title: string;
    description: string;
    actions?: Array<{
      label: string;
      href: string;
      variant: "default" | "outline";
      icon?: React.ComponentType<{ className?: string }>;
    }>;
  };
  features: Array<{
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
};

type ThemeLayout = "default" | "ecommerce" | "minimal";

type Theme = {
  name: string;
  description: string;
  layout: ThemeLayout;
  styles: {
    headerStyle: string;
    heroStyle: string;
    contentStyle: string;
    buttonStyle: string;
    cardStyle: string;
  };
  content: BaseContent & {
    [key: string]: any; // Allow additional content based on theme type
  };
};

const themes: Record<string, Theme> = {
  "Modern Business": {
    name: "Modern Business",
    description: "Professional business template with modern design",
    layout: "default",
    styles: {
      headerStyle:
        "bg-gradient-to-r from-blue-600 to-indigo-700 text-foreground",
      heroStyle: "bg-gray-50",
      contentStyle: "text-foreground",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-foreground",
      cardStyle:
        "bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors",
    },
    content: {
      hero: {
        title: "Transform Your Business with Modern Solutions",
        description:
          "Empowering businesses with cutting-edge technology and innovative strategies for sustainable growth.",
        actions: [
          {
            label: "Get Started",
            href: "/contact",
            variant: "default",
          },
          {
            label: "Learn More",
            href: "/about",
            variant: "outline",
          },
        ],
      },
      features: [
        {
          title: "Strategic Planning",
          description:
            "Develop comprehensive business strategies for sustainable growth",
          icon: Building2,
        },
        {
          title: "Digital Solutions",
          description:
            "Implement modern digital solutions to streamline operations",
          icon: Building2,
        },
        {
          title: "Market Analysis",
          description: "In-depth market research and competitive analysis",
          icon: Building2,
        },
      ],
      about: {
        title: "Leading Business Solutions",
        description: "We help businesses transform and grow in the digital age",
        mission:
          "To empower businesses with innovative solutions for sustainable growth",
        values: ["Innovation", "Excellence", "Integrity", "Collaboration"],
      },
      blog: [
        {
          id: 1,
          title: "Digital Transformation Strategies",
          description: "Key insights for business modernization",
          date: "2024-03-20",
          readTime: "5 min read",
          category: "Business",
        },
        {
          id: 2,
          title: "Future of Work",
          description: "Adapting to changing workplace dynamics",
          date: "2024-03-18",
          readTime: "8 min read",
          category: "Management",
        },
      ],
    },
  },
  "Creative Portfolio": {
    name: "Creative Portfolio",
    description: "Creative portfolio template with modern design",
    layout: "default",
    styles: {
      headerStyle: "bg-black text-foreground",
      heroStyle: "bg-neutral-900 text-foreground",
      contentStyle: "text-foreground",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-foreground",
      cardStyle:
        "bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors",
    },
    content: {
      hero: {
        title: "Creating Digital Art & Design",
        description:
          "Bringing creative visions to life through innovative design and artistic expression.",
        actions: [
          {
            label: "View Portfolio",
            href: "/portfolio",
            variant: "default",
          },
          {
            label: "Contact Us",
            href: "/contact",
            variant: "outline",
          },
        ],
      },
      features: [
        {
          title: "Digital Design",
          description: "Creating stunning digital artwork and illustrations",
          icon: Palette,
        },
        {
          title: "Brand Identity",
          description: "Developing unique and memorable brand identities",
          icon: Palette,
        },
        {
          title: "UI/UX Design",
          description: "Crafting intuitive and beautiful user interfaces",
          icon: Palette,
        },
      ],
      about: {
        title: "Creative Design Studio",
        description: "We transform ideas into visual experiences",
        mission: "To push creative boundaries and inspire through design",
        values: ["Creativity", "Innovation", "Quality", "Vision"],
      },
      blog: [
        {
          id: 1,
          title: "Design Trends 2024",
          description: "Latest trends in digital design",
          date: "2024-03-20",
          readTime: "5 min read",
          category: "Design",
        },
        {
          id: 2,
          title: "Art of Typography",
          description: "Creating impact through font selection",
          date: "2024-03-18",
          readTime: "6 min read",
          category: "Typography",
        },
      ],
    },
  },
  "E-commerce Store": {
    name: "E-commerce Store",
    description: "Full-featured online store template",
    layout: "ecommerce",
    styles: {
      headerStyle: "bg-emerald-600 text-white",
      heroStyle: "bg-gradient-to-b from-emerald-50 to-white",
      contentStyle: "bg-gray-50",
      buttonStyle: "bg-emerald-600 hover:bg-emerald-700 text-white",
      cardStyle:
        "bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors",
    },
    content: {
      hero: {
        title: "Shop the Latest Trends",
        description:
          "Discover our curated collection of premium products at amazing prices.",
        actions: [
          {
            label: "Shop Now",
            href: "/shop",
            variant: "default",
          },
        ],
      },
      features: [
        {
          title: "Fast Shipping",
          description: "Quick and reliable worldwide shipping",
          icon: ShoppingBag,
        },
        {
          title: "Secure Payment",
          description: "Safe and secure payment methods",
          icon: ShoppingBag,
        },
        {
          title: "24/7 Support",
          description: "Round-the-clock customer support",
          icon: ShoppingBag,
        },
      ],
      about: {
        title: "Your Trusted Online Store",
        description: "Bringing quality products to your doorstep",
        mission:
          "To provide exceptional shopping experience with quality products",
        values: ["Quality", "Service", "Trust", "Value"],
      },
      blog: [
        {
          id: 1,
          title: "Summer Collection 2024",
          description: "Explore our latest summer arrivals",
          date: "2024-03-20",
          readTime: "4 min read",
          category: "Fashion",
        },
        {
          id: 2,
          title: "Sustainable Shopping",
          description: "Guide to eco-friendly shopping",
          date: "2024-03-18",
          readTime: "7 min read",
          category: "Lifestyle",
        },
      ],
      products: [
        {
          id: 1,
          name: "Premium Product",
          price: 99.99,
          image: "https://images.unsplash.com/photo-1...",
        },
        // ... more products
      ],
    },
  },
  "Blog Magazine": {
    name: "Blog Magazine",
    description: "Blog magazine template with modern design",
    layout: "default",
    styles: {
      headerStyle: "bg-rose-600 text-foreground",
      heroStyle: "bg-rose-50",
      contentStyle: "text-foreground",
      buttonStyle: "bg-rose-600 hover:bg-rose-700 text-foreground",
      cardStyle:
        "bg-background border border-gray-200 hover:border-gray-300 transition-colors",
    },
    content: {
      hero: {
        title: "Stories That Matter",
        description:
          "Discover thought-provoking articles on culture, technology, and lifestyle.",
        actions: [
          {
            label: "Browse Articles",
            href: "/articles",
            variant: "default",
          },
          {
            label: "Subscribe",
            href: "/subscribe",
            variant: "outline",
          },
        ],
      },
      features: [
        {
          title: "Latest News",
          description: "Stay updated with the latest happenings",
          icon: Newspaper,
        },
        {
          title: "In-depth Analysis",
          description: "Detailed analysis of current trends",
          icon: Newspaper,
        },
        {
          title: "Expert Opinions",
          description: "Insights from industry experts",
          icon: Newspaper,
        },
      ],
      about: {
        title: "Your Source for Quality Content",
        description: "Delivering engaging stories and insights",
        mission: "To inform and inspire through quality journalism",
        values: ["Truth", "Quality", "Impact", "Innovation"],
      },
      blog: [
        {
          id: 1,
          title: "The Future of AI",
          description: "How AI is shaping our world",
          date: "2024-03-20",
          readTime: "8 min read",
          category: "Technology",
        },
        {
          id: 2,
          title: "Sustainable Living",
          description: "Tips for an eco-friendly lifestyle",
          date: "2024-03-18",
          readTime: "6 min read",
          category: "Lifestyle",
        },
      ],
    },
  },
};

type ThemeContextType = {
  currentTheme: Theme;
  setThemeName: (name: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(
    themes["Modern Business"]
  );

  const setThemeName = (name: string) => {
    if (themes[name]) {
      setCurrentTheme(themes[name]);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export type { Theme };
