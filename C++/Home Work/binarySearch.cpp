#include<iostream>
using namespace std ;

int binarySearch(int arr[]){
    int start = 0;
    int end = 10;
    int mid = 0;
    int index=-1;
    int n;
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

    int arr[]{1,2,3,4,5,6,7,8,9,10};
    int index = binarySearch(arr);

    if (index == -1)
    {
        cout << "Value not found";
    }else{
        cout << "Value Found at index: " << index << endl;
    }
    
    


    return 0 ;
}

