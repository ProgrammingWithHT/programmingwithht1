#include<iostream>
using namespace std ;

// Linear Search

int LinearSearch(int a[],int n){
    int num;
    int j = -1;
    cout << "Enter Element To Find: ";
    cin>>num;
    for (int i = 0; i < n; i++)
    {
        if(num == a[i]){
            j = i;
            return i;
        }
    }
    return j;
}

int main(){
    
    int arr[]{5,2,5,2,5,2,4,7,2,9};
    int n = sizeof(arr)/sizeof(arr[0]);
    int index = LinearSearch(arr,n);

    if (index == -1)
    {
        cout << "Value not found";
    }else{
        cout << "Value Found at index: " << index << endl;
    }

    return 0 ;
}