#include<iostream>
using namespace std ;

void QuickSort(int a[],int start,int end);
int Partition(int a[],int start, int end);
void swap1(int &a, int &b){
    int temp = a;a=b;b=temp;
}

void print(int a[],int n){
    for (int i = 0; i < n; i++)
    {
        cout << a[i] << " ";
    }
    cout << endl;
}

int main(){
    
    // int a[] = {7,2,4,2,1,4,6,9};
    int a[] = {7,2,4,2,1,4,6,9};
    int n = sizeof(a)/sizeof(a[0]);
    cout << n << endl;
    QuickSort(a,0,n-1);
    print(a,n);
    

    return 0 ;
}
void QuickSort(int a[],int start,int end){
    if (start < end){
        int pi = Partition(a,start,end);
        QuickSort(a,start,pi-1);
        QuickSort(a,pi+1,end);
    }
};
int Partition(int a[],int start, int end){
    int pivot = a[end];
    int pi = start;
    for (int i = start; i < end; i++)
    {
        if(a[i] <= pivot){
            swap(a[i],a[pi]);
            pi++;
        }
    }
    swap1(a[pi],a[end]);
    return pi;
}
