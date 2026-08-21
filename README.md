# Gemini LLM App

A simple **Generative AI web application** built with **Python, Streamlit, and Google's Gemini API**.

This project takes user input from a Streamlit interface and sends it to Google's Gemini model to generate an AI response.

---

## Features

* Simple Streamlit web interface
* User input through a text box
* Gemini API integration
* AI-generated responses
* Environment-variable based API key management
* Runs locally using a Python virtual environment

---

## Technologies Used

* **Python**
* **Streamlit** — frontend/web interface
* **Google Gemini API** — LLM
* **google-genai** — Gemini's current Python SDK
* **python-dotenv** — loading environment variables
* **Git & GitHub** — version control

---

## Project Structure

```text
GEMINILLMAPP/
│
├── app.py
├── .env
├── .gitignore
├── README.md
└── venv/
```

> `venv/` and `.env` should **not** be uploaded to GitHub.

---

## Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd GEMINILLMAPP
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate it on Windows:

```powershell
venv\Scripts\activate
```

---

### 3. Install dependencies

```powershell
pip install streamlit google-genai python-dotenv
```

---

## Gemini API Key

Create a Gemini API key through **Google AI Studio**.

Store the key in a `.env` file:

```text
GEMINI_API_KEY=your_api_key_here
```

### Security

**Never upload your API key to GitHub.**

Add the following to `.gitignore`:

```text
.env
venv/
__pycache__/
```

If an API key is accidentally pushed to GitHub, revoke it and create a new one.

---

## 💻 Application Code

The application uses the Gemini client to communicate with Google's Gemini API.

A simplified version looks like:

```python
import os
from dotenv import load_dotenv
from google import genai
import streamlit as st

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

st.title("Gemini LLM App")

input_text = st.text_input("Enter your question")

if input_text:
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=input_text
    )

    st.write(response.text)
```

---

## Running the Application

After activating the virtual environment:

```powershell
streamlit run app.py
```

Streamlit will start a local server and provide a URL, usually:

```text
http://localhost:8501
```

Open that URL in your browser.

---

## How It Works

The application follows this basic flow:

```text
User
  ↓
Streamlit UI
  ↓
Python application
  ↓
Gemini API
  ↓
Gemini Model
  ↓
AI Response
  ↓
Streamlit UI
```

### Step 1 — User enters a question

The user enters text into the Streamlit interface.

### Step 2 — Python receives the input

The application stores the user's input in a Python variable.

### Step 3 — Request is sent to Gemini

The application sends the input to the Gemini model through the Gemini API.

### Step 4 — Gemini generates a response

Gemini processes the prompt and returns generated text.

### Step 5 — Streamlit displays the response

The response is displayed directly on the web page.

---

## Troubleshooting

### `API_KEY_INVALID`

If you see:

```text
google.api_core.exceptions.InvalidArgument:
400 API key not valid
```

check:

1. The API key is correct.
2. The key hasn't been revoked.
3. `.env` contains the correct variable name:

```text
GEMINI_API_KEY=your_key
```

4. `load_dotenv()` is being called.
5. The application is running from the correct project directory.
6. You haven't accidentally added spaces or quotation marks around the key.

---

### Streamlit command not found

Make sure the virtual environment is activated:

```powershell
venv\Scripts\activate
```

Then install Streamlit:

```powershell
pip install streamlit
```

---

### Python/virtual environment problems

Check Python:

```powershell
python --version
```

Check the active environment:

```powershell
where python
```

The Python path should point toward your project's `venv`.

---

## Legacy SDK vs Current SDK

An earlier version of this project may use:

```python
import google.generativeai as genai
```

This is the older Gemini Python SDK.

The current SDK uses:

```python
from google import genai
```

For new projects, the current `google-genai` SDK is preferred.

---

## What I Learned From This Project

This project helped me understand:

* How APIs work
* How an LLM can be integrated into a Python application
* How to send prompts to Gemini
* How to receive and display model responses
* How Streamlit can be used to create a simple frontend
* How environment variables protect API keys
* How Python virtual environments work
* How to debug API authentication errors
* How a frontend communicates with an AI backend/API

---

## 🔮 Future Improvements

Possible improvements include:

* Chat history
* Conversation memory
* Better UI
* Multiple Gemini models
* Streaming responses
* File/PDF upload
* Prompt templates
* System instructions
* RAG
* Authentication
* Deployment
* Connecting the application to a database

---

## Project Goal

The main goal of this project is to understand the fundamentals of building a **Generative AI application from scratch** rather than simply using an existing chatbot.

It demonstrates the basic architecture behind many modern AI applications:

```text
Frontend
   ↓
Python Application
   ↓
API
   ↓
LLM
   ↓
Generated Response
```

---

## 👨‍💻 Author

**Samaresh**

B.Tech CSE

This project is part of my learning journey in **Machine Learning, Generative AI, and AI application development**.
