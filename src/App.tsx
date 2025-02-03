import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'
import Gallery from './pages/Gallery'


function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-600">

        React Framer tests</h1>
      <Router>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
