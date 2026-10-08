#include<iostream>
#define MAX 4
using namespace std ;

// Global Variable
int stack_arr[MAX];
int top = -1;


bool isFull();
void push(int data);   //Insert Element in Stack
bool isEmpty();
void pop();            //Remove Last-inserted Element from Stack 
void peek();           //Display Last-inserted Element from Stack
void print();          //Display all element of Stack


int main(){
    int n;
    do{
        cout << endl;
        cout<<"1. Push" << endl;
        cout<<"2. Pop" << endl;
        cout<<"3. Print the top element" << endl;
        cout<<"4. Print all the element of the stack" << endl;
        cout<<"5. Quit\n" << endl;
        cout << "Please enter your chice: ";cin>>n;
        if(n==1){
            int data;
            cout << "Enter The Element to be pushed: ";cin>>data;
            push(data);
        }else if (n == 2){
            pop();
        }else if (n == 3){
            peek();
        }else if (n == 4){
            print();
        }
    }while (n != 5);

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
void pop(){
    if(isEmpty()){
        cout << "Stack Is underflow";
        return;
    }

    int data = stack_arr[top];
    cout << data << endl;
    top--;
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