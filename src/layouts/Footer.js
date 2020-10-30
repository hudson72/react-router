import React from "react";
import {Route} from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
  <div className='footer'>
    <h2>Footer</h2>
    <Route path='/' exact render={(props) =>{
      
      return (
        <p>You are on <span>The Home Page</span></p>
      )
    }} />
      <Route path='/:page' exact render={(props) =>{
      
      return (
        <p>You are on <span>{props.match.params.page}</span></p>
      )
    }} />
      </div>
      );
}

export default Footer;
