import sys
from extractAudio import generateSplitAudio
from whisper import generateTranscript
from generateFlashcards import generateFlashcards

def main():
    duration = generateSplitAudio(sys.argv[1])
    generateTranscript()
    return generateFlashcards(duration)

if __name__ == "__main__":
    main()