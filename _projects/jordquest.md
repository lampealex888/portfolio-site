---
title: "Jordquest"
coverImage: "/assets/projects/jordquest/cover.png"
date: "2023-12-01T00:00:00.000Z"
ogImage:
  url: "/assets/projects/jordquest/cover.png"
code: "https://github.com/lampealex888/cs1666final-jordquest"
demo: "https://lampealex888.itch.io/jordquest"
tools: ["Bevy", "Rust"]
---

_Jordquest_ emerged as the culmination of my team's efforts in [CS1666 Principles of Computer Game Design and Implementation](https://courses.sci.pitt.edu/courses/view/CS-1666). In this project, we ventured into the realm of multiplayer hack-n-slash, creating an immersive experience within a dynamically generated arena replete with both PvE and PvP elements. The journey not only unfolded within the game but also in the depths of [Rust](https://www.rust-lang.org/) and its accompanying game engine, [Bevy](https://bevyengine.org/). 

A live version of the game can be found [here](https://lampealex888.itch.io/jordquest).

![Jordquest Gameplay](/assets/projects/jordquest/gameplay.gif)

## Technical Details

### Rust: A Foundation of Safety and Abstractions

![Rust logo](/assets/projects/jordquest/rust.png)

[Rust](https://www.rust-lang.org/), known for its emphasis on memory safety and zero-cost abstractions, played a pivotal role in shaping the foundation of _Jordquest_. The language's focus on preventing common programming errors without sacrificing performance ensured a robust and secure codebase. Wrestling with Rust's borrow checker and ownership system became a learning curve that ultimately contributed to code reliability.

The expressiveness of Rust allowed us to implement intricate game logic while maintaining a high level of performance. The language's commitment to safety and concurrency made it an ideal choice for crafting a multiplayer hack-n-slash adventure, where precision and responsiveness are paramount.

### Bevy: Streamlined Development and Extensibility

![Bevy logo](/assets/projects/jordquest/bevy.png)

Complementing Rust, the [Bevy](https://bevyengine.org/) game engine emerged as a revelation in terms of simplicity and extensibility. Bevy's commitment to providing a powerful yet accessible game development framework streamlined our workflow, facilitating the implementation of complex features with ease.

The Entity-Component-System (ECS) architecture offered by Bevy provided a clear and organized structure for managing game entities and their behaviors. Leveraging Bevy's modular nature, we seamlessly integrated components, systems, and resources, allowing for efficient iteration and experimentation.

The community support and documentation surrounding Bevy proved invaluable as we navigated through unfamiliar territory. Collaborative forums and a wealth of resources facilitated problem-solving and encouraged an open exchange of ideas.

### Networking

At the heart of Jordquest lies a robust networking infrastructure, employing UDP to seamlessly weave together players. The host player's computer doubles as a listen server, fostering connectivity through direct LAN access via IP. The technical underpinning of the game prioritizes reliability and performance, ensuring a smooth and responsive multiplayer experience.

The choice of UDP for networking introduces a layer of efficiency, enabling low-latency communication between players. The listen server, residing on the host player's computer, acts as a central hub, orchestrating the flow of data and interactions. The emphasis on reliability translates into a stable multiplayer environment, enhancing the overall gameplay experience.

### Procedural Generation

Each round in Jordquest unfolds within a dynamically generated arena, a testament to the game's adaptability and replayability. The procedural generation algorithm breathes life into the game world, strategically placing enemy camps, items, decorations, obstacles, and diverse terrain elements throughout the map.

The PvE aspect of Jordquest introduces formidable adversaries, driven by an A* search algorithm. This sophisticated navigation system empowers enemies to efficiently find paths to the player and navigate back to their respective camps. The focus on balance is evident as enemies pose a challenge without sacrificing the natural appearance of their movements.

Jordquest strikes a delicate balance between complexity and accessibility. The procedural generation and enemy behavior contribute to the game's complexity, offering a rich and varied gaming experience. Simultaneously, the emphasis on natural appearance ensures that the game maintains a level of accessibility, allowing players to intuitively engage with the dynamic environment.

## Art style and sound design

![Jordquest art](/assets/projects/jordquest/art.png)

Drawing inspiration from the nostalgia of classic games, _Jordquest_ presents a pixel art style and pixelated sound design that evoke the charm of retro gaming.

The visual aesthetics of *Jordquest* pay homage to the pixelated wonders of the past, embracing a nostalgic pixel art style. Each character, enemy, and element within the game is meticulously crafted with pixel precision, creating a visually cohesive and charming world.

Complementing the pixel art, the sound design in *Jordquest* embraces a pixelated symphony. Chiptune melodies resonate throughout the game, reminiscent of the iconic soundtracks that defined early video game soundscapes.

## Conclusion

Jordquest stands not only as a testament to my journey through CS1666 but also as a vibrant multiplayer hack-n-slash adventure. The fusion of technical intricacies, dynamic gameplay elements, and lessons from Rust and Bevy culminate in an experience that invites players into a world where every round is a unique journey. As the arena shifts and enemies advance, Jordquest beckons, promising an immersive adventure in the ever-changing landscape of multiplayer gaming.

