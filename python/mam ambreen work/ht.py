import numpy as np 
import matplotlib.pyplot as plt
import pandas as pd

cols = ['CreditScore','Geography','Gender','Age','Tenure','Balance','NumOfProducts','IsActiveMember']

churn = pd.read_csv('Churn_Modelling.csv',usecols=cols)

churn.head()
print(churn)
plt.figure(figsize=(8,5))
plt.title('Number of Customars',fontsize=14)

plt.bar(x=churn['Geography'].value_counts().values,height=churn.Geography.value_counts().values)

plt.xticks(fontsize=12,rotation=45)
plt.yticks(ticks=np.arange(0,7000,1000))
plt.show()

