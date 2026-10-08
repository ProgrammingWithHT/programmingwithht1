#include<iostream>
#include "calculations.h"    //this line work by giving some command to terminater
// #include "calculations.cpp"
// #include <calculations.h>   //this line can't work
// #include <calculations.cpp>   //this line can't work

using namespace std ;

int main(){

    cout << add(2,4) << endl;
    cout << sub(2,4) << endl;
    cout << "B" << endl;

    return 0 ;
}

// g++ -o main.exe main.cpp
// ./main.exe

// when we use line number two header file than we use below these command 
// g++ -o main.exe main.cpp calculations.cpp
// ./main.exe    same as ./main


//________________________________________________
// g++ main.cpp -o main1     // write in terminal to compile our program
// ./main1              //wirte in terminal to run our program
// 
// echo $?  //write in terminal to get main() function return value