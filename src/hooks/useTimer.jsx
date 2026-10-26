import { useContext } from "react";
import { MinutesContext } from "../components/contexts/MinutesContext";
import { TimerContext } from "../components/contexts/TimerContext";
import SoundBite from "../components/sounds/soundsBite.mp3"
import useSound from "use-sound";

export function useTimer () {  
    const { minutes } = useContext(MinutesContext);
    const { on, setCurrentTimer, paumeCycle, cycleIndex, setWorkCounter, setShortCounter, setLongCounter, savePhaseInterval, secondesCycle, setPress, setBounce } = useContext(TimerContext);
    const [statesSoundBttn] = useSound(SoundBite, {
        volume: 0.1,
    })

    const handlePaumeCyclePhase = (label) => {
        switch(label) {
            case "work": 
            setWorkCounter(prev => prev + 1);
            break; 

            case "short": 
            setShortCounter(prev => prev + 1);
            break;

            case "long":
            setLongCounter(prev => prev + 1);
            break;
        }
    }

    const runCycle = () => {
        secondesCycle.current = minutes[paumeCycle[cycleIndex.current]];
        setCurrentTimer(secondesCycle.current);
        if (cycleIndex.current >= paumeCycle.length) {
            cycleIndex.current = 0;
            runCycle(cycleIndex.current);
        } else {
            savePhaseInterval.current = setInterval(() => {
                secondesCycle.current = secondesCycle.current - 1;
                setCurrentTimer(secondesCycle.current);
                if (secondesCycle.current === 0) {
                    clearInterval(savePhaseInterval.current);
                    handlePaumeCyclePhase(paumeCycle[cycleIndex.current]);
                    cycleIndex.current = cycleIndex.current + 1;
                    runCycle(cycleIndex.current);
                }
            }, 1000);
        }
    }

    const pauseCycle = () => {
        if (!on) {
            return;
        }
        statesSoundBttn();
        setPress(true);
        clearInterval(savePhaseInterval.current);
        setCurrentTimer(secondesCycle.current);
    }

    const resumeCycle = () => {
        if (!on) {
            return;
        }
        statesSoundBttn();
        setPress(false);
        setCurrentTimer(secondesCycle.current);
        if(cycleIndex.current >= paumeCycle.length) {
            return;
        } else {
            savePhaseInterval.current = setInterval(() => {
                secondesCycle.current = secondesCycle.current - 1;
                setCurrentTimer(secondesCycle.current);
                if(secondesCycle.current === 0) {
                    clearInterval(savePhaseInterval.current);
                    handlePaumeCyclePhase(paumeCycle[cycleIndex.current]);
                    cycleIndex.current = cycleIndex.current + 1;
                    runCycle(cycleIndex.current);
                }
            }, 1000);
        }
    }

    const stopCycle = () => {
        if (!on) {
            return;
        }
        statesSoundBttn();
        setPress(false);
        clearInterval(savePhaseInterval.current);
        cycleIndex.current = 0;
    }

    const skipPhase = () => {
        if (!on) {
            return;
        }
        statesSoundBttn();
        setBounce(true);
        setTimeout(() =>{ 
            setBounce(false);
            setPress(false);
        },100);
        clearInterval(savePhaseInterval.current);
        cycleIndex.current = cycleIndex.current + 1;
        runCycle();
    }

    return {
        start: () => runCycle(),
        stop: () => stopCycle(),
        pause: () => pauseCycle(),
        resume: () => resumeCycle(),
        skip: () => skipPhase(),
    }
}