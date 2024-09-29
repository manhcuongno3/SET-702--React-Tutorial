import { useState } from 'react'
import Profile from './components/Profile/Profile'
import ShoppingList from './components/Shoppinglist/Shoppinglist'
import MyButton from './components/MyButton/MyButton'


export default function App () {
  const [count, setCount] = useState(0)

  function handleClick () {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton count={count} onClick={handleClick}/>
      <Profile />
      <ShoppingList />
    </div>
  )
}
