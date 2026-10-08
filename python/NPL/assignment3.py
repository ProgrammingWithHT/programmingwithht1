# Assignment NO. 3 WordNet Exploration
# Create a Python program that allows users to input a word, and then find and display its synonyms and antonyms using WordNet.

from nltk.corpus import wordnet
from nltk.tokenize import word_tokenize
import nltk

nltk.download('wordnet')

def get_synonyms_antonyms(word):
    synonyms = []
    antonyms = []

    for syn in wordnet.synsets(word):
        for lemma in syn.lemmas():
            synonyms.append(lemma.name())
            if lemma.antonyms():
                antonyms.append(lemma.antonyms()[0].name())

    return set(synonyms), set(antonyms)

def main():
    # Get user input
    user_input = input("Enter a word: ").lower()

    # Tokenize the user input
    user_word = word_tokenize(user_input)[0]

    # Get synonyms and antonyms
    synonyms, antonyms = get_synonyms_antonyms(user_word)

    # Display results
    print(f"\nSynonyms for '{user_word}':")
    if synonyms:
        print(', '.join(synonyms))
    else:
        print("No synonyms found.")

    print(f"\nAntonyms for '{user_word}':")
    if antonyms:
        print(', '.join(antonyms))
    else:
        print("No antonyms found.")

if __name__ == "__main__":
    main()
