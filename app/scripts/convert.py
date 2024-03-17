import sys
import os
from extractAudio import generate_split_audio
from whisper import generate_transcript
from generateFlashcards import generate_flashcards

def main():
    os.chdir('app/scripts')
    duration = generate_split_audio("videos/input.mp4")
    generate_transcript()
    return generate_flashcards(duration)

if __name__ == "__main__":
    main()