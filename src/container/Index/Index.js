import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from '../../component/Footer/Footer';
import Home from '../Page/Home/Home';
import Contact from '../Page/Contact/Contact';
import About from '../Page/About/About';
import Blog from '../Page/Blog/Blog';




class Index extends Component {
	render(){
		return(
			<Router>
				<div>
					<header id="header">      
						<div class="container">
							<div class="row">
								<div class="col-sm-12 overflow">
								<div class="social-icons pull-right">
										<ul class="nav nav-pills">
											<li><a href=""><i class="fa fa-facebook"></i></a></li>
											<li><a href=""><i class="fa fa-twitter"></i></a></li>
											<li><a href=""><i class="fa fa-youtube"></i></a></li>
											<li><a href=""><i class="fa fa-linkedin"></i></a></li>
										</ul>
									</div> 
								</div>
							</div>
						</div>
						<div class="navbar navbar-inverse" role="banner">
							<div class="container">
								<div class="navbar-header">
									<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
										<span class="sr-only">Toggle navigation</span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>

									<a class="navbar-brand" href="index.html">
										<h1><img src="images/logo.png" alt="logo" /></h1>
									</a>
									
								</div>
								<div class="collapse navbar-collapse">
									<ul class="nav navbar-nav navbar-right">
										<li class="active"><a href="index.html">Home</a></li>
															
										<li class="dropdown"><a href="">Blog <i class="fa fa-angle-down"></i></a>
											<ul role="menu" class="sub-menu">
												<li><a href="">Blog</a></li>
												<li><a href="">Blog2</a></li>
												
											</ul>
										</li>
										<li class="dropdown"><a href="">Contact Us</a>

										</li>                         
										<li><a href="">Team</a></li>                    
									</ul>
								</div>
								
							</div>
						</div>
					</header>

					
					<Route path="/" exact component={Home} />
					<Route path="/contact/" component={Contact} />
					<Route path="/about/" component={About} />
					<Route path="/blog/" component={Blog} />
					

					<Footer/>
				</div>
			</Router>
		)
	}
}

export default Index;