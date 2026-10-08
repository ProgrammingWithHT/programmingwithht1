#include<iostream>
using namespace std ;

int main(){
    
    int a[3] = {2,3,4};
    cout << a << endl;
    cout << *(a+1) << endl;
    // int *ptr = a;
    // cout << ptr << endl;

    // 2D array with pointer in c++
    // int arr[2][2] = {
    //         {1,2},
    //         {31,41}
    // };
    // int (*ptr)[3] = arr;   //store address of e.g int *ptr = {[0][0],[0][1],[1][0],[1][1]}

    // Take O(i*j) time complexity but i now
    // for (int i = 0; i < 2; i++)
    // {
    //     for (int j = 0; j < 2; j++)
    //     {
    //             cout << *(ptr[i]+j);
    //     }
    //     // *ptr++;  //if use this line than write inner for loop cout << cout << *(*ptr+j);
    //     cout << endl;
    // }

    // // Take O(i) time complexity but i don't no why?
    // Ans: i know because array as sequence of memory address
    // for (int i = 0; i < 6; i++)
    // {
    //     cout << *(*ptr+i);
    //     cout << endl;
    // }


    // // Multiplay dimensional array with pointer in c++
    int arr[2][2][2] = {
            {   
                {1,2},
                {3,4}
            },
            {
                {51,61},
                {71,81}
            }
    };

    // // Make 2D pointer for multiply Dimensional array
    int (*ptr)[2][2] = arr;

    // // Take O(i*j*k) Time complexity but I now
    // for (int i = 0; i < 2; i++)
    // {
    //     for (int j = 0; j < 2; j++)
    //     {
    //         for (int k = 0; k < 2; k++)
    //         {
    //             cout << *(ptr[i][j]+k);
    //         }
    //         cout << endl;
    //     }
    //     cout << endl;
    // }

    // // Take O(i*j) time complexity but I don't no why?
    // for (int i = 0; i < 2; i++)
    // {
    //         for (int k = 0; k < 4; k++)
    //         {
    //             cout << *(*ptr[i]+k) ;
    //             if(k == 1){
    //                 cout << endl;
    //             }
    //         }
    //     cout << endl;
    // }


    // O(i) time complexity for multi-D-array
    for (int i = 0; i < 8; i++)
    {
        cout << *(*ptr[0]+i) << endl;
    }
    



    // // cout << *(ptr[0][0]) << endl;   //1
    // // cout << *(ptr[0][1]) << endl;   //3
    // // cout << *(ptr[1][0]) << endl;   //5
    // // cout << *(ptr[1][1]) << endl;   //7


    // // cout << *(ptr[0][0]+1) << endl;   //1
    // // cout << *(ptr[0][1]+1) << endl;   //3
    // // cout << *(ptr[1][0]+1) << endl;   //51
    // // cout << *(ptr[1][1]+1) << endl;   //71



    return 0 ;
}