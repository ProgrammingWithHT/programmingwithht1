#include<iostream>
using namespace std ;

struct node {
    node *prev;
    int data;
    node *next;
}*head=NULL;


void display();
void addToEmpty(int data);
void addToEnd(int data);
void addToBeg(int data);
void addToPos(int data, int pos);
void deleteBeg();
void deleteEnd();
void deletePos(int pos);
void reverseWithOutChangePtr();
void reverse();

int main(){

    addToEmpty(10);
    addToEnd(20);
    addToEnd(30);
    // addToBeg(5);
    // addToPos(15,2);
    // deleteBeg();
    // deleteEnd();
    // deletePos(2);


    reverse();
    display();
    // reverseWithOutChangePtr();

    return 0 ;
}

// For Output
void display(){
    node *ptr = head;
    if(ptr == NULL){
        cout << "List Is Empty";
    }else{
        while (ptr != NULL){
            cout << ptr->data << endl;
            ptr = ptr->next;
        }
    }
}
// Insert In Empty Double List
void addToEmpty(int data){
    node *temp(new node);
    temp->prev = NULL;
    temp->data = data;
    temp->next = NULL;

    head = temp;
}
// Insert At the End Of The Double Linked List
void addToEnd(int data){
    if(head == NULL){
        addToEmpty(data);
    }else{
        node *temp = new node;
        temp->prev = NULL;
        temp->data = data;
        temp->next = NULL;

        node *ptr = head;
        while (ptr->next != NULL){
            ptr = ptr->next;
        }

        temp->prev = ptr;
        ptr->next = temp;
    }
}
// Insert At the Beginning Of The Double Linked List
void addToBeg(int data){
    if(head == NULL){
        addToEmpty(data);
    }else{
    
        node *temp = new node;
        temp->prev = NULL;
        temp->data = data;
        temp->next = NULL;

        node *ptr = head;
        temp->next = ptr;
        ptr->prev = temp;

        head = temp;
    }
};
// Insert At SomeWhere Postion Of The Double Linked List
void addToPos(int data, int pos){
    if(head == NULL){
        addToEmpty(data);
    }else if(pos == 1){
        addToBeg(data);
    }else{
        node *temp = new node;
        temp->prev = NULL;
        temp->data = data;
        temp->next = NULL;

        node *ptr = head;

        pos--;
        while (pos != 1){
            ptr = ptr->next;
            pos--;
        }
        node *ptr1 = ptr->next;

        temp->next = ptr->next;
        ptr->next = temp;
        temp->prev = ptr;
        ptr1->prev = temp;
        

    }

}
// Delete The Beg Node Of Double Linked List
void deleteBeg(){
    if(head == NULL){
        cout << "List Is Empty";return;
    }
    else {
        head = head->next;
        delete head->prev;
        head->prev = NULL;
    }
}
// Delete The End Node Of Double Linked List
void deleteEnd(){
    if(head == NULL){
        cout << "List Is Empty";
    }
    else {
        node *ptr = head;
        while (ptr->next != NULL)
        {
            ptr = ptr->next;
        }
        node *ptr1 = ptr->prev; 
        ptr1->next = NULL;
        delete ptr;
        ptr = NULL;
    }
}
// Delete SomeWhere Postion of Node In Double Linked List
void deletePos(int pos){
    node *ptr = head;
    if (head == NULL){   //handle if list is empty 
        cout << "List Is Empty";
    }else if (pos == 1){ //handle first node
        deleteBeg();
    }
    else {
        pos--;
        while (pos !=1)
        {
            ptr = ptr->next;
            pos--;
        }
        if (ptr->next->next == NULL){  //handle last node
            deleteEnd();
        }
        else{  //handle somewhere pos in Double linked List except first and last node
            node *ptr1 = ptr->next;
            ptr->next = ptr1->next;
            ptr1->next->prev = ptr;

            delete ptr1;
            ptr1 = NULL;
        }
    }
}
// Display in reverse order Without changing pointer
void reverseWithOutChangePtr(){
    node *ptr = head;
    if(head == NULL){
        cout << "List is Empty";
    }else {
        while (ptr->next != NULL) //ptr point to the last node of the list
        {
            ptr = ptr->next;
        }
        while (ptr != NULL)
        {
            cout << ptr->data << endl;
            ptr = ptr->prev;
        }
    }
}

void reverse(){
    node *ptr1 = head;
    node *ptr2 = ptr1->next;

    while (ptr2 !=NULL)
    {
        ptr1->next = ptr1->prev;
        ptr1->prev = ptr2;
        ptr1 = ptr2;
        ptr2 = ptr2->next;
    } //while loop can't handle the last node so we use below two line
    ptr1->next = ptr1->prev;
    ptr1->prev = ptr2;

    head = ptr1;

};