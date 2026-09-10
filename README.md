# 🎮 Gemini Craft — Generative AI Q&A & Vision App

A **Generative AI application** built with **Python, Flask, HTML, CSS, JavaScript, and Google's Gemini API**.

Gemini Craft provides a custom **Minecraft-inspired pixel-art interface** where users can interact with Gemini through a web-based chat experience, with multimodal image-question answering planned as part of the application.

The project was originally developed as a Streamlit-based Gemini application and was later redesigned with a custom frontend and Flask backend to gain a better understanding of **frontend-backend architecture, APIs, HTTP requests, and AI application development**.

---

## ✨ Features

* 🎮 Minecraft-inspired pixel-art interface
* 💬 Gemini-powered question answering
* 🌐 Custom HTML/CSS/JavaScript frontend
* 🐍 Python Flask backend
* 🤖 Google Gemini API integration
* 🔐 Environment-variable based API key management
* 📡 Frontend-to-backend API communication
* 🖼️ Vision functionality through Gemini
* 📱 Responsive web interface
* 🧩 Modular project structure
* 🛡️ API key kept outside the frontend
* 🐙 Git & GitHub version control

---

## 🛠️ Technologies Used

### Frontend

* **HTML5**
* **CSS3**
* **JavaScript**
* **Google Fonts**
* Pixel-art / Minecraft-inspired UI design

### Backend

* **Python**
* **Flask**
* **Flask-CORS**

### AI

* **Google Gemini API**
* **google-generativeai** Python SDK

### Other

* **python-dotenv** — environment variable management
* **Pillow (PIL)** — image processing
* **Git**
* **GitHub**

---

## 📁 Project Structure

```text
GEMINILLMAPP/
│
├── app.py              # Flask backend and Gemini API endpoint
├── vision.py           # Vision / image analysis logic
│
├── index.html          # Main frontend
├── style.css           # Frontend styling
├── script.js           # Frontend JavaScript
│
├── requirements.txt    # Python dependencies
├── .gitignore          # Files ignored by Git
├── .env                # API key (not uploaded)
└── venv/               # Local virtual environment
```

> **Important:** `.env` and `venv/` should never be uploaded to GitHub.

---

# 🏗️ Application Architecture

The application follows a frontend-backend architecture:

```text
                USER
                  │
                  ▼
        ┌──────────────────┐
        │   Gemini Craft   │
        │   HTML / CSS /   │
        │    JavaScript    │
        └────────┬─────────┘
                 │
                 │ HTTP POST
                 ▼
        ┌──────────────────┐
        │   Flask Backend  │
        │      app.py      │
        └────────┬─────────┘
                 │
                 │ Gemini API
                 ▼
        ┌──────────────────┐
        │   Google Gemini  │
        │       API        │
        └────────┬─────────┘
                 │
                 ▼
          AI Generated
             Response
                 │
                 ▼
        ┌──────────────────┐
        │   Gemini Craft   │
        │    Interface     │
        └──────────────────┘
```

---

# 🔄 How It Works

## 1. User enters a question

The user enters a question in the Gemini Craft interface.

For example:

```text
Explain machine learning in simple terms.
```

---

## 2. JavaScript sends the request

The frontend JavaScript sends the question to the Flask backend using a `POST` request.

```text
Browser
   ↓
JavaScript
   ↓
POST /ask
```

---

## 3. Flask receives the request

`app.py` receives the question through the `/ask` API endpoint.

The backend validates the input before sending it to Gemini.

---

## 4. Flask communicates with Gemini

The Flask backend uses the Gemini API to generate the response.

The API key is loaded from an environment variable:

```text
GOOGLE_API_KEY
```

The API key is therefore kept on the **server side** rather than being exposed inside the frontend JavaScript.

---

## 5. Gemini generates a response

Gemini processes the user's question and returns an AI-generated response.

```text
Question
   ↓
Gemini API
   ↓
AI Response
```

---

## 6. Response is returned to the browser

Flask sends the response back as JSON.

The JavaScript frontend then displays the response inside the Gemini Craft interface.

---

# 🔐 API Key Security

The Gemini API key is stored in a `.env` file.

Example:

```text
GOOGLE_API_KEY=your_api_key_here
```

The application loads the key using `python-dotenv`.

### `.gitignore`

The `.env` file should be ignored by Git:

```text
.env
venv/
__pycache__/
```

### ⚠️ Never upload your API key to GitHub.

If an API key is accidentally exposed publicly, revoke it and create a new one.

---

# 🚀 Setup

## 1. Clone the repository

```bash
git clone https://github.com/samareshdalal/gemini-llm-app.git
```

Move into the project directory:

```bash
cd gemini-llm-app
```

---

## 2. Create a virtual environment

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

---

## 3. Install dependencies

```bash
pip install -r requirements.txt
```

If `requirements.txt` is not available or needs to be regenerated:

```bash
pip install flask flask-cors python-dotenv google-generativeai pillow
```

---

## 4. Create the `.env` file

Create a file named:

```text
.env
```

Inside it:

```text
GOOGLE_API_KEY=your_api_key_here
```

Do not replace this with your real API key in the README or anywhere publicly visible.

---

# ▶️ Running the Application

Activate the virtual environment:

```bash
venv\Scripts\activate
```

Start the Flask backend:

```bash
python app.py
```

The server should start locally at:

```text
http://127.0.0.1:5000
```

Open that address in your browser.

The Flask server serves the custom Gemini Craft frontend directly.

---

# 🎮 Gemini Craft Interface

The application uses a custom pixel-inspired interface rather than relying on a pre-built AI UI.

The interface includes:

* Player-style status bar
* Level and XP indicators
* Pixel-art environment
* AI character
* Speech bubble
* Chat interface
* Vision interface
* History section
* Pixel-style buttons
* Custom typography
* Responsive layout

The goal was to make the application feel more like a **game interface** rather than a standard AI chatbot.

---

# 🖼️ Vision Capabilities

The project also includes vision functionality through Gemini.

Users can provide an image and ask questions such as:

```text
What objects are present in this image?
```

Other possible questions include:

* What is happening in this image?
* Describe this image.
* What objects can you identify?
* Read the text in this image.
* Explain this diagram.
* What can you tell me about this picture?

The image and question can be processed together by a multimodal Gemini model.

---

# 🧠 What I Learned

This project helped me understand the fundamentals of building a Generative AI application from the ground up.

### Generative AI

* How to interact with an LLM through an API
* How prompts are sent to AI models
* How AI-generated responses are returned
* Basic multimodal AI concepts

### Python

* Working with external Python libraries
* Environment variables
* Virtual environments
* API integration
* Error handling

### Flask

* Creating a Python web server
* Creating API endpoints
* Handling HTTP `POST` requests
* Returning JSON responses
* Connecting a frontend to a backend
* CORS and frontend-backend communication

### Frontend

* HTML structure
* CSS styling
* JavaScript event handling
* `fetch()` API
* Sending JSON requests
* Receiving JSON responses
* Updating the webpage dynamically

### Development

* Git and GitHub
* Debugging dependency errors
* Debugging API errors
* Understanding changing AI model availability
* Separating frontend and backend responsibilities
* Protecting API credentials

---

# 🐛 Problems I Encountered

Building the project also involved debugging several real-world issues.

### API Authentication Errors

An invalid Gemini API key produced authentication errors.

This helped me understand how environment variables and API credentials work.

---

### Model Availability Errors

Older Gemini tutorials sometimes use model names that are no longer available.

For example:

```text
404 Model Not Found
```

This demonstrated an important lesson when working with Generative AI APIs:

> AI models, SDKs, and APIs can change over time.

Code from an older tutorial may therefore require modifications before it works with a current API.

---

### Python Environment Issues

During development, I also encountered problems involving:

* Python versions
* Virtual environments
* Package installation
* VS Code interpreters
* Missing Python modules

These issues helped me understand how Python environments work in real projects.

---

# 🔮 Future Improvements

Possible future improvements include:

* 💬 Full conversation memory
* 🧠 Chat history
* 🖼️ Improved image analysis
* 📷 Camera input
* 📄 PDF support
* ⚡ Streaming AI responses
* 🔐 Authentication
* 🗄️ Database integration
* 📊 Usage tracking
* 🎤 Voice input
* 🔊 AI voice responses
* 📚 RAG
* 🤖 AI agents
* 🛡️ Guardrails
* 🧪 Evaluation system
* ☁️ Cloud deployment
* 🌍 Custom domain
* 📱 Improved mobile experience

---

# 🎯 Project Goal

The main goal of this project was not simply to build another chatbot.

The goal was to understand how the different components of an AI application work together:

```text
Frontend
   ↓
JavaScript
   ↓
HTTP Request
   ↓
Flask Backend
   ↓
Gemini API
   ↓
AI Model
   ↓
Generated Response
   ↓
Frontend
```

This project provided practical experience with:

* Generative AI
* LLM APIs
* Multimodal AI
* Python
* Flask
* HTML
* CSS
* JavaScript
* REST-style API communication
* Environment variables
* Virtual environments
* Git/GitHub
* Debugging

---

# 📌 Project Status

**Current status:** 🚧 In development

The original Streamlit prototype has been redesigned into a custom web application using a **Flask backend and custom frontend**.

Future development will focus on completing the vision functionality, improving the UI, and deploying the application online.

---

# 👨‍💻 Author

**Samaresh**

**B.Tech CSE**

This project is part of my learning journey in:

* Machine Learning
* Generative AI
* AI Application Development
* Software Development

---

## ⭐ Acknowledgement

This project was developed as a learning project while exploring Generative AI, Gemini APIs, Python, web development, and AI application architecture.

````

### One important thing

Your old README says **“Streamlit application” everywhere**, but your current project has moved toward **Flask + custom frontend**. The new README fixes that.

Also, **don't commit this yet** if `app.py` is still being changed for deployment. Once we're finished with the deployment setup, we'll do one clean:

```bash
git add .
git commit -m "Update project documentation"
git push
````

**Next step:** update `requirements.txt` to match the new Flask version of the project.
