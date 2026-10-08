import { useRef,useEffect } from "react";

export const DomRef=()=>{
    // const inputRef=useRef<HTMLInputElement>(null)
    // useEffect(()=>{
    //     inputRef.current?.focus()  //we can't used focus with null so we add question mark on current
    // },[])

    //second method
    const inputRef=useRef<HTMLInputElement>(null!) //make null as a optional value this is non-null assertion
    useEffect(()=>{
        inputRef.current.focus();
        inputRef.current.classList.add('active')
        inputRef.current.classList.remove('active')
    },[])
    return <div>
        <input type="text" ref={inputRef}/>
    </div>
}