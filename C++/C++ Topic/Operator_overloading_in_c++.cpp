#include<iostream>
using namespace std ;
/*  Reason of using operator to make our program more intuitive

    there are few ooperators we can't overload
    A. ::   //scope operator
    B. ?:   
    C. .
    D. .*   //dot pointer
    E. sizeof
    F. typeid*/
// class point
// {
//     int x;
//     int y;
//     public:
//         point(int x=0, int y=0): x{x}, y{y} {}
//         point operator * (const point& s){
//             point sum;
//             sum.x = x * s.x;
//             sum.y = y * s.y;
//             return sum;
//         }
//         void print(){
//             cout<<"x: "<<x<<" y: "<<y<<endl;
//         }
// };
// int main(){
//     point obj(10,1), obj1(2,2), obj3(3,3);
//     point obj2 = obj * obj1;   //point obj2 = obj.operator+(obj1);
//     // point obj2 = obj.operator*(obj1).operator*(obj3);  //when you multi more object
//     obj2.print();
    
//     return 0 ;
// }


#include<iostream>
using namespace std ;

class point
{
    int x;
    int y;
    public:
        point(int x=0, int y=0): x{x}, y{y} {}
        point operator -- (){
            return point(--x,--y);
        }

        void print(){
            cout<<"x: "<<x<<" y: "<<y<<endl;
        }
};

int main(){
    point obj(2,2), obj1;
    point obj2 = --obj;   //point obj2 = obj.operator--();
    obj2.print();
    

    return 0 ;
}

// Array Subsript Operator
/*#include<iostream>
using namespace std ;

// Point:
// 1. Array Subscript Operator can be used to check out of bound cases.
// 2. Array Subscript Operator can not be friend function and others too(->, (),  =)

class Point{
    int arr[2];
    public:
        Point(int x=0, int y=0){
            arr[0] = x;
            arr[1] = y;
        }
        void print(){
            cout<<"x: "<<arr[0]<<" y: "<<arr[1]<<endl;
        }
        int& operator [] (int pos){       //we will return integer reference value and update the value in main function
            if (pos == 0){               //if can't return the integer reference value so it return temporery value and value we can't update in main function 
                return arr[0];    
                }
            else if(pos == 1){
                return arr[1];
                }
            else {
                cout<<"Out of bound case."<<endl;
                exit(0);}
        }
};

int main(){
    Point p1(2,2);
    p1.print();
    p1[0] = 3 ;   //p1.operator[](0) = 3; 
    p1[1] = 8 ;   //p1.operator[](1) = 8;
    // p1[2] = 10;  //give out of bound
    p1.print();
    return 0 ;
}*/

/*#include<iostream>
using namespace std ;

class point{
    int a;
    int b;
    public:

        void print(){
            cout<<a<<"  "<<b;
        }
            int& operator + (){       //&take the address of arr
                return a;    
        }
            int& operator - (){       //&take the address of arr
                return b;    
        }
};

int main(){
    point a;
    a.operator+() = 10;
    a.operator-() = 20;

    a.print();
    

    return 0 ;
}*/

//Stream Extraction adn stream inseration operator overloading
/*#include<iostream>
using namespace std ;

class test{
    int x;
    public:
        test(int x=0):x{x} {}
    friend istream& operator >> (istream& input, test& obj);
    friend ostream& operator << (ostream& output, test& obj);
};
// global operator overloading function
istream& operator >> (istream& input, test& obj){
    input>>obj.x;
    return input;
}
ostream& operator << (ostream& output, test& obj){
    output<<obj.x<<endl;
    return output;
}
// why we cannot make this fuction as a member of function of 
// your class the reason is cin and cout are not the object of our class
// they are object of different class and we are overding these operator
// on those particular classes 
int main(){
    test t;
    cin>>t;     //operator>>(cin,t);
    cout<<t;   //operator<<(cout,t);
    
    return 0 ;
}*/

/*#include<iostream>
using namespace std ;
class base{
    int x;
    public:
        base(int x = 0): x{x}{}
        friend class test;
};
class test{
    int *x;
    public:
        test(int val=0):x{new int(val)}{}
        void setx(int val){ *x = val; };
        void print(){cout<<"OUTPUT: "<< *x << endl; };
        ~test(){delete x;}
        test& operator = (const test& rhs){
            if(this != &rhs){     //this hold the address fo t2
                *x = *rhs.x;
            }
            return *this;           //its also work without return *this remember
        }
        test& operator = (const base& rhs){
                *x = rhs.x;

            return *this;           //its also work without return *this remember
        }
};

int main(){
    // test t1(10);
    // test t2;
    // t2 = t1;     //t2.operator=(t1);
    // t1.setx(20);
    // t1.print();
    // t2.print();

    test t1(10);
    t1.print();
    base b(20);
    t1 = b;
    t1.print();


    return 0 ;
}*/

// overload type cast in c++
// there is no need to typecast implicit data types (int,double like)
// user defined data types needs this overloading
/*#include<iostream>
using namespace std ;

class Rupee{
    double rupee;
    public:
        Rupee(double r=0 ): rupee{r}{};
        void print(){ cout<< rupee<<endl;};
};
double dollartorupee(){
    return 71.5; 
}
class Dollar{
    double dollar;
    public:
        Dollar(double d=0 ): dollar{d}{};
        void print(){ cout<< dollar<<endl;};
        operator Rupee (){   //remember we don't write return type
            return Rupee(dollar*dollartorupee());
        }
        // Rupee operator * (){  
        //     return (dollar*dollartorupee());
        // }                                            these two comment operator also work
        // operator Rupee (){  
        //     return (dollar*dollartorupee());
        // }
};
int main(){
    Dollar d(10);
    Rupee r;
    r = *d;
    
    d.print();
    r.print();
    

    return 0 ;
}*/
// Overloading new and delete operator gives developer more flexibility for heap allocation.

// Points:
// 1. there are two different types of overloading.
//     a. Locak overlaoding (class/struct)
// 2. Syntax for overloading operator new
//    void* operaotr new(size_t size);
// 3. Syntax for Overloading operator delete
//    void operator delete(void*)
// 4. Both new and delete operator are static member function.
//    So they don't have access to this pointer (we don't have to write static keyboard it is automatically static).
// 5. Don't forget to overload for array version of both (new/delete).
// 6. We can have multiple overload new/delete operator functions.

// #include <iostream>
// using namespace std;

// class test
// {
//     int x;

// public:
//     test(int x = 0) : x{x} {}
//     void *operator new (size_t size)
//     {
//         cout << "Overloaded new operator size: " << size << endl;
//         void *p = malloc(size);
//         return p;
//     }
//     void operator delete(void *p)
//     {
//         cout << "Overloaded Delete Operator" << endl;
//         free(p);
//     }
// };

// int main()
// {
//     test *t = new test();
//     delete t;

//     return 0;
// }