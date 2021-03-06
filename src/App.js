import React, { useState, useEffect, useRef, useReducer, memo } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import { loginReducer, initState } from './store/reducer';

export const LoginContext = React.createContext();


const Transaction = memo(() => {
  console.log('Transaction 验重复渲染问题');
  return <div>Transaction</div>
})




function App() {
  const [state, dispatch] = useReducer(loginReducer, initState);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Login />
          <Profile />
        </header>
        <Transaction />
      </div>
    </LoginContext.Provider>
  );
}

export default App;
