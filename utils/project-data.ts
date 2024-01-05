import { StaticImageData } from "next/image";

import JordQuest from "../public/images/jordquest.png";
import GrandpasGone from "../public/images/grandpas-gone.png";
import GrammarQuery from "../public/images/grammar-query.jpg";
import SpaceInvaders from "../public/images/space-invaders.png";

export type ProjectType = {
  title: string;
  description: string;
  date: Date | string;
  cover: StaticImageData;
  code: string;
  demo: string;
  tools: string[];
};

export const projectList: ProjectType[] = [
  {
    title: "Jordquest",
    description:
      "Jordquest is a multiplayer hack-n-slash game in a procedurally generated arena with PvE and PvP elements.",
    date: "December 2023",
    cover: JordQuest,
    code: "https://github.com/lampealex888/cs1666final-jordquest",
    demo: "https://lampealex888.itch.io/jordquest",
    tools: ["Bevy", "Rust"]
  },
  {
    title: "Grandpa's Gone",
    description:
      "Grandpa’s Gone is a puzzle game where you need to help the main character find his grandpa by solving various puzzles and challenges.",
    date: "October 2023",
    cover: GrandpasGone,
    code: "https://github.com/lampealex888/gamejam2023-grandpas-gone",
    demo: "https://justaglitch.itch.io/grandpa-is-gone",
    tools: ["Unity", "C#"]
  },
  {
    title: "Grammar Query",
    description:
      "Grammar Query is a language learning app that helps users improve their grammar skills through interactive quizzes and exercises.",
    date: "January 2022",
    cover: GrammarQuery,
    code: "https://github.com/lampealex888/sheinnovates2022-grammar-query",
    demo: "https://nickzana.github.io/grammarquery/",
    tools: ["HTML", "CSS", "JS", "GrammarBot API", "SpeechRecognition API"]
  },
  {
    title: "Space Invaders",
    date: "June 2020",
    description:
      "Space Invaders is a classic arcade game where the player controls a spaceship and must shoot down waves of alien invaders before they reach the bottom of the screen.",
    cover: SpaceInvaders,
    code: "https://github.com/lampealex888/space-invaders/tree/main",
    demo: "https://lampealex888.itch.io/space-invaders",
    tools: ["PyGame", "Python", "Pygbag"]
  },
];
