# Gemini Vision LLM App

A simple **Generative AI image question-answering application** built with **Python, Streamlit, and Google's Gemini API**.

The application allows users to upload an image and ask questions about it. The image and question are processed by **Gemini 3.5 Flash-Lite**, which generates a response based on the provided input.

---

## Features

* Simple Streamlit web interface
* Image upload support
* Supports JPG, JPEG, and PNG images
* Ask questions about uploaded images
* Multimodal AI capabilities
* Gemini API integration
* AI-generated responses
* Environment-variable based API key management
* Runs locally using a Python virtual environment

---

## Technologies Used

* **Python**
* **Streamlit** — web interface
* **Google Gemini API** — Generative AI and multimodal capabilities
* **Gemini 3.5 Flash-Lite** — Gemini model used for generating responses
* **google-generativeai** — Gemini Python SDK used in the project
* **python-dotenv** — loading environment variables
* **Pillow (PIL)** — image processing
* **Git & GitHub** — version control

---

## Project Structure

```text
GEMINILLMAPP/
│
├── app.py              # Streamlit application
├── vision.py           # Gemini Vision/API logic
├── .env                # API key (not uploaded)
├── .gitignore
├── README.md
└── venv/               # Python virtual environment
```

> `.env` and `venv/` should **not** be uploaded to GitHub.

---

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/samareshdalal/gemini-llm-app.git
cd gemini-llm-app
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate it on Windows:

```powershell
venv\Scripts\activate
```

---

### 3. Install Dependencies

```powershell
pip install streamlit google-generativeai python-dotenv pillow
```

---

## Gemini API Key

Create a Gemini API key through **Google AI Studio**.

Create a `.env` file in the project directory:

```text
GOOGLE_API_KEY=your_api_key_here
```

The application loads the API key using `python-dotenv`.

### Security

**Never upload your API key to GitHub.**

Add the following to `.gitignore`:

```text
.env
venv/
__pycache__/
```

If an API key is accidentally exposed publicly, revoke it and create a new one.

---

## How the Application Works

The application follows this flow:

```text
User
  ↓
Streamlit UI
  ↓
app.py
  ↓
vision.py
  ↓
Gemini API
  ↓
Gemini 3.5 Flash-Lite
  ↓
AI Response
  ↓
Streamlit UI
```

### Step 1 — User uploads an image

The user uploads a JPG, JPEG, or PNG image through the Streamlit interface.

### Step 2 — User enters a question

The user enters a question about the uploaded image.

For example:

```text
"What objects are present in this image?"
```

### Step 3 — `app.py` handles the interface

`app.py` is responsible for the Streamlit interface, including:

* Page configuration
* Text input
* Image upload
* Submit button
* Displaying the AI response

### Step 4 — `vision.py` handles Gemini

`vision.py` contains the Gemini-related logic.

It receives the user's question and uploaded image and sends them to the Gemini API.

### Step 5 — Gemini processes the input

The model receives both the image and text prompt:

```text
Image + Question
       ↓
Gemini 3.5 Flash-Lite
```

The model analyzes the visual information and generates a text response.

### Step 6 — Response is displayed

The generated response is returned to the Streamlit application and displayed to the user.

---

## Example Questions

The application can be used for questions such as:

* "What is in this image?"
* "Describe this image."
* "What objects can you identify?"
* "What is happening in this image?"
* "Explain this diagram."
* "Read the text in this image."
* "What can you tell me about this picture?"

---

## Running the Application

Activate the virtual environment:

```powershell
venv\Scripts\activate
```

Then run:

```powershell
streamlit run app.py
```

Streamlit will start a local server, usually at:

```text
http://localhost:8501
```

Open the URL in your browser.

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
2. The API key has not been revoked.
3. `.env` contains the correct variable name:

```text
GOOGLE_API_KEY=your_key
```

4. `load_dotenv()` is being called.
5. The `.env` file is in the project directory.
6. The API key has not accidentally been uploaded to GitHub.

---

### `404 Model Not Found`

If you see:

```text
404 models/gemini-vision-pro is not found
```

the model name being used is no longer available or supported by the API version being used.

This project uses **Gemini 3.5 Flash-Lite** for image and text generation.

This was also an important lesson while developing the project: older Generative AI tutorials may use model names that are no longer available, so model names and API documentation need to be checked when building or updating an application.

---

### Streamlit Command Not Found

Make sure the virtual environment is activated:

```powershell
venv\Scripts\activate
```

Then install Streamlit:

```powershell
pip install streamlit
```

You can also run:

```powershell
python -m streamlit run app.py
```

---

### Python / Virtual Environment Problems

Check Python:

```powershell
python --version
```

Check which Python is being used:

```powershell
where python
```

The returned path should point toward the project's `venv`.

---

## Legacy SDK and Model Changes

The project was developed while following a Gemini API tutorial that used an older Gemini Vision model.

During development, the older model produced a `404 Model Not Found` error.

The project was then updated to use **Gemini 3.5 Flash-Lite**.

This provided practical experience with an important aspect of Generative AI development: **APIs, SDKs, and model availability can change over time.**

As a result, older tutorials may require modifications before they work with newer Gemini APIs and models.

---

## What I Learned From This Project

This project helped me understand:

* How to build a basic **Generative AI application**
* How **LLMs can be accessed through APIs**
* How to connect Python applications to the Gemini API
* How **multimodal AI** works with text and images
* How to send an image and prompt to an AI model
* How Streamlit can be used to create a simple frontend
* How image uploads work in Streamlit
* How Pillow can be used to process images
* How environment variables can be used to protect API keys
* How Python virtual environments work
* How to install dependencies using `pip`
* How to debug API authentication errors
* How to debug model availability errors
* Why older AI tutorials can stop working
* How `app.py` and `vision.py` can separate UI and AI logic
* The basic architecture of a Generative AI application

---

## Future Improvements

Possible improvements include:

* Chat history
* Conversation memory
* Better UI
* Image preview
* Multiple image uploads
* PDF support
* Streaming responses
* Better prompt handling
* System instructions
* RAG
* Authentication
* Deployment
* Database integration
* Exploring additional Gemini models
* Adding more multimodal capabilities

---

## Project Goal

The main goal of this project is to understand the fundamentals of building a **Generative AI application** rather than simply using an existing AI chatbot.

The project demonstrates how different components work together:

```text
Frontend
   ↓
Streamlit
   ↓
Python
   ↓
Gemini API
   ↓
Gemini 3.5 Flash-Lite
   ↓
Generated Response
```

Although this is a small project, it provided practical experience with **APIs, LLMs, multimodal inputs, Streamlit, environment variables, Python virtual environments, and debugging real-world API issues.**

---

## Author

**Samaresh**

B.Tech CSE

This project is part of my learning journey in **Machine Learning, Generative AI, and AI application development**.
