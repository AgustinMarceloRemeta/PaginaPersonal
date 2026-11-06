import { useState } from "react";
import { ChevronUp, Play } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import type { ui } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { cn } from "@/lib/utils";

interface TrailerPlayerProps {
  trailerEmbed: string;
  title: string;
  lang: keyof typeof ui;
}

export function TrailerPlayer({ trailerEmbed, title, lang }: TrailerPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations(lang);

  return (
    <div className="w-full space-y-4" data-trailer-wrapper>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        data-trailer-embed={trailerEmbed}
        data-trailer-title={`${title} - Trailer`}
        data-label-watch={t("games.trailer.watch")}
        data-label-hide={t("games.trailer.hide")}
        className={cn(
          buttonVariants({ variant: isOpen ? "default" : "outline", size: "default" }),
          "gap-2 font-semibold cursor-pointer"
        )}
      >
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        <span data-trailer-label>{t(isOpen ? "games.trailer.hide" : "games.trailer.watch")}</span>
      </button>

      {isOpen && (
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-primary/50 shadow-lg shadow-primary/10 bg-black">
          <iframe
            src={trailerEmbed}
            title={`${title} - Trailer`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
