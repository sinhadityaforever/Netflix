import React, { useEffect } from "react";
import HomeScreen from "./Screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginscreen from "./Screens/Loginscreen";
import { auth } from "./firebase";
function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
      } else {
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Loginscreen></Loginscreen>
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
