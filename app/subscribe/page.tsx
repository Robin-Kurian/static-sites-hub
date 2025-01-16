"use client";

import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Mail, Star, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Star,
    title: "Exclusive Content",
    description: "Get access to premium articles and in-depth analysis",
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Be the first to read new articles and special features",
  },
  {
    icon: Mail,
    title: "Newsletter",
    description: "Weekly curated content delivered to your inbox",
  },
];

const plans = [
  {
    name: "Monthly",
    price: "9.99",
    description: "Perfect for getting started",
    features: [
      "Access to all articles",
      "Weekly newsletter",
      "Comment on articles",
      "Download PDFs",
    ],
  },
  {
    name: "Yearly",
    price: "99.99",
    description: "Best value for committed readers",
    features: [
      "All Monthly features",
      "Exclusive webinars",
      "Priority support",
      "Early access to new features",
    ],
    popular: true,
  },
];

export default function SubscribePage() {
  const { currentTheme } = useTheme();

  return (
    <div className={cn("flex-1", currentTheme.styles.contentStyle)}>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-bold mb-4">Subscribe to Our Platform</h1>
          <p className="text-muted-foreground">
            Join our community of readers and get access to premium content,
            exclusive features, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                currentTheme.styles.cardStyle,
                plan.popular && "border-primary"
              )}
            >
              <CardHeader>
                {plan.popular && (
                  <div className="text-sm text-primary mb-2">Most Popular</div>
                )}
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn("w-full mt-6", currentTheme.styles.buttonStyle)}
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
