import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import Block from "../common/Block";
import StartButton from "./StartButton";
import TimerButton from "./TimerButton";
import TimerDecoration from "./TimerDecoration";
import TimerScreen from "./TimerScreen";
import { useTimer } from "../../hooks/useTimer";

const TimerPanel = () => {
    const { on, press, bounce } = useContext(TimerContext)
    const { pause, resume, skip } = useTimer();

    return <div className="timerPanelWrapper">
        <StartButton/>
        <Block type="border" className="flexColumn timerPanel" color="var(--yellowTimerColor)">
            <TimerScreen/>
            <div className="timerFooter">
                <div className="bttnsTimerWrapper">
                    <TimerButton onClick={() => pause()} className={!on || on && press ? "bttnCapsuleOff" : "bttnCapsuleOn"} ledOn={on && !press? {"--ledColor": "var(--workColor)"} : {"--ledColor": "#444444"}} label="pause" color="var(--orangeMainColor)"/>
                    <TimerButton  onClick={() => resume()} className={!on || on && !press ? "bttnCapsuleOff" : "bttnCapsuleOn"} ledOn={on && press ? {"--ledColor": "var(--workColor)"} : {"--ledColor": "#444444"}} label="resume" color="var(--orangeMainColor)"/>
                    <TimerButton onClick={() => skip()} className={!on || on && bounce ? "bttnCapsuleOff" : "bttnCapsuleOn"} ledOn={on && !bounce? {"--ledColor": "var(--workColor)"} : {"--ledColor": "#444444"}} label="skip" color="var(--bratGreenColor)"/> 
                </div>
                <TimerDecoration/>
            </div>
        </Block>
    </div>
}

export default TimerPanel;