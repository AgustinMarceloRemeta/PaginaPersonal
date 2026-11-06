import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { ui } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { contactEmail, socials } from "@/lib/socials";
import { cn, withBase } from "@/lib/utils";

export function Footer({ lang }: { lang: keyof typeof ui }) {
  const t = useTranslations(lang);
  const homePrefix = withBase(lang === "en" ? "/en/" : "/");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/25 py-12 z-10">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.title")}</h3>
            <p className="text-muted-foreground">{t("footer.description")}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2">
              <li>
                <a href={`${homePrefix}#featured`} className="text-muted-foreground hover:text-foreground hover:underline decoration-primary underline-offset-4 transition-colors">
                  {t("featured.title")}
                </a>
              </li>
              <li>
                <a href={`${homePrefix}#games`} className="text-muted-foreground hover:text-foreground hover:underline decoration-primary underline-offset-4 transition-colors">
                  {t("games.title")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-muted-foreground hover:text-foreground hover:underline decoration-primary underline-offset-4 transition-colors break-all"
                >
                  {contactEmail}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col max-w-[250px]">
            <h4 className="font-bold mb-4">{t("footer.socials")}</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={link.name}
                  className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-primary/30" />
        <div className="text-center text-sm text-muted-foreground">
          © {currentYear} {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
