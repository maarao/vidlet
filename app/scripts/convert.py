import sys
from extractAudio import generateSplitAudio
from whisper import generateTranscript
from generateFlashcards import generateFlashcards

def main():
    duration = generateSplitAudio("videos/input.mp4")
    generateTranscript()
    return generateFlashcards(duration)

if __name__ == "__main__":
    main()