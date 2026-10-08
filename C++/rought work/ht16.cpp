/*
Write a function called reversit() that reverses a C-string (an array of char ). Use a for
loop that swaps the first and last characters, then the second and next-to-last characters,
and so on. The string should be passed to reversit() as an argument.
Write a program to exercise reversit() . The program should get a string from the user,
call reversit() , and print out the result. Use an input method that allows embedded
blanks. Test the program with Napoleon’s famous phrase, “Able was I ere I saw Elba.”
*/

////

#include<bits/stdc++.h>
using namespace std;

void reverseString(char s[]);

int main(){
    char input[100];
    cout << "Enter a string: ";
    cin.get(input, 100);

    reverseString(input);
    cout << "Reversed string: " << input << endl;
    return 0;
}

void reverseString(char s[]){
    int len = strlen(s);/
    for(int j = 0; j < len/2; j++){
        char temp = s[j];
        s[j] = s[len-j-1];
        s[len-j-1] = temp;
    }
}
/*
Create a class called employee that contains a name (an object of class string ) and an
employee number (type long ). Include a member function called getdata() to get data
from the user for insertion into the object, and another function called putdata() to
display the data. Assume the name has no embedded blanks.
Write a main() program to exercise this class. It should create an array of type employee ,
and then invite the user to input data for up to 100 employees. Finally, it should print out
the data for all the employees.
*/
////

#include<bits/stdc++.h>
using namespace std;

class employee{
    string name;
    long number;
    public:
        void getdata(){
            cout << "Enter name: ";
            cin >> name;
            cout << "Enter number: ";
            cin >> number;
        }
        void putdata(){
            cout << "\nName: " << name;
            cout << "\nNumber: " << number;
        }
};

int main(){
    employee empArray[100];
    int n = 0;
    char ch;
    do{
        cout << "Enter data for employee " << n + 1;
        empArray[n++].getdata();
        cout << "Enter another employee details (y/n)?: ";
        cin >> ch;
    }while(ch != 'n');
    for(int i = 0; i < n; i++){
        cout << "Employee " << i + 1 << " details";
        empArray[i].putdata();
    }
    cout << endl;
    return 0;
}
/*
Write a program that calculates the average of up to 100 English distances input by the
user. Create an array of objects of the Distance class, as in the ENGLARAY example in
this chapter. To calculate the average, you can borrow the add_dist() member function
from the ENGLCON example in Chapter 6. You’ll also need a member function that divides
a Distance value by an integer. Here’s one possibility:
*/

////

#include <bits/stdc++.h>
using namespace std;

class Distance{	
    int feet;
    float inches;
	public:
		Distance(): feet(0), inches(0) { };
		Distance(int f, int i): feet(f), inches(i) { };
		void getdist();
		void showdist() const;
		void add_dist(Distance d);
		void div_dist(int k);
};

int main(){
	const int MAX = 100;
	Distance d[MAX], sum;
	int n = 0;
	char ch;
	do{
		d[n].getdist();
		sum.add_dist(d[n++]);
		cout << "Want to continue (y/n): ";
		cin >> ch;
		cout << endl;
	} while(ch != 'n');
	sum.div_dist(n);
	sum.showdist();
	return 0;
}

void Distance::getdist(){
	cout << "Enter feet: ";
	cin >> feet;
	cout << "\nEnter inches: ";
	cin >> inches;
}

void Distance::showdist() const{
	cout << feet << "\'-" << inches << '\"' << endl;
}

void Distance::add_dist(Distance d){
	feet += d.feet;
	inches += d.inches;
	if(inches > 11){
		inches -= 12;
		feet++;
	}
}

void Distance::div_dist(int k){
	int total = feet * 12 + inches;
	total /= k;
	feet = total / 12;
	inches = total % 12;
}
/*
Start with a program that allows the user to input a number of integers, and then stores
them in an int array. Write a function called maxint() that goes through the array,
element by element, looking for the largest one. The function should take as arguments
the address of the array and the number of elements in it, and return the index number of
the largest element. The program should call this function and then display the largest
element and its index number. (See the SALES program in this chapter.)
*/
////

#include<bits/stdc++.h>
using namespace std;

int maxint(int *a, int n){
    int max = 0, index;
    for(int i = 0; i < n; i++){
        if(a[i] > max)
		{
			max = a[i];
			index = i;
		}
    }
    return index;
}

int main(){
    int n;
    cin >> n;
    int a[n];
    for(int i = 0; i < n; i++){
        cin >> a[i];
    }
    int index = maxint(a, n);
    cout << a[index] << " at " << index;
    return 0;
}
/*
Start with the fraction class from Exercises 11 and 12 in Chapter 6. Write a main()
program that obtains an arbitrary number of fractions from the user, stores them in an
array of type fraction , averages them, and displays the result.
*/
////

#include<bits/stdc++.h>
using namespace std;

const int SIZE = 10;
class fraction{
private:
    int num, den;
public:
    fraction(){}
    fraction(int n, int d) : num(n), den(d)
    {
        lowterms();
    }
    void take_frac(void)
    {
        char ch;
        cin >> num >> ch >> den;
    }
    void show_frac(void)
    {
        cout << setw(2) << num << "/" << setw(2) << den;
    }
    void lowterms(void) // change ourself to lowest terms
    {
        long tnum, tden, temp, gcd;
        tnum = labs(num); // use non-negative copies
        tden = labs(den); // (needs cmath)
        if (tden == 0)    // check for n/0
        {
            cout << "Illegal fraction : division by 0";
            exit(1);
        }
        else if (tnum == 0) // check for 0/n
        {
            num = 0;
            den = 1;
            return;
        }
        // this ‘while’ loop finds the gcd of tnum and tden
        while (tnum != 0)
        {
            if (tnum < tden) // ensure numerator larger
            {
                temp = tnum;
                tnum = tden;
                tden = temp;
            }                   // swap them
            tnum = tnum - tden; // subtract them
        }
        gcd = tden;      // this is greatest common divisor
        num = num / gcd; // divide both num and den by gcd
        den = den / gcd; // to reduce frac to lowest terms
    }
    void add_frac(fraction a, fraction b){
        num = a.num * b.den + a.den * b.num;
        den = a.den * b.den;
        lowterms();
    }
    void sub_frac(fraction a, fraction b){
        num = a.num * b.den - a.den * b.num;
        den = a.den * b.den;
        lowterms();
    }
    void mul_frac(fraction a, fraction b){
        num = a.num * b.num;
        den = a.den * b.den;
        lowterms();
    }
    void div_frac(fraction a, fraction b){
        num = a.num * b.den;
        den = a.den * b.num;
        lowterms();
    }
};

int main()
{
    fraction f[SIZE], sum, divisor, result;
    char ch;
    int i = 0;
    do{
        cout << "Enter a fraction: ";
        f[i].take_frac();
        i++;
        cout << "Enter again?(y/n):";
        cin >> ch;
        cout << endl;
    } while (ch == 'y' && i < SIZE);
    
    sum = {0, 1};
    for (int j = 0; j < i; j++){
        sum.add_frac(sum, f[j]);
    }

    divisor = {1, i + 1};
    result.div_frac(sum, divisor);
    cout << "Average of entered fractions:";
    result.show_frac();
    return 0;
}
/*
In the game of contract bridge, each of four players is dealt 13 cards, thus exhausting the
entire deck. Modify the CARDARAY program in this chapter so that, after shuffling the
deck, it deals four hands of 13 cards each. Each of the four players’ hands should then be
displayed.
*/
////

#include <iostream>
#include <cstdlib>
#include <ctime>
#include <iomanip>

using namespace std;

enum Suit {clubs, diamonds, hearts, spades};
const int jack = 11;
const int queen = 12;
const int king = 13;
const int ace = 14;

class card{
	private:
		int number;
		Suit suit;
	public:
		card() {};
		void set(int n, Suit s);
		void display(void);
};

int main(){
	card deck[52];
	int j;
	for(int j = 0; j < 52; j++){
		int num = (j % 13) + 2;
		Suit su = Suit(j / 13);
		deck[j].set(num, su);
	}
	srand(time(NULL));
	for(int j = 0; j < 52; j++){
		int k = rand() % 52;
		card temp = deck[j];
		deck[j] = deck[k];
		deck[k] = temp;
	}
	const int PLAYERS = 4;
	const int CARDS_OF_PLAYER = 52 / 4;
	card bridge[PLAYERS][CARDS_OF_PLAYER];
	for(int i = 0; i < PLAYERS; i++)
		for(int j = 0; j < CARDS_OF_PLAYER; j++)
			bridge[i][j] = deck[i * CARDS_OF_PLAYER + j];
	for(int i = 0; i < PLAYERS; i++){
		cout << "Player No." << i + 1 << ": ";
		for(int j = 0; j < CARDS_OF_PLAYER; j++)
			bridge[i][j].display();
		cout << endl;
	}
	return 0;
}

void card::set(int n, Suit s){
	suit = s;
	number = n;
}

void card::display(void){
	cout << setw(4);
	if(number >= 2 && number <= 10)
		cout << number;
	else{
		switch(number){
			case jack: cout << 'J'; break;
			case queen: cout << 'Q'; break;
			case king: cout << 'K'; break;
			case ace: cout << 'A'; break;
		}
	}
	switch(suit){
		case clubs: cout << "♣"; break;
		case diamonds: cout << "♦"; break;
		case hearts: cout << "♥"; break;
		case spades: cout << "♠"; break;
	}
}
/*
One of the weaknesses of C++ for writing business programs is that it does not contain a
built-in type for monetary values such as $173,698,001.32. Such a money type should be
able to store a number with a fixed decimal point and about 17 digits of precision, which
is enough to handle the national debt in dollars and cents. Fortunately, the built-in C++
type long double has 19 digits of precision, so we can use it as the basis of a money
class, even though it uses a floating decimal. However, we’ll need to add the capability to
input and output money amounts preceded by a dollar sign and divided by commas into groups of three digits; this makes it much easier to read large numbers. As a first step
toward developing such a class, write a function called mstold() that takes a money
string, a string representing a money amount like
“$1,234,567,890,123.99”
You’ll need to treat the money string as an array of characters, and go through it character
by character, copying only digits (1–9) and the decimal point into another string. Ignore
everything else, including the dollar sign and the commas
*/
////

#include <iostream>
#include <cstring>
#include <cmath>

using namespace std;

long double mstold(char s[]);

int main(){
	const int MAX = 100;
	char ch, s[MAX];
	do{
		cout << "Enter the amount of money: ";
		cin >> s;
		long double lds = mstold(s);
		cout << "Amount equal to: " << lds << endl;
		cout << "Continue? (y/n): ";
		cin >> ch;
		cout << endl;
	} while(ch != 'n');
	return 0;
}

long double mstold(char s[]){
	long double sum = 0;
	int p;
	for(int i = 1; i < strlen(s); i++){
		if(48 <= static_cast<int>(s[i]) && static_cast<int>(s[i]) <= 57)
			sum = sum * 10 + static_cast<int>(s[i]) - 48;
		else if(s[i] == '.')
			p = i;
	}
	long double frac_part = pow(10, strlen(s) - 1 - p);
	sum /= frac_part;
	return sum;
}
/*
Another weakness of C++ is that it does not automatically check array indexes to see
whether they are in bounds. (This makes array operations faster but less safe.) We can
use a class to create a safe array that checks the index of all array accesses.
Write a class called safearay that uses an int array of fixed size (call it LIMIT) as its
only data member. There will be two member functions. The first, putel(), takes an
index number and an int value as arguments and inserts the int value into the array at
the index. The second, getel(), takes an index number as an argument and returns the
int value of the element with that index.

Both functions should check the index argument to make sure it is not less than 0 or
greater than LIMIT-1. You can use this array without fear of writing over other parts of
memory.
Using functions to access array elements doesn’t look as eloquent as using the []
operator. In Chapter 8 we’ll see how to overload this operator to make our safearay
class work more like built-in arrays.
*/
////

#include <iostream>

using namespace std;

class safearay{
	private:
		static const int LIMIT = 100;
		int a[LIMIT];
	public:
		void putel(int index, int value);
		int getel(int index);
};

int main(){
	safearay m;
	char ch;
	do{
		cout << "Enter \"p\" to enter an array element and \"g\" for conclusion: ";
		char sym;
		cin >> sym;
		switch(sym){
			case 'p':
				int i, v;
				cout << "Enter index and value: ";
				cin >> i >> v;
				m.putel(i, v);
				break;
			case 'g':
				int j, temp;
				cout << "Enter an array index: ";
				cin >> j;
				temp = m.getel(j);
				break;
			default:
				cout << "Input Error!\n";
		}
		cout << "Continue? (y/n): ";
		cin >> ch;
		cout << endl;
	} while(ch != 'n');
	return 0;
}

void safearay::putel(int index, int value){
	if(0 <= index && index <= LIMIT - 1)
		a[index] = value;
	else
		cout << "The index is outOfBounds!\n";
}

int safearay::getel(int index){
	int temp;
	if(0 <= index && index <= LIMIT - 1){
		temp = a[index];
		cout << "Item No." << index << " is equal to " << temp << endl;
	}
	else
		cout << "The index is outOfBounds!\n";
	return temp;
}
/*
A queue is a data storage device much like a stack. The difference is that in a stack the
last data item stored is the first one retrieved, while in a queue the first data item stored
is the first one retrieved. That is, a stack uses a last-in-first-out (LIFO) approach, while a
queue uses first-in-first-out (FIFO). A queue is like a line of customers in a bank: The
first one to join the queue is the first one served.
Rewrite the STAKARAY program from this chapter to incorporate a class called queue
instead of a class called stack . Besides a constructor, it should have two functions: one
called put() to put a data item on the queue, and one called get() to get data from the
queue. These are equivalent to push() and pop() in the stack class.Both a queue and a stack use an array to hold the data. However, instead of a single int
variable called top , as the stack has, you’ll need two variables for a queue: one called
head to point to the head of the queue, and one called tail to point to the tail. Items
are placed on the queue at the tail (like the last customer getting in line at the bank) and
removed from the queue at the head. The tail will follow the head along the array as
items are added and removed from the queue. This results in an added complexity:
When either the tail or the head gets to the end of the array, it must wrap around to the
beginning.
*/
////
#include<bits/stdc++.h>
using namespace std;

class Queue
{
	private:
		static const int MAX = 100;
		int a[MAX];
		int head, tail;
	public:
		Queue() {head = 0; tail = 0;}
		void put(int value){
            a[tail++ % 100] = value;
        }
		int get(void){
            return a[(100 - head--) % 100];
        }
};

int main()
{
	Queue q;
	q.put(11);
	q.put(22);
	cout << "1: " << q.get() << endl;
	cout << "2: " << q.get() << endl;
	q.put(33);
	q.put(44);
	q.put(55);
	q.put(66);
	cout << "3: " << q.get() << endl;
	cout << "4: " << q.get() << endl;
	cout << "5: " << q.get() << endl;
	cout << "6: " << q.get() << endl;
	return 0;
}
/*
A matrix is a two-dimensional array. Create a class matrix that provides the same safety
feature as the array class in Exercise 7; that is, it checks to be sure no array index is out
of bounds. Make the member data in the matrix class a 10-by-10 array. A constructor
should allow the programmer to specify the actual dimensions of the matrix (provided
they’re less than 10 by 10). The member functions that access data in the matrix will now
need two index numbers: one for each dimension of the array.
*/
////

#include <iostream>

using namespace std;

class matrix
{
	private:
		static const int LIMIT = 10;
		int a[LIMIT][LIMIT];
	public:
		void putel(int index1, int index2, int value);
		int getel(int index1, int index2);
};

int main()
{
	matrix m;
	char ch;
	do
	{
		cout << "Enter \"p\" to enter an array element and \"g\" for conclusion: ";
		char sym;
		cin >> sym;
		switch(sym)
		{
			case 'p':
				int i1, i2, v;
				cout << "Enter index and value: ";
				cin >> i1 >> i2 >> v;
				m.putel(i1, i2, v);
				break;
			case 'g':
				int j1, j2, temp;
				cout << "Enter an array index: ";
				cin >> j1 >> j2;
				temp = m.getel(j1, j2);
				break;
			default:
				cout << "Input Error!\n";
		}
		cout << "Continue? (y/n): ";
		cin >> ch;
		cout << endl;
	} while(ch != 'n');
	return 0;
}

void matrix::putel(int index1, int index2, int value)
{
	if(0 <= index1 && index1 <= LIMIT - 1 && 0 <= index2 && index2 <= LIMIT - 1)
		a[index1][index2] = value;
	else
		cout << "The index is outOfBounds!\n";
}

int matrix::getel(int index1, int index2)
{
	int temp;
	if(0 <= index1 && index1 <= LIMIT - 1 && 0 <= index2 && index2 <= LIMIT - 1)
	{
		temp = a[index1][index2];
		cout << "[" << index1 << ", " << index2 << "] = " << temp << endl;
	}
	else
		cout << "The index is outOfBounds!\n";
	return temp;
}
/*
Refer back to the discussion of money strings in Exercise 6. Write a function called
ldtoms() to convert a number represented as type long double to the same value
represented as a money string. First you should check that the value of the original long
double is not too large. We suggest that you don’t try to convert any number greater than
9,999,999,999,999,990.00. Then convert the long double to a pure string (no dollar sign
or commas) stored in memory, using an ostrstream object, as discussed earlier in this
chapter. The resulting formatted string can go in a buffer called ustring.
You’ll then need to start another string with a dollar sign; copy one digit from ustring at
a time, starting from the left, and inserting a comma into the new string every three digits.
Also, you’ll need to suppress leading zeros. You want to display $3,124.95, for example,
not $0,000,000,000,003,124.95. Don’t forget to terminate the string with a ‘\0’ character.
Write a main() program to exercise this function by having the user repeatedly input
numbers in type long double format, and printing out the result as a money string.
*/
////

#include <iostream>
#include <string>
#include <sstream>
#include <iomanip>

using namespace std;

string ldtoms(long double sum);

int main()
{
	long double sum;
	char ch;
	do
	{
		cout << "Enter the amount of money: ";
		cin >> sum;
		string mss = ldtoms(sum);
		cout << "Amount equal to " << mss << endl;
		cout << "Continue? (y/n): ";
		cin >> ch;
		cout << endl;
	} while(ch != 'n');
	return 0;
}

string ldtoms(long double sum)
{
	stringstream ss (stringstream::in | stringstream::out);
	ss.setf(ios::fixed);
	ss << setprecision(2) << sum;
	string s = ss.str();
	s.insert(0, "$");
	int p = s.find('.') - 1, n = 0;
	for(int i = p; i > 0; i--)
		if(++n % 3 == 0)
			s.insert(i, ",");
	return s;
}
/*
Create a class called bMoney. It should store money amounts as long doubles. Use the
function mstold() to convert a money string entered as input into a long double, and
the function ldtoms() to convert the long double to a money string for display. (See
Exercises 6 and 10.) You can call the input and output member functions getmoney()
and putmoney(). Write another member function that adds two bMoney amounts; you can
call it madd(). Adding bMoney objects is easy: Just add the long double member data
amounts in two bMoney objects. Write a main() program that repeatedly asks the user to
enter two money strings, and then displays the sum as a money string.
*/
////

#include <iostream>
#include <string>
#include <sstream>
#include <iomanip>
#include <cmath>

using namespace std;

long double mstold(string s);
string ldtoms(long double sum);

class bMoney{
	private:
		long double money;
	public:
		bMoney() {money = 0;}
		bMoney(long double m) {money = m;};
		void madd(bMoney b1, bMoney b2);
		void getmoney(void);
		void putmoney(void);
};

int main(){
	bMoney b, sum;
	char ch;
	do{
		cout << "Enter the amount of money: ";
		b.getmoney();
		sum.madd(sum, b);
		cout << "Continue? (y/n): ";
		cin >> ch;
		cout << endl;
	} while(ch != 'n');
	sum.putmoney();
	return 0;
}

void bMoney::madd(bMoney b1, bMoney b2){
	money = b1.money + b2.money;
}

void bMoney::getmoney(void){
	string s;
	cin >> s;
	money = mstold(s);
}

void bMoney::putmoney(void){
	string s = ldtoms(money);
	cout << "Amount is equal " << s << endl;
}

long double mstold(string s){
	long double sum = 0;
	int p;
	for(int i = 1; i < s.size(); i++){
		if(48 <= static_cast<int>(s[i]) && static_cast<int>(s[i]) <= 57)
			sum = sum * 10 + static_cast<int>(s[i]) - 48;
		else if(s[i] == '.')
			p = i;
	}
	long double frac_part = pow(10, s.size() - 1 - p);
	sum /= frac_part;
	return sum;
}

string ldtoms(long double sum){
	stringstream ss (stringstream::in | stringstream::out);
	ss.setf(ios::fixed);
	ss << setprecision(2) << sum;
	string s = ss.str();
	s.insert(0, "$");
	int p = s.find('.') - 1, n = 0;
	for(int i = p; i > 0; i--)
		if(++n % 3 == 0)
			s.insert(i, ",");
	return s;
}


// 


















































// chapter 6























/*
Create a class that imitates part of the functionality of the basic data type int . Call the
class Int (note different capitalization). The only data in this class is an int variable.
Include member functions to initialize an Int to 0, to initialize it to an int value, to dis-
play it (it looks just like an int ), and to add two Int values.
Write a program that exercises this class by creating one uninitialized and two initialized
Int values, adding the two initialized values and placing the response in the uninitialized
value, and then displaying this result.
*/

// //

#include<iostream>

using namespace std;

class Int{
    private:
    int i;
    public:
    Int(){
        i = 0;
    }
    Int(int i1){
        i = i1;
    }
    void add(Int i2, Int i3){
        i = i2.i + i3.i;
    }
    void display(){
        cout << i << endl;
    }
};

int main(){
    Int i1(2);
    Int i2(7);
    Int i3;

    i3.add(i1, i2);
    i3.display();
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

// //

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
Create a class called time that has separate int member data for hours, minutes, and
seconds. One constructor should initialize this data to 0, and another should initialize it
to fixed values. Another member function should display it, in 11:59:59 format. The final
member function should add two objects of type time passed as arguments.
A main() program should create two initialized time objects (should they be const ?) and
one that isn’t initialized. Then it should add the two initialized values together, leaving the
result in the third time variable. Finally it should display the value of this third variable.
Make appropriate member functions const .
*/

// //

#include<iostream>

using namespace std;

class timee{
    private:
        int hrs, mins, secs;
    public:
        timee() : hrs(0), mins(0), secs(0){ }
        timee(int h, int m, int s){
            hrs = h;
            mins = m;
            secs = s;
        }
        void display() const{
            cout << hrs << ":" << mins << ":" << secs << endl;
        }
        void add_time(timee t1, timee t2){
            secs = t1.secs + t2.secs;
            if( secs > 59 ){
                secs -= 60; 
                mins++; 
            }
            mins += t1.mins + t2.mins;
            if( mins > 59 ){
                mins -= 60; 
                hrs++; 
            }
            hrs += t1.hrs + t2.hrs;
        }
};

int main(){
    const timee t1(2, 49, 30);
    const timee t2(3, 20, 15);
    timee t3;

    t3.add_time(t1, t2);

    cout << "Sum of: " << endl;
    t1.display();
    t2.display();
    cout << "is: ";
    t3.display();
    return 0;
}

/*
Create an employee class, basing it on Exercise 4 of Chapter 4. The member data should
comprise an int for storing the employee number and a float for storing the employee’s
compensation. Member functions should allow the user to enter this data and display it.
Write a main() that allows the user to enter data for three employees and display it.
*/

// //

#include<iostream>

using namespace std;

class employee {
	private:
		int emp_num;
        float emp_comp;
	public:
		employee(): emp_num(0), emp_comp(0)	{	}
		employee(int empNum, float empCom): emp_num(empNum), emp_comp(empCom){	}
		void setData();	
		void display() const;
};

void employee::setData() {	
	cout << "\nEnter employee Number: ";
	cin >> emp_num;
	cout << "Enter employee Compensation: ";
	cin >> emp_comp;
	cout << endl;
}

void employee::display() const {
	cout << "Employee Number: " << emp_num << endl;
	cout << "Employee Compensation: $" << emp_comp <<endl;
}

int main() {
	employee emp1, emp2;	
	employee emp3(12, 34.6);

	emp1.setData();	
	emp2.setData();	

	cout << "\nDetails of first employee: \n";
	emp1.display();	
	cout << "\nDetails of second employee: \n";
	emp2.display();	
	cout <<"\nDetails of third employee: \n";
	emp3.display();

	cout <<endl;
	return 0;
}

/*
Start with the date structure in Exercise 5 in Chapter 4 and transform it into a date
class. Its member data should consist of three int s: month , day , and year . It should also
have two member functions: getdate() , which allows the user to enter a date in
12/31/02 format, and showdate() , which displays the date.
*/

// //

#include<iostream>

using namespace std;

class date{
    private:
        int month, day, year;
        char temp;
    public:
        date(){ };
        void getData(){
            cout << "Enter date (MM/DD/YYYY): ";
            cin >> month >> temp >> day >> temp >> year;
        }
        void display(){
            cout << endl << "Date is " << month << "/" << day << "/" << year << endl;
        }
};

int main(){
    date d1;
    d1.getData();
    d1.display();
    return 0;
}

/*
Extend the employee class of Exercise 4 to include a date class (see Exercise 5) and an
etype enum (see Exercise 6 in Chapter 4). An object of the date class should be used to
hold the date of first employment; that is, the date when the employee was hired. The
etype variable should hold the employee’s type: laborer, secretary, manager, and so on.
These two items will be private member data in the employee definition, just like the
employee number and salary. You’ll need to extend the getemploy() and putemploy()
functions to obtain this new information from the user and display it. These functions will
probably need switch statements to handle the etype variable. Write a main() program that
allows the user to enter data for three employee variables and then displays this data.
*/

// //

#include<iostream>

using namespace std;

enum etype {laborer, secretary, manager, accountant, executive, researcher};	

class dates {	
	private:
		int day, month, year;
	public:
		void getDate(){
            char temp;
	        cout << "Enter employee date of joining in (DD/MM/YYYY) format: ";
	        cin >> day >> temp >> month >> temp >>year;
        }	
        void showDate(){
            cout << "\nEmployee date of joining: " << day << "/" << month << "/" <<year;
        }
};

class employee {
	private:
		int emp_num;
        float emp_comp;
        dates date1;
        etype emp;
	public:
		void setData();
        void dispData();
};

void employee::setData(){
    char type;
    cout << "\nEnter employee Number: ";
	cin >> emp_num;
	cout << "Enter employee Compensation: ";
	cin >> emp_comp;
    date1.getDate();
    cout << "Enter employee type (first letter only laborer, secretary, manager, accountant, executive, researcher): ";
    cin >> type;
    switch (type){
        case 'l': emp = laborer; break;
        case 's': emp = secretary; break;
        case 'm': emp = manager; break;
        case 'a': emp = accountant; break;
        case 'e': emp = executive; break;
        case 'r': emp = researcher; break;
        default:
            break;
    }
}

void employee::dispData(){
    cout << "Employee Number: " << emp_num << endl;
	cout << "Employee Compensation: $" << emp_comp <<endl;
    date1.showDate();
    cout << endl;
    switch(emp){
        case laborer:
            cout << "Employee type is laborer";
            break;
        case secretary:
            cout << "Employee type is secretary";
            break;
        case manager:
            cout << "Employee type is manager";
            break;
        case accountant:
            cout << "Employee type is accountant";
            break;
        case executive:
            cout << "Employee type is executive";
            break;
        case researcher:
            cout << "Employee type is researcher";
            break;
        default:
            cout << "Invalid input";
            break;
    }
    cout << endl;
}

int main(){
    employee emp1, emp2, emp3;
	cout <<"\nEnter first employee details: \n";
	emp1.setData();	
	cout <<"\nEnter second employee details: \n";
	emp2.setData();	
	cout <<"\nEnter third employee details: \n";
	emp3.setData();	

	cout <<"\nFirst employee deatils: ";
	emp1.dispData();
	cout <<"\nSecond employee deatils: ";
	emp2.dispData();
	cout <<"\nThird employee deatils: ";
	emp3.dispData();
    
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

// //

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

/*
Create a class that includes a data member that holds a “serial number” for each object
created from the class. That is, the first object created will be numbered 1, the second 2,
and so on.
To do this, you’ll need another data member that records a count of how many objects
have been created so far. (This member should apply to the class as a whole; not to
individual objects. What keyword specifies this?) Then, as each object is created, its
constructor can examine this count member variable to determine the appropriate serial
number for the new object.
Add a member function that permits an object to report its own serial number. Then
write a main() program that creates three objects and queries each one about its serial
number. They should respond I am object number 2 , and so on.
*/

// //

#include <iostream>

using namespace std;

class serailCount{
	private:
		static int count;	
		unsigned int serialNumber;
	public:
		serailCount() {
			count++;
			serialNumber = count;
		}
		void display() const;
};

int serailCount::count = 0;	

void serailCount::display() const { 
	cout << "I am object number " << serialNumber << endl;
}

int main() {
	serailCount obj1, obj2, obj3;
	obj1.display();
	obj2.display();
	obj3.display();
	return 0;
}

/*
Transform the fraction structure from Exercise 8 in Chapter 4 into a fraction class.
Member data is the fraction’s numerator and denominator. Member functions should
accept input from the user in the form 3/5 , and output the fraction’s value in the same
format. Another member function should add two fraction values. Write a main() program
that allows the user to repeatedly input two fractions and then displays their sum. After
each operation, ask whether the user wants to continue.
*/

// //

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
Create a class called ship that incorporates a ship’s number and location. Use the
approach of Exercise 8 to number each ship object as it is created. Use two variables of
the angle class from Exercise 7 to represent the ship’s latitude and longitude. A member
function of the ship class should get a position from the user and store it in the object;
another should report the serial number and position. Write a main() program that cre-
ates three ships, asks the user to input the position of each, and then displays each ship’s
number and position.
*/

// //

#include<iostream>

using namespace std;

class angle{
    int degrees;
    float minutes;
    char direction;
    public:
        void getAngle();
        void dispAngle() const;
};

class ship {
    private:
		angle latitude, longitude;
		static int count;
		unsigned int shipNumber;
	public:
		ship() {	
			count++;
			shipNumber = count;
		}
		void getPosition();	
		void display() const; 
};

int ship::count = 0;	//defination of count

void angle::getAngle(){
    cout << "\nEnter degrees: ";
	cin >> degrees;
	cout << "Enter minutes: ";
	cin >> minutes;
	cout << "Enter directions(E, W, N, S): ";
	cin >> direction;
}

void ship::getPosition() {	
	cout << "\nEnter longitude of ship: ";
	longitude.getAngle();
	cout << "\nEnter latitude of ship: ";
	latitude.getAngle();
}

void ship::display() const{	
	cout << "Ship Serial Number: " << shipNumber << endl;
	longitude.dispAngle();
	cout << endl;
	latitude.dispAngle();
    cout << endl;
}

void angle::dispAngle() const{
	cout << degrees << "\xF8" << minutes << "\' " << direction;
	if(direction == 'E' || direction == 'e' || direction == 'W' || direction == 'w') {
		cout << " Longitude !";
	} if(direction == 'N' || direction == 'n' || direction == 'S' || direction == 's') {
		cout << " Latitude !";
	}
}

int main(){
    ship ship1, ship2, ship3;	
	cout <<"\nEnter first ship position: ";
	ship1.getPosition();	
	cout <<"\nEnter second ship position: ";
	ship2.getPosition();	
	cout <<"\nEnter third ship position: ";
	ship3.getPosition();

	cout <<"\nFirst Ship Position is: \n";
	ship1.display();	
	cout <<"\nSecond Ship Position is: \n";
	ship2.display();
	cout <<"\nThird Ship Position is: \n";
	ship3.display();	

    return 0;
}

/*
Modify the four-function fraction calculator of Exercise 12 in Chapter 5 to use a
fraction class rather than a structure. There should be member functions for input and
output, as well as for the four arithmetical operations. While you’re at it, you might as
well install the capability to reduce fractions to lowest terms. Here’s a member function
that will reduce the fraction object of which it is a member to lowest terms. It finds the
greatest common divisor (gcd) of the fraction’s numerator and denominator, and uses this
gcd to divide both numbers.
*/

// //

#include<iostream>

using namespace std;

class calF{
    int num, den;
    public:
        calF():num(0), den(0)
			{	}
		void getFraction();		
		void arithOperation(calF, calF, char);
		void dispFraction() const;
		void lowTerms();
};

void calF::getFraction() {
	char temp;
	cout << "\nEnter a fraction in a/b form: ";
	cin >> num >> temp >> den;
}


void calF::arithOperation(calF frac1, calF frac2, char operatr) {
	
	switch(operatr) {
		case '+':
			cout << "\nAddition of two fraction is: ";
			num = (frac1.num * frac2.den) + (frac1.den * frac2.num);
			den = frac1.den * frac2.den;
		break;

		case '-':	
			cout <<"\nSubtraction of two fraction is: ";
			num = (frac1.num * frac2.den) - (frac1.den * frac2.num);
			den = frac1.den * frac2.den;
		break;

		case '*':	
			cout <<"\nMultiplication of two fraction is: ";
			num = frac1.num * frac2.num;
			den = frac1.den * frac2.den;
		break;

		case '/':	
			cout <<"\nDivision of two fraction is: ";
			num = frac1.num * frac2.den;
			den = frac1.den * frac2.num;
		break;

	}
}

void calF::dispFraction() const{	
	cout << num << "/" << den;
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
	cout <<num <<"/" <<den;
	cout <<endl;
}
int main(){
	calF fraction1, fraction2, fraction3;	
	char oprt;
	cout <<"\nEnter first fraction: ";
	fraction1.getFraction();
	cout <<"\nEnter second fraction: ";
	fraction2.getFraction();
	cout <<"\nEnter an operator for arithmatic operation: ";
	cin >>oprt;
	fraction3.arithOperation(fraction1, fraction2, oprt);
	fraction3.dispFraction();
	cout <<"\nLoswest terms of fraction is: ";
	fraction3.lowTerms();
	
	return 0;
}

/*
Note that one advantage of the OOP approach is that an entire class can be used, without
modification, in a different program. Use the fraction class from Exercise 11 in a pro-
gram that generates a multiplication table for fractions. Let the user input a denominator,
and then generate all combinations of two such fractions that are between 0 and 1, and
multiply them together. Here’s an example of the output if the denominator is 6
*/

// //

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




































// chapter 5









































/*
Refer to the CIRCAREA program in Chapter 2, “C++ Programming Basics.” Write a func-
tion called circarea() that finds the area of a circle in a similar way. It should take an
argument of type float and return an argument of the same type. Write a main() func-
tion that gets a radius value from the user, calls circarea() , and displays the result.
*/

//// 

#include<iostream>

using namespace std;

float circarea(float r){
    const float PI =  3.14159F;
    return PI * r * r;
}

int main(){
    double radius;
    cout << "Enter radius of the circle: ";
    cin >> radius;
    cout << "Area is " << circarea(radius) << endl;
    return 0;
}
/*
Raising a number n to a power p is the same as multiplying n by itself p times. Write a
function called power() that takes a double value for n and an int value for p , and
returns the result as a double value. Use a default argument of 2 for p , so that if this
argument is omitted, the number n will be squared. Write a main() function that gets val-
ues from the user to test this function.
*/

////

#include <iostream>
using namespace std;
void repchar(char='*', int=45);

double power(double n, int p = 2);

int main(){
    double n, ans;
    int p;
    char choice;
    cout << "Enter a number: ";
    cin >> n;
    cout << "You want to input power(y/n) or default will be squared: ";
    cin >> choice;

    if(choice == 'y'){
        cout << "Enter power: ";
        cin >> p;
        ans = power(n, p);
    }else{
        ans = power(n);
    }
    cout << "Answer: " << ans << endl;
    return 0;
}

double power(double n, int p){
    double ans = 1;
    for(int i = 0; i<p; i++)
        ans *= n;
    return ans;
}

/*
Write a function called zeroSmaller() that is passed two int arguments by reference
and then sets the smaller of the two numbers to 0. Write a main() program to exercise
this function.
*/

////

#include <iostream>
using namespace std;

void Smaller(int& x, int& y);

int main(){
    
    int a = 3, b = 8, c = 10, d = 12;

    Smaller(a, b);
    Smaller(c, d);

    cout << endl << "a = " << a << " b = " << b << endl;
    cout << "c = " << c << " d = " << d << endl;
    
    return 0;
}

void Smaller(int& x, int& y){
    if(x < y)
        x = 0;
    else
        y = 0;    
}
/*
Write a function that takes two Distance values as arguments and returns the larger one.
Include a main() program that accepts two Distance values from the user, compares
them, and displays the larger. (See the RETSTRC program for hints.)
*/

////

#include <iostream>
using namespace std;

struct Distance{
    int feet;
    float inches;
};

Distance bigD(Distance, Distance);
void display(Distance);

int main(){
    Distance d1, d2, d3;
    cout << "\nEnter feet: ";
    cin >> d1.feet;
    cout << "Enter inches: ";
    cin >> d1.inches;
    cout << "\nEnter feet: ";
    cin >> d2.feet;
    cout << "Enter inches: ";
    cin >> d2.inches;

    d3 = bigD(d1, d2);

    cout << endl << "d1 = ";
    display(d1);
    cout << endl << "d2 = ";
    display(d2);
    cout << endl << "Largest is ";
    display(d3);
    cout << endl;
    return 0;
}

Distance bigD(Distance d1, Distance d2){
    if(d1.feet > d2.feet)
        return d1;
    if(d1.feet < d2.feet)
        return d2;
    if(d1.inches > d2.inches) 
        return d1;
    else
        return d2;
}
void display( Distance d ){
    cout << d.feet << "\'-" << d.inches << "\"";
}
/*
Write a function called hms_to_secs() that takes three int values—for hours, minutes,
and seconds—as arguments, and returns the equivalent time in seconds (type long ).
Create a program that exercises this function by repeatedly obtaining a time value in
hours, minutes, and seconds from the user (format 12:59:59), calling the function, and
displaying the value of seconds it returns.
*/

////

#include <iostream>
using namespace std;

float hms_to_secs(int , int, int);

int main(){
    char ch, temp;
    int hrs, mins, secs;
    do{
        cout << "Enter time (HH:MM:SS): ";
        cin >> hrs >> temp >> mins >> temp >> secs;
        float totalSec = hms_to_secs(hrs, mins, secs);
        cout << "Total seconds: " << totalSec << endl;

        cout << "Want to try again(y/n): ";
        cin >> ch;
    }while(ch == 'y');
    cout << "\nExit" endl;
    return 0;
}

float hms_to_secs(int hrs, int mins, int secs){
    float totalSecs = 3600 * hrs + 60 * mins + secs;
    return totalSecs;
}
/*
Start with the program from Exercise 11 in Chapter 4, “Structures,” which adds two
struct time values. Keep the same functionality, but modify the program so that it uses
two functions. The first, time_to_secs() , takes as its only argument a structure of type time ,
and returns the equivalent in seconds (type long ). The second function,
takes as its only argument a time in seconds (type long ), and returns a
structure of type time .
*/

////

#include <iostream>
using namespace std;

struct timee {
	int hours, minutes, seconds;
};

long time_to_secs(timee);
timee secs_to_time(long);

int main(){
    timee time1, time2;
    char temp;
    long secTime;
    
    cout << "Enter hours: ";
    cin >> time1.hours;
    
    cout << "Enter minutes: ";
    cin >> time1.minutes; 
    
    cout << "Enter seconds: ";
    cin >> time1.seconds;

    cout << "Equivalent in seconds: " << time_to_secs(time1) << endl;

    cout << endl << "Enter time in seconds: ";
    cin >> secTime;

    time2 = secs_to_time(secTime);

    cout << "Equivalent in HH:MM:SS format: " << time2.hours << ":" << time2.minutes << ":" << time2.seconds << endl;

    return 0;
}

long time_to_secs(timee time1) {
	return time1.hours*3600 + time1.minutes*60 + time1.seconds;
}

timee secs_to_time(long tt) {
	int hh, mm, ss;
	timee time2;
	mm = tt/60;
	ss = tt%60;
	hh = mm/60;
	mm = mm%60;

	time2.hours = hh;
	time2.minutes = mm;
	time2.seconds = ss;

	return time2;
}
/*
Start with the power() function of Exercise 2, which works only with type double .
Create a series of overloaded functions with the same name that, in addition to double ,
also work with types char , int , long , and float . Write a main() program that exercises
these overloaded functions with all argument types.
*/

////

#include <iostream>
using namespace std;

double power(double, int=2);
char power(char, int=2);
int power(int, int=2);
long power(long, int=2);
float power(float, int=2);

int main(){
    double num1;
	char num2;
	int num3;
	long num4;
	float num5;

	cout << "Enter a double value: ";
	cin >>num1;
	cout << "Power of " << num1 << " is: " <<power(num1) << endl;

	cout << "\nEnter a char value: ";
	cin >>num2;
	cout << "Power of " << num2 << " is: " << power(num2) << endl;

	cout << "\nEnter a int value: ";
	cin >> num3;
	cout << "Power of " << num3 << " is: " << power(num3) << endl;

	cout << "\nEnter a long value: ";
	cin >> num4;
	cout << "Power of " << num4 << " is: " << power(num4) << endl;

	cout << "\nEnter a float value: ";
	cin >> num5;
	cout << "Power of " << num5 << " is: " << power(num5) << endl;

    return 0;
}

double power(double dd, int p) {
	double power = 1;
	for(int i=1; i<=p; i++)
		power *= dd;
	return power;
}


char power(char ch, int p) {
	char power = 1;
	for(int i=1; i<=p; i++)
		power *= ch;
	return power;
}


int power(int no1, int p) {
	int power = 1;
	for(int i=1; i<=p; i++) 
		power *= no1;
	return power;
}


long power(long numb, int p) {
	long power = 1;
	for (int i=1; i<=p; i++)
		power *= numb;
	return power;
}


float power(float number, int p) {
	float power = 1.0;
	for (int i=1; i<=p; i++)
		power *= number;
	return power;
}
/*
Write a function called swap() that interchanges two int values passed to it by the call-
ing program. (Note that this function swaps the values of the variables in the calling pro-
gram, not those in the function.) You’ll need to decide how to pass the arguments. Create
a main() program to exercise the function
*/

////

#include <iostream>
using namespace std;

void swap(int&, int&);

int main(){
    int x, y;
    cout << "Enter 2 numbers to swap" << endl;
    cout << "X: ";
    cin >> x;
    cout << "Y: ";
    cin >> y;
    swap(x, y);
    cout << "After swap:" << endl;
    cout << "X: " << x << "\nY: " << y << endl;
    return 0;
}

void swap(int& x, int& y){
    x = x+y;
    y = x-y;
    x = x-y;
}
/*
Repeat Exercise 8, but instead of two int variables, have the swap() function inter-
change two struct time values (see Exercise 6).
*/

////

#include <iostream>
using namespace std;

struct timee{
    int hours, mins, secs;
};

void swap(timee&, timee&);

int main(){
    timee time1, time2;
    cout << "Values for Time-1" << endl;
    cout << "Enter hours: ";
    cin >> time1.hours;
    
    cout << "Enter minutes: ";
    cin >> time1.mins; 
    
    cout << "Enter seconds: ";
    cin >> time1.secs;

    cout << "Values for Time-2" << endl;
    cout << "Enter hours: ";
    cin >> time2.hours;
    
    cout << "Enter minutes: ";
    cin >> time2.mins; 
    
    cout << "Enter seconds: ";
    cin >> time2.secs;

    swap(time1, time2);
    cout << "After swap:" << endl;
    cout << "Equivalent in HH:MM:SS format\nTime-1: " << time1.hours << ":" << time1.mins << ":" << time1.secs << "\nTime-2: " << time2.hours << ":" << time2.mins << ":" << time2.secs << endl;
    return 0;
}

void swap(timee& time1, timee& time2){
    time1.hours = time1.hours+time2.hours;
    time2.hours = time1.hours-time2.hours;
    time1.hours = time1.hours-time2.hours;

    time1.mins = time1.mins+time2.mins;
    time2.mins = time1.mins-time2.mins;
    time1.mins = time1.mins-time2.mins;
    
    time1.secs = time1.secs+time2.secs;
    time2.secs = time1.secs-time2.secs;
    time1.secs = time1.secs-time2.secs;
}

/*
Write a function that, when you call it, displays a message telling how many times it has
been called: “I have been called 3 times”, for instance. Write a main() program that calls
this function at least 10 times. Try implementing this function in two different ways.
First, use a global variable to store the count. Second, use a local static variable. Which
is more appropriate? Why can’t you use a local variable?
*/

////

#include <iostream>
using namespace std;

int count=0;

void globalVar();
int localVar();

int main(){
    for(int i=0; i<10; i++){
        globalVar();
    }
    for(int j=0; j<5; j++){
        localVar();
    }
    int lCount = localVar();
    cout << "Using global variable count = " << count << endl;
    cout << "Using local variable count = " << lCount << endl;
    return 0;
}

void globalVar(){
    count++;
}

int localVar(){
    static int lCount = 0;
    lCount++;
    return lCount;
}

/*
Write a program, based on the sterling structure of Exercise 10 in Chapter 4, that
obtains from the user two money amounts in old-style British format (£9:19:11), adds
them, and displays the result, again in old-style format. Use three functions. The first
should obtain a pounds-shillings-pence value from the user and return the value as a
structure of type sterling. The second should take two arguments of type sterling and
return a value of the same type, which is the sum of the arguments. The third should take
a sterling structure as its argument and display its value.
*/

////

#include <iostream>
using namespace std;

struct sterling{
    int pound, shilling, pence; 
};

sterling BritishCurrency(int, int, int);
sterling sterlingfunc(sterling, sterling);
void sterlingDisp(sterling);

int main() {
	int pound, shilling, pence;
	sterling firstValue, secondValue;
	sterling s1 = {2, 10, 5};
	cout <<"\nEnter pound: "; cin >>pound;
	cout <<"Enter shilling: "; cin >>shilling;
	cout <<"Enter pence: "; cin >>pence;
	firstValue = BritishCurrency(pound, shilling, pence);
	secondValue = sterlingfunc(firstValue, s1);
	cout <<"\nFirst value is: "; sterlingDisp(firstValue);
	cout <<"\nSecond value is: "; sterlingDisp(s1);
	cout <<"\nSum of above values is: "; sterlingDisp(secondValue);
	cout <<endl;
	return 0;
}

sterling  BritishCurrency(int pnd, int shl, int pen) {
	sterling currency;
	currency.pound = pnd;
	currency.shilling = shl;
	currency.pence = pen;
	return currency;
}

sterling sterlingfunc(sterling ss1, sterling ss2) {
	sterling result;
	result.pound = ss1.pound + ss2.pound;
	result.shilling = ss1.shilling + ss2.shilling;
	result.pence = ss1.pence + ss2.pence;
	
	if(result.pence > 11) {
		result.shilling += result.pence/12;
		result.pence = result.pence%12;
	}

	if(result.shilling > 19) {
		result.pound += result.shilling/20;
		result.shilling = result.shilling%20;
	}
	return result;
}

void sterlingDisp(sterling valueDisp) {
	cout << "£" << valueDisp.pound << ":" << valueDisp.shilling << ":" << valueDisp.pence;
}

/*
Revise the four-function fraction calculator from Exercise 12, Chapter 4, so that it uses
functions for each of the four arithmetic operations. They can be called fadd() , fsub() ,
fmul() , and fdiv() . Each of these functions should take two arguments of type struct
fraction , and return an argument of the same type.
*/

////

#include<iostream>

using namespace std;

struct fraction{
	int num, den;
};

fraction fadd(fraction, fraction);
fraction fsub(fraction, fraction);
fraction fmul(fraction, fraction);
fraction fdiv(fraction, fraction);


int main(){
	char ch;
    fraction num1, num2, num3;
	do{
		char temp, option;
		cout << "Enter first fraction: ";
	    cin >> num1.num >> temp >> num1.den;
		cout << "Operation: ";
		cin >> option;
		cout << "Enter second fraction: ";
	    cin >> num2.num >> temp >> num2.den;

		switch(option){
			case '+':
                num3 = fadd(num1, num2);
				cout << "Sum is: " << num3.num << "/" << num3.den << endl;
				break;
			case '-':
				num3 = fsub(num1, num2);
				cout << "On Subtraction: " << num3.num << "/" << num3.den << endl;
				break;
			case '*':
				num3 = fmul(num1, num2);
				cout << "Multiplication is: " << num3.num << "/" << num3.den << endl;
				break;
			case '/':
				num3 = fdiv(num1, num2);
				cout << "Division is: " << num3.num << "/" << num3.den << endl;
				break;
			default:
				cout << "Invalid option";
				break;
		
		}
		cout << "Do you want to continue (y/n): ";
		cin >> ch;
	}while(ch == 'y');
	
	return 0;
}

fraction fadd(fraction num1, fraction num2){
    fraction num3;
    num3.num = num1.num * num2.den + num1.den * num2.num;
	num3.den = num1.den * num2.den;
    return num3;
}
fraction fsub(fraction num1, fraction num2){
    fraction num3;
    num3.num = num1.num * num2.den - num1.den * num2.num;
    num3.den = num1.den * num2.den;
    return num3;
}
fraction fmul(fraction num1, fraction num2){
    fraction num3;
    num3.num = num1.num * num2.num;
    num3.den = num1.den * num2.den;
    return num3;
}
fraction fdiv(fraction num1, fraction num2){
    fraction num3;
    num3.num = num1.num * num2.den;
    num3.den = num1.den * num2.num;
    return num3;
}

























// chapter 4






























/*
A phone number, such as (212) 767-8900, can be thought of as having three parts: the
area code (212), the exchange (767), and the number (8900). Write a program that uses a
structure to store these three parts of a phone number separately. Call the structure
phone . Create two structure variables of type phone . Initialize one, and have the user
input a number for the other one. Then display both numbers.
*/

////

#include<iostream>

using namespace std;

struct phone{
	int areacode, exchange, number;
};

int main(){
	phone phone1, phone2;

	phone1.areacode = 212;
	phone1.exchange = 767;
	phone1.number = 8900;
	
	cout << "Enter your areacode, exchange, and number: ";
	cin >> phone2.areacode >> phone2.exchange >> phone2.number;
	
	cout << "My number is (" << phone1.areacode << ") " << phone1.exchange << "-" << phone1.number << endl;
	cout << "Your number is (" << phone2.areacode << ") " << phone2.exchange << "-" << phone2.number << endl;
	return 0;
}
/*
Write a program that uses a structure called point to model a point. Define three points,
and have the user input values to two of them. Then set the third point equal to the sum
of the other two, and display the value of the new point.
*/

////

#include<iostream>

using namespace std;

struct point{
	int x, y;
};

int main(){
	point p1, p2, p3;
	
	cout << "Enter cordinates for p1: ";
	cin >> p1.x >> p1.y;
	cout << "Enter cordinates for p2: ";
	cin >> p2.x >> p2.y;
	
	p3.x = p1.x + p2.x;
	p3.y = p1.y + p2.y;
	
	cout << "Coordinates of p1+p2 are: " << p3.x << ", " << p3.y << endl;
	return 0;
}
/*
Create a structure called Volume that uses three variables of type Distance (from the
ENGLSTRC example) to model the volume of a room. Initialize a variable of type Volume
to specific dimensions, then calculate the volume it represents, and print out the result.
To calculate the volume, convert each dimension from a Distance variable to a variable
of type float representing feet and fractions of a foot, and then multiply the resulting
three numbers.
*/

// //

#include<iostream>

using namespace std;

struct Distance{
	int feet;
	float inch;
};

struct Volume{
	Distance length, width, height;
};

int main(){
	float len, wid, hei;
	Volume room1 = {{13, 2.5}, {11, 5.5}, {5,2.5}};

	len = room1.length.feet+ room1.length.inch/12;
	wid = room1.width.feet+ room1.width.inch/12;
	hei = room1.height.feet+ room1.height.inch/12;
	
	cout << "Volume = " << len * wid * hei << " cubic feet" << endl;
	return 0;
}
/*
Create a structure called employee that contains two members: an employee number
(type int) and the employee’s compensation (in dollars; type float). Ask the user to fill
in this data for three employees, store it in three variables of type struct employee, and
then display the information for each employee.
*/
////

#include<iostream>
using namespace std;

struct employee{
    int emp_num;
    float emp_comp;
};

int main(){
    employee e1, e2, e3;
    cout << "Enter employee details: " << endl;

    cout << endl << "Employee 1\nEmployee number: ";
    cin >> e1.emp_num;
    cout << "Employee's compensation: ";
    cin >> e1.emp_comp;

    cout << endl << "Employee 2\nEmployee number: ";
    cin >> e2.emp_num;
    cout << "Employee's compensation: ";
    cin >> e2.emp_comp;

    cout << endl << "Employee 3\nEmployee number: ";
    cin >> e3.emp_num;
    cout << "Employee's compensation: ";
    cin >> e3.emp_comp;

    cout << endl << "Employee Details: ";
    cout << endl<< "Employee 1\nEmployee number: " << e1.emp_num << "\nEmployee's compensation: " << e1.emp_comp << endl;
    cout << endl<< "Employee 2\nEmployee number: " << e2.emp_num << "\nEmployee's compensation: " << e2.emp_comp << endl;
    cout << endl<< "Employee 3\nEmployee number: " << e3.emp_num << "\nEmployee's compensation: " << e3.emp_comp << endl;

    return 0;
}
/*
Create a structure of type date that contains three members: the month, the day of the
month, and the year, all of type int. (Or use day-month-year order if you prefer.) Have
the user enter a date in the format 12/31/2001, store it in a variable of type struct date,
then retrieve the values from the variable and print them out in the same format.
*/

////

#include<iostream>
using namespace std;

struct date{
		int month, day, year;
};

int main(){
	char temp;
	date date1;
	cout << "Enter date (MM/DD/YYYY): ";
	cin >> date1.month >> temp >> date1.day >> temp >> date1.year;
	cout << endl << "Date is " << date1.month << "/" << date1.day << "/" << date1.year << endl;
    return 0;
}
/*
Write a program that first allows the user to specify a type by entering its first letter
( ‘l’ , ‘s’ , ‘m’ , and so on), then stores the type chosen as a value of a variable of type
enum etype , and finally displays the complete word
*/

////

#include<iostream>

using namespace std;

enum etype {laborer, secretary, manager, accountant, executive, researcher};

int main(){
    etype etype1;
    char type;
    cout << "Enter employee type (first letter only laborer, secretary, manager, accountant, executive, researcher): ";
    cin >> type;
    switch (type){
        case 'l': etype1 = laborer; break;
        case 's': etype1 = secretary; break;
        case 'm': etype1 = manager; break;
        case 'a': etype1 = accountant; break;
        case 'e': etype1 = executive; break;
        case 'r': etype1 = researcher; break;
        default:
            break;
    }
    switch(etype1){
        case laborer:
            cout << "Employee type is laborer";
            break;
        case secretary:
            cout << "Employee type is secretary";
            break;
        case manager:
            cout << "Employee type is manager";
            break;
        case accountant:
            cout << "Employee type is accountant";
            break;
        case executive:
            cout << "Employee type is executive";
            break;
        case researcher:
            cout << "Employee type is researcher";
            break;
        default:
            cout << "Invalid input";
            break;
    }
    cout << endl;
    return 0;
}

/*
Write a program that first allows the user to specify a type by entering its first letter
( ‘l’ , ‘s’ , ‘m’ , and so on), then stores the type chosen as a value of a variable of type
enum etype , and finally displays the complete word
*/

////

#include<iostream>

using namespace std;

enum etype {laborer, secretary, manager, accountant, executive, researcher};

struct date {
	int month, day, year;
};

struct employee {
	int emp_num;
	float emp_compen;
	date mdy;
	etype emp_type;
};

int main(){
    employee emp1, emp2, emp3;
	char e_type;
    char temp;
	cout <<"\nEnter the first employee details: ";
	cout <<"\nEnter employee number: ";
	cin >>emp1.emp_num;
	cout <<"Enter employee compensation: ";
	cin >>emp1.emp_compen;
	cout <<"Enter employee type(l, s, m, a, e, r): ";
	cin >>e_type;

	switch(e_type) {
		case 'l':
	    	emp1.emp_type = laborer;
		    break;

		case 's':
		    emp1.emp_type = secretary;
		    break;

		case 'm':
		    emp1.emp_type = manager;
		    break;

		case 'a':
    		emp1.emp_type = accountant;
		    break;

    	case 'e':
	    	emp1.emp_type = executive;
		    break;

		case 'r':
		    emp1.emp_type = researcher;
    		break;

		default:
	    	cout <<"Invalid Input!";
	}

	cout <<"Enter date of first employment (MM/DD/YY): ";
	cin >>emp1.mdy.month >> temp >> emp1.mdy.day >> temp >> emp1.mdy.year;

	cout <<"\nEnter the second employee details: ";
	cout <<"\nEnter employee number: ";
	cin >>emp2.emp_num;
	cout <<"Enter employee compensation: ";
	cin >>emp2.emp_compen;
	cout <<"Enter employee type(l, s, m, a, e, r): ";
	cin >>e_type;

	switch(e_type) {
		case 'l':
            emp2.emp_type = laborer;
            break;

		case 's':
            emp2.emp_type = secretary;
            break;

		case 'm':
            emp2.emp_type = manager;
            break;

		case 'a':
            emp2.emp_type = accountant;
            break;

		case 'e':
            emp2.emp_type = executive;
            break;

		case 'r':
            emp2.emp_type = researcher;
            break;

		default:
    		cout <<"Invalid Input!";
	}
	cout <<"Enter date of first employment (MM/DD/YY): ";
	cin >>emp2.mdy.month >> temp >> emp2.mdy.day >> temp >> emp2.mdy.year;

	cout <<"\nEnter the third employee details: ";
	cout <<"\nEnter employee number: ";
	cin >>emp3.emp_num;
	cout <<"Enter employee compensation: ";
	cin >>emp3.emp_compen;
	cout <<"Enter employee type(l, s, m, a, e, r): ";
	cin >>e_type;

	switch(e_type) {
		case 'l':
            emp3.emp_type = laborer;
            break;

		case 's':
            emp3.emp_type = secretary;
            break;

		case 'm':
            emp3.emp_type = manager;
            break;

		case 'a':
            emp3.emp_type = accountant;
            break;

		case 'e':
            emp3.emp_type = executive;
            break;

		case 'r':
            emp3.emp_type = researcher;
            break;

		default:
    		cout <<"Invalid Input!";
	}
	cout <<"Enter date of first employment (MM/DD/YY): ";
	cin >>emp3.mdy.month >> temp >> emp3.mdy.day >> temp >> emp3.mdy.year;

	cout <<"\nDetails of first employee: ";
	cout <<"\nEmployee number: " <<emp1.emp_num;
	cout <<"\nEmployee compensation: " <<emp1.emp_compen;
	cout <<"\nEmployee type is: ";
	switch(emp1.emp_type) {
		case laborer:
            cout <<"Laborer";
            break;

		case secretary:
            cout <<"Secretary";
            break;

		case manager:
            cout <<"Manager";
            break;

		case accountant:
            cout <<"Accountant";
            break;

		case executive:
            cout <<"Executive";
            break;
        
        case researcher:
            cout <<"Researcher";
            break;

		default:
    		cout <<"No match found!";
	}

	cout <<"\nEmployee date of first employment: " <<emp1.mdy.month <<"/" <<emp1.mdy.day <<"/" <<emp1.mdy.year <<endl;

	cout <<"\nDetails of second employee: ";
	cout <<"\nEmployee number: " <<emp2.emp_num;
	cout <<"\nEmployee compensation: " <<emp2.emp_compen;
	cout <<"\nEmployee type is: ";
	switch(emp2.emp_type) {
		case laborer:
            cout <<"Laborer";
            break;

		case secretary:
            cout <<"Secretary";
            break;

		case manager:
            cout <<"Manager";
            break;

		case accountant:
            cout <<"Accountant";
            break;

		case executive:
            cout <<"Executive";
            break;

        case researcher:
            cout <<"Researcher";
            break;

		default:
    		cout <<"No match found!";
	}
	cout <<"\nEmployee date of first employment: " <<emp2.mdy.month <<"/" <<emp2.mdy.day <<"/" <<emp2.mdy.year <<endl;

	cout <<"\nDetails of first employee: ";
	cout <<"\nEmployee number: " <<emp3.emp_num;
	cout <<"\nEmployee compensation: " <<emp3.emp_compen;
	cout <<"\nEmployee type is: ";
	switch(emp3.emp_type) {
		case laborer:
            cout <<"Laborer";
            break;

		case secretary:
            cout <<"Secretary";
            break;

		case manager:
            cout <<"Manager";
            break;

		case accountant:
            cout <<"Accountant";
            break;

		case executive:
            cout <<"Executive";
            break;

        case researcher:
            cout <<"Researcher";
            break;

		default:
		cout <<"No match found!";
	}
	cout <<"\nEmployee date of first employment: " <<emp3.mdy.month <<"/" <<emp3.mdy.day <<"/" <<emp3.mdy.year <<endl;

	return 0;
}
/*
Modify the program so that all fractions are stored in variables of type struct fraction , whose two members are the fraction’s numerator and denominator (both type int ). All fraction-related data should be stored in structures of this type.
*/

////

#include<iostream>

using namespace std;

struct fraction{
	int num, den;
};

int main(){
	fraction num1, num2, num3;
	char temp;
	cout << "Enter first fraction: ";
	cin >> num1.num >> temp >> num1.den;
	cout << "Enter second fraction: ";
	cin >> num2.num >> temp >> num2.den;
  
	num3.num = num1.num * num2.den + num1.den * num2.num;
	num3.den = num1.den * num2.den;
	cout << "Sum is: " << num3.num << "/" << num3.den << endl;
    
	return 0;
}
/*
Create a structure called time . Its three members, all type int , should be called hours , minutes , and seconds . Write a program that prompts the user to enter a time value in hours, minutes, and seconds. This can be in 12:59:59 format, or each number can be entered at a separate prompt (“Enter hours:”, and so forth). The program should then store the time in a variable of type struct time , and finally print out the total number of
seconds represented by this time value.
*/

////

#include<iostream>

using namespace std;

struct timee{
    int hours, mins, secs;
};

int main(){
    timee time1;
    char temp;
    cout << "Enter time in format (HH:MM:SS): ";
    cin >> time1.hours >> temp >> time1.mins >> temp >> time1.secs;
    
    int total_secs = time1.hours * 3600 + time1.mins * 60 + time1.secs;
    cout << "Total seconds in " << time1.hours << ":" << time1.mins << ":" << time1.secs << " are: " << total_secs << endl;
    return 0;
}
/*
Create a structure called sterling that stores money amounts in the old-style British system discussed in Exercises 8 and 11 in Chapter 3, “Loops and Decisions.” The members could be called pounds , shillings , and pence , all of type int . The program should ask the user to enter a money amount in new-style decimal pounds (type double ), convert it to the old-style system, store it in a variable of type struct sterling , and then display this amount in pounds-shillings-pence format.
*/

////

#include<iostream>

using namespace std;

struct sterling{
    int pounds, shillings, pence; 
};

int main(){
    sterling amt;
    float dPounds;
	cout << "Enter Decimal pounds: ";
	cin >> dPounds;

	amt.pounds = static_cast<int>(dPounds);
	float fracPounds = dPounds - amt.pounds;

	float dShillings =  fracPounds * 20;
	amt.shillings = static_cast<int>(dShillings);
	float fracShillings = dShillings - amt.shillings;

	amt.pence = static_cast<int>(fracShillings * 12);
	
	cout << "Equivalent in old notation: " << amt.pounds << "." << amt.shillings << "." << amt.pence << endl;
	
    return 0;
}

/*
Use the time structure from Exercise 9, and write a program that obtains two time values from the user in 12:59:59 format, stores them in struct time variables, converts each one to seconds (type int ), adds these quantities, converts the result back to hours-minutes-seconds, stores the result in a time structure, and finally displays the result in 12:59:59 format.
*/

////

#include<iostream>

using namespace std;

struct timee{
    int hours, mins, secs;
};

int main(){
    timee time1, time2, time3;
    char temp;
    
    cout << "Enter first time in format (HH:MM:SS): ";
    cin >> time1.hours >> temp >> time1.mins >> temp >> time1.secs;
    cout << "Enter second time in format (HH:MM:SS): ";
    cin >> time2.hours >> temp >> time2.mins >> temp >> time2.secs;

    int total_secs1 = time1.hours * 3600 + time1.mins * 60 + time1.secs;
    int total_secs2 = time2.hours * 3600 + time2.mins * 60 + time2.secs;

    int total_secs = total_secs1 + total_secs2;

    time3.hours = total_secs/3600;
    time3.mins = time3.hours%3600;
    time3.secs = total_secs%60;

    cout << "Addition of above input time is: " << time3.hours << ":" << time3.mins << ":" << time3.secs << endl;

    return 0;
}

/*
Revise the four-function fraction calculator program of Exercise 12 in Chapter 3 so that
each fraction is stored internally as a variable of type struct fraction , as discussed in
Exercise 8 in this chapter.
*/

////

#include<iostream>

using namespace std;

struct fraction{
	int num, den;
};

int main(){
	char ch;
    fraction num1, num2, num3;
	do{
		char temp, option;
		cout << "Enter first fraction: ";
	    cin >> num1.num >> temp >> num1.den;
		cout << "Operation: ";
		cin >> option;
		cout << "Enter second fraction: ";
	    cin >> num2.num >> temp >> num2.den;

		switch(option){
			case '+':
				num3.num = num1.num * num2.den + num1.den * num2.num;
				num3.den = num1.den * num2.den;
				cout << "Sum is: " << num3.num << "/" << num3.den << endl;
				break;
			case '-':
				num3.num = num1.num * num2.den - num1.den * num2.num;
				num3.den = num1.den * num2.den;
				cout << "On Subtraction: " << num3.num << "/" << num3.den << endl;
				break;
			case '*':
				num3.num = num1.num * num2.num;
				num3.den = num1.den * num2.den;
				cout << "Multiplication is: " << num3.num << "/" << num3.den << endl;
				break;
			case '/':
				num3.num = num1.num * num2.den;
				num3.den = num1.den * num2.num;
				cout << "Division is: " << num3.num << "/" << num3.den << endl;
				break;
			default:
				cout << "Invalid option";
				break;
		
		}
		cout << "Do you want to continue (y/n): ";
		cin >> ch;
	}while(ch == 'y');
	
	return 0;
}

























// chapter 3
























/*Assume that you want to generate a table of multiples of any given number. Write a pro-
gram that allows the user to enter the number and then generates the table, formatting it
into 10 columns and 20 lines.*/

#include <iostream>
#include <iomanip>

using namespace std;

int main(){
	unsigned long n;
	cout << "\nEnter a number: ";
	cin >> n;
	for(int j=1; j<=200; j++){
		cout << setw(5) << j*n << "  "; 
		if( j%10 == 0 )
			cout << endl;
	}
	cout << endl;
	return 0;
}
/*
Write a temperature-conversion program that gives the user the option of converting
Fahrenheit to Celsius or Celsius to Fahrenheit. Then carry out the conversion. Use
floating-point numbers.
*/

#include<iostream>

using namespace std;

int main(){
	int choice;
	float f, c;
	cout << "1 to convert Fahrenheit to Celcius,\n2 to convert Celcius to Fahrenheit\nChoice: ";
	cin >> choice;
	switch(choice){
		case 1:
			cout << "Enter temperature in Fahrenheit: ";
			cin >> f;
			c = (f - 32) * 5 / 9;
			cout << "Temperature in Celcius: " << c;
			break;
		case 2:
			cout << "Enter temperature in Celcius: ";
			cin >> c;
			f = (1.8 * c) + 32;	
			cout << "Temperature in Fahrenheit: " << f;
			break;
		default:
			cout << "Check the input value and try again either 1 or 2";
			break;
	}
	cout << endl;
	return 0;
}
/*
Operators such as >> , which read input from the keyboard, must be able to convert a
series of digits into a number. Write a program that does the same thing. It should allow
the user to type up to six digits, and then display the resulting number as a type long
integer. The digits should be read individually, as characters, using getche() .
Constructing the number involves multiplying the existing value by 10 and then adding
the new digit.
*/
#include<iostream>
#include<conio.h>

using namespace std;

int main(){
	char ch;
	unsigned long total = 0; //this holds the number
	cout << "\nEnter a number: ";
	while( (ch=getche()) != '\r' ){	//quit on Enter
		total = total*10 + ch-’0’; //add digit to total*10
	cout << "\nNumber is: " << total << endl;
	return 0;
}
/*
Create the equivalent of a four-function calculator. The program should ask the user to
enter a number, an operator, and another number. (Use floating point.) It should then
carry out the specified arithmetical operation: adding, subtracting, multiplying, or divid-
ing the two numbers. Use a switch statement to select the operation. Finally, display the
result.
*/

#include<iostream>

using namespace std;

int main(){
	double x, y, ans;
	char oper, next;
	do{
		cout << "Enter first number, operator, second number: ";
		cin >> x >> oper >> y;
		switch(oper){
			case '+': 
				ans = x + y; 
				break;
			case '-': 
				ans = x - y; 
				break;
			case '*': 
				ans = x * y; 
				break;
			case '/': 
				ans = x / y; 
				break;
			default: 
				ans = 0;
				break;
		}
		cout << "Answer: " << ans;
		cout << "\nDo another calculation (y/n): ";
		cin >> next; 
	}while(next == 'y');
	return 0;
}

/*
Use for loops to construct a program that displays a pyramid of Xs on the screen. The
pyramid should look like this
		X
	   XXX
	  XXXXX
	 XXXXXXX
	XXXXXXXXX
*/

// //

#include<iostream>

using namespace std;

int main(){
	for(int i=1; i<=20; i++){
		for(int j=20; j>=i; j--){
			cout << " ";
		}
		for(int k=1; k<2*i; k++){
			cout << "*";
		}
		for(int l=20; l>=i; l--){
			cout << " ";
		}
		cout << endl;
	}
	return 0;
}
/*
Modify the FACTOR program in this chapter so that it repeatedly asks for a number and
calculates its factorial, until the user enters 0, at which point it terminates. You can
enclose the relevant statements in FACTOR in a while loop or a do loop to achieve this
effect.
*/
#include<iostream>

using namespace std;

int main(){
	int numb = 0;
	do{	
		
		long fact = 1;
		cout << "Enter a number or 0 to exit: ";
		cin >> numb;

		for(int j=numb; j>0; j--)
			fact *= j;
		cout << "Factorial is " << fact << endl;
	}while(numb!=0);
	return 0;
}
/*
Write a program that calculates how much money you’ll end up with if you invest an
amount of money at a fixed interest rate, compounded yearly. Have the user furnish the
initial amount, the number of years, and the yearly interest rate in percent.
*/

#include<iostream>

using namespace std;

int main(){
	int year;
	float amount, interest, compound;
	
	cout << "Enter initial amount: ";
	cin >> amount;
	cout << endl << "Enter number of years: ";
	cin >> year;
	cout << endl << "Enter interest rate(percent per year): ";
	cin >> interest;

	for(int i=0; i<year; i++){
		compound = amount + (amount * (interest/100));
		amount = compound;
	}
	cout << endl << "At the end of " << year << ", you will have " << compound << " dollars." << endl;
	return 0;
}
/*
Write a program that repeatedly asks the user to enter two money amounts expressed in
old-style British currency: pounds, shillings, and pence. (See Exercises 10 and 12 in
Chapter 2, “C++ Programming Basics.”) The program should then add the two amounts
and display the answer, again in pounds, shillings, and pence.
*/

#include<iostream>

using namespace std;

int main(){
	char ch;
	do{
		char temp;
		int pounds1, shillings1, pence1, pounds2, shillings2, pence2;
		cout << "Enter first amount: £";
		cin >> pounds1 >> temp >> shillings1 >> temp >> pence1;
		cout << "Enter second amount: £";
		cin >> pounds2 >> temp >> shillings2 >> temp >> pence2;
		pounds1 += pounds2;
		shillings1 += shillings2;
		pence1 += pence2;
		if(pence1 > 11){
			shillings1 += (pence1/12);
			pence1 = pence1%12;
		}
		if(shillings1 > 19){
			pounds1 += (shillings1/20);
			shillings1 = shillings1%20;
		}
		cout << "Total is £" << pounds1 << "." << shillings1 << "." << pence1 << endl; 
		cout << "Do you want to continue (y/n): ";
		cin >> ch;
	}while(ch == 'y');
	cout << endl;
	return 0;
}
/*
Suppose you give a dinner party for six guests, but your table seats only four. In how
many ways can four of the six guests arrange themselves at the table? Any of the six
guests can sit in the first chair. Any of the remaining five can sit in the second chair. Any
of the remaining four can sit in the third chair, and any of the remaining three can sit in
the fourth chair.
*/

#include<iostream>

using namespace std;

int main(){
	int guests, chairs, total=1;
	cout <<"Enter the number of guests: ";
	cin >> guests;
	cout <<"\nEnter the number of chairs: ";
	cin  >> chairs;
	
	if(guests>chairs){
		for(int i=0; i<chairs; i++){
			total *= guests;
			guests--;
		}
	}
	cout << "\nNumber of possible arrangements are: " << total << endl;

	return 0;
}
/*
Write another version of the program from Exercise 7 so that, instead of finding the final
amount of your investment, you tell the program the final amount and it figures out how
many years it will take, at a fixed rate of interest compounded yearly, to reach this
amount.
*/

////

#include<iostream>

using namespace std;

int main(){

	float final_amount, amount, interest, temp;
	int year=0;
	cout << "Enter the final amount you want to get in particular year: ";
	cin >> final_amount;
	cout << "Enter the principal amount: ";
	cin >> amount;
	cout << "Enter the rate of interest: ";
	cin >> interest;

	temp = amount;

	while(temp<final_amount){
		temp *= (1+(interest/100));
		year++;
	}
	cout << "It will take " << year << " years at " << interest << " of interest to reach the final amount " << final_amount << endl;
	return 0;
}
/*
Create a three-function calculator for old-style English currency, where money amounts
are specified in pounds, shillings, and pence. (See Exercises 10 and 12 in Chapter 2.)
The calculator should allow the user to add or subtract two money amounts, or to multi-
ply a money amount by a floating-point number.
*/

// //

#include<iostream>

using namespace std;

int main(){
	char ch;	
	do{
		char temp;
		char option;
		int pounds1, shillings1, pence1, pounds2, shillings2, pence2;
		cout << "Enter first amount: £";
		cin >> pounds1 >> temp >> shillings1 >> temp >> pence1;
		cout << "Enter second amount: £";
		cin >> pounds2 >> temp >> shillings2 >> temp >> pence2;
		
		cout << "Operation +, -, *: ";
		cin >> option;
		
		switch(option){
			case '+':
				pounds1 += pounds2;
				shillings1 += shillings2;
				pence1 += pence2;
				break;
			case '-':
				pounds1 -= pounds2;
				shillings1 -= shillings2;
				pence1 -= pence2;
				break;
			case '*':
				pounds1 *= pounds2;
				shillings1 *= shillings2;
				pence1 *= pence2;
				break;	
			default:
				cout << "Invalid option" << endl;
				break;
				
		}
		if(pence1 > 11){
			shillings1 += (pence1/12);
			pence1 = pence1%12;
		}
		if(shillings1 > 19){
			pounds1 += (shillings1/20);
			shillings1 = shillings1%20;
		}
		cout << "Amount after performing " << option << " is £" << pounds1 << "." << shillings1 << "." << pence1 << endl; 
		cout << "Do you want to continue (y/n): ";
		cin >> ch;
	}while(ch == 'y');
	return 0;
}
/*
Create a four-function calculator for fractions. (See Exercise 9 in Chapter 2, and
Exercise 4 in this chapter.) Here are the formulas for the four arithmetic operations
applied to fractions:

The user should type the first fraction, an operator, and a second fraction. The program
should then display the result and ask whether the user wants to continue.
*/

////

#include<iostream>

using namespace std;

int main(){
	char ch;
	do{
		int a, b, c, d, num, den;
		char temp, option;
		cout << "Enter first fraction: ";
		cin >> a >> temp >> b;
		cout << "Operator: ";
		cin >> option;
		cout << "Enter second fraction: ";
		cin >> c >> temp >> d;

		switch(option){
			case '+':
				num = a * d + b * c;
				den = b * d;
				cout << "Sum is: " << num << "/" << den << endl;
				break;
			case '-':
				num = a * d - b * c;
				den = b * d;
				cout << "Subtraction is: " << num << "/" << den << endl;
				break;
			case '*':
				num = a * c;
				den = b * d;
				cout << "Multiplication is: " << num << "/" << den << endl;
				break;
			case '/':
				num = a * d;
				den = b * c;
				cout << "Division is: " << num << "/" << den << endl;
				break;
			default:
				cout << "Invalid option";
				break;
		}
		cout << "Do you want to continue (y/n): ";
		cin >> ch;
	}while(ch == 'y');
	
	return 0;
}

















































// chapter 2



























/*Assuming there are 7.481 gallons in a cubic foot, write a program that asks the user to
enter a number of gallons, and then displays the equivalent in cubic feet.*/

#include<iostream>

using namespace std;

int main(){
	float vGallons;
	cout << "Enter the value in gallons: ";
	cin >> vGallons;
	cout << "Value in cubic feet: " << (vGallons/7.481) << endl;
	return 0;
}
/*Write a program that generates the following table:
Use a single cout statement for all output.*/

#include<iostream>
#include<iomanip>
using namespace std;

int main(){
	cout << "1990" << setw(8) << 135 << endl << 
		"1991" << setw(8) << 7290 << endl <<
		"1992" << setw(8) << 11300 << endl <<
		"1993" << setw(8) << 16200 << endl;
	return 0;
}
/*Write a program that generates the following output:
10
20
19
Use an integer constant for the 10, an arithmetic assignment operator to generate the 20,
and a decrement operator to generate the 19.*/

#include<iostream>

using namespace std;

int main(){
	int x = 10;
	cout << x << endl; //10
	x *= 2;	// x=20
	cout << x-- << endl; // print 20 later 19
	cout << x << endl; //19
	return 0;
}
/*Write a program that displays your favorite poem. Use an appropriate escape sequence
for the line breaks. If you don’t have a favorite poem, you can borrow this one by Ogden
Nash:
Candy is dandy,
But liquor is quicker.*/

#include<iostream>

using namespace std;

int main(){
	cout << "Candy is dandy,\nBut liquor is quicker" << endl;
	return 0;
}
/*A library function, islower() , takes a single character (a letter) as an argument and
returns a nonzero integer if the letter is lowercase, or zero if it is uppercase. This func-
tion requires the header file CTYPE . H . Write a program that allows the user to enter a let-
ter, and then displays either zero or nonzero, depending on whether a lowercase or
uppercase letter was entered. (See the SQRT program for clues.)*/

#include<iostream>
#include<ctype.h>

using namespace std;

int main(){
	char x;
	cout << "Enter any letter: ";
	cin >> x;
	cout << islower(x) << endl;
	return 0;
}
/*On a certain day the British pound was equivalent to $1.487 U.S., the French franc was
$0.172, the German deutschemark was $0.584, and the Japanese yen was $0.00955.
Write a program that allows the user to enter an amount in dollars, and then displays this
value converted to these four other monetary units.*/

#include<iostream>

using namespace std;

int main(){
	float dollars;
	cout << "Enter amount in dollars: ";
	cin >> dollars;
	cout << "$" << dollars << " Equivalent to\nPound: " << dollars/1.487 << "\nFranc: " << dollars/0.172 << "\nDeutschemark: " << dollars/0.584 << "\nYen: " << dollars/0.00955 << endl;
	return 0;
}
/*You can convert temperature from degrees Celsius to degrees Fahrenheit by multiplying
by 9/5 and adding 32. Write a program that allows the user to enter a floating-point num-
ber representing degrees Celsius, and then displays the corresponding degrees
Fahrenheit.*/

#include<iostream>

using namespace std;

int main(){
	float celcius, fahrenheit;
	cout << "Enter temperatur in Celcius: ";
	cin >> celcius;
	fahrenheit = (celcius * 9 / 5) + 32;
	cout << celcius << "C is equivalent to " << fahrenheit << "F" << endl;
	return 0;
}
/*When a value is smaller than a field specified with setw() , the unused locations are, by
default, filled in with spaces. The manipulator setfill() takes a single character as an
argument and causes this character to be substituted for spaces in the empty parts of a
field. Rewrite the WIDTH program so that the characters on each line between the location
name and the population number are filled in with periods instead of spaces, as in
Portcity.....2425785*/

#include<iostream>
#include<iomanip>
using namespace std;

int main(){
	cout << "1990" << setfill('x') << setw(8) << 135 << endl << 
		"1991" << setfill('x') << setw(8) << 7290 << endl <<
		"1992" << setfill('x') << setw(8) << 11300 << endl <<
		"1993" << setfill('x') << setw(8) << 16200 << endl;
	return 0;
}
/*If you have two fractions, a/b and c/d, their sum can be obtained from the formula
Write a program that encourages the user to enter two fractions, and then displays their
sum in fractional form. (You don’t need to reduce it to lowest terms.) The interaction
with the user might look like this:
Enter first fraction: 1/2
Enter second fraction: 2/5
Sum = 9/10
You can take advantage of the fact that the extraction operator ( >> ) can be chained to
read in more than one quantity at once:
cin >> a >> dummychar >> b;*/

#include<iostream>

using namespace std;

int main(){
	int a, b, c, d;
	char temp;
	cout << "Enter first fraction: ";
	cin >> a >> temp >> b;
	cout << "Enter second fraction: ";
	cin >> c >> temp >> d;

	int num = a * d + b * c;
	int den = b * d;
	cout << "Sum is: " << num << "/" << den << endl;
	
	return 0;
}
/*In the heyday of the British empire, Great Britain used a monetary system based on
pounds, shillings, and pence. There were 20 shillings to a pound, and 12 pence to a
shilling. The notation for this old system used the pound sign, £, and two decimal points,
so that, for example, £5.2.8 meant 5 pounds, 2 shillings, and 8 pence. (Pence is the plural
of penny.) The new monetary system, introduced in the 1950s, consists of only pounds
and pence, with 100 pence to a pound (like U.S. dollars and cents). We’ll call this new
system decimal pounds. Thus £5.2.8 in the old notation is £5.13 in decimal pounds (actu-
ally £5.1333333). Write a program to convert the old pounds-shillings-pence format to
decimal pounds. 

In most compilers you can use the decimal number 156 (hex character constant ‘\x9c’)
to represent the pound sign (£). In some compilers, you can put the pound sign into your
program directly by pasting it from the Windows Character Map accessory.*/

#include<iostream>

using namespace std;

int main(){ 
 
	float pounds, shillings, pence;
	cout << "Enter pounds: ";
	cin >> pounds;
	cout << "Enter shillings: ";
	cin >> shillings;
	cout << "Enter pence: ";
	cin >> pence;

	float totalPence =  (pence / (12 * 20)) + shillings / 20;
	float totalPounds = pounds + totalPence;
	
	cout << "Decimal Pounds: " << totalPounds;
	return 0;
}
/*By default, output is right-justified in its field. You can left-justify text output using the
manipulator setiosflags(ios::left) . (For now, don’t worry about what this new notation
means.) Use this manipulator, along with setw() , to help generate the following output:*/

#include<iostream>
#include<iomanip>

using namespace std;

int main(){
	cout << setiosflags(ios::left) << setw(12) << "Last name" << setw(14) << "First name" << setw(17) << "Street address" << setw(12) << "Town" << setw(5) << "State" << endl;
	cout << setfill('.') << setw(60) << ".";  
	cout << endl << setfill(' ') << setiosflags(ios::left)  << setw(12) << "Jones" << setw(14) << "Bernard" << setw(17) << "109 Pine Lane" << setw(12) << "Littletown" << setw(5) << "MI" << endl;
	cout << setiosflags(ios::left) << setw(12) << "O'Brian" << setw(14) << "Coleen" << setw(17) << "42 E. 99th Ave." << setw(12) << "Bigcity" << setw(5) << "NY" << endl;
	cout << setiosflags(ios::left) << setw(12) << "Wong" << setw(14) << "Harry" << setw(17) << "121-A Alabama St." << setw(12) << "Lakeville" << setw(5) << "IL" << endl;
	cout << endl;
	return 0;
}
/*
Write the inverse of Exercise 10, so that the user enters an amount in Great Britain’s new
decimal-pounds notation (pounds and pence), and the program converts it to the old
pounds-shillings-pence notation. An example of interaction with the program might be
Enter decimal pounds: 3.51
Equivalent in old notation = £3.10.2.
Make use of the fact that if you assign a floating-point value (say 12.34) to an integer
variable, the decimal fraction (0.34) is lost; the integer value is simply 12. Use a cast to
avoid a compiler warning. You can use statements like
float decpounds;
int pounds;
float decfrac;
// input from user (new-style pounds)
// old-style (integer) pounds
// decimal fraction (smaller than 1.0)
pounds = static_cast<int>(decpounds); // remove decimal fraction
decfrac = decpounds - pounds; // regain decimal fraction
You can then multiply decfrac by 20 to find shillings. A similar operation obtains pence.
*/

#include<iostream>

using namespace std;

int main(){ 
 
	float dPounds;
	cout << "Enter Decimal pounds: ";
	cin >> dPounds;

	int pounds = static_cast<int>(dPounds);
	float fracPounds = dPounds - pounds;

	float dShillings =  fracPounds * 20;
	int shillings = static_cast<int>(dShillings);
	float fracShillings = dShillings - shillings;

	int pence = static_cast<int>(fracShillings * 12);
	
	cout << "Equivalent in old notation: " << pounds << "." << shillings << "." << pence;

	cout << endl;
	return 0;
}





























