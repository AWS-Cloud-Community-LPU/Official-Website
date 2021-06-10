import React, { Component } from 'react';


class Recruitment extends Component {
    componentDidMount() {

        window.history.pushState({}, '', '/')
    }
    render() {
        return (
            <section id="clients" className="responsive">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 text-center wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                            <div className="tour-button">
                                <h2>How to Join the Community</h2>
                                <p>Fill out the form given and we will contact you</p>
                            </div>
                        </div>
                        <div className="col-sm-7 wow fadeInRight">
                            <div className="contact-form bottom">
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

        )
    }
}


export default Recruitment;

