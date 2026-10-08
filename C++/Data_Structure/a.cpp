#include<iostream>
using namespace std ;

int partition(int arr[],int start,int end){
    int pivot = end;
    int partitionindex = start;
    for (int i = start; i < end; i++)
    {
        if(arr[i] <= pivot){
            swap(arr[i],arr[partitionindex]);
            partitionindex++;
        }
    }
    swap(arr[partitionindex],arr[end]);
    return partitionindex;
}

void QuickSort(int arr[],int start,int end){
    if(start<end){
        int partitonIndex = partition(arr,start,end);
        QuickSort(arr,start,partitonIndex-1);
        QuickSort(arr,partitonIndex+1,end);
    }
}

void TowwerofHanio(int n,char start,char aux,char end){
    if(n>0){
        TowwerofHanio(n-1,start,end,aux);
        cout << start << end << endl;
        TowwerofHanio(n-1,aux,start,end);
    }
}

int main(){
    
    TowwerofHanio(3,'A','B','C');

    // int arr[]{6,1,5,3,4};
    // int size = sizeof(arr)/sizeof(arr[0]);
    // QuickSort(arr,0,size-1);

    // for (int i = 0; i < size; i++)
    // {
    //     cout << arr[i] << " ";
    // }
    

    return 0 ;
}