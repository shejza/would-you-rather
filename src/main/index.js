import React, { useEffect } from 'react';
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
  useEffect(() => {
    if(localStorage.getItem('authId') === null) {
      console.log(location.pathname, 'ss');
      navigate("login");
      <Navigate to={"/login"} replace={true} state={{ from: location }}/>;
   }
  }, [location, navigate]);
 
  return children;
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
