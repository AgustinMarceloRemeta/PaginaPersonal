import type { defaultLang, ui } from "@/i18n/ui";

type TranslationKey = keyof typeof ui[typeof defaultLang];

interface Game {
  title: string;
  descriptionKey: TranslationKey;
  image: string;
  platformKey: TranslationKey;
  linkLabelKey: TranslationKey;
  link: string;
}

const games: Game[] = [
  {
    title: "Goblin Invasion",
    descriptionKey: "games.goblin.description",
    image: "/images/games/goblin-invasion.jpg",
    platformKey: "games.platform.meta",
    linkLabelKey: "games.store.meta",
    link: "https://www.meta.com/experiences/goblin-invasion/6355186887870473/",
  },
  {
    title: "ColorSeek",
    descriptionKey: "games.colorseek.description",
    image: "/images/games/colorseek.png",
    platformKey: "games.platform.play",
    linkLabelKey: "games.store.play",
    link: "https://play.google.com/store/apps/details?id=com.Remarkade.ColorSeek",
  },
  {
    title: "Pesadilla Eterna",
    descriptionKey: "games.pesadilla.description",
    image: "/images/games/pesadilla-eterna.png",
    platformKey: "games.platform.itch",
    linkLabelKey: "games.store.itch",
    link: "https://crunched-studios.itch.io/pesadilla-eterna",
  },
  {
    title: "Root Access",
    descriptionKey: "games.rootaccess.description",
    image: "/images/games/root-access.jpg",
    platformKey: "games.platform.itch",
    linkLabelKey: "games.store.itch",
    link: "https://phyglitch.itch.io/rootaccess",
  },
  {
    title: "Betweenplanets",
    descriptionKey: "games.betweenplanets.description",
    image: "/images/games/betweenplanets.jpg",
    platformKey: "games.platform.itch",
    linkLabelKey: "games.store.itch",
    link: "https://remetaagustin.itch.io/betweenplanets",
  },
];

const featuredGame = {
  title: "The Tavern at the End of the Road",
  titleKey: "featured.taer.title",
  descriptionKey: "featured.taer.description",
  image: "/images/games/taer.jpg",
  link: "https://crestfallen-game-studio.itch.io/taer",
  itchEmbed: "https://itch.io/embed/2932579",
} as const;

export { games, featuredGame };
export type { Game };
