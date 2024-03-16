from openai import OpenAI
import os
from dotenv import load_dotenv
load_dotenv()

client = OpenAI(api_key=os.environ.get('OPENAI_API_KEY'))

def get_transcript_from_file(filename):
    try:
        with open(os.path.join(os.path.dirname(__file__), filename), "r") as file:
            text = file.read()
            return text
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
        return None

def generate_flashcards(video_duration_in_minutes: int):
    transcript = get_transcript_from_file("transcript/transcript.txt")

    response = client.chat.completions.create(
        max_tokens=4096,
        model="gpt-3.5-turbo-0125",
        response_format={ "type": "json_object" },
        messages=[
            {"role": "system", "content": "You are a helpful assistant designed to output JSON."},
            {"role": "user", "content": "Use this educational video transcript to generate " + str(video_duration_in_minutes) + " flashcards, each flashcard having a term and definition, based on the information described in the video: " + transcript},
        ]
    )
    
    data = response.choices[0].message.content
    with open(os.path.join(os.path.dirname(__file__), "flashcards/flashcards.json"), "w") as outfile:
        outfile.write(data)
    return True


print(generate_flashcards(9))