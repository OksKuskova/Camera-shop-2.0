import { useState } from "react";
import { TabsList } from "./tabs.const";
import { TabsValue } from "./tabs.type";
import TabsControl from "./tabs-control";
import { Camera } from "../../types/camera.types";
import { ACTIVE_CLASS } from "../../constants/class-name";

type TabsProps = Pick<Camera, 'vendorCode' | 'category' | 'description' | 'type' | 'level'>

function Tabs({ vendorCode, category, type, level, description }: TabsProps): JSX.Element {
  const [tab, setTab] = useState<TabsValue>(TabsList.Parametrs);

  const handleButtonClick = (value: TabsValue) => {
    setTab(value);
  }

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        {Object.values(TabsList).map((value) => <TabsControl key={value} value={value} activeTab={tab} onClick={handleButtonClick} />)}
      </div>
      <div className="tabs__content">
        <div className={`tabs__element ${tab === TabsList.Parametrs ? ACTIVE_CLASS : ''}`}>
          <ul className="product__tabs-list">
            <li className="item-list"><span className="item-list__title">Артикул:</span>
              <p className="item-list__text">{vendorCode}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Категория:</span>
              <p className="item-list__text">{category}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{type}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{level}</p>
            </li>
          </ul>
        </div>
        <div className={`tabs__element ${tab === TabsList.Description ? ACTIVE_CLASS : ''}`}>
          <div className="product__tabs-text">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default Tabs;
