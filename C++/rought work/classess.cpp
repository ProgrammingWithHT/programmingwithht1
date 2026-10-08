#include<iostream>
using namespace std ;

class fatherProperty{
public :
    string protevalue = "one billion us dollar ";
    void getproperty() {cout<<"father property =>"<<protevalue<<endl;}
};

// class fatherProperty{
// protected :
//     string protevalue = "one billion us dollar ";
//     void getproperty() {cout<<"father property =>"<<this->protevalue<<endl;}
// };

class son : public fatherProperty{
public :
    void getproperty() {cout<<"son property => "<<this->protevalue<<endl;}

};

class grandson : public fatherProperty{
public :
    void getproperty() {cout<<"grandson property => "<<this->protevalue<<endl;}

};

int main(){
    son ht ;
    ht.getproperty();  
    cout<<ht.protevalue<<endl;

    fatherProperty ft;
    ft.getproperty();
    cout<<ft.protevalue<<endl;

    grandson gt;
    gt.getproperty();
    cout<<gt.protevalue;

    return 0 ;
}


// #include<iostream>
// using namespace std;

// class Employee
// {
//     private:
//         int a, b, c;
//     public:
//         int d, e;
//         void setData(int a1, int b1, int c1) {
//             a = a1 ;
//             b = b1 ;
//             c = c1 ;
            
//             }// Declaration

//         void getData(){
//             cout<<"The value of a is "<<a<<endl;
//             cout<<"The value of b is "<<b<<endl;
//             cout<<"The value of c is "<<c<<endl;
//             cout<<"The value of d is "<<d<<endl;
//             cout<<"The value of e is "<<e<<endl;
//         }
// };

// // void Employee :: setData(int a1, int b1, int c1){
// //     a = a1;
// //     b = b1;
// //     c = c1;
// // }

// int main(){
//     Employee harry;
//     // harry.a = 134; -->This will throw error as a is private
//     harry.d = 34;
//     harry.e = 89;
//     harry.setData(1,2,4);
//     harry.getData();
//     return 0;
// }
