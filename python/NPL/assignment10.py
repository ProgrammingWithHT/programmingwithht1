# Assignment 10: Advanced WordNet Analysis
# 10. Develop a Python program that takes a sentence as input, performs word sense disambiguation using WordNet, and displays the selected senses for each word in the sentence.

import nltk
from nltk.corpus import wordnet
from nltk.tokenize import word_tokenize

nltk.download('punkt')
nltk.download('wordnet')

def perform_wsd(sentence):
    tokenized_sentence = word_tokenize(sentence)
    tagged_sentence = nltk.pos_tag(tokenized_sentence)

    senses = []

    for word, pos in tagged_sentence:
        synsets = wordnet.synsets(word, pos=pos)
        if synsets:
            selected_sense = synsets[0]
            senses.append((word, selected_sense.definition()))

    return senses

def main():
    # Get user input
    sentence = input("Enter a sentence for word sense disambiguation: ")

    # Perform word sense disambiguation
    word_senses = perform_wsd(sentence)

    # Display results
    print("\nSelected Senses for Each Word:")
    for word, sense in word_senses:
        print(f"{word}: {sense}")

if __name__ == "__main__":
    main()
