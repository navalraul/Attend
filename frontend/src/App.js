// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/register' element = {<Register/>} />
        <Route exact path='/login' element = {<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
