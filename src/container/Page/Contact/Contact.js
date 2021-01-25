import React, {Component} from 'react';


class Contact extends Component {
	render(){
		return(
			<div className="body">
				    <section id="page-breadcrumb">
						<div class="vertical-center sun">
							<div class="container">
								<div class="row">
									<div class="action">
										<div class="col-sm-12">
											<h1 class="title">Contact us</h1>
											<p>Something</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

			    <section id="contact-page">
			        <div className="container">
			            <div className="large-title text-center">        
			                <h2>Drop Your Message</h2>
			                <p>All users on AWS will know that there are millions of people out there. Every day besides so many people joining this community.</p>
			            </div> 
			            <div className="row contact-wrap"> 
			               
			                <form id="main-contact-form" className="contact-form" name="contact-form" method="post" action="sendemail.php">
			                    <div className="col-sm-5 col-sm-offset-1">
			                        <div className="form-group">
			                            <label>Name *</label>
			                            <input type="text" name="name" className="form-control" required="required"/>
			                        </div>
			                        <div className="form-group">
			                            <label>Email *</label>
			                            <input type="email" name="email" className="form-control" required="required"/>
			                        </div>
			                        <div className="form-group">
			                            <label>Phone</label>
			                            <input type="number" className="form-control"/>
			                        </div>
			                                                
			                    </div>
			                    <div className="col-sm-5">
			                        <div className="form-group">
			                            <label>Subject *</label>
			                            <input type="text" name="subject" className="form-control" required="required"/>
			                        </div>
			                        <div className="form-group">
			                            <label>Message *</label>
			                            <textarea name="message" id="message" required="required" className="form-control" rows="8"></textarea>
			                        </div>                        
			                        <div className="form-group">
			                            <button type="submit" name="submit" className="btn btn-primary btn-lg" required="required">Submit Message</button>
			                        </div>
			                    </div>
			                </form> 
			            </div>
			        </div>
			    </section>
			</div>
		)
	}
}

export default Contact;