import './App.css';
import { useState, useEffect } from 'react';
import { getData } from './services/api-helper';

function App() {
  const [allItems, setAllItems] = useState([]);

  useEffect(async () => {
    let info = await getData()
    setAllItems(info.data)
  
  }, [])

  return (
    <div className="App">
      
      <div>
    <h1>LIST ONE</h1>
      <div class="grid-container">
        {/* */}
        {
          allItems.map((x) =>
          {
            if (x.listId === 1 && x.name !== null && x.name !== "") { return <p>{x.name}</p> }
      })
        }
        </div>
        </div>
      
    </div>
  );
}

export default App;
