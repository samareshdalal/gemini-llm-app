// ============================================
// GEMINI CRAFT FRONTEND
// ============================================

const question = document.getElementById("question");
const askButton = document.getElementById("askButton");

const responseBox = document.getElementById("response");
const status = document.getElementById("status");

const welcomeText = document.getElementById("welcomeText");

const modes = document.querySelectorAll(".mode");

const chatPanel = document.querySelector(".chat-panel");
const visionPanel = document.querySelector(".vision-panel");
const historyPanel = document.querySelector(".history-panel");

const historyList = document.getElementById("historyList");


// ============================================
// MODE SWITCHING
// ============================================

modes.forEach(mode => {

    mode.addEventListener("click", () => {

        modes.forEach(m => m.classList.remove("active"));

        mode.classList.add("active");

        const selectedMode = mode.dataset.mode;

        chatPanel.classList.add("hidden");
        visionPanel.classList.add("hidden");
        historyPanel.classList.add("hidden");

        if (selectedMode === "chat") {
            chatPanel.classList.remove("hidden");
        }

        if (selectedMode === "vision") {
            visionPanel.classList.remove("hidden");
        }

        if (selectedMode === "history") {
            historyPanel.classList.remove("hidden");
        }

    });

});


// ============================================
// ASK GEMINI
// ============================================

async function askGemini() {

    const userQuestion = question.value.trim();

    if (!userQuestion) {

        responseBox.innerHTML =
            "⚠ Please enter a question first.";

        return;
    }


    // UI: thinking

    status.textContent = "● THINKING";

    status.style.color = "#e8c45b";

    askButton.disabled = true;

    responseBox.innerHTML =
        `<span class="cursor">▮</span> Gemini is thinking...`;

    welcomeText.textContent =
        "Hmm... let me think about that.";


    try {

        /*
         * IMPORTANT:
         *
         * This is where we will connect
         * your Python Gemini backend.
         *
         * For now we simulate the response.
         */

        const serverResponse = await fetch(
    "http://127.0.0.1:5000/ask",
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            question: userQuestion
        })
    }
);


const data = await serverResponse.json();


if (!serverResponse.ok) {

    throw new Error(
        data.error || "Something went wrong."
    );

}


const answer = data.response;


        showResponse(answer);

        saveHistory(userQuestion, answer);

    }

    catch (error) {

        console.error(error);

        responseBox.innerHTML =
            "⚠ Something went wrong.";

        status.textContent =
            "● ERROR";

        status.style.color =
            "#d85b5b";

    }

    finally {

        askButton.disabled = false;

    }

}


// ============================================
// SHOW RESPONSE
// ============================================

function showResponse(text) {

    status.textContent =
        "● ONLINE";

    status.style.color =
        "#62c370";

    welcomeText.textContent =
        "Quest complete. Here's what I found.";


    responseBox.innerHTML = "";

    typeResponse(text);

}


// ============================================
// TYPING EFFECT
// ============================================

function typeResponse(text) {

    let index = 0;

    const speed = 12;

    const cursor =
        document.createElement("span");

    cursor.className = "cursor";

    responseBox.appendChild(cursor);


    function type() {

        if (index < text.length) {

            cursor.before(
                document.createTextNode(
                    text[index]
                )
            );

            index++;

            setTimeout(type, speed);

        }

    }

    type();

}


// ============================================
// HISTORY
// ============================================

function saveHistory(questionText, answerText) {

    const item =
        document.createElement("div");

    item.className =
        "history-item";


    item.innerHTML = `

        <div class="history-question">
            🗡 ${escapeHTML(questionText)}
        </div>

        <div class="history-answer">
            ${escapeHTML(
                answerText.substring(0, 100)
            )}
        </div>

    `;


    const empty =
        historyList.querySelector(".empty-history");

    if (empty) {
        empty.remove();
    }


    historyList.prepend(item);

}


// ============================================
// SECURITY
// ============================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


// ============================================
// BUTTON
// ============================================

askButton.addEventListener(
    "click",
    askGemini
);


// ============================================
// ENTER TO SEND
// ============================================

question.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            askGemini();

        }

    }
);


// ============================================
// IMAGE PREVIEW
// ============================================

const imageInput =
    document.getElementById("imageInput");

const uploadBox =
    document.querySelector(".upload-box");


imageInput.addEventListener(
    "change",
    () => {

        if (!imageInput.files.length) {
            return;
        }

        const file =
            imageInput.files[0];

        uploadBox.querySelector("strong")
            .textContent =
            file.name;

        uploadBox.querySelector("small")
            .textContent =
            "IMAGE READY";

    }
);


// ============================================
// INITIAL MESSAGE
// ============================================

setTimeout(() => {

    welcomeText.textContent =
        "Your world is ready. Ask me anything.";

}, 1800);