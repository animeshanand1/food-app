import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Login from "./screens/Login";
import Signup from "./screens/Signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
