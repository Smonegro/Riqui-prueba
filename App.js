import React, { useState} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';


import MainHeader from './components/MainHeader/MainHeader';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
localStorage.setItem('isLoggedIn', 'LOGGED_IN');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem ('isloggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
     <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler}/>}
      </main>
      </React.Fragment>
     
    
  );
}


export default App;