import { useState } from 'react';


const HooksArray = () => {
  const [item, setItem] = useState([])

  const addItemHandler = () => {
    setItem([
      ...item,
      {
        id: item.length,
        number: Math.floor(Math.random() * 10)
      }
    ])
  }

  return <div>
    {item.map(item => {
      return <li key={item.id} >{item.number}</li>
    })}
    <button onClick={addItemHandler} >add item</button>
  </div>
}

export default HooksArray;