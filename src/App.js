
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Signin from './Si';
import TheMain from './Main';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Signin/>}/>
      <Route path="/TheMain" element={<TheMain/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
