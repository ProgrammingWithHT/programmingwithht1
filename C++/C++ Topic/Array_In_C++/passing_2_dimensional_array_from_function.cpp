// In this video we will learn how to return 2D array from function in c and c++. 

// There are three method to passing 2D array form function

// 1) Using Dynamic Array
// 2) Using static keyboard
// 3) Using struct technique

// #include<iostream>
// using namespace std ;

// int ** passarray(){
//     int ** arr = new int*[3];
//     for(int i = 0; i <3; i++){
//     arr[i] = new int[3];
//         for(int j=0; j<3; j++){
//             cin>>arr[i][j];
//         }
//     }
//     return arr;
// }
// void display(int **arr){
//     for(int i = 0; i <3; i++){
//         for(int j=0; j<3; j++){
//             cout<<arr[i][j];
//         }
//         cout<<endl;
//     }
// }

// int main(){
//     int ** arr1 = passarray();
//     display(arr1);


//     return 0 ;
// }

// With static keyboard

// #include<iostream>
// using namespace std ;

// typedef (*DoublePointer)[3];

// DoublePointer passarray(){       // OR  int (*(passarray)())[3]{
//     static int arr[3][3]{{1,2,3},{4,5,6},{7,8,9}};
//     return arr;
// }
// void display(int arr[][3]){
//     for(int i = 0; i <3; i++){
//         for(int j=0; j<3; j++){
//             cout<<arr[i][j];
//         }
//         cout<<endl;
//     }
// }

// int main(){
//     int (*arr1)[3] = passarray();
//     display(arr1);


//     return 0 ;
// }

// struct technique

#include<iostream>
using namespace std ;

struct ArrStruct
{
    int arr[3][3];
};

// This function give us wrong output but i don't no why they give garbage value
// ArrStruct passarray(){
//     ArrStruct var[3][3]= {{1,2,3},{4,5,6},{7,8,9}};
//     return var[3][3];
// }

ArrStruct passarray(){
    ArrStruct var;
    for(int i = 0; i <3; i++){
        for(int j=0; j<3; j++){
            cin>>var.arr[i][j];
        }
    }
    return var;
}
void display(ArrStruct arr){
    for(int i = 0; i <3; i++){
        for(int j=0; j<3; j++){
            cout<<arr.arr[i][j];
        }
        cout<<endl;
    }
}

int main(){
    ArrStruct arr = passarray();
    display(arr);


    return 0 ;
}