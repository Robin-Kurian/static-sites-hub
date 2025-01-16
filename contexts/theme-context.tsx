"use client";

import React, { createContext, useContext, useState } from "react";
import {
  LucideIcon,
  Building2,
  Palette,
  ShoppingBag,
  Newspaper,
} from "lucide-react";

type PageContent = {
  hero: {
    title: string;
    description: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  about: {
    title: string;
    description: string;
    mission: string;
    values: string[];
  };
  blog: Array<{
    id: number;
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
  }>;
};

type Theme = {
  name: string;
  styles: {
    headerStyle: string;
    heroStyle: string;
    contentStyle: string;
    buttonStyle: string;
    cardStyle: string;
  };
  content: PageContent;
};

const themes: Record<string, Theme> = {
  "Modern Business": {
    name: "Modern Business",
    styles: {
      headerStyle: "bg-gradient-to-r from-blue-600 to-indigo-700 text-white",
      heroStyle: "bg-gray-50",
      contentStyle: "bg-white",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
      cardStyle: "bg-white shadow-lg hover:shadow-xl transition-shadow",
    },
    content: {
      hero: {
        title: "Transform Your Business with Modern Solutions",
        description:
          "Empowering businesses with cutting-edge technology and innovative strategies for sustainable growth.",
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
    styles: {
      headerStyle: "bg-black text-white",
      heroStyle: "bg-neutral-900 text-white",
      contentStyle: "bg-neutral-950 text-white",
      buttonStyle: "bg-white text-black hover:bg-gray-100",
      cardStyle:
        "bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors",
    },
    content: {
      hero: {
        title: "Creating Digital Art & Design",
        description:
          "Bringing creative visions to life through innovative design and artistic expression.",
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
    styles: {
      headerStyle: "bg-emerald-600 text-white",
      heroStyle: "bg-emerald-50",
      contentStyle: "bg-white",
      buttonStyle: "bg-emerald-600 hover:bg-emerald-700 text-white",
      cardStyle: "bg-white shadow-md hover:shadow-lg transition-shadow",
    },
    content: {
      hero: {
        title: "Shop the Latest Trends",
        description:
          "Discover our curated collection of premium products at amazing prices.",
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
    },
  },
  "Blog Magazine": {
    name: "Blog Magazine",
    styles: {
      headerStyle: "bg-rose-600 text-white",
      heroStyle: "bg-rose-50",
      contentStyle: "bg-white",
      buttonStyle: "bg-rose-600 hover:bg-rose-700 text-white",
      cardStyle:
        "bg-white border border-gray-200 hover:border-gray-300 transition-colors",
    },
    content: {
      hero: {
        title: "Stories That Matter",
        description:
          "Discover thought-provoking articles on culture, technology, and lifestyle.",
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
