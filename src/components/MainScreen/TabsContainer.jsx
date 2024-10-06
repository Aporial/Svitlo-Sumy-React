import React, { useState } from 'react'
import './Tabs.css' // Імпортуємо CSS файл

const Tab = ({ label, active, onClick }) => {
  return (
    <div className={`tab ${active ? 'active' : ''}`} onClick={onClick}>
      {label}
    </div>
  )
}

const TabPanel = ({ children, active }) => {
  return active ? <div className="tab-panel">{children}</div> : null
}

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (index) => {
    setActiveTab(index)
  }

  return (
    <div className="tabs-container">
      <div className="tabs">
        <Tab
          label="НД, 06.10"
          active={activeTab === 0}
          onClick={() => handleTabChange(0)}
        />
        <Tab
          label="ПН, 07.10"
          active={activeTab === 1}
          onClick={() => handleTabChange(1)}
        />
        <Tab
          label="ВТ, 08.10"
          active={activeTab === 2}
          onClick={() => handleTabChange(2)}
        />
      </div>
      <div
        className="tab-indicator"
        style={{ left: `${activeTab * 33.33}%` }}
      />
      <TabPanel active={activeTab === 0}>Без відключень</TabPanel>
      <TabPanel active={activeTab === 1}>
        Контент для вкладки ПН, 07.10
      </TabPanel>
      <TabPanel active={activeTab === 2}>
        Контент для вкладки ВТ, 08.10
      </TabPanel>
    </div>
  )
}

export default TabsContainer
