import { useRef } from "react";


export function UseTimer () {  
    const secondsRef = useRef(0);
    const chronoInterval = useRef();

    const chronoTimer = () => {
    chronoInterval.current = setInterval(() => {
        secondsRef.current = secondsRef.current + 1;
        console.log(secondsRef.current)
        if (secondsRef.current === 5) {
            console.log("hello")
            clearInterval(chronoInterval.current);
            setStart()
        }
    }, 1000)   
}
    return {
        "start" : () => chronoTimer(),
    }
}