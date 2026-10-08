#include<iostream>
using namespace std ;

class base{
    int a;
    int b;
    public:
    // base(int a) : a{a}{}  //rem there is no semicolon(;) outside the body
    // base(int a) : a(a){};       //both above two line also work
    // base(int i) : a(i){constructor-body};   //this is syntax
    // void print(){ cout<< a<<endl; }

    // base(int i, int j) : a(i), b(j){}
    // base(int i, int j) : a(i), b(i+j){}
    // base(int i, int j) : a(i), b(2 * j){}
    // base(int i, int j) : a(i), b(a + j){}
    // base(int i, int j) : b(j), a(i+b){} //-->RED Flag this will create problems because a will be initialized first a give garbage value
    // void print(){ cout<<a<<"  "<<b<<endl; }
};

int main(){
    
    base b(10);
    b.print();

    return 0 ;
}