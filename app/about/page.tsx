"use client";

import Image from "next/image";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const { currentTheme } = useTheme();

  return (
    <div className={cn("flex-1", currentTheme.styles.contentStyle)}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-center text-muted-foreground mb-8">
          We are a team of passionate individuals dedicated to creating
          beautiful and functional web experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={cn(
              "bg-white shadow-lg rounded-lg p-6",
              currentTheme.styles.cardStyle
            )}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              Our mission is to empower businesses and individuals by providing
              innovative solutions that enhance their online presence and drive
              success.
            </p>
          </div>
          <div
            className={cn(
              "bg-white shadow-lg rounded-lg p-6",
              currentTheme.styles.cardStyle
            )}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              We envision a world where technology and creativity come together
              to create seamless and engaging user experiences.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className={cn(
                "bg-white shadow-lg rounded-lg p-4 text-center",
                currentTheme.styles.cardStyle
              )}
            >
              <Image
                src="https://i.pravatar.cc/150?img=8"
                alt="John Doe"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-muted-foreground">CEO & Founder</p>
            </div>
            <div
              className={cn(
                "bg-white shadow-lg rounded-lg p-4 text-center",
                currentTheme.styles.cardStyle
              )}
            >
              <Image
                src="https://i.pravatar.cc/150?img=9"
                alt="Jane Smith"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-muted-foreground">Lead Designer</p>
            </div>
            <div
              className={cn(
                "bg-white shadow-lg rounded-lg p-4 text-center",
                currentTheme.styles.cardStyle
              )}
            >
              <Image
                src="https://i.pravatar.cc/150?img=10"
                alt="Alice Johnson"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Alice Johnson</h3>
              <p className="text-muted-foreground">Head of Development</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We are always looking for talented individuals to join our team. If
            you share our passion for innovation and creativity, we would love
            to hear from you!
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
