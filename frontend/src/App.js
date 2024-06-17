// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/register' element = {<Register/>} />
        <Route exact path='/login' element = {<Login/>} />
        <Route exact path='/' element = {<Home />} />
      </Routes>
    </div>
  );
}

export default App;
