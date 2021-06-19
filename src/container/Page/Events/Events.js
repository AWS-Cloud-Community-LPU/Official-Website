import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import YoutubeEmbed from '../../../component/Events/Events'
class Events extends Component {
    componentDidMount() {

        window.history.pushState({}, '', '/')
    }
    render() {
        return (
            <div className="body">
                <section id="page-breadcrumb">
                    <div class="vertical-center sun">
                        <div class="container">
                            <div class="row">
                                <div class="action">
                                    <div class="col-sm-12">
                                        <h2 class="title">We conduct frequent learning sessions for our community to help, share and expand our knowledge on various topics, all videos are shared on our Youtube Channel</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Events" className="padding-top container">
                    <div className="Events-Main">
                        {/**---------------------------------------------------------------------------------------------- */}
                        <h1>Serverless in Full Stack Development :</h1>
                        <div className="Events-Para">
                            AWS Cloud Community of LPU in collaboration with
                            <a href="https://www.linkedin.com/company/awsjaipur/"> AWS User Group Jaipur - Rajasthan</a> is hosting a webinar on “Serverless in Full Stack Development.
                            <br></br><br></br>
                            Our guest speaker for this session is Suman Debnath, Sr developer advocate, Amazon Web Services (AWS).
                            <br></br><br></br>
                            <a href="https://www.youtube.com/watch?v=3ajPXlZJszM"> Event Link - </a>
                            Date – 28-05-2021
                            {/*YoutubeEmbed is a function which converts a link to a Youtube embed */}
                            {YoutubeEmbed("https://www.youtube.com/watch?v=3ajPXlZJszM")}
                        </div>
                        {/**---------------------------------------------------------------------------------------------- */}
                        <h1>AWS Summer Summit 2021:</h1>
                        <div className="Events-Para">
                            AWS Cloud Community hosted a three-day long series of back-to-back webinars, directly by industry experts,powered by AWS Educate.
                            <br></br><br></br>
                            <h2>
                                Day: 1 - Path for Cloud to DevOps
                            </h2>
                            <br></br><br></br>Live Demonstration on Introduction of Continuous Integration and Continuous Delivery.
                            <br></br><br></br>By – Mr. Aditya Soni, ATSE at RedHat
                            {YoutubeEmbed("https://www.youtube.com/watch?v=Fma_dAozjHc")}
                            <h2>
                                Day: 2 - Introduction to Serverless Database
                            </h2>
                            <br></br><br></br>Live Demonstration on Amazon Aurora Serverless, DynamoDB
                            <br></br><br></br>By – Mr. Anurag Kale, Cloud Consultant at Cybercom Group | AWS Community Builder
                            {YoutubeEmbed("https://www.youtube.com/watch?v=b4BpTxLF0Po")}
                            <h2>
                                Day: 3 - Path to AWS App flow
                            </h2>
                            <br></br><br></br>Live Demonstration on AWS services for simple ETL pipelines
                            <br></br><br></br>By – Mr. Shashank Mishra, Data Engineer at Amazon
                            {YoutubeEmbed("https://www.youtube.com/watch?v=Hh4BCHHaM7g")}
                        </div>
                        {/**---------------------------------------------------------------------------------------------- */}
                        <h1>AWS Engage :</h1>
                        <div className="Events-Para">
                            We, at AWS Cloud Community LPU, believe that knowledge shared is knowledge earned. AWSCC-LPU is organized a webinar to help everyone kickstart their journey with AWS Cloud Computing!
                            <br></br><br></br>
                            -Introduction to AWS
                            <br></br>
                            -AWS VPC and EC2
                            <br></br>
                            -AWS RDS
                            <br></br>
                            -VPC peering and EC2 RDS connectivity
                            {YoutubeEmbed("https://www.youtube.com/watch?v=mbIETDD_pPo")}
                        </div>
                        {/**---------------------------------------------------------------------------------------------- */}
                    </div>
                </section>

            </div>
        )
    }
}


export default Events;

