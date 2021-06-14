import React, { Component } from 'react';
import { render } from "react-dom";
import Team from '../../../component/Team/Team';
import $ from "jquery";

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
											<a className=" teamicon fa fa-facebook" href="https://www.facebook.com/rajit.paul/"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/RajitPaul"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/rajitpaul/"></a>

										</div>

									</div>
									<div class="col-lg-3 user developer anchoring">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/prateek.jpg")' }}></div>
										<p class="name prateek">Prateek Singh</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/profile.php?id=100003020273118"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/onebutnotalone"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/prateek-singh-42356b12b"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/_prateek_singh_/"></a>
										</div>
									</div>
									<div class="col-lg-3 user anchoring">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/anjali.jpeg")' }}></div>
										<p class="name anjaliImage" id="anjaliImage">Anjali Thakur</p>
										<div className="team-social">

											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/anjalithakur21/"></a>

										</div>
									</div>
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/garvit.jpg")' }}></div>
										<p class="name">Garvit Joshi</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/garvit9j"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/garvit__joshi"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/garvit--joshi/"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/garvit_._/"></a>
										</div>
									</div>
									<div class="col-lg-3 user marketing">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/kristina.jpg")' }}></div>
										<p class="name">Kristina</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/kristina.barooah"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/KristinaBarooah"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/kristina-barooah-322916169"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/kristinasarmabarooah/"></a>
										</div>
									</div>
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/santosh.png")' }}></div>
										<p class="name">Santosh</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://twitter.com/skpottumuthu"></a>

											<a className="teamicon fa fa-linkedin" href="https://www.instagram.com/santosh__pottumuthu"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/santosh__pottumuthu"></a>
										</div>
									</div>
									<div class="col-lg-3 user developer">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/bhaskar.jfif")' }}></div>
										<p class="name">Bhaskar Jat</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/bhaskar.jat.73"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/Bhaskar79011405"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/bhaskar-jat/"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/bhaskar_jat_/"></a>
										</div>
									</div>
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/shivam.jpg")' }}></div>
										<p class="name">Shivam Mishra</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/mshivam019"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/MShivam190"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/shivam-mishra-019/"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/mshivam019/"></a>
										</div>
									</div>
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/imran.jpeg")' }}></div>
										<p class="name prateek">Imran Khan</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/profile.php?id=100005905788799"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/imran_khan227"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/imran-khan-991324188/"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/immrwnnn_227/"></a>
										</div>
									</div>
									<div class="col-lg-3 user content-developer anchoring">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/ashutosh.jpg")' }}></div>
										<p class="name prateek">Ashutosh Mohapatra</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/mohapatrashutosh/"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/imashumohapatra"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/iamashutosh/"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/ashutosh__mohapatra/"></a>
										</div>
									</div>
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/harneet.jfif")' }}></div>
										<p class="name prateek">Harneet Kaur</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/harneetk.21"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/harneetk21"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/harneetkaur1991/"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/harneet_k_engineer/"></a>
										</div>
									</div>
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/dushyant.jfif")' }}></div>
										<p class="name prateek">Dushyanth Desu</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/dushyanthdesu/"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/DesuDushyanth"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/dushyanthdesu/"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/prinz_charmant/"></a>
										</div>
									</div>
									<div class="col-lg-3 user marketing">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/lakshey.jfif")' }}></div>
										<p class="name prateek">Lakshey banga</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="http://facebook.com/lakshay.banga.5"></a>

											<a className="teamicon fa fa-linkedin" href="http://www.linkedin.com/in/lakshey-banga"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/lakshay__banga"></a>
										</div>
									</div>
									<div class="col-lg-3 user content-developer">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/gaurang.jfif")' }}></div>
										<p class="name prateek">Gaurang Arora</p>
										<div className="team-social">

											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/gaurangarora/"></a>

										</div>
									</div>
									<div class="col-lg-3 user developer">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/arush.jpg")' }}></div>
										<p class="name prateek">Arush Nigam</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://touch.facebook.com/arush.nigam.75"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/arush_nigam"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/arush-nigam/"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/aru5602/"></a>
										</div>
									</div>
									<div class="col-lg-3 user graphics">
										<div class="circle" ></div>
										<p class="name prateek">Puneet</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="#"></a>
											<a className="teamicon fa fa-twitter" href="#"></a>
											<a className="teamicon fa fa-linkedin" href="#"></a>
											<a className="teamicon fa fa-instagram" href="#"></a>
										</div>
									</div>
									<div class="col-lg-3 user graphics">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/ankit.jfif")' }}></div>
										<p class="name prateek">Ankit Ojha</p>
										<div className="team-social">

											<a className="teamicon fa fa-twitter" href="https://twitter.com/ankit_ojha07"></a>
											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/ankitojha07/"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/codeforcoffee.in/"></a>
										</div>
									</div>
									<div class="col-lg-3 user anchoring">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/brahma.jfif")' }}></div>
										<p class="name prateek">Brahmjit</p>
										<div className="team-social">

											<a className="teamicon fa fa-linkedin" href="https://www.linkedin.com/in/brahmajit-mohapatra-730743169"></a>
											<a className="teamicon fa fa-instagram" href="https://www.instagram.com/brahmajit.2k"></a>
										</div>
									</div>
									<div class="col-lg-3 user technical">
										<div class="circle" style={{ backgroundImage: 'url("/images/aboutus/sami.jfif")' }}></div>
										<p class="name prateek">Muhammad Sami Khanday</p>
										<div className="team-social">
											<a className="teamicon fa fa-facebook" href="https://www.facebook.com/iammsami"></a>
											<a className="teamicon fa fa-twitter" href="https://twitter.com/msamikhanday"></a>
											<a className="teamicon fa fa-linkedin" href="https://twitter.com/msamikhanday"></a>
											<a className="teamicon fa fa-instagram" href="https://twitter.com/msamikhanday"></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>



			</div>
		)
	}
}

export default About;
