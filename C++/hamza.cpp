#include<iostream>
#include <typeinfo>
using namespace std;

// ProgrammingWithHT

void BubbleSort(int arr[],int n){
	int i = n-1;
	while(i>=1){
		int j = 0;
		while(j<i){
			if(arr[j] < arr[j+1]){
				int temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
			j++;
		}
		i--;
	}

	// For Displaying 
	for(int i=0; i<5; i++){
		cout << arr[i] << " ";
	}

}

void Insertion(int arr[],int n){
	for(int j=1; j<n; j++){
		int key = arr[j];
		int i = j-1;
		while(i>=0 && arr[i]>key){
			arr[i+1] = arr[i];
			i--;
		}
		arr[i+1] = key;
	}	

	// For Displaying
	for(int i=0; i<n; i++){
		cout << arr[i] << " ";
	}

}

int main(){
    
	int arr[] = {4,1,6,7,3};
	int n = 5;
	// BubbleSort(arr,n);
	InsertionSort(arr,n);


	return 0;
}