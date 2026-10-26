import SettingsTimer from "./SettingsTimer";

const SettingsTimerRow = ({settingTimerLabel, color}) => {
    return <div className="settingsTimerRow">
        <p>{settingTimerLabel}</p>
        <SettingsTimer color={color} settingTimerLabel={settingTimerLabel}/>
    </div>
}

export default SettingsTimerRow;