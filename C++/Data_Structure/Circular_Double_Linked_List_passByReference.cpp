#include<iostream>
using namespace std ;

// Circular Double Linked List With Method Pass By Reference

struct node
{
    node *prev;
    int data;
    node *next;
};
void output(node *tail);
void addToEmpty(node **tail,int data);
void addToEnd(node **tail,int data);
void addToBeg(node **tail,int data);
void addToPos(node **tail,int data,int pos);
void deleteBeg(node **tail);
void deleteEnd(node **tail);
void deletePos(node **tail,int pos);

int main(){
    
    node *tail = NULL;
    addToEmpty(&tail,10);
    addToEnd(&tail,20);
    addToEnd(&tail,30);
    // addToBeg(&tail,5);
    // addToPos(&tail,15,2);
    // deleteBeg(&tail);
    // deleteEnd(&tail);
    deletePos(&tail,3);

    output(tail);
    // reverseWithOutChangePtr(tail);

    return 0 ;
}









// For Displaying Circular Double Linked List
void output(node *tail){
    node *ptr = tail->next;
    do{
        cout << ptr->data << " ";
        ptr = ptr->next;
    }while (ptr != tail->next);
}

// Uesd To add In Empty Circular Double Linked List
void addToEmpty(node **tail,int data){
    node *temp = new node;
    temp->prev = temp;
    temp->data = data;
    temp->next = temp;

    *tail = temp;
};

// Add In The End Of Circular Double Linked List
void addToEnd(node **tail,int data){
    if(*tail == NULL){
        addToEmpty(&(*tail),data);
    }else{
        node *temp = new node;
        temp->prev = temp;
        temp->data = data;
        temp->next = temp;

        node *ptr = (*tail)->next;
        
        temp->prev = *tail;
        temp->next = (*tail)->next;
        ptr->prev = temp;
        (*tail)->next = temp;

        *tail = temp;

    }
};

// Add In The Beginning Of Circular Double Linked List
void addToBeg(node **tail,int data){
    if(*tail == NULL){
        addToEmpty(&(*tail),data);
    }else {
        node *temp = new node;
        temp->prev = temp;
        temp->data = data;
        temp->next = temp;

        node *ptr = (*tail)->next;

        temp->next = ptr;
        ptr->prev = temp;
        temp->prev = *tail;
        (*tail)->next = temp;
    }
}

// Add At any position of Circular Double Linked List
void addToPos(node **tail,int data,int pos){
    if (*tail == NULL){
        cout << "List Is Empty";
    }else if (pos == 1){
        addToBeg(&(*tail),data);
    }else {
        node *temp = new node;
        temp->prev = temp;
        temp->data = data;
        temp->next = temp;

        node *ptr = (*tail)->next;

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
void deleteBeg(node **tail){
    if (*tail == NULL)
    {
        cout << "List Is Empty";
    }else {
        node *ptr = (*tail)->next;
        if((*tail)->next == ptr->next){  //handle if only have one node
            delete *tail;
            *tail = NULL;
        }else {
            (*tail)->next = ptr->next;
            ptr->next->prev = *tail;
            delete ptr;
            ptr = NULL;
        }
    }
}

// delete last node in circular double linked list
void deleteEnd(node **tail){
    if (*tail == NULL){
        cout << "List Is Empty";
    }else {
        node *ptr = *tail;
        *tail = (*tail)->prev;
        if (ptr->next == (*tail)->next){  //handle if only have one node
            deleteBeg(&(*tail));
        }else {
            (*tail)->next = ptr->next;
            ptr->next->prev = *tail; 

            delete ptr;
            ptr = NULL;
        }
        
    }
}

// Delete node at any position of Circular Double Linked List
void deletePos(node **tail,int pos){
    if (*tail == NULL){
        cout << "List Is Empty";
    }else if (pos == 1){
        deleteBeg(&(*tail));
    }else {
        node *ptr = (*tail)->next;
        pos--;
        while(pos != 1){   //goto the previous node of our delete node
            ptr = ptr->next;
            pos--;
        }
        if(ptr->next == *tail){  //handle if we delete last node
            deleteEnd(&(*tail));
        }else {
            node *ptr1 = ptr->next;

            ptr->next = ptr1->next;
            ptr1->next->prev = ptr;

            delete ptr1;
            ptr1 = NULL;
        }

    }
}
