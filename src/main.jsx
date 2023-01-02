import React from 'react'
import ReactDOM from 'react-dom/client'
import { AnimatePresence } from 'framer-motion'
import PokeContextProvider from './context/pokeContext'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence>
      <PokeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PokeContextProvider>
    </AnimatePresence>
  </React.StrictMode>,
)
