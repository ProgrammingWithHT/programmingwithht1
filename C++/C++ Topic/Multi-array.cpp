#include<iostream>
using namespace std ;

char *fun(){

    char *arr1 = new char[3];
    arr1[0] = 'A';
    arr1[1] = 'B';
    arr1[2] = 'C';
    
    return arr1;
}

int main(){
    
    // fun();
    char *p = fun();
    for (int i = 0; i < 3; i++)
    {
        cout << *(p+i) ;
    } // same as: cout << p << endl;

    return 0 ;
}

// About code can be used to return array from function


// #include<iostream>
// using namespace std ;

// int main(){
    

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
    // int arr[2][2][2] = {
    //         {   
    //             {1,2},
    //             {3,4}
    //         },
    //         {
    //             {51,61},
    //             {71,81}
    //         }
    // };

    // // Make 2D pointer for multiply Dimensional array
    // int (*ptr)[2][2] = arr;

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
    // for (int i = 0; i < 8; i++)
    // {
    //     cout << *(*ptr[0]+i) << endl;
    // }

    // In this case No need to write: int (*ptr)[2][2] = arr;
    // for (int i = 0; i < 8; i++)
    // {
    //     cout << *(*arr[0]+i) << endl;
    // }
    



    // // cout << *(ptr[0][0]) << endl;   //1
    // // cout << *(ptr[0][1]) << endl;   //3
    // // cout << *(ptr[1][0]) << endl;   //5
    // // cout << *(ptr[1][1]) << endl;   //7


    // // cout << *(ptr[0][0]+1) << endl;   //1
    // // cout << *(ptr[0][1]+1) << endl;   //3
    // // cout << *(ptr[1][0]+1) << endl;   //51
    // // cout << *(ptr[1][1]+1) << endl;   //71



//     return 0 ;
// }


//make 2d array in heap memory with new operator 


// #include <iostream>
// using namespace std;

// int main(){

//     // 2D with new operator
//     int rowCount = 2;
//     int colCount = 2;

//     int **a = new int *[rowCount];
//     for (int i = 0; i < rowCount; ++i)
//         a[i] = new int[colCount];

//     for (int i = 0; i < rowCount; i++)
//     {
//         for (int j = 0; j < colCount; j++)
//         {
//             cin>>a[i][j];
//         }   
//     }

//     for (int i = 0; i < rowCount; i++)
//     {
//         for (int j = 0; j < colCount; j++)
//         {
//             cout << a[i][j];
//         }
//         cout << endl;
//     }

//     for(int i = 0; i < rowCount; ++i) {
//         delete []a[i];
//     }
//     delete [] a;
//     a = NULL;

//     return 0;
// }



// Make 3d array in heap with new operator



// #include <iostream>
// using namespace std;

// // 3d array with new operator
 
// int main()
// {

//     int X=2,Y=2,Z=2;

//     int*** A = new int**[X];
 
//     for (int i = 0; i < X; i++)
//     {
//         A[i] = new int*[Y];
//         for (int j = 0; j < Y; j++) {
//             A[i][j] = new int[Z];
//         }
//     }
 
//     // assign value to 3d array
//     for (int i = 0; i < X; i++)
//     {
//         for (int j = 0; j < Y; j++)
//         {
//             for (int k = 0; k < Z; k++) {
//                 A[i][j][k] = i*j*k;
//             }
//         }
//     }
 
//     // print value of 3d array
//     for (int i = 0; i < X; i++)
//     {
//         for (int j = 0; j < Y; j++)
//         {
//             for (int k = 0; k < Z; k++) {
//                 std::cout << A[i][j][k] << " ";
//             }
//             cout <<endl;
//         }
//         cout << endl;
//     }
 
//     // deallocate memory
//     for (int i = 0; i < X; i++)
//     {
//         for (int j = 0; j < Y; j++) {
//             delete[] A[i][j];
//         }
//         delete[] A[i];
//     }
 
//     delete[] A;
 
//     return 0;
// }