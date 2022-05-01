words = []

with open('words/words_raw.txt') as f:
    i = 0
    for line in f:
        i += 1
        line = line[:-1].lower()
        if len(line) > 0 and not line in words and not line.startswith("#\!") and line.isalpha():
            words.append(line)
        # The loop crashes after about 75000, do not know why, something for later
        if i > 74000:
            break

string = ""
for w in words:
    string += w + "\n"

with open("words.txt", "w") as f:
    n = f.write(string)
    f.close()