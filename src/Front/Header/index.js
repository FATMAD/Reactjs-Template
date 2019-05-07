import React from 'react';
import {BrowserRouter as Router , Route, Switch , Redirect, Link  } from 'react-router-dom';
import Logo from '../images/logo/logo.png';
import '../dis/css/animation.css';
import '../dis/font-awesome/css/font-awesome.min.css';
import '../dis/style.css';
import '../dis/responsive.css';
import '../dis/css/tab.css';
import Slider from '../Slider';
import About from '../About';
import Service from '../Service';
import Portfolio from '../Portfolio';
import Blog from '../Blog';
import Contact from '../Contact-us';
import Register from '../Register';
import Login from '../Login';
import Private from  '../Private.js';






function Header() {
  return (

  
<div>

<div id="home"></div>


    <section className="wpm_header_top wpm_mobile_center">
    
    <div className="container">
    
        <div className="row">
        
            <div className="col-sm-3 wpm_mobile_center">
            
                <div className="social_icon">
                
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-google-plus"></i>                    
                    <i className="fa fa-linkedin"></i>
                
                </div>
            
            </div>
            
            <div className="col-sm-4">
            
                
            
            </div>
            
            
            <div className="col-sm-5 text-right wpm_mobile_center">
            
                <ul>
                
                   <li><i className="fa fa-envelope-o"></i><a >info@Html5Load.com</a></li>
                    <li><p><i className="fa fa-phone"></i>+123-0125 358 02</p></li>
                    
            
                </ul>
            
            </div>
        
        </div>
    
    </div>

</section>

   </div>

    
  );
}

export default Header;



