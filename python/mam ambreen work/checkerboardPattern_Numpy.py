# How to print the checkerboard pattern of nxn using NumPy?

import numpy as np

n = 8

# Create a nxn matrix filled with 0
matrix = np.zeros((n, n), dtype=int)

# fill 1 with alternate rows and column
matrix[::2, 1::2] = 1
# matrix[1::2, ::2] = 1

# Print the checkerboard pattern
for i in range(n):
    for j in range(n):
        print(matrix[i][j], end=" ")
    print()


# Below Problem help us to understand double colons ::

# number_list = [2,4,6,8,10,12]
# print(number_list[::2])
# # [2, 6, 10]

# number_list = [2,4,6,8,10,12]
# print(number_list[1::2])
# # [4, 8, 12]

# [colums_leave :: rows_leave]
# [
#     [1,2,3,4,5,6],
#     [7,8,9,10,11,12],
#     [13,14,15,16,17,18],
#     [20,21,22,23,24,25],
#     [26,27,28,29,30,31]
# ]
# [0::2, 1::2]
# output: 
# [
#     [2,4,6],
#     [14,16,17],
#     [27,29,31]
# ]