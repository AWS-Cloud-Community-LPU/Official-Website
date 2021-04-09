import React, {Component} from 'react';
import Team from '../../../component/Team/Team';

class About extends Component {
	render(){
		return(
			<div className="body">
				    <section id="page-breadcrumb">
        <div class="vertical-center sun">
             <div class="container">
                <div class="row">
                    <div class="action">
                        <div class="col-sm-12">
                            <h1 class="title">About Us</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>

			    <section id="about-us">
			        <div className="container">
			            <div className="row">
			                <div className="col-md-7">
			                    <div className="about-img">
			                        <img src="https://demo.themeum.com/html/corlate/images/about-img.png" alt=""/>
			                    </div>
			                </div>
			                <div className="col-md-5">
			                    <div className="about-content">
			                        <h2>Who we are</h2>
			                        <p>The AWS Community LPU offers technical resources, mentorship, and networking opportunities to AWS enthusiasts and emerging thought leaders who are passionate about sharing knowledge and connecting with the technical community.</p>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>


			    

    
			    <section id="team-area">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Our Team</h2>
			                <p className="lead"></p>
			            </div>
			            <div className="row">
			                <Team
			                	img="images/aboutus/Rajit.jpg"
			                	name="Rajit Paul"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	instagram="#"
			                />
			                <Team
			                	img="images/aboutus/Pratyush.jpg"
			                	name="Pratyush Shukla"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	instagram="#"
			                />
			                <Team
			                	img="images/aboutus/Anjali.jpeg"
			                	name="Anjali Thakur"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	instagram="#"
			                />
			                <Team
			                	img="images/aboutus/Kristina.jpg"
			                	name="Kristina "
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	instagram="#"
			                />
							<Team
			                	img="images/aboutus/Garvit.jpg"
			                	name="Garvit"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	instagram="#"
			                />
			                
			                <Team
			                	img="images/aboutus/Krishna.jpg"
			                	name="N.Krishna"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	instagram="#"
			                />
                            <Team
			                	img="images/aboutus/prateek.jpg"
			                	name="Prateek Singh"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	instagram="#"
			                />
                            <Team
			                	img="images/aboutus/Santosh.png"
			                	name="Santosh"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	instagram="#"
			                />
                            
			            </div>
			        </div>
			    </section>
			</div>
		)
	}
}

export default About;