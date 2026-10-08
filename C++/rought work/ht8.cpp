#include <stdio.h>
#include <stdlib.h>

// Use typedef and struct to create a Set type

Set* init(int member);
void insert(Set *set, int member);
void print_set(Set *set);
Set *set_union(Set *setA, Set *setB);

int main()
{
  Set *setA = init(4);
  insert(setA, 5);
  insert(setA, 6);
  insert(setA, 7);
  insert(setA, 7);
  print_set(setA);

  Set *setB = init(6);
  insert(setB, 7);
  insert(setB, 8);
  insert(setB, 9);
  insert(setB, 10);
  print_set(setB);

  Set *setC = set_union(setA, setB);
  print_set(setC);
}

// Create the set functions