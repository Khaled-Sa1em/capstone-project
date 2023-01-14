import Header from './components/Header'
import Photos from './pages/Photos'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Carts from './pages/Carts'
function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/carts" element={<Carts />} />
            <Route path="/" element={<Photos />} />
          </Routes>
        </div>
      </main>
    </React.Fragment>
  )
}

export default App
