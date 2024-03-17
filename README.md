## Vidlet

**Maanav Rao (maarao) and Sammy Alashoush (samalash)**

## Inspiration
We are both love using flashcards, but we both felt like it took too long to create them. We wanted to find a way to cut down on that time. Combine with the recent changes to popular flash card generators and studying tools, we felt like we could make something better than preexisting products for free users.

## What it does
Vidlet allows you to input any type of video, be it YouTube videos or lecture recordings, and generates a transcript it then uses to generate flashcards using AI.

## How we built it
The core of the backend runs on utilizing OpenAI Whisper to transcribe audio from the submitted video into a transcript with incredible accuracy. We then feed this transcript into a custom-prompted GPT-3.5 turbo model to intelligently create a number of flashcards based on the length of the video.

## Challenges we ran into
We had a lot of difficulty connect our frontend to our backend. It took quite a while to figure out how to pass a file to the backend and trigger our python scripts from the frontend successfully.

## Accomplishments that we're proud of
This was our first time working with OpenAi API and we were very happy with our results. We have created one of the most accurate transcription generators as well as one of the most intelligent flashcard generators

## What we learned
- OpenAI API calls
- Next.js API hooks
- Tailwind CSS spacing

## What's next for Vidlet
We want to turn it into a feature-rich flashcard study tool by reaching at least feature parity with other major flashcard study tools:
- Dynamic learning to allow for increased repetitions on terms users might not have understood.
- Increased customization on question types for tests.
- Increased customization for types of flashcards through difficulty and amount.
- Mini-games to learn those flashcards