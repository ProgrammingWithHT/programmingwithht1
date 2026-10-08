# # Assignment 6: Separating Male and Female Names
# # 6. Implement a Python program that reads a list of names from a file, separates them into male and female names using NLTK's Names Corpus, and displays the counts for each category.
# import nltk

# nltk.download('names')

# def read_names_from_file(file_path):
#     with open(file_path, 'r') as file:
#         names = [line.strip() for line in file.readlines()]
#     return names

# def categorize_names(names):
#     male_names = set(nltk.corpus.names.words('male.txt'))
#     female_names = set(nltk.corpus.names.words('female.txt'))

#     male_count = sum(name.lower() in male_names for name in names)
#     female_count = sum(name.lower() in female_names for name in names)

#     return male_count, female_count

# def main():
#     # Get the file path containing the list of names
#     file_path = input("Enter the file path with the list of names: ")

#     # Read names from the file
#     names = read_names_from_file(file_path)

#     # Categorize names into male and female
#     male_count, female_count = categorize_names(names)

#     # Display results
#     print(f"\nNumber of Male Names: {male_count}")
#     print(f"Number of Female Names: {female_count}")

# if __name__ == "__main__":
#     main()

# pip install spacy
# python -m spacy download en_core_web_sm



import spacy

# Load the pre-trained English NER model
nlp = spacy.load("en_core_web_sm")

# Sample text
sample_text = "Apple Inc. is planning to open a new store in Paris. Tim Cook is the CEO."

# Process the text with SpaCy NER model
doc = nlp(sample_text)

# Display original text with highlighted named entities and their labels
print("Original Text:")
print(sample_text)

print("\nNamed Entities:")
for ent in doc.ents:
    print(f"{ent.text} - {ent.label_}")



