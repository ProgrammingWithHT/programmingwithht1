#include<iostream>
using namespace std ;

struct node {
    node *prev;
    int data;
    node *next;
};


void display(node *head);
void addToEmpty(node **head,int data);
void addToEnd(node **head,int data);
void addToBeg(node **head,int data);
void addToPos(node **head,int data, int pos);
void deleteBeg(node **head);
void deleteEnd(node **head);
void deletePos(node **head,int pos);
void reverseWithOutChangePtr(node *head);
void reverse(node **head){
    node *ptr1 = *head;
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

    *head = ptr1;

};

int main(){
    node *head = NULL;
    addToEmpty(&head,10);
    addToEnd(&head,20);
    addToEnd(&head,30);
    // addToBeg(&head,5);
    // addToPos(&head,15,2);
    // deleteBeg(&head);
    // deleteEnd(&head);
    // deletePos(&head,2);


    // reverse(&head);
    display(head);
    // reverseWithOutChangePtr(head);

    return 0 ;
}

// For Output
void display(node *head){
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
void addToEmpty(node **head,int data){
    node *temp(new node);
    temp->prev = NULL;
    temp->data = data;
    temp->next = NULL;

    *head = temp;
}
// Insert At the End Of The Double Linked List
void addToEnd(node **head,int data){
    if(*head == NULL){
        node ***copyHead = &head;
        addToEmpty(*copyHead,data);
    }else{
        node *temp = new node;
        temp->prev = NULL;
        temp->data = data;
        temp->next = NULL;

        node *ptr = *head;
        while (ptr->next != NULL){
            ptr = ptr->next;
        }

        temp->prev = ptr;
        ptr->next = temp;
    }
}
// Insert At the Beginning Of The Double Linked List
void addToBeg(node **head,int data){
    if(*head == NULL){
        node *copyHead = *head;
        addToEmpty(&copyHead,data);
    }else{
    
        node *temp = new node;
        temp->prev = NULL;
        temp->data = data;
        temp->next = NULL;

        node *ptr = *head;
        temp->next = ptr;
        ptr->prev = temp;

        *head = temp;
    }
};
// Insert At SomeWhere Postion Of The Double Linked List
void addToPos(node **head,int data, int pos){
    if(*head == NULL){
        node *copyHead = *head;
        addToEmpty(&copyHead,data);
    }else if(pos == 1){
        // node ***copyHead = &head;
        // addToBeg(*copyHead,data);
        addToBeg(&(*head),data);  //we also write above two line instead of this line
    }else{
        node *temp = new node;
        temp->prev = NULL;
        temp->data = data;
        temp->next = NULL;

        node *ptr = *head;

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
void deleteBeg(node **head){
    if(*head == NULL){
        cout << "List Is Empty";
    }
    else {

        *head = (*head)->next;
        delete (*head)->prev;
        (*head)->prev = NULL;
    }
}
// Delete The End Node Of Double Linked List
void deleteEnd(node **head){
    if(*head == NULL){
        cout << "List Is Empty";
    }
    else {
        node *ptr = *head;
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
void deletePos(node **head,int pos){
    node *ptr = *head;
    if (*head == NULL){   //handle if list is empty 
        cout << "List Is Empty";
    }else if (pos == 1){ //handle first node
        deleteBeg(&(*head));
    }
    else {
        pos--;
        while (pos !=1)
        {
            ptr = ptr->next;
            pos--;
        }
        if (ptr->next->next == NULL){  //handle last node
            deleteEnd(&(*head));
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
void reverseWithOutChangePtr(node *head){
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