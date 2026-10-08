#include <iostream>
#include <conio.h>
#include <iomanip>
using namespace std;

int arr[3][3] = {
    4,1,5,
    8,6,2,
    7,3,-1
};

struct point
{
    int rowsSize = (sizeof arr / sizeof arr[0]);
    int colsSize = (sizeof arr[0] / sizeof(int));

    int rows = (sizeof arr / sizeof arr[0])-1;
    int cols = (sizeof arr[0] / sizeof(int))-1;
};

class game{
    point po;
    public:
    game(){
        for (int i = 0; i < 3; i++)
          for (int j = 0; j < 3; j++){
            if(arr[i][j] == -1) {
                po.rows = i;
                po.cols = j;
            }
          }
    }
    int key(){
        int up = getch();
        return up;
    }

    void up_key(){
        int row = po.rows-1;
        int col = po.cols;
        if(row < 0){
            row = po.rows +1 ;
        }else {
            int temp = arr[po.rows][po.cols];
            arr[po.rows][po.cols] = arr[row][col];
            arr[row][col] = temp;
            po.rows = po.rows -1;
        }
    }

    void down_key(){
        int row = po.rows+1;
        int col = po.cols;
        if(row > po.rowsSize -1){
            row = po.rows-1;
        }else {
            int temp = arr[po.rows][po.cols];
            arr[po.rows][po.cols] = arr[row][col];
            arr[row][col] = temp;
            po.rows = po.rows + 1;
        }
    }

    void left_key() {
        int row = po.rows;
        int col = po.cols-1;
        if(col < 0){
            col = po.cols + 1;
        }else {
            int temp = arr[po.rows][po.cols];
            arr[po.rows][po.cols] = arr[row][col];
            arr[row][col] = temp;
            po.cols = po.cols - 1;
        }
    }

    void right_key() {
        int row = po.rows;
        int col = po.cols+1;
        if(col > po.colsSize-1){
            col = po.cols -1;
        }else {
            int temp = arr[po.rows][po.cols];
            arr[po.rows][po.cols] = arr[row][col];
            arr[row][col] = temp;
            po.cols = po.cols + 1;
        }
    }

    void display(){
        system("cls");
        cout <<"_________________\n" << endl;
        for (int i = 0; i < po.rowsSize; i++){      
            cout << "|";
            for (int j = 0; j < po.colsSize; j++){
                if(arr[i][j] == -1){
                    cout<< setw(4) << '\x25ff' << setw(4);
                }else {
                    cout<< setw(4) << arr[i][j] << setw(4);
                }
            }    
            cout << "|"<< endl;
        }
        cout <<"_________________" << endl;
    }
};

int main()
{

    game obj;
    obj.display();
    int key ;
    while (key != 27)
    {
        key = obj.key();
        if(key == 72){
            obj.up_key();
            obj.display();
        }
        else if(key == 80){
            obj.down_key();
            obj.display();
        }
        else if(key == 75){
            obj.left_key();
            obj.display();
        }
        else if (key == 77) {
            obj.right_key();
            obj.display();
        }
    }

    return 0;
}