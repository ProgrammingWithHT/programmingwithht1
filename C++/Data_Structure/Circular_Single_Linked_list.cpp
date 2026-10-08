#include<iostream>
using namespace std;


struct node
{
    int data;
    node *link;
} *tail=NULL;

void addToEmpty(int data);
void addToBeg(int data);
void addToEnd(int data);
void addToPos(int data,int pos);
void del_first();
void del_last();
void del_pos(int pos);
void output();



int main(){

    addToEnd(10);
    addToEnd(20);
    addToEnd(30);
    // addToPos(50,2);
    // del_first();
    // del_last();
    // del_pos(2);
    output();

    return 0 ;
}





// Display data of Circular Single List
void output(){
    node *ptr = tail->link;
    // do{
    //     cout << ptr->data << endl;
    //     ptr = ptr->link;
    // }while (ptr != tail->link);
    while(ptr != tail->link){
        cout << ptr->data << endl;
        ptr = ptr->link;
    }
}

// Add to empty list
void addToEmpty(int data){
    node *temp = new node;
    temp->data = data;
    temp->link = temp;
    tail = temp;
}

// Add Any Postion of Circular Single Linked List
void addToPos(int data,int pos){
    if (tail == NULL){
        addToEmpty(data);
    }else if(pos == 1){  //if insert at beg
        addToBeg(data);
    }else {
        node *ptr = tail->link;
        pos--;
        while (pos != 1)
        {
            ptr = ptr->link;
            pos--;
        }
        node *temp = new node;
        temp->data = data;
        temp->link = temp;

        if (ptr == tail){  //if insert at end
            addToEnd(data);
        }else {
            temp->link = ptr->link;
            ptr->link = temp;
        }
    }
}

// Add at End of Circular Single List
void addToEnd(int data){
    if(tail == NULL){
        addToEmpty(data);
    }else{
        node *temp = new node;
        temp->data = data;
        temp->link = temp;

        node *ptr = tail->link;
        tail->link = temp;
        temp->link = ptr;
        tail = temp;
    }
};

// Add at Beg of Circular Single List
void addToBeg(int data){
    if(tail == NULL){
        addToEmpty(data);
    }else {
        node *temp = new node;
        temp->data = data;
        temp->link = temp;

        node *head = tail->link;
        temp->link = head;
        tail->link = temp;
    }
}

// used to delete first node in Circular Single Linked List
void del_first(){
    if (tail == NULL){
        cout << "List Is Empty";
    }else {
        node *head = tail->link;
        if(tail->link == head->link){  //handle if node only 1
            tail = NULL;
        }else {
            tail->link = head->link;
            delete head;
            head = NULL;
        }
    }
};

// Delete Last node of Circular Single Linked List;
void del_last(){
    if (tail == NULL){
        cout << "List Is Empty";
    }
    else {
        node *ptr = tail->link;
        if (tail->link == ptr->link){
            del_first();
        }else {
            while (ptr->link != tail)
            {
                ptr = ptr->link;
            }
            ptr->link = tail->link;
            delete tail;
            tail = ptr;
        }
    }
};

// del any pos of node in Circular Single List
void del_pos(int pos){
    if (tail == NULL){
        cout << "List Is Empty";
    }else if (pos == 1){
        node *ptr = tail->link;
        tail->link = ptr->link;
        delete ptr;
        ptr = NULL;
    }else {
        node *ptr = tail->link;
        pos --;
        while (pos != 1){
            ptr = ptr->link;
            pos--;
        }
        if (tail == ptr->link){  //handle last node
            del_last();
        }else {
            node *ptr1 = ptr->link;
            ptr->link = ptr1->link;
            delete ptr1;
            ptr1 = NULL;
        }
    }
};