# Assignment 5: Hyponym and Hypernym Exploration
# 5. Write a program that takes a word as input and finds and displays its hyponyms and hypernyms using WordNet.

from nltk.corpus import wordnet
from nltk.tokenize import word_tokenize
import nltk

nltk.download('wordnet')

def get_hyponyms_hypernyms(word):
    synsets = wordnet.synsets(word)

    if not synsets:
        return [], []  # If no synsets are found, return empty lists

    # Get the most common synset for the input word
    main_synset = synsets[0]

    # Get hyponyms and hypernyms
    hyponyms = main_synset.hyponyms()
    hypernyms = main_synset.hypernyms()

    return hyponyms, hypernyms

def main():
    # Get user input
    user_input = input("Enter a word: ").lower()

    # Tokenize the user input
    user_word = word_tokenize(user_input)[0]

    # Get hyponyms and hypernyms
    hyponyms, hypernyms = get_hyponyms_hypernyms(user_word)

    # Display results
    print(f"\nHyponyms for '{user_word}':")
    if hyponyms:
        print(', '.join([hyponym.name().split('.')[0] for hyponym in hyponyms]))
    else:
        print("No hyponyms found.")

    print(f"\nHypernyms for '{user_word}':")
    if hypernyms:
        print(', '.join([hypernym.name().split('.')[0] for hypernym in hypernyms]))
    else:
        print("No hypernyms found.")

if __name__ == "__main__":
    main()
