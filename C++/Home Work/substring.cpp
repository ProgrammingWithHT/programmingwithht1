#include<iostream>
using namespace std ;

int LENGTH(char arr1[]);

char* SUBSTRING(char arr1[],int a,int b){

    char *ptr = new char[b];
        for (int i = a-1,j=0; i<b+a-1,j<b; i++,j++)
        {
            ptr[j] = arr1[i];
        }

    return ptr;
};

int main(){
    char arr1[] = "ABCDEFG";
    char *ptr = SUBSTRING(arr1,3,2);

    for (int i = 0; i < 1; i++)
    {
        cout << *(ptr+i);
    }

    return 0 ;
}