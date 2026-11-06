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
    title: "Root Access",
    descriptionKey: "games.rootaccess.description",
    image: "/images/games/root-access.jpg",
    platformKey: "games.platform.itch",
    linkLabelKey: "games.store.itch",
    link: "https://phyglitch.itch.io/rootaccess",
  },
];

const academicGames: Game[] = [
  {
    title: "Pesadilla Eterna",
    descriptionKey: "games.pesadilla.description",
    image: "/images/games/pesadilla-eterna.png",
    platformKey: "games.platform.itch",
    linkLabelKey: "games.store.itch",
    link: "https://crunched-studios.itch.io/pesadilla-eterna",
  },
  {
    title: "Betweenplanets",
    descriptionKey: "games.betweenplanets.description",
    image: "/images/games/betweenplanets.jpg",
    platformKey: "games.platform.itch",
    linkLabelKey: "games.store.itch",
    link: "https://remetaagustin.itch.io/betweenplanets",
  },
  {
    title: "Space Game",
    descriptionKey: "games.spacegame.description",
    image: "/images/games/Space Game.png",
    platformKey: "games.platform.itch",
    linkLabelKey: "games.store.itch",
    link: "https://remetaagustin.itch.io/space-game",
  },
  {
    title: "Rocket Attack",
    descriptionKey: "games.rocketattack.description",
    image: "/images/games/RocketAttackpng.png",
    platformKey: "games.platform.itch",
    linkLabelKey: "games.store.itch",
    link: "https://remetaagustin.itch.io/rocket-attack",
  },
  {
    title: "Little Tour",
    descriptionKey: "games.littletour.description",
    image: "/images/games/LittleTourpng.png",
    platformKey: "games.platform.itch",
    linkLabelKey: "games.store.itch",
    link: "https://remetaagustin.itch.io/little-tour",
  },
  {
    title: "Travesía Ratonezca",
    descriptionKey: "games.travesia.description",
    image: "/images/games/TravesiaRatonezca.png",
    platformKey: "games.platform.itch",
    linkLabelKey: "games.store.itch",
    link: "https://remetaagustin.itch.io/travesa-ratonezca",
  },
];

const featuredGame = {
  title: "The Tavern at the End of the Road",
  titleKey: "featured.taer.title",
  descriptionKey: "featured.taer.description",
  image: "/images/games/taer.jpg",
  link: "https://store.steampowered.com/app/3933280/The_Tavern_at_the_End_of_the_Road/",
  linkLabelKey: "games.store.steam",
  steamLogo: "/images/socials/steam-logo-alta.webp",
  studioLink: "https://crestfallen.games/",
  studioLabelKey: "featured.studio.link",
  studioLogo: "/images/cf.png",
} as const;

export { games, academicGames, featuredGame };
export type { Game };
