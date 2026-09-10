from dotenv import load_dotenv
load_dotenv()

import os
import google.generativeai as genai

from flask import Flask, request, jsonify
from flask_cors import CORS


# ============================================
# GEMINI SETUP
# ============================================

genai.configure(
    api_key=os.getenv("GOOGLE_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-3.6-flash"
)


# ============================================
# FLASK APP
# ============================================

app = Flask(__name__)

CORS(app)


# ============================================
# GEMINI FUNCTION
# ============================================

def get_gemini_response(question):

    response = model.generate_content(question)

    return response.text


# ============================================
# CHAT API
# ============================================

@app.route("/ask", methods=["POST"])
def ask():

    try:

        data = request.get_json()

        question = data.get("question", "").strip()

        if not question:

            return jsonify({
                "error": "Please enter a question."
            }), 400


        answer = get_gemini_response(question)


        return jsonify({
            "response": answer
        })


    except Exception as e:

        print("ERROR:", e)

        return jsonify({
            "error": str(e)
        }), 500


# ============================================
# START SERVER
# ============================================

if __name__ == "__main__":

    print("===================================")
    print("      GEMINI CRAFT SERVER")
    print("===================================")
    print("Server running at:")
    print("http://127.0.0.1:5000")
    print("===================================")

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )