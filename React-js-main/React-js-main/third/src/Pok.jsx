import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Pok = () => {

    const [num, setNum] = useState(0)
    const [name, setName] = useState('a')
    useEffect(() => {
        console.log(num, " ", name);
        // alert('hi')

            //async function getData(){
            //    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)  //if we used fetch api in useEffect than used axios.get() otherwise no need of axios
            //    const res1 = await res.json()
            //    setName(res1.name);
            //}

        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setName(res.data.name);
        }
        
        getData();
    }, [num])
    return <>
        <h1>You Choose {num} Value</h1>
        <h1>My name is {name} </h1>

        <select value={num} onChange={(e)=> {
            setNum(e.target.value);
        }}>
            <option value='1'>1</option>
            <option value='25'>25</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
    </>
}

export default Pok;