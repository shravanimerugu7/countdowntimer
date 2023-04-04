import {useEffect, useState} from "react"
import "./count.css"
const CountTimer = ()=>{
    const [time,setTime] = useState();
    const [value,setValue] = useState();
    const [initialTime,setInitial] = useState();
    
    const handleEnter = (e) => {
        if(e.key==="Enter"){
            console.log("Enter")
            if(time==" "|| isNaN(time)){
                setTime(0)
            }
            
            const interval = setInterval(()=>{
                setTime((prev)=>{
                    if(prev<=0){
                        clearInterval(interval)
                        return 0;
                    }if(prev!=0){
                    return parseInt(prev-1)
                    }
                })
            },1000)
        }
    }
    return(
        <div id = "box">
            <h1 id = "heading">Count Down Timer</h1>
            <div id = "time">Enter the time to start count down:</div>
            <input id = "input" onKeyDown={(e)=>{handleEnter(e)}} onChange={(e)=>{setTime((e.target.value))}}/>
            <div id = "updated">Time left : </div>
            <div id ="updatedtime">{time}</div>
        </div>

    )
}
export default CountTimer