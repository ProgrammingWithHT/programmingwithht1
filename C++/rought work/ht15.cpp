// englplus.cpp
// overloaded ‘+’ operator adds two Distances
#include <iostream>
using namespace std;
////////////////////////////////////////////////////////////////
class Distance //English Distance class
{
private:
    int feet;
    float inches;

public: //constructor (no args)
    Distance() : feet(0), inches(0.0)
    {
    } //constructor (two args)
    Distance(int ft, float in) : feet(ft), inches(in)
    {
    }
    void getdist() //get length from user
    {
        cout << "\nEnter feet : ";
        cin >> feet;
        cout << "Enter inches : ";
        cin >> inches;
    }
    void showdist() const //display distance
    {
        cout << feet << "\'-" << inches << '\"';
    }
    Distance operator+(Distance) const; //add 2 distances
};
//--------------------------------------------------------------
//add this distance to d2
Distance Distance::operator+(Distance d2) const //return sum
{
    int f = feet + d2.feet;       //add the feet
    float i = inches + d2.inches; //add the inches
    if (i >= 12.0)                //if total exceeds 12.0,
    {                             //then decrease inches
        i -= 12.0;                //by 12.0 and
        f++;                      //increase feet by 1
    }                             //return a temporary Distance
    return Distance(f, i);        //initialized to sum
}
////////////////////////////////////////////////////////////////
int main()
{
    Distance dist1, dist3, dist4;  //define distances
    dist1.getdist();               //get dist1 from user
    Distance dist2(11, 6.25);      //define, initialize dist2
    dist3 = dist1 + dist2;         //single ‘+’ operator
    dist4 = dist1 + dist2 + dist3; //multiple ‘+’ operators
    //display all lengths
    cout << "dist1 = ";
    dist1.showdist();
    cout << endl;
    cout << "dist2 = ";
    dist2.showdist();
    cout << endl;
    cout << "dist3 = ";
    dist3.showdist();
    cout << endl;
    cout << "dist4 = ";
    dist4.showdist();
    cout << endl;
    return 0;
}
// countpp2.cpp
// increment counter variable with ++ operator, return value
#include <iostream>
using namespace std;
////////////////////////////////////////////////////////////////
class Counter1
{
private:
    unsigned int count; //count
public:
    Counter1() : count(0) {} //Constructor
    unsigned int get_count() //return count
    {
        return count;
    }
    Counter1 operator++() //increment count
    {
        ++count;            //increment count
        Counter1 temp;       //make a temporary Counter
        temp.count = count; //give it same value as this obj
        return temp;        //return the copy
    }
};
////////////////////////////////////////////////////////////////
int main()
{
    Counter1 c1, c2;                     //c1=0, c2=0
    cout << "\nc1 =" << c1.get_count(); //display
    cout << "\nc2 =" << c2.get_count();
    ++c1;                               //c1=1
    c2 = ++c1;                          //c1=2, c2=2
    cout << "\nc1 =" << c1.get_count(); //display again
    cout << "\nc2 =" << c2.get_count() << endl;
    return 0;
}
/*
Create a class called time that has separate int member data for hours, minutes, and
seconds. One constructor should initialize this data to 0, and another should initialize it
to fixed values. Another member function should display it, in 11:59:59 format. The final
member function should add two objects of type time passed as arguments.
A main() program should create two initialized time objects (should they be const ?) and
one that isn’t initialized. Then it should add the two initialized values together, leaving the
result in the third time variable. Finally it should display the value of this third variable.
Make appropriate member functions const .
*/
#include<iostream>
using namespace std;
class Time{
    int hours,minutes,seconds;
    public:
        Time():hours(0),minutes(0),seconds(0){}
        Time(int a, int b, int c):hours(a),minutes(b),seconds(c){}
        void out(){
            cout << "Time :" << hours << " : " << minutes << " : " << seconds << endl; 
        }
        Time add(Time T){
            int h=0,m=0,s=0;
            s = seconds + T.seconds;
            if (s>=60){
                s -=60;
                m++;
            }
            m += minutes + T.minutes;
            if (m>=60){
                m -= 60;
                h++;
            }
            h += hours + T.hours;
            if (h>=24)
            {
                h -= 24;
            }
            return Time(h,m,s);
        }

};
int main(){
    Time obj1(23,30,15),obj2(1,10,15);
    obj1.out();
    obj2.out();
    Time obj3 = obj1.add(obj2);
    obj3.out();

    return 0;
}
/*
Transform the fraction structure into a fraction class.
Member data is the fraction’s numerator and denominator. Member functions should
accept input from the user in the form 3/5 , and output the fraction’s value in the same
format. Another member function should add two fraction values. Write a main() program
that allows the user to repeatedly input two fractions and then displays their sum. After
each operation, ask whether the user wants to continue.
*/


#include<iostream>

using namespace std;

class addF{
    int num, den;
    public:
        void getData();
        void addFraction(addF, addF);
        void display();
};

void addF::getData(){
    char temp;
	cin >> num >> temp >> den;
}

void addF::addFraction(addF f1, addF f2){
    num = f1.num * f2.den + f1.den * f2.num;
	den = f1.den * f2.den;
}

void addF::display(){
    cout << "Sum is: " << num << "/" << den << endl;
}

int main(){
    char choice;
    addF f1, f2, f3;
    do{
        cout << "Enter first fraction in p/q: ";
        f1.getData();
        cout << "Enter second fraction in p/q: ";
        f2.getData();
        f3.addFraction(f1, f2);
        f3.display();
        cout << "Do you want to continue (y/n): ";
        cin >> choice;
    }while(choice == 'y' || choice == 'Y');
    cout << endl;
    return 0;
}
/*
Imagine a tollbooth at a bridge. Cars passing by the booth are expected to pay a 50 cent
toll. Mostly they do, but sometimes a car goes by without paying. The tollbooth keeps
track of the number of cars that have gone by, and of the total amount of money collected.
Model this tollbooth with a class called tollBooth . The two data items are a type
unsigned int to hold the total number of cars, and a type double to hold the total amount
of money collected. A constructor initializes both of these to 0. A member function called
payingCar() increments the car total and adds 0.50 to the cash total. Another function,
called nopayCar() , increments the car total but adds nothing to the cash total. Finally, a
member function called display() displays the two totals. Make appropriate member
functions const .
Include a program to test this class. This program should allow the user to push one key
to count a paying car, and another to count a nonpaying car. Pushing the Esc key should
cause the program to print out the total cars and total cash and then exit.
*/

#include<iostream>

using namespace std;

const char ESC = 27;
const double toll = 0.5;

class tollBoth{
    private:
        unsigned int totalCars;
        double totalCash;
    public:
        tollBoth(){
            totalCars = 0;
            totalCash = 0;
        }
        void pay(){
            totalCars++;
            totalCash += toll;
        }
        void noPay(){
            totalCars++;
        }
        void display(){
            cout << "Total number of cars: " << totalCars << endl;
            cout << "Total cash collected: " << totalCash << endl;
        }
};

int main(){
    tollBoth tollboth;
    char ch;
    cout << "Enter 0 for each non-paying car" << endl;
    cout << "Enter 1 for each paying car" << endl;
    cout << "Press ESC to exit" << endl;
    do{
        cin >> ch;
        if(ch == '0'){
            tollboth.noPay();
        }
        if(ch == '1'){
            tollboth.pay();
        }
    }while(ch != ESC);
    tollboth.display();
    return 0;
}
/*
Note that one advantage of the OOP approach is that an entire class can be used, without
modification, in a different program. Use the fraction class from Exercise 11 in a pro-
gram that generates a multiplication table for fractions. Let the user input a denominator,
and then generate all combinations of two such fractions that are between 0 and 1, and
multiply them together. Here’s an example of the output if the denominator is 6
*/



#include<iostream>
#include<iomanip>

using namespace std;

class calF{
    int num, den;
    public:
        calF(int n, int d): num(n), den(d) { }
        void mulF(calF, calF);
        void lowTerms();
        void setData(int n, int d){
            num = n;
            den = d;
        }
        void displayN(){
            cout << num << "/" << den;
        }
        void display(){
            cout << setw(7) << num << "/" << den;
        }
};

void calF::mulF(calF f1, calF f2){
    num = f1.num * f2.num;
    den = f1.den * f2.den;
}

void calF::lowTerms() {	
	long tnum, tden, temp, gcd;

	tnum = labs(num);	
	tden = labs(den);
	if(tden == 0) {	
		cout <<"Illegal fraction: division by 0";
		exit(1);
	} else if (tnum == 0) {		
		num = 0; 
		den = 1;
		return;
	}
	
	while(tnum != 0) {
		if(tnum <tden) {	
			temp = tnum;	
			tnum = tden;
			tden = temp;	
		}
		tnum = tnum - tden;		
	}
	gcd = tden;		
	num = num/gcd;		
	den = den/gcd;
}

int main(){
    calF f(0, 0), f1(0, 0), f2(0, 0); int x;
    char ch;
	do{
		cout << "Enter a number : ";
        cin >> x; 
        cout << "   ";
		for(int i=1; i<x; i++){ 
            f.setData(i, x); 
            f.lowTerms(); 
            f.display();
        }
		for(int j=1; j<x; j++){
			cout<< endl; 
            f.setData(j, x); 
            f.lowTerms(); 
            f.displayN();
			for(int k=1; k<x; k++){
				f1.setData(k, x); 
                f2.setData(j, x);
				f.mulF(f1, f2); 
                f.lowTerms(); 
                f.display();
            }
        }
	cout<< "\n\nPress c to continue or any key to exit: ";
    cin >> ch;
	}while(ch =='c');
    return 0;
}
/*
In ocean navigation, locations are measured in degrees and minutes of latitude and longi-
tude. Thus if you’re lying off the mouth of Papeete Harbor in Tahiti, your location is 149
degrees 34.8 minutes west longitude, and 17 degrees 31.5 minutes south latitude. This is written as 149°34.8 ’ W, 17°31.5 ’ S. There are 60 minutes in a degree. (An older system
also divided a minute into 60 seconds, but the modern approach is to use decimal minutes
instead.) Longitude is measured from 0 to 180 degrees, east or west from Greenwich,
England, to the international dateline in the Pacific. Latitude is measured from 0 to 90
degrees, north or south from the equator to the poles.
Create a class angle that includes three member variables: an int for degrees, a float
for minutes, and a char for the direction letter (N, S, E, or W). This class can hold either
a latitude variable or a longitude variable. Write one member function to obtain an angle
value (in degrees and minutes) and a direction from the user, and a second to display the
angle value in 179°59.9 ’ E format. Also write a three-argument constructor. Write a
main() program that displays an angle initialized with the constructor, and then, within a
loop, allows the user to input any angle value, and then displays the value. You can use
the hex character constant ‘\xF8’ , which usually prints a degree (°) symbol.
*/


#include<iostream>

using namespace std;

class angle{
    int degrees;
    float minutes;
    char direction;
    public:
        angle():degrees(0), minutes(0), direction(0) {	}
		angle(int deg, float min, char dir):degrees(deg), minutes(min), direction(dir) {	}

        void getData(int, float, char);
        void display() const;
};

void angle::getData(int dgr, float mnt, char dir){
    degrees = dgr;
    minutes = mnt;
    direction = dir;
}

void angle::display() const{
    cout << "Angle: " << degrees << "\xF8 " << minutes << "\' " << direction;
    if(direction == 'E' || direction == 'e' || direction == 'W' || direction == 'w') {
		cout << " Longitude !";
	} if(direction == 'N' || direction == 'n' || direction == 'S' || direction == 's') {
		cout << " Latitude !";
	}
}

int main(){
    int degr;
	float mint;
	char drct, choice;
	cout << endl;
	angle angle1(146, 34.6, 'S');
	angle1.display();	
	cout << endl;
	angle angle2;

	do {
		cout << "\nEnter the degree: ";
		cin >> degr;
		cout << "Enter the minutes: ";
		cin >> mint;
		cout << "Enter the direction(N, S, E, W): ";
		cin >> drct;

		angle2.getData(degr, mint, drct);
		angle2.display();

		cout << "\nDo you want to enter another angle for navigation (Y, N): ";
		cin >> choice;
	} while(choice == 'Y' || choice == 'y' );
	cout << endl;
    return 0;
}