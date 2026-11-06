import { useEffect, useState } from "react";
import { ChevronUp, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ui } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import type { Game } from "@/lib/games";
import { cn, withBase } from "@/lib/utils";

interface GameCardProps {
  game: Game;
  lang: keyof typeof ui;
  compact?: boolean;
  initialAvailable?: boolean;
}

export function GameCard({
  game,
  lang,
  compact = false,
  initialAvailable = !game.checkAvailability,
}: GameCardProps) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [isAvailable, setIsAvailable] = useState(initialAvailable);
  const t = useTranslations(lang);

  useEffect(() => {
    if (!game.checkAvailability) return;

    let cancelled = false;

    async function verifyStoreStatus() {
      try {
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(game.link)}`;
        const response = await fetch(proxyUrl);
        if (!response.ok) return;
        const data = await response.json();
        const httpCode = data?.status?.http_code;
        const contents = typeof data?.contents === "string" ? data.contents : "";
        const isLive =
          httpCode === 200 &&
          contents.includes(game.title) &&
          !contents.includes("We're sorry, the requested URL was not found");
        if (!cancelled) {
          setIsAvailable(isLive);
        }
      } catch {
        if (!cancelled) {
          setIsAvailable(false);
        }
      }
    }

    verifyStoreStatus();

    return () => {
      cancelled = true;
    };
  }, [game.checkAvailability, game.link, game.title]);

  if (!isAvailable) {
    return null;
  }

  if (compact) {
    return (
      <Card
        data-trailer-wrapper
        className="overflow-hidden transition-all hover:scale-[1.01] flex flex-col p-3.5 border-primary/20 hover:border-primary/50 bg-card/70"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-full sm:w-36 h-28 sm:h-24 shrink-0 relative rounded-md overflow-hidden border border-primary/20">
            <img
              src={withBase(game.image)}
              alt={game.title}
              loading="lazy"
              decoding="async"
              className="object-cover w-full h-full"
            />
            <Badge className="absolute top-1.5 right-1.5 px-1.5 py-0 text-[10px]">
              {t(game.platformKey)}
            </Badge>
          </div>
          <div className="flex flex-col flex-1 min-w-0 gap-1.5 w-full">
            <CardTitle className="text-base font-semibold">{game.title}</CardTitle>
            <CardDescription className="text-xs line-clamp-2">
              {t(game.descriptionKey)}
            </CardDescription>
            <div className="flex flex-wrap items-center justify-end gap-2 mt-1">
              {game.trailerEmbed && (
                <button
                  type="button"
                  onClick={() => setShowTrailer((prev) => !prev)}
                  data-trailer-embed={game.trailerEmbed}
                  data-trailer-title={`${game.title} - Trailer`}
                  data-label-watch={t("games.trailer.watch")}
                  data-label-hide={t("games.trailer.hide")}
                  className={cn(
                    buttonVariants({
                      variant: showTrailer ? "default" : "outline",
                      size: "sm",
                    }),
                    "h-7 px-2.5 text-xs gap-1 cursor-pointer"
                  )}
                >
                  {showTrailer ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <Play className="w-3.5 h-3.5" />
                  )}
                  <span data-trailer-label>
                    {t(showTrailer ? "games.trailer.hide" : "games.trailer.watch")}
                  </span>
                </button>
              )}
              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "h-7 px-2.5 text-xs"
                )}
              >
                {t(game.linkLabelKey)} →
              </a>
            </div>
          </div>
        </div>

        {showTrailer && game.trailerEmbed && (
          <div className="w-full aspect-video rounded-md overflow-hidden border border-primary/40 mt-3 bg-black">
            <iframe
              src={game.trailerEmbed}
              title={`${game.title} - Trailer`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden transition-all hover:scale-[1.02] flex flex-col border-primary/30 hover:border-primary/70 hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.25)]">
      <div className="aspect-video relative">
        <img
          src={withBase(game.image)}
          alt={game.title}
          loading="lazy"
          decoding="async"
          className="object-cover w-full h-full"
        />
        <Badge className="absolute top-4 right-4">{t(game.platformKey)}</Badge>
      </div>
      <CardHeader>
        <CardTitle>{game.title}</CardTitle>
        <CardDescription>{t(game.descriptionKey)}</CardDescription>
      </CardHeader>
      <CardContent data-trailer-wrapper className="mt-auto space-y-4">
        <div className="flex flex-wrap items-center justify-end gap-2.5">
          {game.trailerEmbed && (
            <button
              type="button"
              onClick={() => setShowTrailer((prev) => !prev)}
              data-trailer-embed={game.trailerEmbed}
              data-trailer-title={`${game.title} - Trailer`}
              data-label-watch={t("games.trailer.watch")}
              data-label-hide={t("games.trailer.hide")}
              className={cn(
                buttonVariants({
                  variant: showTrailer ? "default" : "outline",
                  size: "sm",
                }),
                "gap-1.5 cursor-pointer"
              )}
            >
              {showTrailer ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              <span data-trailer-label>
                {t(showTrailer ? "games.trailer.hide" : "games.trailer.watch")}
              </span>
            </button>
          )}
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default", size: "sm" }))}
          >
            {t(game.linkLabelKey)} →
          </a>
        </div>

        {showTrailer && game.trailerEmbed && (
          <div className="w-full aspect-video rounded-lg overflow-hidden border border-primary/40 bg-black">
            <iframe
              src={game.trailerEmbed}
              title={`${game.title} - Trailer`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
