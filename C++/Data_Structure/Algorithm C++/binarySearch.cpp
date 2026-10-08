#include<iostream>
using namespace std ;

// Binary Search Algorithm

int binarySearch(int arr[],int n1){
    int start = 0;
    int end = n1;
    int mid = 0;
    int index=-1;
    int n;
    cout << "Enter The Element To Find: ";
    cin>>n;

    while (start <= end)
    {
        mid = (start+end)/2;
        if (arr[mid] == n)
        {
            index = mid;
            break;
        }else if (n < arr[mid]){
            end = mid -1;
        }else{
            start = mid +1;
        }
    }
    return index;
}

int main(){

    int arr[] = {1,2,3,4,5};
    int n = sizeof(arr)/sizeof(arr[0]);
    int index = binarySearch(arr,n);

    if (index == -1)
    {
        cout << "Value not found";
    }else{
        cout << "Value Found at index: " << index << endl;
    }
    
    return 0 ;
}

