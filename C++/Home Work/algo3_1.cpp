#include<iostream>
using namespace std ;
// Created BY ProgrammingWithHT

int INDEX(char arr1[],char arr2[]);
void DELETE(char arr1[],int a,int b);
int LENGTH(char arr1[]);

int main(){
    char T[] = "ABCDEFG";
    char P[] = "CD";
    int K = INDEX(T,P);
    while (K != 0)
    {
        DELETE(T,INDEX(T,P),LENGTH(P));
        K = INDEX(T,P);
    }
    
    // For Displaying Data;
    for (int i = 0; T[i] != '\0'; i++)
    {
        cout << T[i];
    }
    return 0 ;
}

// Delete Function
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

// Index Function
int INDEX(char arr1[],char arr2[]){ 
    int index = 0;

    // Find Length Of Array
    int SizeArr1 = LENGTH(arr1);
    int SizeArr2 = LENGTH(arr2);

    if(SizeArr2>1){
        for (int i = 0; i < SizeArr1; i++)
        {
            if (arr2[0] == arr1[i])
            {
                if (arr2[1] == arr1[i+1])
                {
                    index = i+1;
                    goto loop;
                }

            }
        }
    }
    else {
        for (int i = 0; i < SizeArr1; i++)
        {
            if (arr2[0] == arr1[i]){
                index = i+1;
                goto loop;
            }
        }   
    }


    loop:
    return index;
 
};

// Length Function
int LENGTH(char arr1[]){
    int length = -1;
    for (int i = 0; arr1[i] != '\0' ; i++)
    {
        length = i;
    }
    return length+1;
}