import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <motion.dev className="box" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card />
      </motion.dev>
      <p>test</p>
    </>
  )
}

export default App
