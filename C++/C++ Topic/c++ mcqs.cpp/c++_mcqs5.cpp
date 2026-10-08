#include<iostream>
using namespace std ;

class base{
    int a;
    public:
     base(int a=2) : a(a){}; //give complie time error
    //  base(float a=2) : a(a){}; //this works output=10
     base(int a) : a{a}{}  
     void print(){ cout<< a<<endl; }
 
};

int main(){

    base b(10);
    b.print();

    return 0 ;
}
