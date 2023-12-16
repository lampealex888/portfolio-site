import { StaticImageData } from "next/image";

import JordQuest from "../public/images/jordquest.png";
import GrandpasGone from "../public/images/grandpas-gone.png";
import GrammarQuery from "../public/images/grammar-query.jpg";
import SpaceInvaders from "../public/images/space-invaders.png";

export type ProjectType = {
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
  code: string;
  link?: string;
  tools: string[];
};

export const projectList: ProjectType[] = [
  {
    slug: "jordquest",
    title: "Jordquest",
    description:
      "Jordquest is a multiplayer hack-n-slash game in a procedurally generated arena with PvE and PvP elements.",
    image: JordQuest,
    code: "https://github.com/lampealex888/cs1666final-jordquest",
    link: "https://lampealex888.itch.io/jordquest",
    tools: ["Bevy", "Rust"],
  },
  {
    slug: "grandpas-gone",
    title: "Grandpa's Gone",
    description:
      "Grandpa’s Gone is a puzzle game where you need to help the main character find his grandpa by solving various puzzles and challenges.",
    image: GrandpasGone,
    code: "https://github.com/lampealex888/gamejam2023-grandpas-gone",
    link: "https://justaglitch.itch.io/grandpa-is-gone",
    tools: ["Unity", "C#"],
  },
  {
    slug: "grammar-query",
    title: "Grammar Query",
    description:
      "Grammar Query is a language learning app that helps users improve their grammar skills through interactive quizzes and exercises.",
    image: GrammarQuery,
    code: "https://github.com/lampealex888/sheinnovates2022-grammar-query",
    link: "https://nickzana.github.io/grammarquery/",
    tools: ["HTML", "CSS", "JS", "GrammarBot API", "SpeechRecognition API"],
  },
  {
    slug: "space-invaders",
    title: "Space Invaders",
    description:
      "Space Invaders is a classic arcade game where the player controls a spaceship and must shoot down waves of alien invaders before they reach the bottom of the screen.",
    image: SpaceInvaders,
    code: "https://github.com/lampealex888/space-invaders/tree/main",
    link: "https://lampealex888.itch.io/space-invaders",
    tools: ["PyGame", "Python", "Pygbag"],
  },
];
