import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from 'react-router-dom';
import Index from 'main/scenes/application';
import Login from "main/scenes/auth";

export default function index() {
  const auth = !!localStorage.getItem('authId');


  return (
    <React.Fragment>
      <Router>
        <Routes>
     

           <Route
            path='/*'
            element={auth ? <Index /> : <Navigate to='/login' />}
          />
   <Route
              path='/login'
              element={<Login />}
            />
         {/*<Route path='/' exact element={<Login />} />*/}
        </Routes>
      </Router>
    </React.Fragment>
  );
}
