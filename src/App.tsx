import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import fooldal from '.pages/fooldal';
import tapsztalat from '.pages/tapsztalat';
import idopont from '.pages/idopont';


class App extends React.Component{
  render(){
    return<div>
      <>
        <header/>
        <Routes>
          <Route path='/' element={<fooldal></fooldal>}></Route>
          <Route path='/tapasztalat' element={<tapsztalat></tapsztalat>}></Route>
          <Route path='/idopoont' element={<idopont></idopont>}></Route>
        </Routes>
      </> <footer>fekete edina</footer>
    </div>
    
  }
  
}
export default App;
