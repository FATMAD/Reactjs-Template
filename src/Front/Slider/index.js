import React from 'react';
import IM1 from '../images/slider/01.jpg';
import IM2 from '../images/slider/02.jpg';
import IM3 from '../images/slider/03.jpg';
//import '../dis/css/bootstrap.min.css';
import '../dis/css/animation.css';
import '../dis/font-awesome/css/font-awesome.min.css';
import '../dis/style.css';
import '../dis/responsive.css';
import '../dis/css/tab.css';





function Slider() {
  return (
<div>
    
<section className="wpm_slider_area">
   
                
   <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
         <ol className="carousel-indicators">
           <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
           <li data-target="#carousel-example-generic" data-slide-to="1"></li>
           <li data-target="#carousel-example-generic" data-slide-to="2"></li>
         </ol>
       
         
         <div className="carousel-inner" role="listbox">
         
           <div className="item active">
           
             <img src={IM1} alt="..."/>
             
             <div className="carousel-caption">
               <h1>Lorem ipsum dolor sit amet</h1>
              
               
             </div>
           </div>
           
           <div className="item">
           
             <img src={IM2} alt="..."/>
             
             <div className="carousel-caption">
               <h1>Lorem ipsum dolor sit amet</h1>
               
             </div>
           </div>
           
           <div className="item">
           
             <img src={IM3} alt="..."/>
             
             <div className="carousel-caption">
               <h1>Lorem ipsum dolor sit amet</h1><br/>
               
             </div>
           </div>
           
         </div>
       
      
         <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
           <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
           <span className="sr-only">Previous</span>
         </a>
         <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
           <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
           <span className="sr-only">Next</span>
         </a>
    </div>

</section>              
     
</div>

    
  );
}

export default Slider;



