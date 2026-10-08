# Assignment No. 2 Collecting Data from Corpora
# Choose a specific book from NLTK's Gutenberg Corpus and write a program to extract and display the most common words in that book, excluding stopwords.
import nltk
from nltk.corpus import gutenberg
from nltk.probability import FreqDist
from nltk.corpus import stopwords
import matplotlib.pyplot as plt

nltk.download('gutenberg')
nltk.download('stopwords')

def plot_frequency_distribution(freq_dist, num_words=20):
    freq_dist.plot(num_words, cumulative=False)
    plt.show()

def most_common_words(book_text, num_words=20):
    # Tokenize the text and convert to lowercase
    words = [word.lower() for word in nltk.word_tokenize(book_text) if word.isalpha()]

    # Remove stopwords
    stop_words = set(stopwords.words('english'))
    words = [word for word in words if word not in stop_words]

    # Calculate frequency distribution
    freq_dist = FreqDist(words)
    print(freq_dist)

    # Display the most common words
    print(f"Most Common Words (excluding stopwords, top {num_words}):")
    print(freq_dist.most_common(num_words))

    # Plot the frequency distribution
    plot_frequency_distribution(freq_dist, num_words)

# Load "Moby Dick" text from NLTK's Gutenberg Corpus
moby_dick_text = gutenberg.raw('melville-moby_dick.txt')

# Extract and display most common words
most_common_words(moby_dick_text)
