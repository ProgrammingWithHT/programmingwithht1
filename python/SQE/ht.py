from selenium import webdriver
from selenium.webdriver.common.by import By
import re
import time
driver = webdriver.Chrome()
driver.get("http://127.0.0.1:5500/index.html")
name_value = "Muhammad Haris"
email_value = "abc@gmail.com"
password_value = "fsd12345"
age_value = "23"
name_input = driver.find_element(By.ID, "name")
email_input = driver.find_element(By.ID, "email")
password_input = driver.find_element(By.ID, "password")
age_input = driver.find_element(By.ID, "age")
age_error_message = driver.find_element(By.ID, "age-error")
name_input.send_keys(name_value)
email_input.send_keys(email_value)
password_input.send_keys(password_value)
age_input.send_keys(age_value)
validation_errors = []
if not name_input.get_attribute("value"):
    validation_errors.append("Please enter your name")
if not email_input.get_attribute("value"):
    validation_errors.append("Please enter your email")
elif not re.match(r"\S+@\S+\.\S+", email_input.get_attribute("value")):
    validation_errors.append("Please enter a valid email address")
if not password_input.get_attribute("value"):
    validation_errors.append("Please enter your password")
elif len(password_input.get_attribute("value")) < 8:
    validation_errors.append("Password must be at least 8 characters long")
try:
    age = int(age_input.get_attribute("value"))
except ValueError:
    validation_errors.append("Please enter a valid age")
    age = None
if age is not None and (age < 18 or age > 50):
    validation_errors.append("Age must be between 18 and 50")
if validation_errors:
for error in validation_errors:
    print(error)
    print("Signup failed due to validation errors")
else:
    driver.find_element(By.XPATH, "//button[@type='submit']").click()
    time.sleep(2)
print("Signup successful")

driver.quit()
