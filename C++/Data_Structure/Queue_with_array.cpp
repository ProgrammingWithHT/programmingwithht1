#include<iostream>
#define MAX 10
using namespace std ;

// Queue With Array

int a[MAX];
int front = -1;
int rear = -1;

bool isEmpty();    //return true If Empty
bool isFull();    //return true if Full
void display();  // Display all Element of Queue
void Enqueue(int data); // Insert a Element In Queue
void Dequeue(); // Remove a Element from Queue
int Front();    // Display First Inserted Element In Queue

int main(){
    
    Enqueue(3);
    Enqueue(2);
    Enqueue(7);
    Dequeue();
    display();

    return 0 ;
}

bool isEmpty(){
    return (front == -1 && rear == -1) ? true : false;
}

bool isFull(){
    return (MAX == rear+1) ? true : false;
}

// Display all Element of Queue
void display(){
    if(isEmpty()){
        cout << "Queue is Empty"; return;
    }
    for (int i = front; i <= rear; i++)
        cout << a[i];
}

// Insert a Element In Queue
void Enqueue(int data){
    if(isFull()){
        cout << "Queue Is OverFlow";
        return;
    }else if (isEmpty())
        front = rear = 0;
    else 
        rear = rear+1;
    a[rear] = data;
}

// Remove a Element from Queue
void Dequeue(){
    if(isEmpty()){
        cout << "Queue Is UnderFlow";
    }else if (front == rear){
        front = rear = -1;
    }else {
        front = front + 1;
    }
}

// Display First Inserted Element In Queue
int Front() {
    if(isEmpty()){
        cout << "Queue is Empty";
        exit(1);
    }
    return a[front];
}
