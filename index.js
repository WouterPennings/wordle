function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let words = [];

async function FetchWordsFromGithub() {
    try {
        const url1 = 'https://raw.githubusercontent.com/WouterPennings/wordle/main/words.txt?token=GHSAT0AAAAAABMPB3M7EZJU27EGIL64NAOYYTPEVPA';
        const response = await fetch(url1);
        let data = await response.text();
        words = data.split(/\r?\n/);
    }
    catch {
        console.log("Failed to fetch the words list from Github, maybe the link is old...");
    }
}

function GetWords(length) {
    const newWords = words.filter((element) => {
        return element.length === length;
    });
    return newWords;
}
  
function AppendNode(letter, type) {
    const textnode = document.createTextNode(letter);
    let node = document.createElement("h3");
    node.setAttribute("class", type);
    node.appendChild(textnode);

    document.getElementById(guessCount.toString()).appendChild(node);
}

function CreateRow() {
    let node = document.createElement("div");
    node.setAttribute("class", "guess");
    node.setAttribute("id", guessCount.toString());

    document.getElementById("guesses").appendChild(node);
}

let currentWord = "THIS IS NOT SUPPOSED TO BE THIS";
let wordLength = 5;
let guessCount = 0;

async function NewWord(wordLength) {
    if(words.length === 0) {
        await FetchWordsFromGithub();
    }
    let res = GetWords(wordLength);
    currentWord = res[RandomInt(0, res.length / 5)];
    console.log("Current word to guess: " + currentWord);
}

function Guess() {
    const word = document.getElementById("guessBox").value;
    document.getElementById("guessBox").value = "";

    // Checking if wordguess is even valid
    if(word.length !== wordLength) {
        alert(`A word with ${wordLength} characters has to be guessed`)
        return;
    }
    if(!words.includes(word)) {
        alert("Given word does not exist in my list...")
        document.getElementById("guessBox").value = ""
        return;
    }
    if(guessCount === 9) {
        alert("Oh too bad, you cant have more than 10 guesses...");
        document.getElementById("guessBox").value = "";
        window.location.reload();
    }
    // Creates a new row for the letters to be appended to
    CreateRow();

    // Doing the actual logic for checking the individual letters
    let isCorrect = true;
    for(let i = 0; i < word.length; i++) {
        if(word[i] === currentWord[i]) {
            AppendNode(word[i], "green");
        }
        else if(currentWord.includes(word[i])) {
            isCorrect = false;
            AppendNode(word[i], "blue");
        }
        else {
            isCorrect = false;
            AppendNode(word[i], "grey");
        }
    }
    if(isCorrect) {
        alert("Nice job, you just wordle'd the right word!");
        document.getElementById("guessBox").value = "";
        window.location.reload();
    }
    guessCount++;
}
