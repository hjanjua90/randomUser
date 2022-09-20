import React  from "react";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Home';
import SingleUser from "./components/SingleUser";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user/:index" element={<SingleUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;