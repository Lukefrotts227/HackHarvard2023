from dotenv import load_dotenv
import os 
import openai

load_dotenv()
openai_key = os.getenv("OPENAI_KEY")

openai.api_key = openai_key

def generate_suggestions(data): 
    conversation = [
    {"role": "system", "content": "You are a helpful assistant that provides information on preventing diabetes."},
    {"role": "user", "content": "How can I reduce my risk of developing diabetes?"}
    ]
    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=conversation
    )
    return response['choices'][0]['message']['content']

print(generate_suggestions("hello"))
