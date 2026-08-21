from dotenv import load_dotenv
load_dotenv()  # Load environment variables from .env file
import streamlit as st
import os
import google.generativeai as genai

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

## function to load gemini pro model and get responses

model=genai.GenerativeModel('gemini-3.6-flash')

def get_gemini_response(question):
    response=model.generate_content(question)
    return response.text

## initialize streamlit app

st.set_page_config(page_title="Q&A Demo")

st.header("Gemini LLM Application")

input_text = st.text_area("Enter your question here:")
submit = st.button("Ask the question here")

## when submit is clicked

if submit:
    response=get_gemini_response(input_text)
    st.subheader("The Response is")
    st.write(response)
