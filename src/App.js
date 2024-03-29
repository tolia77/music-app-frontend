import './assets/styles/App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AuthProvider from "./context/AuthProvider";
import Signup from "./pages/Signup";
import UserShow from "./pages/users/UserShow";
import RequireAuthorization from "./components/RequireAuthorization";

function App() {
    //TODO: require authorization
  return (
      <BrowserRouter>
          <AuthProvider>
              <Layout>
                  <Routes>
                      <Route index element={<Home/>}/>
                      <Route path="login" element={<Login/>}/>
                      <Route path="signup" element={<Signup/>}/>
                      <Route path="users">
                          <Route path=":userId" element={
                              <RequireAuthorization>
                                <UserShow/>
                              </RequireAuthorization>
                          }/>
                      </Route>
                  </Routes>
              </Layout>
          </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
