#include<iostream>
using namespace std ;

int add(int a,int b){
    return a+b;
}

int main(){
    
    int(*funptr)(int,int)=add;      //Fuction Pointer Declaration
    cout << funptr(2,5) << endl;   //Function Pointer

    cout << add(2,5) << endl;      //Simple Function


    return 0 ;
}