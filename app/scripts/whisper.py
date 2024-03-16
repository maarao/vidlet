from openai import OpenAI
import os
from dotenv import load_dotenv
load_dotenv()

client = OpenAI(api_key=os.environ.get('OPENAI_API_KEY'))

audio_file = open("output_chunks/chunk_1.mp3", "rb")
transcription = client.audio.transcriptions.create(
  model="whisper-1",
  file=audio_file,
  response_format="text"
)

# Specify the file path where you want to save the string
file_path = "transcript/transcript.txt"

# Open the file in write mode ("w"), which will create the file if it doesn't exist or overwrite it if it does
with open(file_path, "w") as file:
    # Write the string to the file
    file.write(transcription)