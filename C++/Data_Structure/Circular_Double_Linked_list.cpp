#include<iostream>
using namespace std ;


struct node
{
    node *prev;
    int data;
    node *next;
} *tail=NULL;


void output();
void addToEmpty(int data);
void addToEnd(int data);
void addToBeg(int data);
void addToPos(int data,int pos);
void deleteBeg();
void deleteEnd();
void deletePos(int pos);

int main(){
    
    addToEmpty(10);
    addToEnd(20);
    addToEnd(30);
    // addToBeg(5);
    // addToPos(15,2);
    // deleteBeg();
    // deleteEnd();
    // deletePos(3);

    output();

    return 0 ;
}






// For Displaying Circular Double Linked List
void output(){
    node *ptr = tail->next;
    do{
        cout << ptr->data << " ";
        ptr = ptr->next;
    }while (ptr != tail->next);
}

// Uesd To add In Empty Circular Double Linked List
void addToEmpty(int data){
    node *temp = new node;
    temp->prev = temp;
    temp->data = data;
    temp->next = temp;

    tail = temp;
};

// Add In The End Of Circular Double Linked List
void addToEnd(int data){
    if(tail == NULL){
        addToEmpty(data);
    }else{
        node *temp = new node;
        temp->prev = temp;
        temp->data = data;
        temp->next = temp;

        node *ptr = tail->next;
        
        temp->prev = tail;
        temp->next = tail->next;
        ptr->prev = temp;
        tail->next = temp;

        tail = temp;

    }
};

// Add In The Beginning Of Circular Double Linked List
void addToBeg(int data){
    if(tail == NULL){
        addToEmpty(data);
    }else {
        node *temp = new node;
        temp->prev = temp;
        temp->data = data;
        temp->next = temp;

        node *ptr = tail->next;

        temp->next = ptr;
        ptr->prev = temp;
        temp->prev = tail;
        tail->next = temp;
    }
}

// Add At any position of Circular Double Linked List
void addToPos(int data,int pos){
    if (tail == NULL){
        cout << "List Is Empty";
    }else if (pos == 1){
        addToBeg(data);
    }else {
        node *temp = new node;
        temp->prev = temp;
        temp->data = data;
        temp->next = temp;

        node *ptr = tail->next;

        pos--;
        while (pos != 1)
        {
            ptr = ptr->next;
            pos--;
        }

        temp->prev = ptr;
        temp->next = ptr->next;
        ptr->next = temp;
        temp->next->prev = temp;

    }
}

// delete the first node in Circular Double Linked List
void deleteBeg(){
    if (tail == NULL)
    {
        cout << "List Is Empty";
    }else {
        node *ptr = tail->next;
        if(tail->next == ptr->next){  //handle if only have one node
            delete tail;
            tail = NULL;
        }else {
            tail->next = ptr->next;
            ptr->next->prev = tail;
            delete ptr;
            ptr = NULL;
        }
    }
}

// delete last node in circular double linked list
void deleteEnd(){
    if (tail == NULL){
        cout << "List Is Empty";
    }else {
        node *ptr = tail;
        tail = tail->prev;
        if (ptr->next == tail->next){  //handle if only have one node
            deleteBeg();
        }else {
            tail->next = ptr->next;
            ptr->next->prev = tail; 

            delete ptr;
            ptr = NULL;
        }
        
    }
}

// Delete node at any position of Circular Double Linked List
void deletePos(int pos){
    if (tail == NULL){
        cout << "List Is Empty";
    }else if (pos == 1){
        deleteBeg();
    }else {
        node *ptr = tail->next;
        pos--;
        while(pos != 1){   //goto the previous node of our delete node
            ptr = ptr->next;
            pos--;
        }
        if(ptr->next == tail){  //handle if we delete last node
            deleteEnd();
        }else {
            node *ptr1 = ptr->next;

            ptr->next = ptr1->next;
            ptr1->next->prev = ptr;

            delete ptr1;
            ptr1 = NULL;
        }

    }
}
