import Header from "./components/Header";
import './style/index.scss';
import Home from './pages/Home'
import { Route, Routes } from "react-router";
import Cart from "./pages/Cart";
import NotFoud from "./pages/NotFoud";
import { popUpContext } from "./context/popUpContext";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";





function App() {

  const [accepted, setAccepted] = useState('');
  const value = useMemo(()=>({accepted,setAccepted}), [accepted,setAccepted]);

  useEffect(()=>{
    if(localStorage.getItem('Order-process-acceptation') === 'accepted'){
      setAccepted(true)
    }
  })

  return (
    <div className="App">
      <popUpContext.Provider value={value}>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFoud />} />
            </Routes>
      </popUpContext.Provider>
    </div>
  );
}

export default App;
