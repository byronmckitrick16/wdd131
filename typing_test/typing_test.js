const typingText = [
    "Technology changes faster than most people expect, shaping how we work, learn, and connect with one another across the world, yet the real challenge remains not in building smarter machines, but in learning how to stay human, creative, and kind while adapting to an ever-evolving digital landscape.",
    "Every great adventure begins with a small, uncertain step forward, a spark of courage that pushes someone to leave comfort behind and face the unknown, discovering along the way that the greatest rewards are rarely found at the destination but in the growth and wisdom gained during the journey.",
    "Writers often struggle to capture the exact rhythm of thought that dances between inspiration and hesitation, yet the magic lies in persistence, in rewriting until every word feels true, transforming vague ideas into vivid images that linger long after the final sentence has been read and remembered.",
    "The curious cat leapt gracefully onto the windowsill, watching raindrops slide down the glass in tiny streams, fascinated by their unpredictable paths, while the quiet hum of the refrigerator filled the kitchen and the faint scent of coffee lingered from a cup left half-finished on the counter nearby.",
    "As the train rumbled steadily across the countryside, fields of golden wheat flashed by the window, their movement almost hypnotic, and passengers sat quietly reading, listening to music, or staring thoughtfully at the endless horizon, each lost in their own stories carried along by the rhythm of the rails.",
    "In a small seaside town, waves crashed against the worn rocks with steady determination, sending cool mist into the air as gulls circled overhead, calling sharply to one another, while fishermen mended their nets nearby, their weathered hands moving with practiced patience learned over countless seasons on the water.",
    "Creativity often hides in quiet moments, waiting patiently beneath layers of routine and distraction, until curiosity awakens it again with a single question or observation, reminding us that even the most ordinary day can hold unexpected sparks of wonder, insight, or beauty if we're willing to slow down and notice.",
    "The library smelled faintly of paper, dust, and imagination, a timeless mixture that made every visitor walk a little softer, as though afraid to disturb the stories resting on the shelves, waiting patiently to be discovered, their words ready to transport any reader to distant worlds beyond the present moment."
]

let timer = null;
let time = 60;
let randomNum;

function getRandomnumber() {
    // get a random number for the number of strings in the list above
    return Math.floor(Math.random() * typingText.length)
}

function displayText() {
    // take the randomly chosen string a display for the user
    randomNum = getRandomnumber();
    const textEl = document.querySelector(".typingText");

    textEl.innerHTML = typingText[randomNum].split("").map(splitText).join("")
}

function splitText(text) {
    return `<span class="text">${text}</span>`
}

function getTypingInput() {
    // get the input from the user
    const textInput = document.querySelector("#textInput")
    const textInputList = textInput.value.split("")
    compareTypingInput(textInputList)
}

function compareTypingInput(inputList) {
    // loop to compare what the user inputs to the text given to them
    const spans = document.querySelectorAll(".text")
    spans.forEach((span, index) => {
        const typedCharacter = inputList[index]

        if (!typedCharacter) {
            span.classList.remove("correct", "incorrect")
        } else if (typedCharacter == span.textContent) {
            span.classList.add("correct")
            span.classList.remove("incorrect")
        } else {
            span.classList.add("incorrect")
            span.classList.remove("correct")
        }
    });
    if (inputList.length >= spans.length) {
        stopTest();
    }
}

function startTimer() {
    timer ??= setInterval(returnTime, 1000)
}

function returnTime() {
    // return the amount of time that they have left starting at 60 sec
    if (time > 0) {
        time = time - 1
        const timerEl = document.querySelector(".timer")
        timerEl.innerHTML = `${time} sec`
        return time
    } 
    else {
        stopTest();
    };
}

function stopTest() {
    // stop the timer from going and stop the user from being able to type anything into the input box
    clearInterval(timer);

    const wpm = calculateWpm();

    const stopEl = document.querySelector(".stopTest")
    stopEl.classList.remove("hide")
    stopEl.innerHTML = `You got a ${Math.round(wpm)} WPM`

    const inputEl = document.querySelector("#textInput")
    inputEl.disabled = true

    setPerviousWpm(wpm);
}

function calculateWpm() {
    // take the number of characters typed minus the erros and get the number of words typed in the time it took them
    const wordsTyped = textInput.value.split("")
    const numberChar = wordsTyped.length
    const errorNum = calcualteErrors()
    const numberWords = (numberChar - errorNum) / 5

    if (time != 0) {
        const elapsedTime = (60 - time) / 60;
        const wpm = numberWords / elapsedTime
        return wpm
    } else {
        const wpm = numberWords
        return wpm
    };
}

function calcualteErrors() {
    // find the number of errors that the user made while typing
    const spans = document.querySelectorAll(".text")
    let errorNum = 0

    spans.forEach((span) => {
        if (span.classList.contains("incorrect")) {
            errorNum += 1
        }
    })
    return errorNum
}

function reset() {
    // reset everything so the user can take the test again
    clearInterval(timer);
    timer = null;
    time = 60;

    const stopEl = document.querySelector(".stopTest")
    stopEl.classList.add("hide")

    const inputEl = document.querySelector("#textInput")
    inputEl.disabled = false
    inputEl.value = ""

    const timerEl = document.querySelector(".timer")
    timerEl.innerHTML = "60 sec"

    const spans = document.querySelectorAll(".text")
    spans.forEach((span) => {
        span.classList.remove("correct", "incorrect")
    });

    randomNum = getRandomnumber();
    const textEl = document.querySelector(".typingText");
    textEl.innerHTML = typingText[randomNum].text.split("").map(splitText).join("")
}

function setPerviousWpm(wpm) {
    // put the wpm and date into local storage
    let timesSet = localStorage.getItem("timesSet")
    if (!timesSet) {
        timesSet = 1;
    } else {
        timesSet = Number(timesSet)
        timesSet += 1
    }
    localStorage.setItem(`wpm${timesSet}`, wpm);
    localStorage.setItem("timesSet", timesSet);

    const date = new Date();
    let monthDate = date.getMonth();
    monthDate += 1
    const dayDate = date.getDate();
    const fullDate = `${monthDate}/${dayDate}`
    localStorage.setItem(`date${timesSet}`, fullDate)
}

displayText();

const textInputEl = document.querySelector("#textInput")
textInputEl.addEventListener("input", getTypingInput)
textInputEl.addEventListener("input", startTimer)

const button = document.querySelector(".restart")
button.addEventListener("click", reset)