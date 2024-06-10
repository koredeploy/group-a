import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeIndex from './pages/Home/HomeIndex'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<HomeIndex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
