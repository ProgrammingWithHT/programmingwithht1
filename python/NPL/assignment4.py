# Assignment NO. 4 Word Similarity
# Develop a Python program that calculates the Wu-Palmer Similarity between two user-provided words using WordNet. Display the similarity score.
import nltk
from nltk.corpus import wordnet
from nltk.wsd import lesk

# Download WordNet data (if not already downloaded)
nltk.download("wordnet")

# # Define two words
# word1 = "dog"
# word2 = "cat"
# Get user input for two words
word1 = input("Enter the first word: ").lower()
word2 = input("Enter the second word: ").lower()

# Get the most common synset for each word using Lesk algorithm
synset1 = lesk(word1, word2)
synset2 = lesk(word2, word1)

if synset1 and synset2:
    # Calculate Wu-Palmer Similarity
    similarity = synset1.wup_similarity(synset2)
    if similarity is not None:
        print(f"Similarity between '{word1}' and '{word2}': {similarity:.2f}")
    else:
        print("No similarity found.")
else:
    print("Could not find synsets for both words.")