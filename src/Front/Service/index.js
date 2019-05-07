import React from 'react';
import im4 from '../images/work/04.jpg';
import im2 from '../images/01.jpg';
import im1 from '../images/work/03.jpg';
import im3 from '../images/slider/03.jpg';
import im5 from '../images/star.png'


import '../dis/css/animation.css';
//import '../dis/font-awesome/css/font-awesome.min.css';
//import '../dis/style.css';
//import '../dis/responsive.css';
//import '../dis/css/tab.css';





function Service() {
  return (

<div className="wpm_service_area" id="service">
   
   		<div className="container">
        
        	<div className="row">
            
            	<div className="col-sm-12">
                
                	<h2>SERVICES THAT WE OFFERS</h2>
                
                </div>
            
            </div>
            
            <div className="row">
            
            	<div className="col-sm-6">
                
                	<div className="row">
                    
                    	<div className="col-sm-6">
                        
                        	<img src={im1}/>
                        
                        </div>
                        
                        <div className="col-sm-6">
                        
                        	<h3>Responsive Design</h3>
                            
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.</p>
                        
                        </div>
                    
                    </div>
                
                </div>
                
                
                <div className="col-sm-3">
                
                	<img src={im2}/>
                    
                    <h3>Lorem Ipsum is simply</h3>
                    
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                
                </div>
                
                
                <div className="col-sm-3">
                
                	<img src={im4}/>
                    
                    <h3>Lorem Ipsum is simply</h3>
                    
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                
                </div>
            
            </div>
            
            <div className="row">
            
            	<div className="col-sm-12">
                
                	<h3 className="more_service_text">More Service</h3>
                
                </div>
            
            </div>
            
            
            <div className="row wpm_moreservice_area">
            
            
            	<div className="col-sm-4">
                
                	<img src={im3} alt=""/>
                    
                    <h3>Service details</h3>
                     
                	<p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                
                </div>
                
                <div className="col-sm-4 "  data-uk-scrollspy="{cls:'uk-animation-scale-up', repeat: true}">
                
                	
                    <img src={im5} alt=""/>
                
                </div>
                
                <div className="col-sm-4">
                
                	<div id="wrap">
		
                        <a href="javascript:navigate_tabs('a','first-tab');" className="buttons" id="first-tab">Tab 1</a>  
                        <a href="javascript:navigate_tabs('b','second-tab');" className="buttons" id="second-tab">Tab 2</a>
                        <a href="javascript:navigate_tabs('c','third-tab');" className="buttons" id="third-tab">Tab 3</a>
                        
                        <br clear="all" />
                        
                        <div id="body">
                        
                            <div className="a">
                            <em>99</em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            
                            </div>
                            
                            <div className="b"><em>L</em>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem ipsum dolor sit amet.
                            </div>
                            
                            <div className="c"><em>T</em>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            
                            </div>
                        
                        </div>	
                                
                    </div>
                
                </div>
            
            </div>
        
        </div>
   
   </div>
   );
}

export default Service;
   