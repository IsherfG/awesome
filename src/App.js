import { Route,Routes } from 'react-router-dom';

import Home from './components/routes/Home.js'

import Question1 from './components/routes/Question1.js'
import Question2 from './components/routes/Question2.js'
import Question3 from './components/routes/Question3.js'
import Question4 from './components/routes/Question4.js'
import Question5 from './components/routes/Question5.js'
import Question6 from './components/routes/Question6.js'

import End from './components/routes/End.js'
import Form from './components/routes/Form.js'
import Admin from './components/routes/Dashboard/Admin.js'

import './App.css';

function App() {
  return (
    <div >
      <div className="App">
      <Routes>
        <Route path='/' element= {<Form/>}></Route>
        <Route path='Home' element= {<Question1/>}></Route>
        <Route path='Question1' element= {<Question1/>}></Route>
        <Route path='Question2' element= {<Question2/>}></Route>
        <Route path='Question3' element= {<Question3/>}></Route>
        <Route path='Question4' element= {<Question4/>}></Route>
        <Route path='Question5' element= {<Question5/>}></Route>
        <Route path='Question6' element= {<Question6/>}></Route>
        <Route path='End' element= {<End/>}></Route>
        <Route path='Admin' element= {<Admin/>}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;
