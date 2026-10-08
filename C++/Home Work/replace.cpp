#include<iostream>
using namespace std ;

int INDEX(char arr1[],char arr2[]);
int LENGTH(char arr1[]);

void REPLACE(char arr1[],char arr2[],char arr3[]){
    int SizeArr1 = LENGTH(arr1);
    int SizeArr2 = LENGTH(arr2);
    int SizeArr3 = LENGTH(arr3);
    int index = INDEX(arr1,arr2);

    if(index == 0){
        cout << "String not match" << endl;
        exit(1);
    }

    if(SizeArr2 > 1)
    {
        for (int i = index-1; i < SizeArr2; i++)
        {
            if (arr2[0] == arr1[i])
            {
                arr1[i] = arr3[0];
                arr1[i+1] = arr3[1];
            }
        }
    }else{
        for (int i = index-1; i <= SizeArr2; i++)
        {
            if (arr2[0] == arr1[i])
            {
                arr1[i] = arr3[0];
            }
        }
    }

    for (int i = 0; i < SizeArr1; i++)
    {
        cout << arr1[i] ;
    }
    
};

int main(){
    char arr1[] = "XABCYDZ";
    char arr2[] = "AB";
    char arr3[] = "C";

    REPLACE(arr1,arr2,arr3);

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