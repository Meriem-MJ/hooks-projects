import React, { useState } from 'react';
import Header from './Components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [movieList, setmovieList] = useState()
  return (
    <div className="App">
     <Header/>
    </div>
  );
}

export default App;