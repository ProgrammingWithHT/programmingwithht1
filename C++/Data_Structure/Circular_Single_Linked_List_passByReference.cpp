#include<iostream>
using namespace std;

// Circular Single Linked List With Method Pass By Reference

struct node
{
    int data;
    node *link;
};

void addToEmpty(node **tail,int data);
void addToBeg(node **tail,int data);
void addToEnd(node **tail,int data);
void addToPos(node **tail,int data,int pos);
void del_first(node **tail);
void del_last(node **tail);
void del_pos(node **tail,int pos);
void output(node *tail);




int main(){
    node *tail = NULL;
    addToEnd(&tail,10);
    addToEnd(&tail,20);
    addToBeg(&tail,5);
    // addToPos(&tail,50,2);
    // del_first(&tail);
    // del_last(&tail);
    // del_pos(&tail,2);
    output(tail);

    return 0 ;
}





// Display data of Circular Single List
void output(node *tail){
    node *ptr = tail->link;
    do{
        cout << ptr->data << endl;
        ptr = ptr->link;
    }while (ptr != tail->link);
}

// Add to empty list
void addToEmpty(node **tail,int data){
    node *temp = new node;
    temp->data = data;
    temp->link = temp;
    *tail = temp;
}

// Add Any Postion of Circular Single Linked List
void addToPos(node **tail,int data,int pos){
    if (*tail == NULL){
        addToEmpty(&(*tail),data);
    }else if(pos == 1){  //if insert at beg
        addToBeg(&(*tail),data);
    }else {
        node *ptr = (*tail)->link;
        pos--;
        while (pos != 1)
        {
            ptr = ptr->link;
            pos--;
        }
        node *temp = new node;
        temp->data = data;
        temp->link = temp;

        if (ptr == *tail){  //if insert at end
            addToEnd(&(*tail),data);
        }else {
            temp->link = ptr->link;
            ptr->link = temp;
        }
    }
}

// Add at End of Circular Single List
void addToEnd(node **tail,int data){
    if(*tail == NULL){
        addToEmpty(&(*tail),data);
    }else{
        node *temp = new node;
        temp->data = data;
        temp->link = temp;

        node *ptr = (*tail)->link;
        (*tail)->link = temp;
        temp->link = ptr;
        *tail = temp;
    }
};

// Add at Beg of Circular Single List
void addToBeg(node **tail,int data){
    if(*tail == NULL){
        // node *temp = new node;
        // temp->data = data;
        // temp->link = temp;
        // *tail = temp; 
        addToEmpty(&(*tail),data); //we also write above 4 line instead of this line
    }else {
        node *temp = new node;
        temp->data = data;
        temp->link = temp;

        node *head = (*tail)->link;
        temp->link = head;
        (*tail)->link = temp;
    }
}

// used to delete first node in Circular Single Linked List
void del_first(node **tail){
    if (*tail == NULL){
        cout << "List Is Empty";
    }else {
        node *head = (*tail)->link;
        if((*tail)->link == head->link){  //handle if node only 1
            *tail = NULL;
        }else {
            (*tail)->link = head->link;
            delete head;
            head = NULL;
        }
    }
};

// Delete Last node of Circular Single Linked List;
void del_last(node **tail){
    if (*tail == NULL){
        cout << "List Is Empty";
    }
    else {
        node *ptr = (*tail)->link;
        if ((*tail)->link == ptr->link){
            del_first(&(*tail));
        }else {
            while (ptr->link != *tail)
            {
                ptr = ptr->link;
            }
            ptr->link = (*tail)->link;
            delete *tail;
            *tail = ptr;
        }
    }
};

// del any pos of node in Circular Single List
void del_pos(node **tail,int pos){
    if (*tail == NULL){
        cout << "List Is Empty";
    }else if (pos == 1){
        node *ptr = (*tail)->link;
        (*tail)->link = ptr->link;
        delete ptr;
        ptr = NULL;
    }else {
        node *ptr = (*tail)->link;
        pos --;
        while (pos != 1){
            ptr = ptr->link;
            pos--;
        }
        if (*tail == ptr->link){  //handle last node
            del_last(&(*tail));
        }else {
            node *ptr1 = ptr->link;
            ptr->link = ptr1->link;
            delete ptr1;
            ptr1 = NULL;
        }
    }
};