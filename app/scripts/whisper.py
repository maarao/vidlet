from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.environ.get('OPENAI_API_KEY'))

input_directory = "output_chunks"
output_directory = "transcript"

# Create the output directory if it doesn't exist
os.makedirs(output_directory, exist_ok=True)

# Initialize an empty string to store the concatenated transcriptions
concatenated_transcription = ""

# Iterate over all MP3 files in the input directory
for filename in os.listdir(input_directory):
    if filename.endswith(".mp3"):
        audio_file_path = os.path.join(input_directory, filename)

        # Transcribe audio
        transcription = client.audio.transcriptions.create(
            model="whisper-1",
            file=open(audio_file_path, "rb"),
            response_format="text"
        )

        # Append the transcription to the concatenated transcription
        concatenated_transcription += transcription

# Specify the file path where you want to save the transcript
transcript_file_path = os.path.join(output_directory, "transcript.txt")

# Write the concatenated transcription to the transcript file
with open(transcript_file_path, "w") as transcript_file:
    transcript_file.write(concatenated_transcription)

print("Transcription saved successfully.")
