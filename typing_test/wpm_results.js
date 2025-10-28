function getPreviousWpm() {
    // grap previous wpm and date from local storage to put into a table
    const tableEl = document.querySelector(".tableBody")
    let timesSet = localStorage.getItem("timesSet")
    let i = 0
    let bestWpm = 0;
    while (i < timesSet) {
        i += 1
        const wpm = localStorage.getItem(`wpm${i}`);
        const date = localStorage.getItem(`date${i}`);
        const html = tableHtml(wpm, date);
        tableEl.innerHTML += html

        bestWpm = computeBestWpm(wpm, bestWpm)
    }
    const personalBestEl = document.querySelector(".personalBest")
    personalBestEl.textContent = `${bestWpm} Wpm`
}

function tableHtml(wpm, date) {
    return `<tr> <td>${date}</td> <td>${Math.round(wpm)} Wpm</td> </tr>`
}

function computeBestWpm(wpm, bestWpm) {
    // find the best wpm
    if (wpm > bestWpm) {
        return wpm
    } else {
        return bestWpm
    }
}

getPreviousWpm();