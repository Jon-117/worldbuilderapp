import os
import openai

openai.api_key = os.getenv("OPEN_AI_KEY")

while True:
    prompt = input("Talk to Davinci003: \n")

    response_raw = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=10,
        temperature=0
    )

    response = response_raw["choices"][0]['text']



    # print(response_raw)
    print(response)


