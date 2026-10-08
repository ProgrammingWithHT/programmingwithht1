import nltk
import re

nltk.download('punkt')

# Sample list of country names
countries = ["United States", "Canada", "United Kingdom", "Germany", "France", ...]

# Sample text
text = "I visited Canada and the United States last summer."

# Tokenize the text
from nltk.tokenize import word_tokenize
words = word_tokenize(text)

# Create a regular expression pattern to match country names
country_pattern = re.compile(r'\b(?:' + '|'.join(countries) + r')\b', re.IGNORECASE)

# Search for country names in the text
matched_countries = [match.group(0) for word in words for match in [country_pattern.search(word)] if match]

# Remove duplicates (optional)
unique_countries = list(set(matched_countries))

print(unique_countries)