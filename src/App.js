import { Route,Routes } from 'react-router-dom';

import Home from './components/routes/Home.js'
import Question1 from './components/routes/Question1.js'
import End from './components/routes/End.js'
import Form from './components/routes/Form.js'

import './App.css';

function App() {
  return (
    <div className="index_container">
      <div className="App">
      <Routes>
        <Route path='/' element= {<Form/>}></Route>
        <Route path='Home' element= {<Home/>}></Route>
        <Route path='Question1' element= {<Question1/>}></Route>
        <Route path='End' element= {<End/>}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;
