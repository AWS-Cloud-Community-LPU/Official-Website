import React, { Component } from 'react';
import { render } from "react-dom";
import Team from '../../../component/Team/Team';
import Footer from '../../../component/Footer/Footer';
import $ from "jquery";
import "./About.css";

class About extends Component {
	componentDidMount() {

		window.history.pushState({}, '', '/')

		const triggers = document.querySelectorAll('li.filter-trigger');
		const users = document.querySelectorAll('.user');
		var all = document.querySelector('.reset')

		function clearActive() {
			var activeLink = document.querySelector('.AbtUsactive');
			activeLink.classList.remove("AbtUsactive");
		}

		triggers.forEach(element => {
			element.addEventListener('click', function () {
				clearActive();
				element.classList.add('AbtUsactive');
				element.click();
				let filter = element.dataset.filter;
				console.log(filter);

				users.forEach(users => {
					if (!users.classList.contains(filter)) {
						users.classList.add('hide');
					} else {
						users.classList.remove('hide');
					}
				});

				if (filter === 'all') {
					users.forEach(users => {
						users.classList.remove('hide');
					})
				}
			})
		});


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
									<img src="/images/aboutus/FirstOne.jpg" alt="" />
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


				<section id="blah">
					<div class="container">

						<div class="row">

						    <div class="col-12">
								<ul class="navbar-team">
									<li class="AbtUsactive reset filter-trigger" data-filter="all">All</li>
									<li class="filter-trigger" data-filter="anchoring">Anchoring</li>
									<li class="filter-trigger" data-filter="developer">Web Developer</li>
									<li class="filter-trigger" data-filter="content-developer">Content Developer</li>
									<li class="filter-trigger" data-filter="graphics">Graphics</li>
									<li class="filter-trigger" data-filter="technical">Technical</li>
									<li class="filter-trigger" data-filter="marketing">Marketing</li>
								</ul>
							</div>

							<div class="col-12">
								<div class="row user-wrapper">
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/rajit.jpg")' }}></div>
										<p class="name " >Rajit Paul</p>
										<div className="team-social">
											<a className=" teamicon fa fa-facebook" href="https://www.facebook.com/rajit.paul/" target="_blank"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/RajitPaul" target="_blank"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/rajitpaul/" target="_blank"></a>

										</div>

									</div>
									<div class="col-lg-3 user developer anchoring">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/prateek.jpg")' }}></div>
										<p class="name prateek">Prateek Singh</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/profile.php?id=100003020273118" target="_blank"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/onebutnotalone" target="_blank"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/prateek-singh-42356b12b" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/_prateek_singh_/" target="_blank"></a>
										</div>
									</div>
									<div class="col-lg-3 user anchoring">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/anjali.jpeg")' }}></div>
										<p class="name anjaliImage" id="anjaliImage">Anjali Thakur</p>
										<div className="team-social">

											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/anjalithakur21/" target="_blank"></a>

										</div>
									</div>
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/garvit.jpg")' }}></div>
										<p class="name">Garvit Joshi</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/garvit9j" target="_blank"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/garvit__joshi" target="_blank"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/garvit--joshi/" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/garvit_._/" target="_blank"></a>
										</div>
									</div>
									<div class="col-lg-3 user marketing">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/kristina.jpg")' }}></div>
										<p class="name">Kristina</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/kristina.barooah" target="_blank"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/KristinaBarooah" target="_blank"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/kristina-barooah-322916169" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/kristinasarmabarooah/" target="_blank"></a>
										</div>
									</div>
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/santosh.png")' }}></div>
										<p class="name">Santosh</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://twitter.com/skpottumuthu" target="_blank"></a>

											<a className="teamicon fa fa-linkedin" href="https://www.instagram.com/santosh__pottumuthu" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/santosh__pottumuthu" target="_blank"></a>
										</div>
									</div>
									<div class="col-lg-3 user developer">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/bhaskar.jfif")' }}></div>
										<p class="name">Bhaskar Jat</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/bhaskar.jat.73" target="_blank"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/Bhaskar79011405" target="_blank"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/bhaskar-jat/" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/bhaskar_jat_/" target="_blank"></a>
										</div>
									</div>
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/shivam.jpg")' }}></div>
										<p class="name">Shivam Mishra</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/mshivam019" target="_blank"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/MShivam190" target="_blank"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/shivam-mishra-019/" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/mshivam019/" target="_blank"></a>
										</div>
									</div>
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/imran.jpeg")' }}></div>
										<p class="name prateek">Imran Khan</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/profile.php?id=100005905788799" target="_blank"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/imran_khan227" target="_blank"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/imran-khan-991324188/" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/immrwnnn_227/" target="_blank"></a>
										</div>
									</div>
									<div class="col-lg-3 user content-developer anchoring">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/ashutosh.jpg")' }}></div>
										<p class="name prateek">Ashutosh Mohapatra</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/mohapatrashutosh/" target="_blank"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/imashumohapatra" target="_blank"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/iamashutosh/" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/ashutosh__mohapatra/" target="_blank"></a>
										</div>
									</div>
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/harneet.jfif")' }}></div>
										<p class="name prateek">Harneet Kaur</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/harneetk.21" target="_blank"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/harneetk21" target="_blank"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/harneetkaur1991/" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/harneet_k_engineer/" target="_blank"></a>
										</div>
									</div>
									
									<div class="col-lg-3 user marketing">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/lakshey.jfif")' }}></div>
										<p class="name prateek">Lakshey banga</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="http://facebook.com/lakshay.banga.5" target="_blank"></a>

											<a className="teamicon fa fa-linkedin" href="http://www.linkedin.com/in/lakshey-banga" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/lakshay__banga" target="_blank"></a>
										</div>
									</div>
									
									<div class="col-lg-3 user developer">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/arush.jpg")' }}></div>
										<p class="name prateek">Arush Nigam</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://touch.facebook.com/arush.nigam.75" target="_blank"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/arush_nigam" target="_blank"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/arush-nigam/" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/aru5602/" target="_blank"></a>
										</div>
									</div>
									
									<div class="col-lg-3 user graphics">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/ankit.jfif")' }}></div>
										<p class="name prateek">Ankit Ojha</p>
										<div className="team-social">

											<a className="teamicon fa fa-twitter" href="https://twitter.com/ankit_ojha07" target="_blank"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/ankitojha07/" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/ankit_ojha07/" target="_blank"></a>
										</div>
									</div>
									<div class="col-lg-3 user anchoring">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/brahma.jfif")' }}></div>
										<p class="name prateek">Brahmjit</p>
										<div className="team-social">

											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/brahmajit-mohapatra-730743169" target="_blank"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/brahmajit.2k" target="_blank"></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer
				para1="If you do build a great experience, customers tell each other about that. Word of mouth is very powerful."
				name1="Jeff Bezos"
				para2="Relentless Innovation"
				name2="Andy Jassy" />


			</div>
		)
	}
}

export default About;
