#include<iostream>
#include<conio.h>
using namespace std;

char * SS(char * arr, int loc, int len){
		int j = 0;
		char * SS = new char[len+1];
		for(int i=loc; i<(loc+len); i++){
			SS[j++] = arr[i];
            SS[i] = '\0';
		}
		cout<<endl;
		return SS;
}
char * SS(char[],int,int);
int main(){
	int size, loc, len;
	cout<< "Enter array size: ";
	cin>>size;
	char * arr = new char[size];
	cout<<"Enter Array: ";
	cin>>arr;
	cout<<"Enter loc: ";
	cin>>loc;
	cout<< "Enter length: ";
	cin>>len;
	char * x = SS(arr,loc,len);
	// getch();

    for (int i = 0; i <= 0; i++)
    {
        cout << *(x+i);
    }
	
	return 0;
}