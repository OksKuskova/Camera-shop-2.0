import { TabsValue } from "./tabs.type"

type TabsControlProps = {
  value: TabsValue,
  activeTab: TabsValue,
  onClick: (value: TabsValue) => void
}

function TabsControl({ value, activeTab, onClick }: TabsControlProps): JSX.Element {
  return <button className={`tabs__control ${value === activeTab ? 'is-active' : ''}`} type="button" onClick={() => onClick(value)}> {value} </button>
}

export default TabsControl;
