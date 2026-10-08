#include<iostream>
using namespace std ;

class base{
    int a;
    public:
      base() {};
      base(int a=2) : a{a}{}  //rem there is no semicolon(;) outside the body
    
      void print(){ cout<< a<<endl; }

   
};

int main(){
    // base b(10);
    // b.print();      //line number 16 work with line number 17

    // base b1(b);    //not give error
    // b1.print();    //line number 19 work with line number 20

    base b1;    //compile time error give
    b1 = b;    
    b1.print();  


    return 0 ;
}