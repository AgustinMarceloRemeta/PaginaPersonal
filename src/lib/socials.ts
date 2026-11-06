import { SiGithub, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa6";
import React from "react";

interface Social {
  name: string;
  icon: React.ElementType;
  href: string;
}

const socials: Social[] = [
  {
    name: "GitHub",
    icon: SiGithub,
    href: "https://github.com/AgustinMarceloRemeta",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/agustin-remeta-a365b7248/",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/agusremeta/",
  },
  {
    name: "YouTube",
    icon: SiYoutube,
    href: "https://www.youtube.com/channel/UC9gOnJ9HYaq9sGageFuj-IQ",
  },
];

const contactEmail = "agustinmarceloremeta@gmail.com";

export { socials, contactEmail };
export type { Social };
