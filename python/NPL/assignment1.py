# # # Assignment NO. 1 NLTK Basics
# # # Write a Python program using NLTK to tokenize a given text into sentences and words. Provide examples for testing.

# # import nltk
# # from nltk.tokenize import sent_tokenize, word_tokenize

# # nltk.download('punkt')  # Download the Punkt tokenizer models

# # def tokenize_text(text):
# #     # Tokenize into sentences
# #     sentences = sent_tokenize(text)

# #     # Tokenize each sentence into words
# #     tokenized_text = [word_tokenize(sentence) for sentence in sentences]
    
# #     return sentences, tokenized_text

# # # Example text for testing
# # example_text = "This is an example sentence. And here is another one!"

# # # Tokenize the example text
# # sentences, words = tokenize_text(example_text)

# # # Print the results
# # print("Original Text:")
# # print(example_text)
# # print("\nTokenized Sentences:")
# # print(sentences)
# # print("\nTokenized Words:")
# # print(words)


# # Tokenization: NLTK can be used to split text into words or sentences.
# from nltk.tokenize import word_tokenize, sent_tokenize
# # text = "NLTK is a powerful library for natural language processing."
# # words = word_tokenize(text)
# # sentences = sent_tokenize(text)
# # print(words)
# # print(sentences)


# # # Part-of-Speech Tagging:
# from nltk import pos_tag
# words = word_tokenize("my name is hamza")
# tags = pos_tag(words)
# for word,tag in tags:
#     print('Original Word: ',word,' Part-of-speech tags is: ',tag)
# print(tags)

# write a python function to tokenize a given text into  individual words. your function should remove any punctuation marks and consider each word as a token. Demostrate the function with a sample text

# POS Tagging in NLTK is a process to mark up the words in text format for a particular part of a speech based on its definition and context. POS tagger is used to assign grammatical information of each word of the sentence

# # # NLTK provides tools for stemming and lemmatization, which reduce words to their base or root forms.
# # from nltk.stem import PorterStemmer, WordNetLemmatizer
# # stemmer = PorterStemmer()
# # lemmatizer = WordNetLemmatizer()
# # word = "running"
# # stemmed_word = stemmer.stem(word)
# # lemmatized_word = lemmatizer.lemmatize(word)
# # print(stemmed_word)
# # print(lemmatized_word)
# # output: run
# #         running


# # # You can perform basic sentiment analysis using NLTK with the help of pre-trained models or lexicons.
# # from nltk.sentiment import SentimentIntensityAnalyzer
# # text = "NLTK is awesome!"
# # sia = SentimentIntensityAnalyzer()
# # sentiment = sia.polarity_scores(text)
# # print(sentiment)


# 1. Tokenization:
# • Definition: Tokenization is the process of breaking a text into individual 
# units, called tokens. In English, these tokens can be words, phrases, or 
# other meaningful elements.
# • Purpose: Tokenization is a fundamental step in natural language 
# processing (NLP). It helps in preparing text data for analysis by splitting it 
# into manageable and meaningful units.
# • Example: The sentence "Tokenization is essential for NLP" would be 
# tokenized into ["Tokenization", "is", "essential", "for", "NLP"].
# 2. Frequency in NLP:
# • Definition: Frequency refers to the number of times a particular term or 
# token appears in a given text or corpus.
# • Purpose: Frequency analysis helps in understanding the importance of 
# words in a document or corpus. It is often used for tasks like keyword 
# extraction, identifying important terms, or preparing data for machine 
# learning models.
# • Example: In a document, the word "NLP" appears 10 times, and 
# "Tokenization" appears 5 times.
# 3. Named Entity Recognition (NER):
# • Definition: Named Entity Recognition is an NLP task that involves 
# identifying and classifying named entities (e.g., names of people, 
# organizations, locations) in text.
# • Purpose: NER is used to extract structured information from unstructured 
# text, enabling systems to understand the relationships and context in 
# which named entities appear.
# • Example: In the sentence "Apple Inc. is headquartered in Cupertino, 
# California," NER would identify "Apple Inc." as an organization and 
# "Cupertino, California" as a location.
# 4. NLTK (Natural Language Toolkit):
# • Description: NLTK is a powerful Python library for working with human 
# language data. It provides easy-to-use interfaces to over 50 corpora and 
# lexical resources, such as WordNet, along with a suite of text processing 
# libraries for classification, tokenization, stemming, tagging, parsing, and 
# more.
# • Purpose: NLTK is widely used for educational and research purposes in 
# the field of NLP. It simplifies complex NLP tasks and serves as a valuable 
# resource for studying natural language.
# 5. Spacy Library:
# • Description: spaCy is an open-source library for advanced natural 
# language processing in Python. It is designed for production use and is 
# known for its efficiency and ease of use.
# • Purpose: spaCy provides pre-trained models for tasks like tokenization, 
# part-of-speech tagging, named entity recognition, and more. It is often 
# used in commercial applications and research projects where performance 
# and accuracy are crucial.


import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import string

nltk.download('punkt')
nltk.download('stopwords')

def tokenize_text(text):
    # Remove punctuation
    text = text.translate(str.maketrans('', '', string.punctuation))
    
    # Tokenize the text into words
    words = word_tokenize(text)
    
    # Remove stopwords
    stop_words = set(stopwords.words('english'))
    words = [word for word in words if word.lower() not in stop_words]
    
    return words

# Sample text
sample_text = "Hello, this is a sample text. It includes punctuation marks!"

# Tokenize the sample text
tokenized_words = tokenize_text(sample_text)

# Display the result
print("Original Text:")
print(sample_text)
print("\nTokenized Words:")
print(tokenized_words)
