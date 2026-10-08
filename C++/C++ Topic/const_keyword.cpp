/*_____________________________________Start____________________________________________________________________________*/
// Topic const keyboard in C++
#include<iostream>
using namespace std ;
// 
// Points:        
// 1. C++ allows to overload member functions on the basis of const and non-const.

class test{
    int x;
    public:
    test(int x=0): x{x}{}
    void print(){cout<<"non const"<<endl;};
    void print() const{ cout<<"const"<<endl;};

};

int main(){
    test t;
    const test t1;
    t.print();
    t1.print();
    
    return 0 ;
}
// 2. const parameters allows to overload member function and normal function but it should be reference/pointer.
// class test{
//     int x;
//     public:
//     test(int x=0): x{x}{}
//     void print(int val){cout<<val<<endl;};           //these line not work
//     void print(const int val){cout<<val<<endl;};     //these line not work
    // void print(int& val){cout<<val<<endl;};         //these line work
    // void print(const int& val){cout<<val<<endl;};   //these line work


// };

// int main(){
//     test t;
//     int k = 10;
//     const int p = 20;
//     t.print(k);
//     t.print(p);

    

//     return 0 ;
// }

//Initializer list is used to initialize them from outside
// #include<iostream>
// using namespace std ;

// class Phone{
//     const string pname;
//     public:
//     Phone(string str): pname{str}{}
//     string getPhoneName(){ return pname;}
//     // void changeName(string str){ pname = str;}   not work


// };

// int main(){
//     Phone p1("Nokia 3.2 Plus"),p2("Iphone x");
//     // p1.changeNameJ("My Phone");   not work
//     cout << p1.getPhoneName() << endl;
//     cout << p2.getPhoneName() << endl;
    

//     return 0 ;
// }

/*_________________________________________________End__________________________________________________________________*/