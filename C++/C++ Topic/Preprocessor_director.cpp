#include<iostream>
//#define NUM (23)    //same as NUM 23    this is called macro
//#undef NUM     //when we use this so they can't display value of NUM in main function
//#define square(n) n*n   //this is macro function            //if we write #define square (n) n*n it give error because we give space between square and (n)
// #define square(n) i++ * i++  //same as above function remember this point           
// #define square(n) 6 * 5
// #define square(n) 5 update 6 * 6 update 7 so i=7 remember 

// I am confused in preprocessor director function
//#pragma once      //not c++ standard but work in all complier supppose we have two header file one header file include to another header file and other header file include to one header file than we use this program once
#define Trigger
#undef Trigger    //when use this and in main we use #ifdef than output doesn't print
                 //when we use #ifndef than we can't get value from main function
int main(){
    // int i = 5;
    // std::cout<<square(i++);  for function macro
    // std::cout<<i;
   
    // std::cout<<NUM<<std::endl;  //get value from macro
    // #undef NUM
    // std::cout<<NUM<<std::endl; //can't display value because we use #undef macro  
    #ifndef Trigger  
    std::cout<<"ProgrammingWithHT"<<std::endl;
    #endif 
    // #error  can be used to display error 

    return 0 ;
}