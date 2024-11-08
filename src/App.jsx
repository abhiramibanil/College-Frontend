import SignUp from "./Componenet/SignUp";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Componenet/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
