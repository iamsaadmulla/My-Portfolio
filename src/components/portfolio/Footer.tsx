import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 size-11 rounded-full bg-gradient-primary text-primary-foreground shadow-glow grid place-items-center hover:scale-110 transition-transform animate-fade-in"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Saad Mulla. Built with care & lots of <span className="text-primary">kubectl</span>.</p>
        <p className="font-mono text-xs">designed & developed by <span className="text-gradient">saad.dev</span></p>
      </div>
    </footer>
  );
}
