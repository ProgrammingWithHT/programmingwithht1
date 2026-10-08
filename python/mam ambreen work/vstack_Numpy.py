# How to add rows and columns in NumPy array?


# Adding Row using numpy.vstack( )
import numpy as np

array = np.array([
    [3, 2, 8],
    [4, 12, 34],
    [23, 12, 67]
])

newRow = np.array([2, 1, 7])
newArray = np.vstack((array, newRow))

print(newArray)


# Adding Column using numpy.column_stack( )
array1 = np.array([
    [3, 2, 8],
    [4, 12, 34],
    [23, 12, 67]
])

newColumn = np.array([2, 1, 8])
newArray = np.column_stack((array, newColumn))
print(newArray)