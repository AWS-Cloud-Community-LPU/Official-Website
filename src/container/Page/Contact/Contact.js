import React, { Component } from 'react';


class Contact extends Component {
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
										<h1 class="title">Contact us</h1>
										<p>You can reach out to us either through social medial or you can drop a message below and we will revert back to you.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="services">
					<div class="container">
						<div class="row">
							<div class="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
								<div class="single-service">
									<div class="wow scaleIn" data-wow-duration="500ms" data-wow-delay="300ms">
										<a href="https://www.linkedin.com/company/aws-cloud-community-lpu/"><img src="images/home/lkd.png" alt="" /></a>

									</div>
									<a href="https://www.linkedin.com/company/aws-cloud-community-lpu/"><h2> Linked In</h2></a>


								</div>
							</div>
							<div class="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
								<div class="single-service">
									<div class="wow scaleIn" data-wow-duration="500ms" data-wow-delay="300ms">
										<a href="https://www.youtube.com/channel/UCmnQggVDZY8ht6UYekmzQlg?sub_confirmation=1/"><img src="images/home/youtube.png" alt="" /></a>

									</div>
									<a href="https://www.youtube.com/channel/UCmnQggVDZY8ht6UYekmzQlg?sub_confirmation=1/"><h2>Youtube</h2></a>


								</div>
							</div>
							<div class="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
								<div class="single-service">
									<div class="wow scaleIn" data-wow-duration="500ms" data-wow-delay="300ms">
										<a href="https://www.instagram.com/awscloudcommunity_lpu/"><img src="images/home/insta.png" alt="" /></a>

									</div>
									<a href="https://www.instagram.com/awscloudcommunity_lpu/"><h2>Instagram</h2></a>


								</div>
							</div>
							<div class="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
								<div class="single-service">
									<div class="wow scaleIn" data-wow-duration="500ms" data-wow-delay="300ms">
										<a href="https://www.facebook.com/AWSCloudCommunityLPU"><img src="images/home/facebook.png" alt="" /></a>

									</div>
									<a href="https://www.facebook.com/AWSCloudCommunityLPU"><h2>Facebook</h2></a>


								</div>
							</div>
							<div class="col-sm-4 text-center padding wow fadeIn" data-wow-duration="1000ms" data-wow-delay="300ms">
								<div class="single-service">
									<div class="wow scaleIn" data-wow-duration="500ms" data-wow-delay="300ms">
										<a href="https://twitter.com/AWScommLPUU"><img src="images/home/twitter.svg" alt="" /></a>

									</div>
									<a href="https://twitter.com/AWScommLPU"><h2>Twitter</h2></a>


								</div>
							</div>
						</div>
					</div>
				</section>


				<section id="contact-page">
					<div className="container">
						<div className="large-title text-center">
							<h2>Drop Your Message</h2>
							<p>All users on AWS will know that there are millions of people out there. Every day besides so many people joining this community.</p>

						</div>

					</div>
				</section>
			</div>
		)
	}
}

export default Contact;