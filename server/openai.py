from dotenv import load_dotenv
import os 
import openai

load_dotenv()
openai_key = os.getenv("OPENAI_KEY")

openai.api_key = openai_key


