print("Hello Hamza")
"This is python lab one"
"""
    MY NAME IS HAMZA
"""
print('first part',"second part")
print('one line',end=' kasa ho ap')
print('hamza\ntahir\tSE')
a = 10
print(type(a))
print(10+5.5)


# SET 
# S = set()
L = [1,2,3,4,5]
S = set(L)
print(S)
S.add(1)

S.remove(3)

S.union({1,2,3})
S.intersection({6,3,10})
print(len(S))

print(type(S))

print(min(S))
print(max(S))


# program to print odd numbers from 1 to 10

num = 0

while num < 10:
    num += 1
    
    if (num % 2) == 0:
        continue

    print(num)


# program to find first 5 multiples of 6

i = 1

while i <= 10:
    print('6 * ',(i), '=',6 * i)

    if i >= 5:
        break
    
    i = i + 1