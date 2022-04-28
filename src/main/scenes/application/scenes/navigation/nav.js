import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { actions } from '../../../auth/services/actions';
import { Menu, Image } from 'semantic-ui-react'
import { NavLink, useLocation, Navigate } from "react-router-dom";
const Nav = ({users}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isRedirect, setIsRedirect] = useState(false);
 const handleLogout = e => {
  e.preventDefault();
  dispatch((actions.setAuthUser(null)));
  localStorage.removeItem('authId');
  setIsRedirect(true);
};

const [activeItem, setActiveItem ] = useState('home');

const handleItemClick = (e, { name }) => setActiveItem(name)

const auth = localStorage.getItem('authId');

  return (
    <>
    {isRedirect &&  <Navigate to={"/login"} replace={true} state={{ from: location }}/>}
    <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={NavLink} 
            to="/app" exact={+true}
          />
          <Menu.Item
            name='new'
            active={activeItem === 'new'}
            onClick={handleItemClick}
            as={NavLink} to="/add"
          />
          <Menu.Item
            name='leaderboard'
            active={activeItem === 'leaderboard'}
            onClick={handleItemClick}
            as={NavLink} to="/leaderboard  "
          />
          <Menu.Menu position='right'>
          <Menu.Item style={{paddingBottom: 5}}>
          <b style={{paddingRight: 8}}>{users[auth]?.name}</b>
              
                <Image
                  src={users[auth]?.avatarURL}
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
              
            </Menu.Item>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleLogout}
            />
          </Menu.Menu>
        </Menu>
      </div>
  </>
  );
}

export default Nav;