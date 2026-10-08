#include<iostream>
using namespace std ;

class base{
    int a;
    int b;
    public:
    // base(): base(2,1){}  // same as base(){ a=2, b=1} 
    base(int a): base(a,0){}        //first this will work this container is just this container base(int a, int b):a(a),b(b){} so then this will work if we do not write complier give error
    base(int a, int b):a(a),b(b){}
    void print(){ cout<< a<<"  "<<b<<endl; }

   
};

int main(){
//    base b;    //if we write this statement base b; so  this container base(): base(2,1){} will work
     base b(10);
    b.print();

    return 0 ;
}