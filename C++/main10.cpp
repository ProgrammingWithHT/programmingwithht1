#include<iostream>
using namespace std ;
#define MAX 100
void display();
int arr[MAX] ;
// int arr[MAX] = {'\0',12,6,10,5,1,9};
int n = -1;

void heap_insert(int data){
    if(n==-1){
        n = n + 2;
        arr[n] = data;
        return;
    }
    n = n+1;
    arr[n] = data;
    int i = n;
    while (i>1)
    {
        int parent = i/2;
        if(arr[parent] < arr[i]){
            swap(arr[parent],arr[i]);
            i = parent;
        }else {
            return;
        }
    }
}
void heap_delete(int data){
    int index = -1;
    for (int i = 1; i <= n; i++)
    {
        if(data == arr[i]) index = i;
    }
    swap(arr[index],arr[n]);
    n = n - 1;
    while(index < n){
        int left = index*2;
        int right = (index*2)+1;
        int higherElement;

        if(arr[left]>arr[right]) higherElement = left;
        else higherElement = right;

        if(arr[index] < arr[higherElement] && right != n+1) {
            swap(arr[index],arr[higherElement]);
            index = higherElement;
        }
        else return;
    }
}

void heapify(int n,int index){
    display();
    n = n - 1;
    if(n == index){cout << n << " " << index << endl; 
        swap(arr[index],arr[n+1]);
    }
    while(index < n){
        int left = index*2;
        int right = (index*2)+1;
        int higherElement;

        if(arr[left]>arr[right]) higherElement = left;
        else higherElement = right;

        if(right >n) higherElement = left;
        if(left > n) higherElement = index;

        if(arr[index] < arr[higherElement] && right != n+1) {
            swap(arr[index],arr[higherElement]);
            index = higherElement;
        }
        else return;
    }
}

void heapSort()
{
    for (int i = n; i > 0; i--)
    {
        swap(arr[1],arr[i]);
        heapify(i, 1);
    }
}

void display(){
    for (int i = 1; i <= n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main(){
//  {'\0',50,40,30,35,10,21};
    heap_insert(1);
    heap_insert(12);
    heap_insert(92);
    heap_insert(5);
    heap_insert(61);
    heap_insert(12);
    heap_insert(92);
    heap_insert(53);
    heap_insert(6);
    heap_insert(11);
    heap_insert(10);
    heap_insert(10);
    // display();
    heapSort();
    cout << "After sorting:" << endl;
    display();
    

    return 0 ;
}