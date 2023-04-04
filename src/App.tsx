import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signin from './pages/Signin';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  )
}

export default App
