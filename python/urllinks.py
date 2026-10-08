# from urllib.request import urlopen
# from bs4 import BeautifulSoup
# import ssl

# # Ignore SSL certificate errors
# ctx = ssl.create_default_context()
# ctx.check_hostname = False
# ctx.verify_mode = ssl.CERT_NONE

# url = input('Enter - ')
# html = urlopen(url, context=ctx).read()
# soup = BeautifulSoup(html, "html.parser")

# Retrieve all of the anchor tags
# tags = soup('span')  #give list of tags
# sum=0
# for tag in tags:
#     sum = sum + int(tag.contents[0])
# print(sum)


# import re
# a = ['<span>10</span>']
# for tag in a:
#     x = re.findall("[0-9]", tag)
#     print(x)

# from urllib import request
# from bs4 import BeautifulSoup
# html=request.urlopen('http://python-data.dr-chuck.net/comments_24964.html').read()
# soup = BeautifulSoup(html)
# tags=soup('span')
# sum=0
# for tag in tags:
#     sum=sum+int(tag.contents[0])
# print(sum)


# import json

# data = '''
# [
#     {
#       "name":"Patience",
#       "count":99
#     },
#     {
#       "name":"Taysia",
#       "count":96
#     },
#     {
#       "name":"Talise",
#       "count":96
#     },
#     {
#       "name":"Martina",
#       "count":91
#     },
#     {
#       "name":"Marion",
#       "count":91
#     },
#     {
#       "name":"Keiara",
#       "count":90
#     },
#     {
#       "name":"Stefano",
#       "count":90
#     },
#     {
#       "name":"Rubin",
#       "count":89
#     },
#     {
#       "name":"Saiorse",
#       "count":86
#     },
#     {
#       "name":"Shanon",
#       "count":84
#     },
#     {
#       "name":"Manon",
#       "count":83
#     },
#     {
#       "name":"Mawahib",
#       "count":83
#     },
#     {
#       "name":"Shawnpaul",
#       "count":80
#     },
#     {
#       "name":"Marios",
#       "count":79
#     },
#     {
#       "name":"Winnifred",
#       "count":79
#     },
#     {
#       "name":"Zuzia",
#       "count":78
#     },
#     {
#       "name":"Ben",
#       "count":75
#     },
#     {
#       "name":"Raya",
#       "count":75
#     },
#     {
#       "name":"Puja",
#       "count":74
#     },
#     {
#       "name":"Eliana",
#       "count":73
#     },
#     {
#       "name":"Breagha",
#       "count":72
#     },
#     {
#       "name":"Odhran",
#       "count":69
#     },
#     {
#       "name":"Morgan",
#       "count":65
#     },
#     {
#       "name":"Klara",
#       "count":65
#     },
#     {
#       "name":"Holli",
#       "count":62
#     },
#     {
#       "name":"Sylvain",
#       "count":62
#     },
#     {
#       "name":"Abril",
#       "count":61
#     },
#     {
#       "name":"Caitlinn",
#       "count":55
#     },
#     {
#       "name":"Ayan",
#       "count":46
#     },
#     {
#       "name":"Roderick",
#       "count":44
#     },
#     {
#       "name":"Rosemary",
#       "count":43
#     },
#     {
#       "name":"Bismah",
#       "count":42
#     },
#     {
#       "name":"Sukhpal",
#       "count":41
#     },
#     {
#       "name":"Libby",
#       "count":40
#     },
#     {
#       "name":"Ailie",
#       "count":39
#     },
#     {
#       "name":"Zechariah",
#       "count":26
#     },
#     {
#       "name":"Madisin",
#       "count":23
#     },
#     {
#       "name":"Tammi",
#       "count":22
#     },
#     {
#       "name":"Tira",
#       "count":20
#     },
#     {
#       "name":"Liall",
#       "count":19
#     },
#     {
#       "name":"Nancy",
#       "count":17
#     },
#     {
#       "name":"Nicoll",
#       "count":12
#     },
#     {
#       "name":"Liam",
#       "count":12
#     },
#     {
#       "name":"Sohera",
#       "count":10
#     },
#     {
#       "name":"Julie",
#       "count":10
#     },
#     {
#       "name":"Aneshka",
#       "count":7
#     },
#     {
#       "name":"Hamani",
#       "count":5
#     },
#     {
#       "name":"Kriss",
#       "count":4
#     },
#     {
#       "name":"Keane",
#       "count":4
#     },
#     {
#       "name":"Jackie",
#       "count":4
#     }
#   ]'''

# info = json.loads(data)
# print('User count:', len(info))
# sum=0
# for item in info:
#     # print('Name', item['name'])
#     # print('Id', item['count'])
#     sum += item["count"]
# count = 0
# print(sum,count)


# import urllib
# import xml.etree.ElementTree as ET

# url = input("Enter location: ")
# uh = urllib.urlopen(url)
# data = uh.read()

# tree = ET.fromstring(data)
# ans = tree.findall('comments/comment')
# count =0
# sum=0
# for item in ans:
#     x = int(item.find('count').text)
#     count = count + 1
#     sum = sum + x

# print("Count: ",count)
# print("Sum: ",sum)


# import json
# import urllib
# from urllib.parse import urlencode
# from urllib.request import urlopen


# # serviceurl = "http://python-data.dr-chuck.net/geojson?"
# serviceurl = "http://py4e-data.dr-chuck.net/json?"
# sample_address = "South Federal University"
# data_address = "Columbia University"
# address_wanted = data_address

# parameters = {"sensor": "false", "address": address_wanted}
# paramsurl = urlencode(parameters),

# queryurl = serviceurl + str(paramsurl)
# print("DATA URL: ", queryurl)

# data = urlopen(queryurl).read()
# print(data)
# jsondata = json.loads(data)
# print(jsondata)
# place_id = jsondata["results"][0]["place_id"]
# # print("PLACE ID: ", place_id)


import urllib.request
import urllib.parse
import urllib.error
import json
import ssl

api_key = False
# If you have a Google Places API key, enter it here
# api_key = 'AIzaSy___IDByT70'
# https://developers.google.com/maps/documentation/geocoding/intro

if api_key is False:
    api_key = 42
    serviceurl = 'http://py4e-data.dr-chuck.net/json?'
else:
    serviceurl = 'https://maps.googleapis.com/maps/api/geocode/json?'

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

address = input('Enter location: ')
parms = dict()
parms['address'] = address

if api_key is not False:
    parms['key'] = api_key

url = serviceurl + urllib.parse.urlencode(parms)
print('Retrieving', url)

uh = urllib.request.urlopen(url, context=ctx)
data = uh.read().decode()
print('Retrieved', len(data), 'characters')
try:
    js = json.loads(data)
except:
    js = None
id = js['results'][0]['place_id']
print('Place id ', id)
