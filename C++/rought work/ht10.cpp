#include <iostream>
#include <conio.h>
using namespace std;


int main()
{
    cout<<"press ESC to exit ";

    int a = getch()!=27;
    cout<<a << endl ;

    int b ;
    cin>>b;
    if(b!=27)
    cout << b << endl;
    
    return 0;
}