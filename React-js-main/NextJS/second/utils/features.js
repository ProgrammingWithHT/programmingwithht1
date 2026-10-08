import { resolve } from "styled-jsx/css"

export const getAllUsers = async()=>{
    // const res = await fetch('https://jsonplaceholder.typicode.com/users',{
    //     cache: 'no-cache', // no-cache means dynamic rendering means no rendener
    // }) 
    const res = await fetch('https://jsonplaceholder.typicode.com/users') 
    if(!res.ok)
        return new Error('Something went wrong')
    return await res.json()
}
export const getUserDatail = async(id)=>{
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
    if(!res.ok)
        return new Error('Something went wrong')
    return await res.json()
}
export const getUserPosts = async(id)=>{
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`) 
    if(!res.ok)
        return new Error('Something went wrong')

    return await res.json();
    // const data = await res.json();
    // return await new Promise(resolve=>{
    //     setTimeout(()=>{
    //         resolve(data)
    //     },2000)
    // })
}
export const getAllPosts = async()=>{
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`) 
    if(!res.ok)
        return new Error('Something went wrong')

    return await res.json();
    
}