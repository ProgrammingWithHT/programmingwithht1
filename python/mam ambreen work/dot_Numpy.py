# How to multiply two matrices in a single line using NumPy?

import numpy as np

matrix1 = [
    [3, 4, 2],
    [5, 1, 8],
    [3, 1, 9]
]

matrix2 = [
    [3, 7, 5],
    [2, 9, 8],
    [1, 5, 8]
]

result = np.dot(matrix1, matrix2)
print(result)