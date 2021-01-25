import React, {Component} from 'react';
import Features from '../../../component/Features/Features';
import Clients from '../../../component/Clients/Clients';
import Footer from '../../../component/Footer/Footer';

class Home extends Component {
	render(){
		return(
			<div className="body homepage">

                <section id="home-slider">
                        <div className="container">
                            <div className="row">
                                <div className="main-slider">
                                    <div className="slide-text">
                                        <h1>We Are AWS-CLOUD Community LPU</h1>
                                        <p>Here comes some intro/brief discription </p>
                                        <a href="#" className="btn btn-common">Read More</a>
                                    </div>
                                    <img src="images/home/slider/hill.png" className="slider-hill" alt="slider image"/>
                                    <img src="images/home/slider/house.png" className="slider-house" alt="slider image"/>
                                    <img src="images/home/slider/sun.png" className="slider-sun" alt="slider image"/>
                                    <img src="images/home/slider/birds1.png" className="slider-birds1" alt="slider image"/>
                                    <img src="images/home/slider/birds2.png" className="slider-birds2" alt="slider image"/>
                                </div>
                            </div>
                        </div>
                        <div className="preloader"><i className="fa fa-sun-o fa-spin"></i></div>
                    </section>


                    <section id="features">
                        <div className="container">
                            <div className="row">
                                
                                <Features
			                	imgleft="images/home/image2.png"
			                	titleleft="Something"
			                	descleft="Some Content or fact or something"
			                    />
                                <Features
			                	imgright="images/home/image2.png"
			                	titleright="Something"
			                	descright="Some Content or fact or something"
			                    />
                                <Features
			                	imgleft="images/home/image2.png"
			                	titleleft="Something"
			                	descleft="Some Content or fact or something"
			                    />
                            </div>
                        </div>
                    </section>

			   

                    <section id="action" className="responsive">
                        <div className="vertical-center">
                            <div className="container">
                                <div className="row">
                                    <div className="action take-tour">
                                        <div className="col-sm-7 wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                                            <h1 className="title">Our Upcoming Event</h1>
                                            <p>Description Aabout it.</p>
                                        </div>
                                        <div className="col-sm-5 text-center wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                                            <div className="tour-button">
                                                <a href="#" className="btn btn-common">GO TO EVENT</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="clients">
                        <Clients />
                    </section>
                    
                    

			    

			    

			    

			</div>
		)
	}
}


export default Home;

