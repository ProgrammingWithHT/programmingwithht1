#include<iostream>
#include<math.h>
using namespace std ;
int LENGTH(char arr1[]);

int INDEX(char arr1[],char arr2[]){ 
    int index = 0;

    // Find Length Of Array
    int SizeArr1 = LENGTH(arr1);
    int SizeArr2 = LENGTH(arr2);

    if(SizeArr2>1){
        for (int i = 0; i < SizeArr1; i++)
        {
            if (arr2[0] == arr1[i])
            {
                if (arr2[1] == arr1[i+1])
                {
                    index = i+1;
                    goto loop;
                }

            }
        }
    }
    else {
        for (int i = 0; i < SizeArr1; i++)
        {
            if (arr2[0] == arr1[i]){
                index = i+1;
                goto loop;
            }
        }   
    }


    loop:
    return index;
 
};


int main(){

    char arr1[] = "XABYZ";
    char arr2[] = "AB";

    cout << INDEX(arr1,arr2);

    return 0 ;
}







int LENGTH(char arr1[]){
    int length = -1;
    for (int i = 0; arr1[i] != '\0' ; i++)
    {
        length = i;
    }
    return length+1;
};
















// int INDEX(char arr1[],char arr2[]){ 

//     // Find Length Of Array
//     int SizeArr1 = -1;
//     for (int i = 0; arr1[i] != '\0' ; i++)
//     {
//         SizeArr1 = i;
//     }
//     SizeArr1 = SizeArr1 +1;

//     // Find Index
//     int index = 0; 
//     for (int i = 0,j=0; i < 1,j<SizeArr1; i++,j++)
//     {
//         if (arr2[0] == arr1[i])
//         {
//             index = i+1;
//         }
//     }
//     return index;
    
// };