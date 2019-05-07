
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


const logedIn  =false;
/*export const Routes = (
  
  <Switch>
  <Route path="/" exact component={Slider} />
  <Route path="/about" exact component={About} />
  <Route path="/service" exact component={Service} />
  <Route path="/portfolio" exact component={Portfolio}  /> 
  <Route path="/blog" exact component={Blog} />
  <Route path="/contact" exact component={Contact} /> 
  <Route path="/login" exact component={Login} />
  <Route path="/register" exact component={Register} /> 
  <Route path="/private" exact render={()=> logedIn ?  (<Private/>): (<Redirect to = {{pathname:'/login'}}/>
  )} />
  </Switch>
);*/






function  Navbar (){
    return (
        <div>
            <header className="wpm_header nav-main">
   
   <div className="container"> 
   
           <div className="row">
 
              <div className="col-sm-3"  >
              
                   <a  href="index-2.html"><img className="wpm_logo" src = {Logo} alt=""/></a>
              
              </div>
             
              <div className="col-sm-8">
      
                  <nav className="navbar navbar-default wpm_navber">
                      
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                       
                      </div>
                  
                      
                      

                        
                        
                        
                        <Router>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            
                            
                            <ul className="nav navbar-nav navbar-right wpm_menu"> 
                            
                             <li>  <Link to={{pathname: '/'}}>Home</Link>{''}</li>
                             <li>  <Link to={{pathname: '/about'}}>About</Link>{''}</li>
                             <li>  <Link to={{pathname: '/service'}}>Service</Link></li>
                             <li>  <Link to={{pathname: '/portfolio'}}>Portfolio</Link>{' '}</li> 
                             <li>  <Link to={{pathname: '/blog'}}>Blog</Link>{' '}</li>
                             <li>  <Link to={{pathname: '/contact'}}>Contact</Link></li>
                             <li>  <Link to={{pathname: '/register'}}>Register</Link>{' '}</li>
                             
                             </ul>
                        </div>  
                             
                            </Router>
                            
                         

                   </nav>	
          
              </div>
              
              
              <div className="col-sm-1 wpm_popup_area text-center">
              
                        
                       <a href="#" data-toggle="modal" data-target="#myModal"> <i className="fa fa-search-plus"></i> </a>
                      
                     
                        <div className="modal fade" id="myModal" role="dialog">
                          <div className="modal-dialog">
                          
                   
                            <div className="modal-content">
                              <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">You can search here</h4>
                              </div>
                              <div className="modal-body">
                              
                                  <form>
                              
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search"/>
                                      </div>
                                      <button type="submit" className="btn btn-default">SUBMIT</button>
                                      
                                   </form>   
                                
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                            
                          </div>
                        </div>
              
              </div>
     
     </div>
 
</div>  
   
</header>
<Router>
<Switch>
                                    <Route path="/" exact component={Slider} />
                                    <Route path="/about" exact component={About} />
                                    <Route path="/service" exact component={Service} />
                                    <Route path="/portfolio" exact component={Portfolio}  /> 
                                    <Route path="/blog" exact component={Blog} />
                                    <Route path="/contact" exact component={Contact} /> 
                                    <Route path="/login" exact component={Login} />
                                    <Route path="/register" exact component={Register} /> 
                                    <Route path="/private" exact render={()=> logedIn ?  (<Private/>): (<Redirect to = {{pathname:'/login'}}/>
                                    )} />
</Switch>
</Router>
</div>

    )
}

export default Navbar;