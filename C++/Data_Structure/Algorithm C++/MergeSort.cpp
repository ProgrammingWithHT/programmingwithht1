#include <iostream>
using namespace std;

void Merge(int arr[], int left, int mid, int right)
{

    int n1 = mid - left + 1;
    int n2 = right - mid;

    int L[n1], M[n2];

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        M[j] = arr[mid + 1 + j];

    int i, j, k;
    i = 0;
    j = 0;
    k = left;
    while (i < n1 && j < n2){
        if (L[i] <= M[j]){
            arr[k] = L[i];
            i++;
        }else{
            arr[k] = M[j];
            j++;
        }
        k++;
    }

    while (i < n1){
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2){
        arr[k] = M[j];
        j++;
        k++;
    }
}

void MergeSort(int arr[], int l, int h)
{
    if (l < h)
    {
        int mid = (l + h) / 2;
        MergeSort(arr, l, mid);
        MergeSort(arr, mid + 1, h);
        Merge(arr, l, mid, h);
    }
}

void display(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
}

int main()
{
    int arr[8] = {2, 4, 1, 6, 8, 5, 3, 7};
    int size = sizeof(arr) / sizeof(arr[0]);
    MergeSort(arr, 0, size - 1);
    display(arr, 8);

    return 0;
}