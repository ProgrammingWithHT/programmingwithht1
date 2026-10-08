#include<iostream>
using namespace std ;

// Queue with Linked List

struct Queue
{
    int data;
    Queue *link;
} *front=NULL,*rear=NULL;

void Enqueue(int data);
void Dequeue();
int Front();
void display();

int main(){
    
    Enqueue(10);
    Enqueue(20);
    Enqueue(30);
    Dequeue();
    display();
    cout << Front();

    return 0 ;
}

bool isEmpty(){
    return (front == NULL && rear == NULL) ? true : false;
}

void display(){
    if(isEmpty()){
        cout << "Queue Is Empty";return;
    }
    Queue *temp = front;
    while (temp != NULL)
    {
        cout << temp->data << " ";
        temp = temp->link;
    }
}

// Insert Element in the last of queue
void Enqueue(int data){
    if(isEmpty()){
        Queue *temp = new Queue;
        temp->data = data;
        temp->link = NULL;
        front = rear = temp;
    }else {
        Queue *temp = new Queue;
        temp->data = data;
        temp->link = NULL;

        rear->link = temp;
        rear = temp;
    }
}

// Remove a element beg.. of Queue Linked List
void Dequeue(){
    if(isEmpty()){
        cout << "Queue Is Empty";return;
    }else {
        Queue *temp = front;
        front = front->link;
        delete temp;
        temp = NULL;
    }
}

// return First Inerted element from queue
int Front(){
    if(isEmpty()){
        cout << "Queue Is Empty";exit(1);
    }
    return front->data;
}

