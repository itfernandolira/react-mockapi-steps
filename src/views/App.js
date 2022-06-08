import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from "../layout/Navbar";
import Content from "../layout/Content";

function App() {
  return (
    <div className="container mt-2">
      <div className='row'>
        <Router>
          <div className='col-8'>
            <Content></Content>
          </div>
          <div className='col-4'>
            <Navbar></Navbar>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
