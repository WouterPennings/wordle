# Wordle

A simple Wordl clone, nothing special. Go to: https://wouterpennings.github.io/wordle/ for a quick demo.

## Word Filtering

The words used for my Wordle game come from this [repository](https://gist.github.com/h3xx/1976236). It is a (sorted) list of the top 100.000 words used in the english language, in reality it is a bit less. In my opinion however, the list is a bit "dirty", lots of double words, weird quirks in the formatting, etc.

To solve this problem, I created a Python script that cleans the list and writes the output to `words.txt`. The file is called: `filter.py`, it does these things:

 - Removes empty lines
 - Removes duplicates
 - Removes everything that starts with `#!`
 - Removes everything that is not alphabetical, removing things like: `'-`

This solves 99% of all problems, but not everything. I plan on combining multiple sources into one list and adding some more filter for letters like `á` for example.