import React from 'react';
import App from './App';

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function div(a,b){
    return a/b;
}
function mul(a,b){
    return a*b;
}

export default add;
export {sub,div,mul};
