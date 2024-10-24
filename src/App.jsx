import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherWebsite from './WeatherWebsite/WeatherWebsite'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WeatherWebsite/>
    </>
  )
}

export default App
