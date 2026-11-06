import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import { languages, type ui } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { withBase } from "@/lib/utils";

interface NavbarProps {
  lang: keyof typeof ui;
}

export function Navbar({ lang }: NavbarProps) {
  const t = useTranslations(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const homeRoute = withBase(lang === "en" ? "/en/" : "/");
  const otherLang = lang === "en" ? "es" : "en";
  const otherLangRoute = withBase(otherLang === "en" ? "/en/" : "/");

  const navLinks = [
    { name: t("nav.home"), href: homeRoute },
    { name: t("nav.featured"), href: "#featured" },
    { name: t("nav.games"), href: "#games" },
    { name: t("nav.academic"), href: "#academic" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-primary/30 shadow-lg shadow-black/20 py-2.5"
          : "bg-background/50 backdrop-blur-sm border-b border-primary/15 py-3"
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 relative flex items-center justify-between">
        <a
          href={homeRoute}
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105 z-10"
          aria-label={t("app.title")}
        >
          <img
            src={withBase("/images/profile.jpg")}
            alt={t("app.title")}
            className="h-10 w-10 rounded-full object-cover border-2 border-primary/60 drop-shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
          />
          <span className="font-bold tracking-tight">{t("app.title")}</span>
        </a>

        <nav className="hidden md:flex items-center gap-2 lg:gap-3 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-foreground/80 border border-transparent hover:border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 z-10 ml-auto">
          <a
            href={otherLangRoute}
            className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-primary/50 bg-primary/15 hover:bg-primary hover:text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
            aria-label={languages[otherLang]}
          >
            <Globe className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
            <span>{otherLang}</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md border border-primary/40 hover:bg-primary hover:text-primary-foreground text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-primary/30 bg-background/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2.5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/90 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
