#include<iostream>
using namespace std ;

// With Struct Linked List

struct node {
    int data;
    node* link;
}*head=NULL,*ptr=NULL; //make head and ptr global pointer variable

void add_at_end(int data);
void add_at_pos(int data,int pos);
void add_at_beg(int data);
void output_list();
void del_first();
void del_last();
void del_pos(int pos);
void del_list();
void reverse_list();

node *SearchBydata(int data){
    if(head == NULL){
        cout << "List Is Empty" << endl;
    }
    node *ptr1 = head;
    while (ptr1 != NULL)
    {
        if(data == ptr1->data){
            node *loc = ptr1;
            return ptr1;
        }else {
            ptr1 = ptr1->link;
        }
    }
}



int main(){

    add_at_end(20);
    add_at_end(30);
    add_at_end(40);
    add_at_end(50);
    add_at_end(10);
    add_at_end(5);

    output_list();

    return 0;
}

void del_list(){
    node *ptr1 = head;
    while (ptr1 != NULL)
    {
        ptr1 = ptr1->link;
        delete head;
        head = ptr1;
    }
};

// Delete node at certain position of linked list
void del_pos(int pos){
    node *pre = head;
    node *curr = head;

    if(head==NULL)
        cout << "List is empty";
    else if (pos == 1){
        head = head->link;
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
void del_last(){
    if(head==NULL)
        cout << "List Is Empty";
    else if(head->link == NULL){
        delete head;
        head = NULL;
    }else{
    node *ptr1 = head;
    while (ptr1->link->link != NULL)
    {
        ptr1 = ptr1->link;
    }
    delete ptr1->link;
    ptr1->link = NULL;
    }
};

//delete first node of linked list 
void del_first(){
    if(head==NULL)
        cout << "List Is Empty";
    else{
    node *ptr1 = head;
    head = head->link;
    delete ptr1;   //become dangling pointer;
    ptr1 = NULL;
    }
};

// Add node at particular postion of linked list
void add_at_pos(int data,int pos){
    node *ptr = NULL;
    node *temp = NULL;

    temp = new node;
    temp->data = data;
    temp->link = NULL;

    ptr = head;
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
void add_at_beg(int data){
    node *ptr = new node;
    ptr->data = data;
    ptr->link = NULL;

    ptr->link = head;
    head = ptr;

}

// FOR OUTPUT
void output_list(){
    node *ptr1 = head;
    if (ptr1 == NULL){
        cout << "list is empty" << endl;
    }else{
    while (ptr1 != NULL){
        cout << ptr1->data << endl;
        ptr1 = ptr1->link;
    }}
};

// This code take O(1) time to add data at the end of the linked list
void add_at_end(int data){
    node *temp;
    if (head == NULL){
        head = new node;
        head->data = data;
        head->link = NULL;
        ptr = head;
    }else{
        temp = new node;
        temp->data = data;
        temp->link = NULL;
        ptr->link = temp;
        ptr = temp;
    }
};

// Reverse each node of list
void reverse_list(){
    node *pre = NULL;
    node *next = NULL;
    while (head != NULL)
    {
        next = head->link;
        head->link = pre;
        pre = head;
        head = next;
    }
    head = pre;
};