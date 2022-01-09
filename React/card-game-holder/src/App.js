import * as React from "react";
import { Routes, Route} from "react-router-dom";


import MainNavigation from "./layout/MainNavigation";
import Chigago from "./pages/CardGame Pages/Chicago";
import Home from "./pages/Home";
import BasicCounter from "./pages/BasicCounter";


function App() {
  return (
    <>
    <MainNavigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/basicCounter" element={<BasicCounter/>}/>
        <Route path="/chicago" element={<Chigago/>}/>
      </Routes>
    
    </>
  );
}

export default App;
