#include<iostream>
using namespace std ;
// Created BY ProgrammingWithHT

int INDEX(char arr1[],char arr2[]);
void REPLACE(char arr1[],char arr2[],char arr3[]);
int LENGTH(char arr1[]);


int main(){
    char T[] = "XABYABZ";
    char P[] = "AB";
    char Q[] = "C";

    int K = INDEX(T,P);
    while (K!=0){
        REPLACE(T,P,Q);
        K = INDEX(T,P);
    }
    
    for (int i = 0; i < 8; i++)
    {
        cout << T[i];
    }

    return 0;
}


// Replace Function
void REPLACE(char arr1[],char arr2[],char arr3[]){

    int value = 0;
    for (int i = 0; i < 7; i++)
    {
        if (arr2[0] == arr1[i])
        {
            value = i;
            arr1[i] = arr3[0];
            arr1[i+1] = arr3[1];
            break;
        }
    }

    
};

// Length Function
int LENGTH(char arr1[]){
    int length = -1;
    for (int i = 0; arr1[i] != '\0' ; i++)
    {
        length = i;
    }
    return length+1;
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