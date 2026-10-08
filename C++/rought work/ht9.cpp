#include<iostream>
using namespace std ;

bool q123(string PIN){
    bool status = true ;
    if (PIN.length() !=4){
        status = false ;
    }
    return status;
}

int main(){

   string PIN;
   cout<<"Enter The PIN : ";
   cin>>PIN;
   if ( q123(PIN) == 1 ){
       cout<<"PIN is accepted";
   }   
   else
       cout<<"PIN is denied" ;
    return 0;
}