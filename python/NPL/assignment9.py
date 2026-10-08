# Assignment 9: Movie Review Sentiment Analysis
# 9. Use NLTK's Movie Reviews Corpus to perform sentiment analysis. Write a program that calculates and displays the overall sentiment (positive or negative) of a given text input.

import nltk
from nltk.sentiment import SentimentIntensityAnalyzer

nltk.download('vader_lexicon')

def analyze_sentiment(text):
    sia = SentimentIntensityAnalyzer()
    sentiment_score = sia.polarity_scores(text)['compound']

    if sentiment_score >= 0.05:
        return "Positive"
    elif sentiment_score <= -0.05:
        return "Negative"
    else:
        return "Neutral"

def main():
    # Get user input
    text = input("Enter the text for sentiment analysis: ")

    # Analyze sentiment
    sentiment = analyze_sentiment(text)

    # Display result
    print(f"\nOverall Sentiment: {sentiment}")

if __name__ == "__main__":
    main()
