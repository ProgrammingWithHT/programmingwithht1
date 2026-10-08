#include<iostream>
using namespace std ;
// Created BY ProgrammingWithHT

int INDEX(char arr1[],char arr2[]);
int length(char arr1[]);
char *DELETE(char text4[], int start, int len);

int main(){
    char T[] = "ABCDEFG";
    char P[] = "BC";
    int K = INDEX(T,P);
    char *ptr;
    while (K != 0)
    {
        ptr = DELETE(T,INDEX(T,P),length(P));
        K = INDEX(ptr,P);
    }

    // For Displaying Data
    cout << ptr;

    return 0 ;
}

int length(char text1[])
{
    int len = 0;
    for (int i = 0; text1[i] != '\0'; i++)
        len++;
    return len;
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