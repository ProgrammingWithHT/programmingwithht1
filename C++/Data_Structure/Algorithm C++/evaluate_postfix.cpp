#include<iostream>
#include<stack>
#include<string.h>
using namespace std ;

void evaluate_postFix(char expression[]){
        stack<int> s;                                                             
    for (int i = 0; i < strlen(expression); i++)
    {
        char c = expression[i];
        if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')){
			s.push(c- 48);
        }
        else if (c == '*' || c == '+' || c == '/' || c == '-' || c == '^')
        {
            int val1 = s.top();s.pop();
            int val2 = s.top();s.pop();
            switch (expression[i]){
                case '+': s.push(val2 + val1); break;
                case '-': s.push(val2 - val1); break;
                case '*': s.push(val2 * val1); break;
                case '/': s.push(val2 / val1); break;
                case '^': s.push(val2 ^ val1); break;
            }
        }
    }

    while(!s.empty()){
        cout << s.top();
        s.pop();
    }
}

int main(){
    
    char expression[] = "753*51^/+32-+";
    evaluate_postFix(expression);

    return 0 ;
}