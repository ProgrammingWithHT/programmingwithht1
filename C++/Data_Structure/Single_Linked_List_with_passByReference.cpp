#include<iostream>
using namespace std ;

// Single Linked List With Pass By Reference

struct node {
    int data;
    node* link;
};

void add_at_end(node **head,node **ptr,int data);
void add_at_pos(node **head,int data,int pos);
void add_at_beg(node **head,int data);
void output_list(node *head);
void del_first(node **head);
void del_last(node **head);
void del_pos(node **head,int pos);
void del_list(node **head);
void reverse_list(node **head);

int main(){
    node *head = NULL;
    node *ptr;

    add_at_end(&head,&ptr,20);
    add_at_end(&head,&ptr,30);
    add_at_end(&head,&ptr,40);
    add_at_end(&head,&ptr,50);
    // add_at_beg(&head,10);
    // add_at_pos(&head,60,2);
    // del_first(&head);
    // del_last(&head);
    // del_pos(&head,1);
    reverse_list(&head);
    // del_list(&head);

    output_list(head);

    return 0;
}

void del_list(node **head){
    node *ptr = *head;
    while (ptr != NULL)
    {
        ptr = ptr->link;
        delete *head;
        *head = ptr;
    }
    
};

// Delete node at certain position of linked list
void del_pos(node **head,int pos){
    node *pre = *head;
    node *curr = *head;

    if(*head==NULL)
        cout << "List is empty";
    else if (pos == 1){
        *head = (*head)->link;
        delete pre;
        pre = NULL;
    }else{
        while (pos != 1)
        {
            pre = curr;
            curr = curr->link;
            pos--;
        }

        pre->link = curr->link;
        delete curr;
        curr = NULL;

    }

    
};

// Delete Last node of linked list
void del_last(node **head){
    if(*head==NULL)
        cout << "List Is Empty";
    else if((*head)->link == NULL){
        delete head;
        head = NULL;
    }else{
    node *ptr1 = *head;
    while (ptr1->link->link != NULL)
    {
        ptr1 = ptr1->link;
    }
    delete ptr1->link;
    ptr1->link = NULL;
    }
};

//delete first node of linked list 
void del_first(node **head){
    if(*head==NULL)
        cout << "List Is Empty";
    else{
    node *ptr = *head;
    *head = (*head)->link;
    delete ptr;   //become dangling pointer;
    ptr = NULL;
    }
};

// Add node at particular postion of linked list
void add_at_pos(node **head,int data,int pos){
    node *ptr = NULL;
    node *temp = NULL;

    temp = new node;
    temp->data = data;
    temp->link = NULL;

    ptr = *head;
    pos--;
    while (pos !=1)
    {
        ptr = ptr->link;
        pos--;
    }
    
    temp->link = ptr->link;
    ptr->link = temp;

};

// Add node at the beginning of the linked list
void add_at_beg(node **head,int data){
    node *ptr = new node;
    ptr->data = data;
    ptr->link = NULL;

    ptr->link = *head;
    *head = ptr;

}

// FOR OUTPUT
void output_list(node *head){
    node *ptr = head;
    if (ptr == NULL){
        cout << "list is empty" << endl;
    }else{
    while (ptr != NULL){
        cout << ptr->data << endl;
        ptr = ptr->link;
    }}
};

// This code take O(1) time to add data at the end of the linked list
void add_at_end(node **head,node **ptr,int data){
    node *temp;
    if (*head == NULL){
        *head = new node;
        (*head)->data = data;
        (*head)->link = NULL;
        *ptr = *head;
    }else{
        temp = new node;
        temp->data = data;
        temp->link = NULL;
        (*ptr)->link = temp;
        *ptr = temp;
    }
};

// Reverse each node of list
void reverse_list(node **head){
    node *pre = NULL;
    node *next = NULL;
    while (*head != NULL)
    {
        next = (*head)->link;
        (*head)->link = pre;
        pre = *head;
        *head = next;
    }
    *head = pre;
};