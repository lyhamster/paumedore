import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import { useTimer } from "../../hooks/useTimer";
import useSound from "use-sound";
import switchOnSFX from "../../components/sounds/switchOn.mp3"
import switchOffSFX from "../../components/sounds/switchOff.wav"


const StartButton = () => {
    const { on, setOn } = useContext(TimerContext); 
    const { start, stop } = useTimer();
    const [switchOnSound] = useSound(switchOnSFX, {
        volume: 0.5,
    });
    const [switchOffSound] = useSound(switchOffSFX, {
        volume: 0.5,
    });

    const toggleOn = () => {
        setOn(prev => !prev);
        if (!on === false) {
            switchOffSound();
            stop()
        } else {
            switchOnSound();
            start();
        }
    }

    return <div className={on ? "startPaume" : "startBttnWrapper"} onClick={toggleOn}>
        <div className="startSemiRectangle"></div>
        <div className="startLabel">start</div>
    </div>
}

export default StartButton;