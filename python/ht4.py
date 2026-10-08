from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Launch the web browser (make sure you have the appropriate driver installed)
driver = webdriver.Chrome()  # Change this to the appropriate driver (e.g., Firefox, Safari, etc.)

a = [4301,4311]

try:
    url = 'http://127.0.0.1:5500/index.html'  # URL of the form page

    # Open the webpage
    driver.get(url)
    

    button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "showAttendance"))
    )

    # Click the button
    button.click()

    # Wait for the radio button element to be present (adjust timeout as needed)
    radio_button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "presentA"))
    )
    print(radio_button)

    # Click the radio button (or perform other actions)
    radio_button.click()

    # Alternatively, you can interact with radio buttons by their attributes:
    # Example: radio_button = driver.find_element(By.XPATH, '//input[@type="radio" and @value="option_value"]')
    # Then, perform radio_button.click()

    # Optionally, you can retrieve the state of the radio button after clicking
    if radio_button.is_selected():
        print("Radio button selected successfully!")
    else:
        print("Radio button selection failed.")

    # Optionally, wait for a few seconds to see the result
    driver.implicitly_wait(3)
    input("Waith...")
finally:
    # Close the web browser
    driver.quit()
