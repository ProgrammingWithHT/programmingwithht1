#include<iostream>
#define MAX 4
using namespace std ;

struct node
{
    int data;
    node *link;
}*top=NULL;  //make top as global pointer variable

// add a node in first of list
void push(int data){
    node *temp = new node;  //if heap memeory is full than new operator automatically return NULL
    if(temp == NULL){  
        cout << "Stack Overflow";
        exit(1);
    }
    temp->data = data;
    temp->link = NULL;

    temp->link = top;
    top = temp;
}

// remove first node from list
void pop(){
    if(top == NULL){
        cout << "Stack Is UnderFlow\n";
        return;
    }
    cout << top->data;
    node *ptr = top;
    top = top->link;
    delete ptr;
    ptr = NULL;
}

// give first node of list without removing
void peek(){
    if(top == NULL){
        cout << "Stack Is Empty\n";
        return;
    }
    cout << top->data << endl;
}

// if empty give 1 else 0
bool isEmpty(){
    if(top == NULL){
        return 1;
    }else{
        return 0;
    }
}

// print all element of stack
void print(){
    if(top == NULL){
        cout << "stack is empty";
        exit(1);
    }
    node *ptr = top;
    while (ptr != NULL)
    {
        cout << ptr->data << " " ;
        ptr = ptr->link;
    }
    
}


int main(){
    
    push(2);
    push(3);
    push(6);
    pop();
    cout << isEmpty();
    peek();
    print();

    return 0 ;
}