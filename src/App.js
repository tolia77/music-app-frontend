import './assets/styles/App.scss';
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
      <BrowserRouter>
          <AuthProvider>
              <Layout>
                  <Routes>
                      <Route index element={<Home/>}/>
                      <Route path="login" element={<Login/>}/>
                  </Routes>
              </Layout>
          </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
