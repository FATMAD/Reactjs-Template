import React from 'react';
import im1 from '../images/work/01.jpg';
import im2 from '../images/men01.png';
//import '../dis/css/animation.css';
//import '../dis/font-awesome/css/font-awesome.min.css';
//import '../dis/style.css';
//import '../dis/responsive.css';
//import '../dis/css/tab.css';






function About() {
  return (
<div className="wpm_about_area" id="about">
   
   <div className="container">
    
      <div className="row">
        
          <div className="col-sm-12">
            
              <h2>About Us</h2>
            
            </div>
        
        </div>
        
        <div className="row">
        
          <div className="col-sm-4">
            
              <ul className="list-group">
                  <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                  <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                  <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                  <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                  <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                  <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                  <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                  <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                  <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                  <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                  <li className="list-group-item">Lorem ipsum dolor sit amet</li>
                </ul>
            
            </div>
            
            <div className="col-sm-5" >
                
                    
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                    
                    <img src={im1} alt=""/>
                
            </div>
            
            <div className="col-sm-3" >
            
              <img src={im2} alt=""/>
            
            </div>
        
        </div>
    
    </div>

</div>

    
  );
}

export default About;



