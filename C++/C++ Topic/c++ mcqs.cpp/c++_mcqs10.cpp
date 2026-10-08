/*#include<iostream>
using namespace std ;

int x = 10;

void add(int &x){   //l value reference
    x +=1;
}


int main(){

    int x = 20;
    // add(x);   // this take local variable x
    add(::x);   // this take global variable x
    cout<<::x<<endl;

    return 0 ;
}*/

// video number 11

/*#include<iostream>
using namespace std ;

void add(int &x){     //this is recursion
    if (x==100)
        return;
    x++;
    add(x);
    
}

int main(){
    int x = 20;
    add(x);
    cout<<x<<endl;

    return 0 ;
}*/

// video number 12
/*#include<iostream>
using namespace std ;

void sub(int x){
    x -=1;
}
void add(int &x){
    x +=1;
    sub(x);
}

int main(){

    int x = 20;
    add(x);
    cout<<x<<endl;

    return 0 ;
}*/

