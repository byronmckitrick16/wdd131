// quick reminders for myself later
// localStorage.setItem("nameforkey", variable)
// localStorage.getItem("nameofkey")
// localStorage.setItem("name", JSON.stringify(object));
// JSON.parse(localStorage.getItem(stringToTurnToObject));
// set interval for the timer

const typingText = [
    {
        id: 1,
        text: "Technology changes faster than most people expect, shaping how we work, learn, and connect with one another across the world, yet the real challenge remains not in building smarter machines, but in learning how to stay human, creative, and kind while adapting to an ever-evolving digital landscape."
    },
    {
        id: 2,
        text: "Every great adventure begins with a small, uncertain step forward, a spark of courage that pushes someone to leave comfort behind and face the unknown, discovering along the way that the greatest rewards are rarely found at the destination but in the growth and wisdom gained during the journey."
    },
    {
        id: 3,
        text: "Writers often struggle to capture the exact rhythm of thought that dances between inspiration and hesitation, yet the magic lies in persistence, in rewriting until every word feels true, transforming vague ideas into vivid images that linger long after the final sentence has been read and remembered."
    },
    {
        id: 4,
        text: "The curious cat leapt gracefully onto the windowsill, watching raindrops slide down the glass in tiny streams, fascinated by their unpredictable paths, while the quiet hum of the refrigerator filled the kitchen and the faint scent of coffee lingered from a cup left half-finished on the counter nearby."
    }
]

let timer = null;
let time = 60;

function getRandomnumber() {
    return Math.floor(Math.random() * typingText.length)
}

function displayText() {
    const randomNum = getRandomnumber();
    const textEl = document.querySelector(".typingText");

    textEl.innerHTML = typingText[randomNum].text.split("").map(splitText).join("")
}

function splitText(text) {
    return `<span class="text">${text}</span>`
}

function getTypingInput() {
    const textInput = document.querySelector("#textInput")
    const textInputList = textInput.value.split("")
    compareTypingInput(textInputList)
}

function compareTypingInput(inputList) {
    const spans = document.querySelectorAll(".text")
    spans.forEach((span, index) => {
        const typedCharacter = inputList[index]
        if (typedCharacter == undefined) {
            span.classList.remove("correct", "incorrect")
        } else if (typedCharacter == span.textContent) {
            span.classList.add("correct")
            span.classList.remove("incorrect")
        } else {
            span.classList.add("incorrect")
            span.classList.remove("correct")
        }
    });
}

function startTimer() {
    timer ??= setInterval(returnTime, 1000)
}

function returnTime() {
    if (time != 0) {
        time = time - 1
        const timerEl = document.querySelector(".timer")
        timerEl.innerHTML = `${time} sec`
        return time
    } else {
        clearInterval(timer);
        stopTest();
    };
}

function stopTest() {
    const stopEl = document.querySelector(".stopTest")
    stopEl.classList.remove("hide")
}

function calculateWpm() {

}

function reset() {
    
}

function setLocalStorage() {

}

function getLocalStorage() {

}

displayText();

const textInputEl = document.querySelector("#textInput")
textInputEl.addEventListener("input", getTypingInput)
textInputEl.addEventListener("input", startTimer)

// const button = document.querySelector(".restart")
// button.addEventListener("click", startTimer)