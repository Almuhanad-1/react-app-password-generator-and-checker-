import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Generate from './screens/generate/Generate';
import Check from './screens/check/check';
import Navbar from './components/Navbar';


function App() {
  console.log("1111")
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Generate />} />
        <Route path='/generate' element={<Generate />} />
        <Route path='/check' element={<Check />} />
      </Routes>
    </Router>



  );
}

export default App;
