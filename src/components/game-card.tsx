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
}

export function GameCard({ game, lang }: GameCardProps) {
  const t = useTranslations(lang);

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
