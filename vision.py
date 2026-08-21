from dotenv import load_dotenv
load_dotenv()

import streamlit as st
import os
import google.generativeai as genai
from PIL import Image

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel("gemini-3.5-flash-lite")


def get_gemini_response(input_text, image):
    if input_text != "":
        response = model.generate_content([input_text, image])
    else:
        response = model.generate_content(image)

    return response.text


st.set_page_config(page_title="Gemini Vision LLM Application")

st.header("Gemini Vision LLM Application")

input_text = st.text_area("Enter your question here:")
image = st.file_uploader(
    "Choose an image...",
    type=["jpg", "jpeg", "png"]
)

submit = st.button("Ask the question here")


if submit:

    if image is not None:

        img = Image.open(image)

        response = get_gemini_response(input_text, img)

        st.subheader("The Response is")
        st.write(response)

    else:
        st.warning("Please upload an image.")