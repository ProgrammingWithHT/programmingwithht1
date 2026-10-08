#include<iostream>
using namespace std ;

// For Bubble sorting
void BubbleSort (int arr[]){
    for (int i = 0; i < 6; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            if (arr[j] > arr[j+1])
            {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

// For displaying Data
void Display(int arr[]){
    for (int i = 0; i < 6; i++)
    {
        cout << arr[i] ;
    }
}

int main(){
    int arr[] = {5,2,4,8,4,1};
    
    BubbleSort(arr);
    Display(arr);

    return 0 ;
}