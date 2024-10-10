import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './button'
import Header from './header'
import Footer from './footer'
import Main from './main1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Button />
      <Footer />
    </>
  )
}

export default App
