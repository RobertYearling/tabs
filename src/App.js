import React, { useState } from 'react';
import './App.css';
import TabBar from './components/TabBar';

function App() {
  const [tab, setTab] = useState([
    {
      idx: 0,
      title: 'Button One',
      phrase: 'Behind Button Number One',
      selected: true
    },
    {
      idx: 1,
      title: 'Button Two',
      phrase: 'Behind Button Number Two',
      selected: false
    },
    {
      idx: 2,
      title: 'Button Three',
      phrase: 'Behind Button Number Three',
      selected: false
    }
  ])

  const clkHandler = item => {
    const choosenTabs = [...tab]
    choosenTabs.forEach((t) => t.selected = false);
    setTab(choosenTabs);
    const changeButton = tab[item];
    changeButton.selected = true;
    setTab([...tab.slice(0,item), changeButton, ...tab.slice(item+1)]);
  }

  return (
    <div className="App">
      {
        tab.map((item, i) => {
          return <>
            <TabBar tabItem = {item} key = {i} isClicked = {clkHandler} />
            </>
        })
      }
      {
        tab.map((item, i) => {
          return item.selected ? <h2>{item.phrase}</h2> : ""
        })
      }
    </div>
  );
}

export default App;
