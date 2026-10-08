import numpy as np

array = np.array([
    [3, 7, 1],
    [10, 3, 2],
    [5, 6, 7]
])
print(array)
print()

# Sort the whole array
print(np.sort(array, axis=None))

# Sort along each row
print(np.sort(array, axis=1))

# Sort along each column
print(np.sort(array, axis=0))


#argSort in Numpy

array1 = np.array([28, 13, 45, 12, 4, 8, 0])
print(array1)

print(np.argsort(array1))  #return the sorting indexs like first we select index 6 and place in zero index of array and than select the four index of array and paste at first index of array and so on.