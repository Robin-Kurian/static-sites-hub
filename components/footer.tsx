import { Github, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose">
            Made with Next.js, Tailwind and 💖. Deployed on{" "}
            <Link
              href="https://vercel.com"
              className="font-medium underline underline-offset-4"
            >
              Vercel 🚀
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {/* <p className="text-center text-sm leading-loose"> */}
          <p>Wanna see more?</p>
          <Link
            href="https://github.com/Robin-kurian"
            target="_blank"
            rel="noreferrer"
            title="See more works at GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://instagram.com/the.cipher.head"
            target="_blank"
            rel="noreferrer"
            title="Follow me on Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          {/* </p> */}
        </div>
      </div>
    </footer>
  );
}
