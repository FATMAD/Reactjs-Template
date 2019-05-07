import React from 'react';

import im1 from '../images/men02.png';





function Footer() {
  return (
<div>
    
    
   <footer>
   
   <div className="container">
    
      <div className="row">
        
          <div className="col-sm-3">
            
              <h3>ABOUT US</h3>
                
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.</p>
                
                <p><a href="#">Read More >></a></p>
                
                <div className="footer_social_icon">
                
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-google-plus"></i></a>                   
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                
                </div>
            
            </div>
            
            <div className="col-sm-3">
            
              <h3>POPULAR POSTS</h3>
                
                <ul className="list-group">
                
                  <li className="list-group-item">
                    
                      <p><a href="#">Lorem ipsum dolor sit amet, consect-etur adipiscing elit</a></p>
                     
                     <span>May 20, 2015</span>
                    
                  </li>
                  
                  <li className="list-group-item">
                    
                      <p><a href="#">Lorem ipsum dolor sit amet, consect-etur adipiscing elit</a></p>
                     
                     <span>May 20, 2015</span>
                    
                  </li>
                  
                  <li className="list-group-item">
                    
                      <p><a href="#">Lorem ipsum dolor sit amet, consect-etur adipiscing elit</a></p>
                     
                     <span>May 20, 2015</span>
                    
                  </li>
                  
                </ul>
            
            </div>
            
            <div className="col-sm-3">
            
              <h3>GET IN TOUCH</h3>
                
                <ul className="list-group">
                  <li className="list-group-item"><p><i className="fa fa-map-marker"></i> Your Road 1022, Your Town 1243 NM, Your Country</p></li>
                  <li className="list-group-item"><p><i className="fa fa-phone"></i> 0116 524 0011</p></li>
                  <li className="list-group-item"><p><i className="fa fa-envelope-o"></i> info@DewThems.Com</p></li>
                  <li className="list-group-item"><p><i className="fa fa-globe"></i> http://DewThemes.com</p></li>
                </ul>
            
            </div>
            
            <div className="col-sm-3 col_margin">
            
              <img src={im1}  alt=""/>
            
            </div>
        
        </div>
    
    </div>

</footer>



<section className="wpm_frooter_ending">
   
    <div className="container">
    
        <div className="col-sm-12 text-center wpm_mobile_center">
        
                <p>Copyright &copy; 2009-<script>document.write(new Date().getFullYear())</script> <a href="http://www.html5load.com/" target="_blank">Html5Load.com</a></p>
                <div className="copytext">Design By <a href="http://html5load.com/" target="_blank" className="copylink">html5load.Com</a></div>
                
         </div>  
         
        <div className="clearfix"></div>
        
     </div>  
      
        
 </section>
              
     
</div>

    
  );
}

export default Footer;



