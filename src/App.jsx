import { useRef, useState } from 'react'
import './App.css'
import CountersPanel from './components/counters/countersPanel'
import SettingsPanel from './components/settings/SettingsPanel'
import TimerPanel from './components/timer/TimerPanel'
import ToDoPanel from './components/todo/ToDoPanel'
import { MinutesContext } from './components/contexts/MinutesContext'
import { TimerContext } from './components/contexts/TimerContext'
import Logo from './components/logo/Logo'

export const POMODO_PHASES = {
  work: 25,
  short: 5, 
  long: 15,
}

function App() {
  const paumeCycle = ["work", "short", "work", "short", "work", "short", "work", "long"];

  const [minutes, setMinutes] = useState(POMODO_PHASES);  
  const [currentTimer, setCurrentTimer] = useState(minutes);

  const [on, setOn] = useState(false);
  const [press, setPress] = useState(false);
  const [bounce, setBounce] = useState(false);

  const [workCounter, setWorkCounter] = useState(0);
  const [shortCounter, setShortCounter] = useState(0);
  const [longCounter, setLongCounter] = useState(0);

  const cycleIndex= useRef(0);
  const savePhaseInterval = useRef();
  const secondesCycle = useRef();    

  return (
    <div className='paumeWrapper'>
      <MinutesContext value={{minutes, setMinutes}} >
        <TimerContext value={{on, setOn, currentTimer, setCurrentTimer, cycleIndex, paumeCycle, workCounter, setWorkCounter, shortCounter, setShortCounter, longCounter, setLongCounter, 
          savePhaseInterval, secondesCycle, press, setPress, bounce, setBounce
        }}>
          <div className='paumeDigital_Section'>
            <Logo />
            <TimerPanel />
            <CountersPanel />
          </div>
          <div className='paumeAction_Section'>
            <ToDoPanel/>
            <SettingsPanel/>
          </div>
        </TimerContext>
      </MinutesContext>
    </div>
  )
}

export default App
