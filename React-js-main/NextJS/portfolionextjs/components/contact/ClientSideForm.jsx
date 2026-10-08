'use client'
import React, { useState,useRef, useEffect } from 'react'
import axios from 'axios'

const ClientSideForm = () => {
    const useBtn = useRef(null)
    
    const [postData,setPostData] = useState({
        fname: '',lname: '',email: '',comment: ''
    })
    let flag = false
    useEffect(() => {
    }, [flag]);
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            console.log("hi: ",process.env.BASE_URL)
            const data = await axios.post(process.env.BASE_URL,postData)
            console.log(data)
            flag = true
            useBtn.current.innerHTML = 'Form Submit Successfully'            
        }catch(error){console.log('Contactus axios error: ',error)}
        setPostData({fname: '',lname: '',email: '',comment: ''})
    }
    return (
        <form className="formContact" name="contact" onSubmit={handleSubmit}>
            <input value={postData.fname} onChange={e => setPostData({ ...postData, fname: e.target.value })} type="text" name="fname" placeholder="Name" required />
            <input value={postData.lname} onChange={e => setPostData({ ...postData, lname: e.target.value })} type="text" name="lname" placeholder="Last Name" required />
            <input value={postData.email} onChange={e => setPostData({ ...postData, email: e.target.value })} type="email" name="email" placeholder="E-mail" required />
            <textarea value={postData.comment} onChange={e => setPostData({ ...postData, comment: e.target.value })} name="comment" id="textarea" cols={30} rows={10} placeholder="No More Than 500 Character"
                required maxLength={500}></textarea>
            <button ref={useBtn} className="btnContact" type="submit">Send</button>
        </form>
    )
}

export default ClientSideForm