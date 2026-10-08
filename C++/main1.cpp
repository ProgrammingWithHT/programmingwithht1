#include<iostream>
using namespace std ;


int main(){

    // // Create Multiplay dimensional array in c++
    int arr[2][2][2] = {
            {   
                {1,2},
                {3,4}
            },
            {
                {55,65},
                {75,85}
            }
    };

    // Make 2D pointer for multiply Dimensional array
    int (*ptr)[2][2] = arr;
    
    // Take O(i*j*k) Time complexity
    // Print 3d array
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            for (int k = 0; k < 2; k++)
            {
                cout << *(ptr[i][j]+k);
            }
            cout << endl;
        }
        cout << endl;
    }

    // O(i) time complexity for multi-D-array
    // for (int i = 0; i < 8; i++)
    // {
    //     // cout << *(*ptr[0]+i) << endl;
    // }

    return 0 ;
}