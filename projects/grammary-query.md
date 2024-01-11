---
title: "Grammar Query"
coverImage: "/assets/projects/grammar-query/cover.jpg"
date: "2022-01-01T00:00:00.000Z"
ogImage:
  url: "/assets/projects/grammar-query/cover.jpg"
code: "https://github.com/lampealex888/sheinnovates2022-grammar-query"
demo: "https://nickzana.github.io/grammarquery/"
tools: ["HTML", "CSS", "JS", "GrammarBot API", "SpeechRecognition API"]
---

GrammarQuery was built as a project for the Unversity of Pittsburgh's [SheInnovates 2022 Hackathon](http://sheinnovates.us/). It's a voice-based language learning tool that prompts you with real-world questions that the user replies to by speaking. It complements other language learning tools that are focused on learning vocabulary and grammar by teaching the user to use English in a conversational manner.

A live version of GrammarQuery can be found [here](https://nickzana.github.io/grammarquery/) Unfortunately the demo does not currently work, but I plan on recreating the project to a working state this year.

## Technical Details

GrammarQuery works by using the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to speak the question to the user, then translate the user's audio response to text.

This transcribed text is then sent to the [GrammarBot API](https://www.grammarbot.io/), where the returned errors are presented to the user.
