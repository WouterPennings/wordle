# Wordle

A simple Wordl clone, nothing special. Go to: https://wouterpennings.github.io/wordle/ for a quick demo.

## Game Play

When landing on the page you fill in 5 letter words in the textbox below and press `Guess`. All the letters of the just submitted word get a color:
- `Grey`: Letter is not in the word
- `Green`: Letter is in the word, but not in the correct place
- `Red`: Letter is in the word on the correct place

If you get the word in 8 guesses you win!, otherwise you lose. Your page will look something like this:

![image](https://user-images.githubusercontent.com/58933609/166345650-cee46404-45ad-4475-9e44-a263e1df853d.png)

After every game (or in the middle if you want to restart) you need to restart you game, you do that by pressing the red button.

## Word Filtering

The words used for my Wordle game come from this [repository](https://gist.github.com/h3xx/1976236). It is a (sorted) list of the top 100.000 words used in the english language, in reality it is a bit less. In my opinion however, the list is a bit "dirty", lots of double words, weird quirks in the formatting, etc.

To solve this problem, I created a Python script that cleans the list and writes the output to `words.txt`. The file is called: `filter.py`, it does these things:

 - Removes empty lines
 - Removes duplicates
 - Removes everything that starts with `#!`
 - Removes everything that is not alphabetical, removing things like: `'-`

This solves 99% of all problems, but not everything. I plan on combining multiple sources into one list and adding some more filter for letters like `á` for example.
