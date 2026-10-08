#include<iostream>
#define MAX 10
using namespace std ;

char tree[MAX];  //if we create array global than bydefault they contain '\0' instead of garbage value in every index of array

void root(char data){
    if(tree[1] != '\0') cout << "Tree already had root";
    else tree[1] = data;
}

void set_left(char data, int parent){
    if(tree[parent] == '\0') cout << "\nCan't set child at" << (parent *2) +1 << " , no parent found";
    else tree[(parent*2)] = data;
}
void set_right(char data, int parent){
    if(tree[parent] == '\0') cout << "\nCan't set child at" << (parent * 2) + 2 << " , no parent found";
    else tree[(parent * 2) + 1] = data;
}
void print_tree(){
    for(int i = 0; i < MAX; i++){
        if(tree[i] != '\0') cout << tree[i];
        else cout << '-';
    }
}

int main(){
    
    root('A');
    set_left('B',1);
    set_right('C',1);
    set_left('D',2);
    set_right('E',2);
    set_right('F',3);
    print_tree();    

    return 0;
}