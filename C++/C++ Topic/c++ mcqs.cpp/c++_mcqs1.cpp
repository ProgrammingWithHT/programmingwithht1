#include <iostream>
using namespace std;

class one
{
public:
    double add(double x) { return x + 0.1; }
};
class two : public one     //scope does't come to this class 
{
public:
    //    using one::add;    //when we use this line its give us option D
    int add(int x) { return x + 1; }
};
int main()
{
    two obj;
    cout<<obj.add(10)<< "  " <<obj.add(10.5) << endl;

    return 0;
}
// A. compile time error
// B. run time error
// C. 11 11     //answer c because when we heritance scope doesent come of class one to class two
// D. 11 10.6

// int x = 29; //output give same vaule and address
// int &p = x; //in this technique we can make two variable with same address
// p = 9   //if we change the value of one variable then automatical
//change the value of second variable

// cout << p << "  " << x << endl;
// cout << &p << "  " << &x;