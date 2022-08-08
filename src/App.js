import { BrowserRouter } from "react-router-dom";
import { React, useState } from "react";

import Login from "./pages/Auth/Login";

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import AppLayout from "./pages/AppLayout";
import useToken from "./components/Token/useToken";

function App() {

  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  

  return (<>
    <BrowserRouter>
    <AppLayout />
     
    </BrowserRouter>
  </>);
}

export default App;
