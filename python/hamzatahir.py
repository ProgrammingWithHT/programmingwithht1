import pandas as pd
import matplotlib.pyplot as plt  

ht = pd.read_csv("./hamzadata.csv")
mList  = ht ['month_number'].tolist()
# print(mList)  
tpSalesData = ht ['toothpaste'].tolist()
print(tpSalesData)
plt.subplot(1,2,1)
plt.scatter(mList, tpSalesData)

plt.xticks(mList)

profitList = ht ['total_profit'].tolist()
labels = ['low', 'average', 'Good', 'Best']

profit_range = [160000, 171000, 200100, 226000, 260000, 311100, 415550]
plt.subplot(1,2,2)
plt.hist(profitList, profit_range)

plt.show()


