import { Route,Routes } from 'react-router-dom';

import Home from './components/routes/Home.js'
import Question from './components/routes/Question.js'
import End from './components/routes/End.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='Question' element= {<Question/>}></Route>
        <Route path='End' element= {<End/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
