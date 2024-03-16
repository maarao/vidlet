import requests
from openai import OpenAI
import os
from dotenv import load_dotenv
load_dotenv()
client = OpenAI(api_key=os.environ.get('OPENAI_API_KEY'))


response = client.chat.completions.create(
    max_tokens=30,
    model="gpt-3.5-turbo",
    response_format={ "type": "json_object" },
    messages=[
        {"role": "system", "content": "You are a helpful assistant designed to output JSON."},
        {"role": "user", "content": "Say this is a test!"}
    ]
)

print(response.choices[0].message.content)