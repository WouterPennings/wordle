function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let words = [
    "would",
    "could",
    "foods",
    "ideas",
    "words",
    "brids",
    "stick",
    "hands",
    "music",
    "movie",
    "usual",
    "click",
    "below",
    "quirk",
    "This is not allowed",
];

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
    console.log(node)
    document.getElementById("guesses").appendChild(node);
}

let currentWord = "";
let wordLength = 5;
let guessCount = 0;

function NewWord(wordLength) {
    currentWord = GetWords(wordLength)[RandomInt(0, words.length)]
    console.log("Current Word: " + currentWord)
}

function Guess() {
    const word = document.getElementById("guessBox").value;
    document.getElementById("guessBox").value = ""
    console.log(word)
    // Checking if wordguess is even valid
    if(word.length !== wordLength) {
        alert(`A word with ${wordLength} characters has to be guessed`)
        return 
    }
    // Creates a new row for the letters to be appended to
    CreateRow()

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
        alert("Nice job, you just wordle'd the right word!")
        document.getElementById("guessBox").value = ""
        window.location.reload();
    }
    guessCount++;
}
