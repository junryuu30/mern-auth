import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dasboard from './components/Dasboard';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dasboard' element={<Dasboard/>}/>

    </Routes>
    </>
  );
}

export default App;
