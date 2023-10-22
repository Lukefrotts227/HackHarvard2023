from dotenv import load_dotenv
import os 
import openai

load_dotenv()
openai_key = os.getenv("OPENAI_KEY")

openai.api_key = openai_key



def generate_suggestions(data):
    # Community-related prompt
    prompt = f'A model predicted that '

    # Make the API call to OpenAI
    response = openai.Completion.create(
        engine='',
        prompt=prompt,
        max_tokens=33,  # Adjust the number of tokens as per your requirements
        temperature=0.5,  # Adjust the temperature value to control the output randomness
        top_p=1.0,  # Adjust the top_p value to control the diversity of the output
        n=1,  # Adjust the number of responses to generate
        stop=None,  # You can specify a custom stop sequence if needed
        timeout=15,  # Timeout in seconds (optional)
    )