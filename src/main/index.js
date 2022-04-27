import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Index from 'main/scenes/application';
import Login from "main/scenes/auth";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


export default function index() {
  const auth = !!localStorage.getItem('authId');

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path='/*'
            element={auth ?  <ProtectedRoute user={auth}>
           <Index />
          </ProtectedRoute>  : <Navigate to='/login' />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
