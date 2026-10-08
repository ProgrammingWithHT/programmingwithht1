from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# URL of the login page
url = "https://student2.gcuf.edu.pk/login.php"  # Replace with the actual URL of your login page

# User credentials (replace with your email and password)
email = "33100-4281178-9"
password = "Hhtta31631850g."

# Initialize a Selenium webdriver (choose the appropriate browser driver)
driver = webdriver.Chrome()  # Assuming you have Chrome WebDriver installed
li_xpath = "//small[contains(text(), '2018')]"

try:
    # Open the login page
    driver.get(url)

    # Wait for the email input field to be present and visible
    email_input = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "userName"))  # Replace "email" with the actual ID of the email input field
    )

    # Enter the email address
    email_input.send_keys(email)

    # Locate the password input field and enter the password
    password_input = driver.find_element(By.ID, "u_password")  # Replace "password" with the actual ID of the password input field
    password_input.send_keys(password)

    # Submit the login form (assuming it's a button click or pressing Enter)
    login_button = driver.find_element(By.XPATH, "//button[@type='submit']")  # Adjust the XPath to locate the login button
    login_button.click()

    # Alternatively, you can submit the form by pressing Enter
    # password_input.submit()

    # Wait for the login process to complete (you may need to wait for a redirect or specific element on the next page)
    WebDriverWait(driver, 200).until(
        EC.url_changes(url)
    )
    # driver.get(url)

    # body_html = driver.execute_script("return document.body.innerHTML")

    # Print or process the HTML content of the <body> element
    # print(body_html)


    # Optionally, perform additional actions after successful login
    # Example: Check for a welcome message or navigate to another page
    # li = WebDriverWait(driver, 10).until(
    #     EC.element_to_be_clickable((By.ID, "active_degree_2"))
    # )

    # Navigate to the "About" link (assuming it's a hyperlink)
    # about_link = WebDriverWait(driver, 10).until(
    #     EC.presence_of_element_located((By.LINK_TEXT, "Attendance"))  # Replace "About" with the text of the link
    # )
    # about_link.click()
    sem = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.LINK_TEXT, "QEC Ranking"))  # Replace "About" with the text of the link
    )
    sem.click()

    
    print("Login successful!")

    input("enter key")

finally:
    # Close the WebDriver session
    driver.quit()
