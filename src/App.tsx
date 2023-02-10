import React from 'react';
import './App.css';
import Form from './component functional/Form';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom"
import Home from './component functional/Home';
import FormSuccessfull from './component functional/FormSuccessfull';
// import FunctionalComponent from './components/FunctionalComponent';
// import NewForm from './components/NewForm';

function App() {

  return (
    <div>

      
      <div className="App">
        {/* <NewForm/> */}
        {/* <FunctionalComponent/> */}
        <Router>
        <div className="header">
        <Link  to="/" className='link'>Home</Link>
        <Link to="/form" className='link'>Form</Link>
      </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />
            <Route path='/Success/:formdata' element={<FormSuccessfull />} />
          </Routes>
          <br />


        </Router>
      </div>
    </div>
  );
}

export default App;
