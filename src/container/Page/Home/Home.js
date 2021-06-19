import React, { Component } from 'react';
import Features from '../../../component/Features/Features';
import Clients from '../../../component/Clients/Clients';

import { Link } from 'react-router-dom';

class Home extends Component {
    componentDidMount() {

        window.history.pushState({}, '', '/')
    }
    render() {
        return (
            <div className="body homepage">

                <section id="home-slider">
                    <div className="container">
                        <div className="row">
                            <div className="main-slider">
                                <div className="slide-text">
                                    <h1>We Are AWS-CLOUD Community LPU</h1>
                                    <p>Share Learn And Implement</p>
                                    <Link to="About" className="btn btn-common">Read More</Link>
                                </div>
                                <img src="images/home/slider/hill.png" className="slider-hill" alt="slider image" />
                                <img src="images/home/slider/house.png" className="slider-house" alt="slider image" />
                                <img src="images/home/slider/sun.png" className="slider-sun" alt="slider image" />
                                <img src="images/home/slider/birds1.png" className="slider-birds1" alt="slider image" />
                                <img src="images/home/slider/birds2.png" className="slider-birds2" alt="slider image" />
                            </div>
                        </div>
                    </div>
                    <div className="preloader"><i className="fa fa-sun-o fa-spin"></i></div>
                </section>


                <section id="features">

                    <div className="container">

                        <div className="row">
                            <div className="single-features">
                                <div className=" video-container" data-wow-duration="500ms" data-wow-delay="300ms">

                                    <iframe title="HomePageIframe" width="1280" height="720" src="https://www.youtube.com/embed/xZ3k7Fd6_eU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                            </div>
                        </div>
                        <div className="" data-wow-duration="500ms" data-wow-delay="300ms">
                            <h2>AWS re:Invent 2020 - Keynote with Andy Jassy</h2>
                            <p>Andy Jassy, CEO of Amazon Web Services, delivers his AWS re:Invent 2020 keynote, featuring the latest news and announcements, including the launches of Habana Gaudi-based Amazon EC2 instances, AWS Trainium, Amazon ECS Anywhere, Amazon EKS Anywhere, Lambda Container Support, AWS Proton, gp3 volumes for Amazon EBS, io2 Block Express for Amazon EBS, Amazon Aurora Serverless v2, Babelfish for Amazon Aurora PostgreSQL, AWS Glue Elastic Views, Amazon SageMaker Data Wrangler, Amazon SageMaker Feature Store, Amazon SageMaker Pipelines, Amazon DevOps Guru, Amazon QuickSight Q, Amazon Connect Wisdom, Amazon Connect Customer Profiles, Real-Time Contact Lens for Amazon Connect, Amazon Connect Tasks, Amazon Connect Voice ID, Amazon Monitron, Amazon Lookout for Equipment, AWS Panorama Appliance, AWS Panorama SDK, AWS Outposts in two new smaller sizes, and 12 additional AWS Local Zones. Guest speakers include Lori Beer, of JPMorgan Chase, Blake Scholl, of Boom, and David Gitlin, of Carrier.</p>
                        </div>
                    </div>
                    <Features
                        imgright="images/home/aws11.jpg"
                        titleright="What is Cloud Computing?"
                        descright="Cloud computing is the delivery of online services (such as servers, databases, software) to users. With the help of cloud computing, storing data on local machines is not required. It helps you access data from a remote server. Moreover, it is also used to store and access data from anywhere across the world."
                    />
                    <Features
                        imgleft="images/home/aws22.jpg"
                        titleleft="What is AWS"
                        descleft="Amazon web service is an online platform that provides scalable and cost-effective cloud computing solutions.

AWS is a broadly adopted cloud platform that offers several on-demand operations like compute power, database storage, content delivery, etc., to help corporates scale and grow."
                    />

                </section>



                <section id="action" className="responsive">
                    <div className="vertical-center">
                        <div className="container">
                            <div className="row">
                                <div className="action take-tour">
                                    <div className="col-sm-7 wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                                        <h1 className="title">Our Upcoming Event:</h1>
                                        <p>AWS Engage <br />
We, at AWS Cloud Community LPU, believe that knowledge shared is knowledge earned.
Accepting and giving is the way of living. It keeps you updated in today's dynamic industry
and can make you tomorrow's leader.</p>
                                    </div>
                                    <div className="col-sm-5 text-center wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                                        <div className="tour-button">
                                            <a rel="noreferrer" target="_blank" href="https://bit.ly/2POa8PY" className="btn btn-common">GO TO EVENT</a>
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

