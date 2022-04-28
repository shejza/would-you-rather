import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,

} from 'react-router-dom';
import Index from 'main/scenes/application';
import Login from "main/scenes/auth";
import NoMatch from './scenes/application/scenes/scenes/home/NoMatch';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  let navigate = useNavigate();
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('authId') === null) {
      setIsRedirect(true);
   }
  }, [location, navigate]);
 
  return isRedirect ? <Navigate to={"/login"} replace={true} state={{ from: location }}/> : children;
}

export default function index() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          
        <Route exact path='/login' element={<Login/>}/>
        
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Index />
            </PrivateRoute>
          }
        />


          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
