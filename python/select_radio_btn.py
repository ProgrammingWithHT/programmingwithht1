from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# URL of the webpage containing the elements
url = "http://127.0.0.1:5500/index1.html"

# Target value to find and update related radio button
# target_value = "4301"
# target_value1 = [4301,4303]
target_value1={
                "4301": [True,"presentA","absentA"],
                "4303": [False,"presentB","absentB"],
                "4311": [True,"presentC","absentC"]
            }

# Initialize a Selenium webdriver (choose the appropriate browser driver)
driver = webdriver.Chrome()  # Assuming you have Chrome WebDriver installed

try:
    # Open the webpage
    driver.get(url)

    # Wait for the relevant content to load (adjust timeout as needed)
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.TAG_NAME, "body"))
    )  # Wait for the page to load by checking the presence of <body> tag

    for target_value in target_value1.keys():
        # Find the text element containing the target value
        elements_with_value = driver.find_elements(By.XPATH, f'//*[contains(text(), "{target_value}")]')
        print(elements_with_value)
        print(target_value1[target_value][0])
        print(target_value1[target_value][1])
        if (target_value1[target_value][0] == True):
            # Iterate through found elements to update related radio button
             for element in elements_with_value:
                # Locate the related radio button directly by value attribute
                related_radio_button = element.find_element(By.XPATH, f'//input[@type="radio" and @id="{target_value1[target_value][1]}"]')
        
                # Check if the radio button is not already selected
                if not related_radio_button.is_selected():
                    print("HI")
                    # Click the radio button to select it
                    related_radio_button.click()

                    # Optionally, print a message indicating the update
                    print(f"Radio button updated for value: {target_value}")
        elif (target_value1[target_value][0] == False):
            # Iterate through found elements to update related radio button
            for element in elements_with_value:
                # Locate the related radio button directly by value attribute
                related_radio_button = element.find_element(By.XPATH, f'//input[@type="radio" and @id="{target_value1[target_value][2]}"]')
        
                # Check if the radio button is not already selected
                if not related_radio_button.is_selected():
                    # Click the radio button to select it
                    related_radio_button.click()

                    # Optionally, print a message indicating the update
                    print(f"Radio button updated for value: {target_value}")

            

    input("enter key")

finally:
    # Close the WebDriver session
    driver.quit()
