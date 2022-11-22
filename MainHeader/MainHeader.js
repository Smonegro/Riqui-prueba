import React from 'react';

import Navigation from './Navigation';
import styled from 'styled-components';


const Tittle = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #741188;
  padding: 0 5rem;

& h1 {
  color: white;
}
`;


const MainHeader = (props) => {
  return (

    <Tittle> 
      <h1>My App Test</h1>
       <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </Tittle>
   
  );
};

//<Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />

export default MainHeader;