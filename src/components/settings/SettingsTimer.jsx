import { useContext } from "react";
import Button from "../common/Button"
import Block from "../common/Block";
import { MinutesContext } from "../contexts/MinutesContext";
import { POMODO_PHASES } from "../../App";

const SettingsTimer = ({color, settingTimerLabel}) => {
  const {minutes, setMinutes} = useContext(MinutesContext);

  const handleSettings = {
    increment: () => {
      setMinutes(prev => (
        {...prev, [settingTimerLabel]: prev[settingTimerLabel] + 5 }
      ))
    },
    decrement: () => {
      setMinutes(prev => (
        {...prev, [settingTimerLabel]: prev[settingTimerLabel] === POMODO_PHASES[settingTimerLabel] ? prev[settingTimerLabel] : prev[settingTimerLabel] - 5}
      ))
    }
  }

 
  return <div className="settingsBttn">
    <Button shape="square" color={color} decoration="-" onClick={handleSettings.decrement} />
    <Block className="flexCenter settingBlock" type="noShadow" color="white" children={minutes[settingTimerLabel]} />
    <Button shape="square" color={color} decoration="+" onClick={handleSettings.increment} />
  </div>
}

export default SettingsTimer; 