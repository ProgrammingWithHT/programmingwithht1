#include<iostream>
#include<string.h>
#define MAX 20
using namespace std ;

// Global Variable
int stack_arr[MAX];
int top = -1;


bool isFull();
void push(int data);
bool isEmpty();
int pop();
void peek();
void print();

int match_char(char a,char b){
    if(a == '(' && b == ')') return 1;
    if(a == '[' && b == ']') return 1;
    if(a == '{' && b == '}') return 1;
    return 0;
}

int main(){
    char a[] = "[A/(B-C)*{D+E}]";
    int i=0;
    while(i<strlen(a)){
        if(a[i] == '[' || a[i] == '(' || a[i] == '{'){
            push(a[i]);
        }else if (a[i] == ']' || a[i] == ')' || a[i] == '}'){
            if(isEmpty()){
                cout << "1Invalid Expression\n";exit(1);
            }else {
                char b = a[i];
                char a = pop();
                if (!match_char(a,b)){
                    cout << "2Invalid Expression\n";exit(1);
                }
            }
        }
    i++;
    }

    if(isEmpty()){
        cout << "3valid Expression\n";
    }else {
        cout << "4Invalid Expression\n";
    }

    return 0 ;
}


// isFull() function, we were checking whether a stack is full or not
bool isFull(){
    if(top == MAX-1)
        return 1;
    else 
        return 0;
}

// Adding value to stack
void push(int data){
    if(isFull()){
        cout << "StacK overflow\n";
        return;
    }
    top = top + 1;
    stack_arr[top] = data;
}

// isEmpty() check stack is empty or not
bool isEmpty(){
    if(top == -1)
        return 1;
    else 
        return 0;
}

// pop() used to remove last adding element from stack
int pop(){
    if(isEmpty()){
        cout << "Stack Is underflow";
        exit(1);
    }

    int data = stack_arr[top];
    // cout << data << endl;
    top--;
    return data;
}

// peek() return last element from stack without removing
void peek(){
    if(!isEmpty){
        cout << "Stack Is Empty\n";
        return;
    }
    cout << stack_arr[top];
}

// print() Display all of stack
void print(){
    if(!isEmpty){
        cout << "Stack is empty\n";
        return;
    }
    for (int i = top; i > -1; i--)
        cout << stack_arr[i] << " ";
}