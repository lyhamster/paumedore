import Block from "../common/Block";
import SettingsHeader from "./SettingsHeader";
import SettingsTimerRow from "./SettingsTimerRow";

const SettingsPanel = () => {
   return <Block type="border" className="panelColumn" color="var(--orangeMainColor)">
      <SettingsHeader/>
      <Block type="basic" color="white">
         <SettingsTimerRow color="var(--workColor)" settingTimerLabel="work"/>
         <SettingsTimerRow color="var(--pastelYellowColor)" settingTimerLabel="short"/>
         <SettingsTimerRow color="var(--pinkMainColor)" settingTimerLabel="long"/>
      </Block>
   </Block>
};

export default SettingsPanel;