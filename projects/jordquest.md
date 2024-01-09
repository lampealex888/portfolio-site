---
title: "Jordquest"
excerpt: "Jordquest is a multiplayer hack-n-slash game in a procedurally generated arena with PvE and PvP elements."
coverImage: "/assets/projects/jordquest/cover.png"
date: "2023-12-01T00:00:00.000Z"
ogImage:
  url: "/assets/projects/jordquest/cover.png"
code: "https://github.com/lampealex888/cs1666final-jordquest"
demo: "https://lampealex888.itch.io/jordquest"
tools: ["Bevy", "Rust"]
---

# Jordquest

`Jordquest` was my final project for CS1666 Game Design and Implementation. It's a multiplayer hack-n-slash in a randomly generated arena with both PvE and PvP content. Through this project I was able to learn a lot about Rust and it's game engine Bevy.

## Technical Details

UDP networking connects together players with a listen server on the host player's computer. Connecting over LAN directly by IP. Focus on reliability and performance.

Each round starts with a randomly generated arena, placing enemy camps, items decorations, obstacles, and terrain throughout the map. Enemies will use A\* search to efficiently find paths to the player and back to their respective camp. Focus on balance, complexity, and natural appearance.
