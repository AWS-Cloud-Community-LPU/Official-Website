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
                            <p>Description or title</p>
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
			                        <p>Photographs are a way of preserving a moment in our lives for the rest of our lives. Many of us have at least been tempted at the flashy array of photo printers which seemingly leap off the shelves at even the least tech-savvy. It surely seems old fashioned to talk about 35mm film and non-digital cameras in today’s day and age.</p>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>


			    

    
			    <section id="team-area">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Our Team</h2>
			                <p className="lead">Photographs are a way of preserving a moment in our lives for the rest of our lives. Many of us have at least been tempted at the flashy array </p>
			            </div>
			            <div className="row">
			                <Team
			                	img=""
			                	name="Rajit Paul"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
			                <Team
			                	img=""
			                	name="Pratyush Shukla"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
			                <Team
			                	img=""
			                	name="Anjali Thakur"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
			                <Team
			                	img=""
			                	name="Kristina "
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
			                <Team
			                	img="images/team/prateek.jpg"
			                	name="Prateek Singh"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
			                <Team
			                	img=""
			                	name="N.Krishna"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
                            <Team
			                	img=""
			                	name="Garvit"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
                            <Team
			                	img=""
			                	name="Santosh"
			                	job="Core Technical Member"
			                	facebook="#"
			                	twitter="#"
			                	linkedin="#"
			                	pinterest="#"
			                />
                            
			            </div>
			        </div>
			    </section>
			</div>
		)
	}
}

export default About;