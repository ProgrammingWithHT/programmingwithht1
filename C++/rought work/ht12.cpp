#include<iostream>
using namespace std ;



int main(){
  int n;
  cin >> n;
  int count = 0;
  for (int i = 1; i <= n; i++)
  {
    for (int j = 1; j <= n; j = j + i)
    {
      count +=1;
    }
    cout << endl;
    
  }
  cout << count << endl;
  


  return 0 ;
}