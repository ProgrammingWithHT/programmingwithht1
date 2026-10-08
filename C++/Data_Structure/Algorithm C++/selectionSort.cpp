#include<iostream>
using namespace std ;

void selectionSort(int arr[]){
    int min = 0;
    for (int i = 0; i < 5; i++)
    {
        min = i;    
        for (int j = i+1; j < 6; j++)
        {
            if (arr[min] > arr[j])
            {
                min = j;
            }
            
        }

        if (min != i)
        {
            int temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
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
    
    int arr[]{5,2,4,8,3,1};
    selectionSort(arr);
    Display(arr);    

    return 0 ;
}