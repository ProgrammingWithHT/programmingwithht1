#include<iostream>
using namespace std ;
// Created BY ProgrammingWithHT

int INDEX(char arr1[],char arr2[]);
char *DELETE(char text4[], int start, int len);
int length(char arr1[]);
char *ins(char text3[], int start, char p3[]);
char *REPLACE(char text5[], char p3[], char q2[]);


int main(){
    char T[] = "XABYABZ";
    char P[] = "AB";
    char Q[] = "C";

    int K = INDEX(T,P);
    char *ptr = T;
    while (K!=0){
        ptr = REPLACE(ptr,P,Q);
        K = INDEX(ptr,P);
    }

    //For Displaying Data 
    cout << ptr << endl;

    return 0;
}

// Length Function
int length(char text1[])
{
    int len = 0;
    for (int i = 0; text1[i] != '\0'; i++)
        len++;
    return len;
}

// Index Function
int INDEX(char text2[], char p2[]){
    int index;
    for (int i = 0; i < length(text2);)
    {
        for (int j = 0; j < length(p2); j++)
        {
            if (p2[j] != text2[i + j])
                goto point;
        }
        index = i + 1;
        return index;
    point:
        i++;
    }
    index = 0;
    return index;
}

char *REPLACE(char text5[], char p3[], char q2[])
{
    int x, k = INDEX(text5, p3), flen = length(text5) - length(p3) + length(q2);
    char *str = new char[flen + 1]{};
    for (x = 0; x < flen; x++)
        str[x] = text5[x];
    if (k == 0)
        goto point;
    str = DELETE(text5, k, length(p3));
    str = ins(str, k, q2);
    return str;
point:
    return text5;
}

char *ins(char text3[], int start, char p3[])
{
    int i, x, flen = length(text3) + length(p3);
    char *str = new char[flen + 1]{};
    for (x = 0; x < flen; x++)
    {
        str[x] = text3[x];
    }
    for (i = 1; i <= length(p3); i++)
        for (int j = flen - 1; j >= start - 1; j--)
        {
            str[j + 1] = str[j];
        }
    x = 0;
    for (i = start - 1; i < (start - 1) + length(p3); i++)
        str[i] = p3[x++];
    return str;
}


char *DELETE(char text4[], int start, int len)
{
    int x, flen = length(text4);
    char *str = new char[flen + 1]{};
    for (x = 0; x < flen; x++)
    {
        str[x] = text4[x];
    }
    if (start == 0)
        goto point;
    for (x = 1; x <= len; x++)
        for (int y = start - 1; y <= flen; y++) // I set flen(instead of flen-1) in condition because I also want null character to be dragged back
        {
            str[y] = str[y + 1];
        }
point:
    return str;
}