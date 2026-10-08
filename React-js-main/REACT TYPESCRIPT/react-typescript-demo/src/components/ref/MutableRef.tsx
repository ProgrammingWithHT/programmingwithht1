import { useRef,useEffect ,useState} from "react";

export const MutableRef=()=>{
    const [timer,setTimer] = useState(0);

    // const interValRef = useRef<number>(null!);
    // const stopTimer = ()=>{
    //     window.clearInterval(interValRef.current)
    // }

    // const interValRef = useRef<number | undefined>(undefined);
    // const stopTimer = ()=>{
    //     window.clearInterval(interValRef.current)
    // }

    const interValRef = useRef<number | null>(null);
    const stopTimer = ()=>{
        if(interValRef.current)
            window.clearInterval(interValRef.current)
    }

    useEffect(()=>{
        interValRef.current=window.setInterval(()=>{ //setinterval return the numerical value which is the id of that interval
            setTimer((timer)=>timer+1)
        },1000)
        return ()=>{
            stopTimer()
        }
    },[])

    return <div>
        HookTimer - {timer} -
        <button onClick={()=>stopTimer()}>Stop Timer</button>
    </div>
}