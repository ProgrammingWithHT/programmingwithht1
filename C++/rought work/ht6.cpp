#include<iostream>
using namespace std ;

// void swip(int x,int y){
//     int temp = x ;
//     x = y ;
//     y = temp ;
// }
// void swap(int x, int y) {
//    int temp = x; /* save the value of x */
//     x = y;    /* put y into x */
//     y = temp; /* put x into y */
  
// }

int main (){
    int a = 5, b = 10 ;
    cout<<"The value of a is "<<a<<endl<<"The value of b is "<<b<<endl;
    swap(a,b);
    cout<<"The value of a is "<<a<<endl<<"The value of b is "<<b<<endl;
    return 0 ;
}