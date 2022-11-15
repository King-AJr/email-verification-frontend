import {Routes, Route} from 'react-router-dom'
import './App.css';
import Signup from './pages/Signup';
import SignIn from './pages/Signin';
import Verify from './pages/Verify';
import Layout from './pages/Layout';
import Home from './pages/Home';


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>      
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/verify/:error/:message" element={<Verify/>}/>
    </Routes>
  );
}

export default App;
