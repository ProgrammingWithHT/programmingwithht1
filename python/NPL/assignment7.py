# Assignment 7: Noun Extraction
# 7. Create a program that reads a text from a file, tokenizes it into sentences and words, and extracts and displays all the nouns in the text.

import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.tag import pos_tag

nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

def read_text_from_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        text = file.read()
    return text

def extract_nouns(text):
    sentences = sent_tokenize(text)
    tokenized_sentences = [word_tokenize(sentence) for sentence in sentences]

    # Part-of-speech tagging
    pos_tags = [pos_tag(sentence) for sentence in tokenized_sentences]
    print(pos_tags)

    # Extract nouns
    nouns = [word.lower() for sentence_tags in pos_tags for word, tag in sentence_tags if tag.startswith('N')]

    return nouns

def main():
    # Get the file path containing the text
    file_path = input("Enter the file path with the text: ")

    # Read text from the file
    text = read_text_from_file(file_path)

    # Extract nouns from the text
    nouns = extract_nouns(text)

    # Display results
    print("\nNouns in the Text:")
    if nouns:
        print(', '.join(nouns))
    else:
        print("No nouns found in the text.")

if __name__ == "__main__":
    main()
