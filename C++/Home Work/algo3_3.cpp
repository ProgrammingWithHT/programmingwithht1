#include <iostream>
using namespace std;
// Created BY ProgrammingWithHT

int LENGTH(char arr1[]);

int main()
{
    int INDEX = -1;
    int K = 0;
    char T[] = "abcdefe";
    char P[] = "ee";
    int R = LENGTH(P);
    int S = LENGTH(T);
    int MAX = S - R + 1;
    while (K < MAX)
    {
        for (int L = 0; L < R; L++)
        {
            if (P[L] != T[K + L])
            {
                goto loop;
            }
            INDEX = K;
        }
    loop:
        K = K + 1;
    }

    if (INDEX == -1)
    {
        cout << "Index Not Found!" << endl;
    }
    else
    {
        cout << "Index Found At: " << INDEX << endl;
    }

    return 0;
}

int LENGTH(char arr1[])
{
    int length = -1;
    for (int i = 0; arr1[i] != '\0'; i++)
    {
        length = i;
    }
    return length + 1;
};

// #include <iostream>

// using namespace std;

// int main()
// {

//     int S = 5;
//     int R = 1;

//     int K = 0;

//     int MAX = S - R + 1;
//     char T[] = "abcde";
//     char P[] = "e";

//     int INDEX = -1;
//     while (K < MAX)
//     {
//         for (int L = 0; L < R; L++)
//         {
//             if (P[L] != T[K + L])
//             {
//                 break;
//             }

//             INDEX = K;
//         }
//         K++;
//     }

//     if (INDEX == -1)
//     {
//         cout << "No match" << endl;
//     }
//     else
//     {
//         cout << "Match at index " << INDEX << endl;
//     }

//     return 0;
// }