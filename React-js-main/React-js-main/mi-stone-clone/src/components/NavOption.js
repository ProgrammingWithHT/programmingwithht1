import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptios.css"


const NavOption = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {

   const [miPhoneToggle, setMiPhoneToggle] = useState(false);
   const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);
   const [audioToggle,setAudioToggle] = useState(false);
   const [accessoriesToggle,setAccessoriesToggle] = useState(false);
   useEffect(() => {
       document.title = 'HT STORE'
        console.log(window.location.pathname)
       if(window.location.pathname === "/miphones"){
            setMiPhoneToggle(true)
       }else {setMiPhoneToggle(false)}
       if(window.location.pathname === "/redmiphones"){
            setRedmiPhoneToggle(true)
       }else {setRedmiPhoneToggle(false)}
       if(window.location.pathname === "/tv"){
            setTvToggle(true)
       }else {setTvToggle(false)}
       if(window.location.pathname === "/laptops"){
            setLaptopToggle(true)
       }else {setLaptopToggle(false)}
       if(window.location.pathname === "/lifestyle"){
            setFitnessToggle(true)
       }else {setFitnessToggle(false)}
       if(window.location.pathname === "/home"){
            setHomeToggle(true)
       }else {setHomeToggle(false)}
       if(window.location.pathname === "/audio"){
            setAudioToggle(true)
       }else {setAudioToggle(false)}
       if(window.location.pathname === "/accessories"){
            setAccessoriesToggle(true)
       }else {setAccessoriesToggle(false)}

       
   }, [window.location.pathname])

    return (
        <div className="navOptions"> 

            {miPhoneToggle? miPhones.map((item)=>(
                 <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
            
      
            {redmiPhoneToggle? redmiPhones.map((item)=>(

               < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

            {tvToggle ? tv.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }

           {laptopToggle ?   laptop.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     
   

            {fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

               {homeToggle ?   home.map((item)=>(

                   < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
     
     

            {audioToggle ?   audio.map((item)=>(

             < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null }
     

            {accessoriesToggle ?   accessories.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
             )) : null }
     
        </div>
    )
}

export default NavOption