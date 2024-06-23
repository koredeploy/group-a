import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeIndex from './pages/Home/HomeIndex'
import AboutIndex from './pages/About/AboutIndex'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<HomeIndex />} />
        <Route path='About' element = {<AboutIndex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
