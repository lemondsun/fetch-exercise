import './App.css';
import logo from './images/logo.png'
import { useState, useEffect } from 'react';
import { getData } from './services/api-helper';
import ListDisplayOne from './components/ListDisplayOne';
import ListDisplayTwo from './components/ListDisplayTwo';
import ListDisplayThree from './components/ListDisplayThree';
import ListDisplayFour from './components/ListDisplayFour';
import Header  from './components/Header'

function App() {
  const [allItems, setAllItems] = useState([]);

  useEffect(async () => {
    let info = await getData()
    setAllItems(info.data)
  
  }, [])

  return (
    <div className="App">
      <Header logo={logo} />
      <ListDisplayOne list={allItems} />
      <ListDisplayTwo list={allItems} />
      <ListDisplayThree list={allItems} />
      <ListDisplayFour list={allItems} />
      
    </div>
  );
}

export default App;
