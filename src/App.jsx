import { useState } from 'react'
import Homes from './pages/homes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-750'>
      <Homes/>
    </div>
  )
}

export default App
