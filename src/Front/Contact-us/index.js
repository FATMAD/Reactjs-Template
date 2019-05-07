import React from 'react';
//import logo from '../images/logo/logo.png';




function Contact() {
  return (
    <div className="wpm_contact_area" id="contact">
   
    <div className="container">
     
       <div className="row">
         
           <div className="col-sm-12">
             
               <h3>Get in touch with our company</h3>
             
             </div>
         
         </div>
         
         <div className="row wpm_text_row" >
         
           <div className="col-sm-3">
             
                 <p> <i className="fa fa-map-marker"></i> <strong>Adress :</strong> Street 188, New city</p>
             
             </div>
             
             <div className="col-sm-3" >
             
                 <p> <i className="fa fa-phone"></i> <strong>Phone :</strong> +7(021)9-356-225</p>
             
             </div>
             
             <div className="col-sm-3" >
             
                 <p> <i className="fa fa-fax"></i> <strong>Fax :</strong> +7(001)9-056-722</p>
             
             </div>
             
             <div className="col-sm-3" >
             
                 <p> <i className="fa fa-envelope-o"></i> <strong>Mail :</strong> info@dewthemes.com</p>
             
             </div>
         
         </div>
         
         
         <div className="row" >
         
           <div className="col-sm-4">
             
               <input type="text" className="form-control wpm_text_input"  placeholder="Name"/>
             
             </div>
             
             <div className="col-sm-4">
             
               <input type="text" className="form-control wpm_text_input"  placeholder="Subject"/>
             
             </div>
             
             <div className="col-sm-4">
             
               <input type="email" className="form-control wpm_text_input" id="exampleInputEmail1" placeholder="Enter email"/>
             
             </div>
         
         </div>
         
         <div className="row" >
         
           <div className="col-sm-12">
         
             <textarea className="form-control wpm_textarea" rows="5" placeholder="Write Massage"></textarea>
                 
                 <input className="btn btn-default wpm_sub_btn" type="submit" value="Submit Massage"/>
             
             </div>
         
         </div>
     
     </div>

</div>

    
  );
}

export default Contact;



