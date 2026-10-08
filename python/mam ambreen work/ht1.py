import matplotlib.pyplot as plt
import numpy as np

x = np.random.normal(1,100,300);
plt.figure(figsize=(8,5))

plt.hist(x)
plt.title('histogram')
plt.xlabel('Values')
plt.ylabel('Density')
plt.show()