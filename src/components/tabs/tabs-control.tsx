import { ACTIVE_CLASS } from "../../constants/class-name";
import { TabsValue } from "./tabs.type"

type TabsControlProps = {
  value: TabsValue,
  activeTab: TabsValue,
  onClick: (value: TabsValue) => void
}

function TabsControl({ value, activeTab, onClick }: TabsControlProps): JSX.Element {
  return <button className={`tabs__control ${value === activeTab ? ACTIVE_CLASS : ''}`} type="button" onClick={() => onClick(value)}> {value} </button>
}

export default TabsControl;
