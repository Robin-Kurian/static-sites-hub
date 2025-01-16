import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose">
            Built with Next.js and Tailwind CSS. Hosted on{" "}
            <Link
              href="https://netlify.com"
              className="font-medium underline underline-offset-4"
            >
              Netlify
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
