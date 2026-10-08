# include<iostream>
#include<iomanip>
using namespace std ;

int main(){
   
   cout<<"Name"<<setiosflags(ios::left);
   cout<<setw(15)<<setiosflags(ios::right)<<": MyName"<<endl;
   
   cout<<"FName"<<setiosflags(ios::left);
   cout<<setw(20)<<setiosflags(ios::right)<<": MyFatherName"<<endl;
   
   cout<<"RollNO"<<setiosflags(ios::left);
   cout<<setw(14)<<setiosflags(ios::right)<<": #######"<<endl;
   
   cout<<"Semester"<<setiosflags(ios::left);
   cout<<setw(8)<<setiosflags(ios::right)<<": ###"<<endl;
  
    return 0 ;
}


#include<iostream>
using namespace std ;

int main(){
    int num1,num2,add1,mult1 ;
    cout<<"Enter First Number"<<endl;
    cin>>num1 ;
    cout<<"Enter Second Number"<<endl;
    cin>>num2 ;
    add1 = num1+num2 ;
    cout<<"The sum of two number is : "<<add1<<endl ;
    mult1= num1*num2 ; 
    cout<<"the multiply of two number is : "<<mult1 ;
    return 0 ;
}

#include<iostream>
using namespace std ;

//write a program that input current day and month from the user. it then calculate 
//and display the total number of days in the current year till the entered date. 

int main(){

    int Days,Month,total;
   // int monthinYear[] = {31,28,31,30,31,30,31,31,30,31,30,31};
    cout<<"enter current days  "<<endl;
    cin>>Days;
    cout<<"enter current month  "<<endl;
    cin>>Month;
    total = Days ;
    if (Month==2){
    total = total + 31 ;
    cout<<"Hence the total number of days \nin the current year is : "<<total;
    }
    else if (Month==3){
    total = total + 31+28 ;
    cout<<"Hence the total number of days \nin the current year is : "<<total;
    }
    else if (Month==4){        
    total = total + 31+28+31 ;
    cout<<"Hence the total number of days \nin the current year is : "<<total;
    }
    else if (Month==5){
    total = total + 31+28+31+30 ;
    cout<<"Hence the total number of days \nin the current year is : "<<total;
    }
    else if (Month==6){
    total = total + 31+28+31+30+31 ;
    cout<<"Hence the total number of days \nin the current year is : "<<total;
    }      
    else if (Month==7){
    total = total + 31+28+31+30+31+30;
    cout<<"Hence the total number of days \nin the current year is : "<<total;
    }
    else if (Month==8){
    total = total + 31+28+31+30+31+30+31 ;
    cout<<"Hence the total number of days \nin the current year is : "<<total;
    }
    else if (Month==9){
    total = total + 31+28+31+30+31+30+31+31 ;
    cout<<"Hence the total number of days \nin the current year is : "<<total;
    }
    else if (Month==10){
    total = total + 31+28+31+30+31+30+31+31+30 ;
    cout<<"Hence the total number of days \nin the current year is : "<<total;
    }
    else if (Month==11){
    total = total + 31+28+31+30+31+30+31+31+30+31 ;
    cout<<"Hence the total number of days \nin the current year is : "<<total;
    }
    else if (Month==12){
    total = total + 31+28+31+30+31+30+31+31+30+31+30 ;
    cout<<"Hence the total number of days \nin the current year is : "<<total;;
    }
    else 
    cout<<"sorry";
    
    return 0 ;
}

#include<iostream>
using namespace std ;

//write a program that input current day and month from the user. it then calculate 
//and display the total number of days in the current year till the entered date. 

int main(){

    int Days,Month,Total;
    int monthinYear[] = {31,28,31,30,31,30,31,31,30,31,30,31};
    cout<<"enter current days  "<<endl;
    cin>>Days;
    cout<<"enter current month  "<<endl;
    cin>>Month;
    Total = Days ;
    for (int i=0 ; i<Month-1 ; i++){
    Total += monthinYear[i] ;
    }
    cout<<"Hence the total number of days \nin the current year is : "<<Total;


    return 0 ;
}


// #include<iostream>
// using namespace std ;

// //write a program that users enter three number and find the greater number 

// int main(){

    // int num1,num2,num3;
    // cout<<"enter first number : ";
    // cin>>num1;
    // cout<<"enter second number : ";
    // cin>>num2;
    // cout<<"enter third number : ";
    // cin>>num3;
    // if (num1>num2)
    // {
    //     if (num1>num3)
    //     {
    //         cout<<num1;
    //     }
        
    // }
    // else if (num2>num1)
    // {
    //     if (num2>num3)
    //     {
    //         cout<<num2;
    //     }
        
    // }
    // else if (num3>num1)
    // {
    //     if (num3>num2)
    //     {
    //         cout<<num3;
    //     }
        
    // }
    
    //shortcut to solve this problem
//     int num1,num2,num3,mix;
//     cout<<"enter first number : ";
//     cin>>num1;
//     cout<<"enter second number : ";
//     cin>>num2;
//     cout<<"enter third number : ";
//     cin>>num3;
//     mix = num1 ;
//     if (num2>mix)
//         mix=num2;
//     if (num3>mix)
//         mix=num3;
//     cout<<"the greater number is : "<<mix;
    
    
//     return 0 ;
// }