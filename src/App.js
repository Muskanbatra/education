import './App.css';
import { Home } from './component/Home';
import { Login } from './component/Login';
import { Navbar } from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Services } from './component/Services';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/services' element={<Services/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
