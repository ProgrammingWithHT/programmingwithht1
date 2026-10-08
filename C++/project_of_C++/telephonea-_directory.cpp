// #include <iostream>
// #include <iomanip>
// #include <fstream>
#include<bits/stdc++.h>      //line to include all header file
using namespace std;

class how_to_make_telephone_directory
{
private:
    char wa;
    char ht[100];
    char w[50];
    int i = 0;
    char num[20];
    char disp[100];
    char name[50];
    string searc;

public:
    void starting()
    {
        ofstream out;
        ifstream in;
        cout << setfill('*') << setw(40) << "" << endl
             << setfill(' ') << setw(33) << "Wellcome To Phone Directory\n"
             << setfill('*') << setw(40) << "" << endl;
        cout << "1)Add New Record        *\n";
        cout << "2)Display All Record    *\n";
        cout << "3)Search Personal Name  *\n";
        cout << "4)Update Telephone No.  *\n";
        cout << "5)delete all            *\n";
        cout << "6)Exit                  *\n";
    }

    void setdata()
    {
        ofstream out;
        cout << "You are in add mode\n"
             << "enter you name :";
        cin.ignore(); //if i am not using ignore we face an error. error is that cin.getline() function not executive
        cin.getline(name, 50);
        cout << name;
        cout << "\nenter you number :";
        cin >> num;

        out.open("phone directory.txt", ios::app);
        out << "\n"
            << name << " " << num;
        out.close();
    }

    void getdata()
    {
        ifstream in;
        cout << "You are in display mode\n";
        in.open("phone directory.txt");
        while (in.eof() == 0)
        {
            i++;
            in.getline(disp, 1000);

            cout << " (" << (i) << ") " << disp << "\n";
        }
        cout<<"Enter Any Button to go main: ";
        cin>>wa;
    }

    void search_by_name()
    {
        ifstream in;
        cout << "You are in search_by_name  mode\n";
        cout << "enter your name\n";
        cin.ignore();
        getline(cin, searc);
        //    cout<<searc;
        in.open("phone directory.txt", ios::app);
        while (in.eof() == '\0')
        {
            in >> disp;
            in.getline(ht, 100);
            // cout<<disp<<endl;
            string z = disp;
            if (z == searc)
            {
                cout << "Your search is: " << z;
                cout << "\nand information is: " << z << ht;

                break;
            }
            // else
            //    {cout<<"Sorry not found!";   break;}
        }
        in.close();
    }

    void delete_all()
    {
        ofstream out;
        cout << "You are in all delete mode\n";
        out.open("phone directory.txt", ios::trunc);
        out.close();
    }
};

int main()
{
    how_to_make_telephone_directory rec;
    char a;
    while (true)
    {
        rec.starting();
        cout << "********************\n";
        cout << "Choose Your Choice\n";
        cout << "********************\n";
        cin >> a;
        if (a == '1' || a == '2' || a == '3' || a == '4' || a == '5' || a == '6')
        {
            switch (a)
            {
            case '1':
                rec.setdata();
                break;
            case '2':
                rec.getdata();
                break;
            case '3':

                rec.search_by_name();
                break;

            case '4':
                cout << "You are in updata telephone number  mode\n";
                cout << "enter the name of number you want to updata\n";
                break;
            case '5':
                rec.delete_all();
                break;
            case '6':
                goto exit;
            }
        }
        else
            cout << "Sorry wrong input!";
    }

exit:

    return 0;
}