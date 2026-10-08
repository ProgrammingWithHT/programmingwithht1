#include<iostream>
using namespace std ;

int LENGTH(char arr1[]);

void DELETE(char arr1[],int a,int b){

    // Find Length Of Array
    int sizeArr1 = LENGTH(arr1);

    //For Delete Array At Particular Index 
    for (int i = a-1; i < sizeArr1; i++)
    {
        if (a+b > sizeArr1)
        {
            arr1[a-1] = '\0';
            goto loop;
        }
        arr1[i] = arr1[i+b];
    }
    loop:
    arr1[sizeArr1-b] = '\0';
};

int main(){
    char arr1[] = "ABCDEFG";
    DELETE(arr1,2,3);

    for (int i = 0; arr1[i] != '\0'; i++)
    {
        cout << arr1[i];
    }
    



    return 0 ;
}



int LENGTH(char arr1[]){
    int length = -1;
    for (int i = 0; arr1[i] != '\0' ; i++)
    {
        length = i;
    }
    return length+1;
};