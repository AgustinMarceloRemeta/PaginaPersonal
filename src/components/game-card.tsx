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
}

export function GameCard({ game, lang, compact = false }: GameCardProps) {
  const t = useTranslations(lang);

  if (compact) {
    return (
      <Card className="overflow-hidden transition-all hover:scale-[1.01] flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3.5 border-primary/20 hover:border-primary/50 bg-card/70">
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
          <div className="flex justify-end mt-1">
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
      <CardContent className="mt-auto">
        <div className="flex justify-end">
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default", size: "sm" }))}
          >
            {t(game.linkLabelKey)} →
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
