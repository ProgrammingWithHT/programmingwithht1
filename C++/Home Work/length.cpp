#include<iostream>
using namespace std ;

int LENGTH(char arr1[]){
    int length = 0;
    for (int i = 0; arr1[i] != '\0' ; i++)
    {
        length = i;
    }
    return length+1;
};

int main(){
    char arr1[] = "";

    cout << LENGTH(arr1);


    return 0 ;
}