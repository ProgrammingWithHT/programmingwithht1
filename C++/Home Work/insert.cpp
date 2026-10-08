#include<iostream>
using namespace std ;

// Code For Insert Array In C++
void INSERT(char arr1[],int pos,char arr2[]){

    // Find Length Of Array
    int SizeArr1 = -1;
    int SizeArr2 = -1;
    for (int i = 0; arr1[i] != '\0' ; i++)
    {
        SizeArr1 = i;
    }
    for (int i = 0; arr2[i] != '\0' ; i++)
    {
        SizeArr2 = i;
    }
    SizeArr1 = SizeArr1 +1;
    SizeArr2 = SizeArr2 +1;

    char arr3[SizeArr1+SizeArr2];
    int SizeArr3 = sizeof(arr3)/sizeof(arr3[0]);
    int index = pos -1;

    for(int i = 0; i < index; i++){
        arr3[i] = arr1[i];
    }

    for (int i = pos-1, j = 0; i < SizeArr2+2, j < SizeArr2; i++,j++){
        arr3[i] = arr2[j];
    }
    
    for (int i = SizeArr2+index,j = index; i < SizeArr3, j < SizeArr1; i++,j++)
    {
        arr3[i] = arr1[j];
    }

    // For Output
    for (int i = 0; i < SizeArr3; i++)
    {
        cout << arr3[i];
    }

}

int main(){

    char arr1[] = "ABCDEFG";
    char arr2[] = "XYZ";
    int pos = 3;
   
    INSERT(arr1,pos,arr2);

    return 0 ;
}