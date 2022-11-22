import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
& ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

& li {
  margin: 0;
  margin-left: 2rem;
}

& a {
  text-decoration: none;
  color: white;
}

& a:hover,
& a:active {
  color: #f3cafb;
}

& button {
  font: inherit;
  background: #892ea5;
  border: 1px solid #892ea5;
  padding: 0.5rem 1.5rem;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border-radius: 20px;
}

& button:focus {
  outline: none;
}

& button:hover,
& button:active {
  color: #f3cafb;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
}


`;




const Navigation = (props) => {
  return (
    
    <Nav>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </Nav>
    
  );
};

export default Navigation;
