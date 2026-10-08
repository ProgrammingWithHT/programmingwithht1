#include<iostream>
using namespace std ;

// ignore(numer_of_char,char_name)  
// e.g ignore(10,'\0')  


int main(){
    char b;
    char a[20];
    cin>>b;
    

             cout<<"enter your name: ";
            //  cin.ignore(); //this work
             cin.ignore(4,'\0'); //this also work 
              cin>>a;
              cout<<a;
  

    return 0 ;
}