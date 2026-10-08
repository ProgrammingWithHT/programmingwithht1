# import pandas as pd
# name = pd.Series(['hamza','qasim','ali'])
# age = pd.Series([11,12,32])
# designation = pd.Series(['manager','Clerk','Accountant'])
# d1 = {'name': name,'Age': age,'Designation':designation}
# d1 = {"A":[1,2,3,4],"B": [4,5,6,7],"C":[11,12,14,13]}
# df = pd.DataFrame(d1)
# print(df)
# df1 = df.sort_values(by='Age')
# print(df1)

# import pandas as pd
# d1 = {"A":[1,12,3,4],"B": [4,5,16,7],"C":[11,12,13,14]}
# df = pd.DataFrame(d1)
# print(df)
# print(df.idxmax(axis=0))

# from pandas import DataFrame
# import pandas as pd

# d = {'one':[2,3,1,4,5],
#      'two':[5,4,3,2,1],
#      'letter':['a','a','b','b','c']}

# df = pd.DataFrame(d)

# test = df.sort(['one'], ascending=[False])
# test = df.sort_values(['one'], ascending=[True])
# test = df.sort_values(['two'], ascending=[True])
# test = df.sort_values(['letter'], ascending=[True])
#  test = df.sort_values(['one'], ascending=[0])
# print(test)

# import pandas as pd

# df = pd.read_csv('data.csv')

# print(df)



# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.options import Options
# import time

# def test_eight_components():
#     chrome_options = Options()
#     chrome_options.add_experimental_option("detach", True)
#     driver = webdriver.Chrome(options=chrome_options)
#     driver.maximize_window()
#     driver.get("https://www.selenium.dev/selenium/web/web-form.html")

#     title = driver.title
#     assert title == "Web form"

#     driver.implicitly_wait(0.5)

#     text_box = driver.find_element(by=By.NAME, value="my-text")
#     submit_button = driver.find_element(by=By.CSS_SELECTOR, value="button")

#     text_box.send_keys("hamza")
#     # time.sleep(2)
#     submit_button.click()

#     message = driver.find_element(by=By.ID, value="message")
#     value = message.text
#     assert value == "Received!"

# # if __name__ == '__main__':
# test_eight_components()

