import numpy as np

# Creating 5x4 array
# array = np.arange(20).reshape(5, 4)
array = np.random.randint(20, size=(5,4))
print(array)
print()

# If no axis mentioned, then it works on the entire array
print(np.argmax(array))

# If axis=1, then it works on each row
print(np.argmax(array, axis=1)) #output: return the index of array that contain maximun element

# If axis=0, then it works on each column 
print(np.argmax(array, axis=0))  #output: return the index of array that contain maximun element