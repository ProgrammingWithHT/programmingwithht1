#include <iostream>
using namespace std;

class base
{
    int _x;

public:
    base() {}
    base(int x): _x{x} {}
    // base(const base obj) { _x = obj._x; }     //this line give complier time error because we use recursion method so we use & this operator 
    base(const base& obj) { _x = obj._x; }
    int getvalue() { return _x; }
};

int main()
{

    base b1(10);
    base b2 = b1;      //OR base b2(b1);
    cout << b2.getvalue() << endl;

    return 0;
}