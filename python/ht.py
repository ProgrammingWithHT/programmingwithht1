import cv2
import matplotlib.pyplot as plt
import os

#read image
img=cv2.imread("img1.png")
print('Image Width is',img.shape[1])
print('Image Height is',img.shape[0])
img1 = cv2.resize(img, (640,480))
# img_75 = cv2.resize(img, None, fx = 0.75, fy = 0.75)
id =1
filename = f'img{int(id)}.png'
dd = os.getcwd()
ddd = f'{dd}/images'
cv2.imwrite(os.path.join(ddd, filename), img1)
