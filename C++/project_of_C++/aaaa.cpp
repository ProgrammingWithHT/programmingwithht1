#include <iostream>
#include <windows.h>
#include <conio.h>
#include<direct.h>
using namespace std;

HANDLE console = GetStdHandle(STD_OUTPUT_HANDLE);
COORD CursorPosition;

void gotoxy(int x, int y){
  CursorPosition.X = x;
  CursorPosition.Y = y;
  SetConsoleCursorPosition(console,CursorPosition);
}
void setcursor(bool visible, DWORD size){
  if(size ==0)
    size = 20;
  CONSOLE_CURSOR_INFO IpCursor;
  IpCursor.bVisible = visible;
  IpCursor.dwSize = size;
  SetConsoleCursorInfo(console, &IpCursor);
}


int main()
{

    setcursor(0,0);
    system("cls");
	char h = '\6';
	cout << endl << endl << endl << endl << endl << endl << "\t\t\t" << h << " welcime to c++ birthday" << endl << "\t\t\tYOU LOVE THIS VIDEO AND TAP" << endl << "\t\t\t THE BELL ICON FOR MORE " << h << endl << endl << endl;
	Sleep(3002);
	Beep(523, 500);
	system("cls");
	cout << endl << endl << endl << "\t\t\tFrom: \t ProgrammingWithHT" << endl << "\t\t\tTo:\t Name" << endl << "\t\t";
	Sleep(500);


	for (int i = 0; i < 40; i++) {
		cout << "_";
	}
	Sleep(500);
	Beep(523, 500);

	cout << endl << endl << "\t\t\t\t  i i i i i" << endl;
	Sleep(500);
	Beep(523, 500);
	cout << "\t\t\t\t  i i i i i" << endl;
	Sleep(500);
	Beep(523, 500);
	cout << "\t\t\t\t_i_i_i_i_i_";
	Sleep(500);
	Beep(523, 500);
	cout << endl << "\t\t\t       |" << h << "\t    " << h << "|";
	Sleep(500);
	Beep(523, 500);
	cout << endl << "\t\t\t     _| " << h << "  DATE   " << h << " |_";
	Sleep(500);
	Beep(523, 500);
	cout << endl << "\t\t\t    | " << h << "    " << h << "     " << h << "    " << h << " |";
	Sleep(500);
	Beep(523, 500);
	cout << endl << "\t\t\t  _|" << h << "   HAPPY   " << h << "     " << h << "|_";
	Sleep(500);
	Beep(523, 500);
	cout << endl << "\t\t\t | " << h << "     " << h << "   BIRTHDAY    " << h << " |";
	Sleep(500);
	Beep(523, 500);
	cout << endl << "\t\t\t |" << h << "  " << h << "  " << h << "  " << h << "  " << h << "  " << h << "  " << h << "  " << h << "  " << h << "|";
	Sleep(500);
	Beep(523, 500);
	cout << endl << "\t\t\t | " << h << "  " << h << "    NAME    " << h << "     " << h << " |";
	Sleep(500);
	Beep(523, 500);
	cout << endl << "\t\t\t |";
	for (int i = 0; i < 25; i++) {
		cout << "_";
	}
	cout << "|" << endl<<endl<<endl;

	cout << "\t\tHAPPY BIRTHDAY";
	cout << endl << "\t\t\t\tNAME";
	cout << endl << "\t\t\t\t\tFROM";
	cout << endl << "\t\t\t\t|||\t |||";
	cout << endl << "\t\t\t\tNAME 1";
	cout << endl << "\t\t\tNAME 2";
	cout << endl << "\t\tNAME 3";
	cout << endl << "\tNAME 4";
	cout << endl << "NAME 5";
	
	return 0;
}