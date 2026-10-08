#include<iostream>
using namespace std ;

void add(int &x){   //l value reference
    x +=1;
}
int add(int &&x){ //r value reference
    x +=1;
    cout<<"r value reference: "<<x<<endl;
    
}

int main(){

    int x = 20;
    add(x);   // l value reference
    cout<<x<<endl;
    add(10);  // r value reference
    cout<<x<<endl;

    return 0 ;
}