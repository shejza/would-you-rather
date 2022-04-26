import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { actions } from '../../../auth/services/actions';
import { Menu, Image } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
const Nav = ({users}) => {
  const dispatch = useDispatch();

 const handleLogout = e => {
  e.preventDefault();
  dispatch((actions.setAuthUser(null)));
  localStorage.removeItem('authId');
};

const [activeItem, setActiveItem ] = useState('home');

const handleItemClick = (e, { name }) => setActiveItem(name)

const auth = localStorage.getItem('authId');

  return (
    <>
    
    <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={NavLink} 
            to="/app" exact
          />
          <Menu.Item
            name='new'
            active={activeItem === 'new'}
            onClick={handleItemClick}
            as={NavLink} to="/add"
          />
          <Menu.Item
            name='leader_board'
            active={activeItem === 'leader_board'}
            onClick={handleItemClick}
            as={NavLink} to="/leader_board  "
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