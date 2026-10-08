#include<iostream>
#define MAX 10
using namespace std ;

// Circular Queue With Array

int a[MAX];
int front = -1;
int rear = -1;

bool isEmpty(){
    return (front == -1 && rear == -1) ? true : false;
}

bool isFull(){
    // cout << (rear+1)%MAX; //always give the next index of rear if rear=9; than ourput : 0 || we now that after 9 we get 0 index if array as 10 total size
    return ((rear+1)%MAX == front) ? true : false;
}

// Insert a Element In Queue
void Enqueue(int data){
    if(isFull()){
        cout << "Queue Is OverFlow\n";
        return;
    }else if (isEmpty()){
        front = rear = 0;
    }else {
        rear = (rear+1)%MAX;
    }
    a[rear] = data;
}

// Remove a Element from Queue
void Dequeue(){
    if(isEmpty()){
        cout << "Queue Is UnderFlow\n";return;
    }else if (front == rear){
        front = rear = -1;
    }else {
        front = (front + 1)%MAX;
    }
}

// Display all Element of Queue
void display(){
    int count = (rear+MAX-front)%MAX+1;
    if(count == 1){
        cout << "Queue Is Empty";
        return;
    }
    for (int i = 0; i < count; i++)
    {
        int index = (front+i)%MAX;
        cout << a[index];
    }
    
}


int main(){
    
    Enqueue(2);
    Enqueue(1);
    Enqueue(7);
    Dequeue();
    display();
    
    

    return 0 ;
}
