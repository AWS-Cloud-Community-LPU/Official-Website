import React, { Component } from 'react';
import Footer from '../../../component/Footer/Footer';

class Recruitment extends Component {
    componentDidMount() {

        window.history.pushState({}, '', '/')
    }
    render() {
        return (
            <div>
            <section id="page-breadcrumb">
                    <div class="vertical-center sun">
                        <div class="container">
                            <div class="row">
                                <div class="action">
                                    <div class="col-sm-12">
                                        <h1 class="title">How to Join the Community?</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            <section id="clients" className="responsive">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 text-center wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                            <div className="tour-button">
                                
                                
                            </div>
                        </div>
                        <div className="col-sm-7 wow fadeInRight">
                            <div className="contact-form bottom">
                            <h2>Fill out the form given and we will contact you</h2>
                                <h2>Recruitment Form</h2>
                                <form id="main-contact-form" name="contact-form" method="POST" data-netlify="true">
                                    <input type="hidden" name="form-name" value="contact-form" />
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" required="required" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" required="required" placeholder="Email Id" />
                                    </div>
                                    <div className="form-group">
                                        <textarea type="tel" name="phonenumber" id="phone" required="required" className="form-control" placeholder="Phone Number"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="UniversityName" required="required" className="form-control" placeholder="University Name"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="CurrentYear" required="required" className="form-control" placeholder="Current Year"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="WhyJoin" id="message" required="required" className="form-control" rows="8" placeholder="Why you want to join Community"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="Field" required="required" className="form-control" placeholder="Field of Expertise(eg:content creater)"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="submit" className="btn btn-submit" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                
            </section>
            <Footer
				para1="Our core values and approach remain unchanged. We continue to aspire to be Earth’s most customer-centric company."
				name1="Jeff Bezos"
				para2="There's this new generation of systems integrators that's really picked up steam, and that's carrying a lot of the new market segment share in companies moving to cloud."
				name2="Andy Jassy" />
            </div>
        )
    }
}


export default Recruitment;

