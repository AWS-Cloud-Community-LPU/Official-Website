import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from '../../component/Footer/Footer';
import Home from '../Page/Home/Home';
import Contact from '../Page/Contact/Contact';
import About from '../Page/About/About';
import Blog from '../Page/Blog/Blog';
import Recruitment from '../Page/Recruitment/Recruitment';




class Index extends Component {

		constructor(props){
		super(props);
		this.state={
			active:1,
		}
	}
	
	homeClicked(){
		this.setState({active:1,});
	}
	blogClicked(){
		this.setState({active:2,});
	}
	contClicked(){
		this.setState({active:3,});
	}
	aboutClicked(){
		this.setState({active:4,});
	}
	recruitmentClicked(){
		this.setState({active:5,});
	}

	render(){
		return(
			<Router>
				<div>
					<header id="header">      
						<div className="container">
							<div className="row">
								<div className="col-sm-12 overflow">
								<div className="social-icons pull-right">
										<ul className="nav nav-pills">
											<li><a href="https://www.facebook.com/AWSCloudCommunityLPU"><i className="fa fa-facebook"></i></a></li>
											<li><a href="https://www.instagram.com/awscloudcommunity_lpu/"><i className="fa fa-instagram"></i></a></li>
											<li><a href="https://www.youtube.com/channel/UCmnQggVDZY8ht6UYekmzQlg/featured"><i className="fa fa-youtube"></i></a></li>
											<li><a href="https://www.linkedin.com/company/aws-cloud-community-lpu/"><i className="fa fa-linkedin"></i></a></li>
										</ul>
									</div> 
								</div>
							</div>
						</div>
						<div className="navbar navbar-inverse" role="banner">
							<div className="container">
								<div className="navbar-header">
									<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
										<span className="sr-only">Toggle navigation</span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>

									
									<Link to="/index.html " className="navbar-brand">
									<h1><img src="images/logo.png" alt="logo" /></h1>
									</Link> 
										
									
									
								</div>
								<div className="collapse navbar-collapse">
									<ul className="nav navbar-nav navbar-right">
										<li className={this.state.active==1 && "active"} onClick={() => {this.homeClicked()}}><Link to="/">Home</Link></li>
															
										<li className={this.state.active==2 && "active"} onClick={() => {this.blogClicked()}}><Link to="/Blog">Blog </Link>
											
										</li>
										<li className={this.state.active==3 && "active"} onClick={() => {this.contClicked()}}><Link to="/Contact">Contact Us</Link>

										</li>                         

										<li className={this.state.active==4 && "active"} onClick={() => {this.aboutClicked()}}><Link to ="/About">About Us</Link></li>  
										<li className={this.state.active==5 && "active"} onClick={() => {this.recruitmentClicked()}}><Link to ="/Recruitment">Recruitment</Link></li>                  

									</ul>
								</div>
								
							</div>
						</div>
					</header>

				
					<Route path="/" exact component={Home} />
					<Route path="/contact/" component={Contact} />
					<Route path="/about/" component={About} />
					<Route path="/blog/" component={Blog} />
					<Route path="/recruitment/" component={Recruitment} />

					<Footer/>
				</div>
			</Router>
		)
	}
}

export default Index;