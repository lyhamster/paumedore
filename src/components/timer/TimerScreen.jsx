import { useContext, useEffect } from "react";
import Block from "../common/Block";
import { TimerContext } from "../contexts/TimerContext";

const TimerScreen = () => {
    const { on, press, currentTimer } = useContext(TimerContext);
    const { paumeCycle, cycleIndex } = useContext(TimerContext); 

    return <Block type="noBorder" className="counterScreen timerScreenWrapper" color="black">
        <p style={on && press ? {"--toggleColor" : "white"} : {"--toggleColor" : "grey"}}>pause</p>
        <span style={on ? {"--toggleColor" : "white"} : {"--toggleColor" : "grey"}}>{on ? currentTimer: "00 : 00"}</span>
        <div className="timerStateWrapper">
            <p style={paumeCycle[cycleIndex.current] === "work" && !press && on ? {"--toggleColor" : "white"} : {"--toggleColor" : "grey"}}>work</p>
            <p style={paumeCycle[cycleIndex.current] === "short" ? {"--toggleColor" : "white"} : {"--toggleColor" : "grey"}}>short</p>
            <p style={paumeCycle[cycleIndex.current] === "long" ? {"--toggleColor" : "white"} : {"--toggleColor" : "grey"}}>long</p>
        </div>
    </Block>
}

export default TimerScreen;