import React from 'react';
import emailjs from 'emailjs-com';

const Footer = (props) => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_2eh7043', 'template_6qn9eat', e.target, 'user_jsKWGpnpQB1dSoEYvJrGD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    
	return (
        <footer id="footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center bottom-separator">
                    <img src="images/home/under.png" className="img-responsive inline" alt="" />
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="testimonial bottom">
                        <h2>Word by AWS</h2>
                        <div className="media">
                            <div className="pull-left">
                                <a href="#"><img src="images/home/profile1.jpg"  alt="" /></a>
                            </div>
                            <div className="media-body">
                                <blockquote>If you do build a great experience, customers tell each other about that. Word of mouth is very powerful.</blockquote>
                                <h3><a href="#">- Jeff Bezos</a></h3>
                            </div>
                         </div>
                        <div className="media">
                            <div className="pull-left">
                                <a href="#"><img src="images/home/profile2.jpg" alt="" /></a>
                            </div>
                            <div className="media-body">
                                <blockquote>Relentless Innovation</blockquote>
                                <h3><a href="">- Andy Jassy</a></h3>
                            </div>
                        </div>   
                    </div> 
                </div>
                
                <div className="col-md-3 col-sm-6">

                    <div className="contact-info bottom">
                        <h2>Contacts</h2>
                        <address>
                        E-mail: <a href="mailto:awscloudcommunity@email.com">awscloudcommunity.lpu@gmail.com</a> <br /> 
                        Phone: 8017874250 <br /> 
                        
                        </address>

                        <h2>Address</h2>
                        <address>
                        Jalandhar - Delhi, Grand Trunk Rd, <br />Phagwara, Punjab 144001
                        </address>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="contact-form bottom">
                        <h2>Send a message</h2>
                        <form id="main-contact-form"    onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" required="required" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" required="required" placeholder="Email Id"/>
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="message" required="required" className="form-control" rows="8" placeholder="Your text here"></textarea>
                            </div>                        
                            <div className="form-group">
                                <input type="submit" name="submit" className="btn btn-submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="copyright-text text-center">
                        <p>&copy; AWS Cloud LPU</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
        )
    }
    
    export default Footer;