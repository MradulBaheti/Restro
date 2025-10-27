import React, { useState } from "react";
import { BrowserRouter as Router ,Routes,Route  } from "react-router-dom";
import { Home, Tables } from "./pages";
import { Orders } from "./pages";
import { Auth } from "./pages";
import Headers from "./components/shared/Headers";
import { BottomNav } from "./components/shared/BottomNav";
import Menu from "./pages/Menu";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Headers/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/tables" element={<Tables/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="*" element={<div>Not Found</div>} />
          
        
        </Routes>
        <BottomNav/>
      </Router>
    </>
  )
}

export default App
