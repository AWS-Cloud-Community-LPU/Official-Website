import React, { Component } from 'react';


class Blog extends Component {
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
                                        <h1 class="title">Blog</h1>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="blog" class="padding-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-sm-7">
                                <div class="row">
                                    <div class="col-sm-12 col-md-12">
                                        <div class="single-blog single-column">
                                            <div class="post-thumb">
                                                <a href="https://awscloudcommunity-lpu.medium.com/aws-certifications-950dee6ad5e"><img src="images/blog/awscerti.png" class="img-responsive" alt="" /></a>
                                                <div class="post-overlay">
                                                    <span class="uppercase"><a href="#">9 <br /><small>April</small></a></span>
                                                </div>
                                            </div>
                                            <div class="post-content overflow">
                                                <h2 class="post-title bold"><a href="https://awscloudcommunity-lpu.medium.com/aws-certifications-950dee6ad5e">AWS Certifications</a></h2>
                                                <h3 class="post-author"><a href="#">Posted by Team</a></h3>
                                                <p>With the emergence of Cloud Technologies in the market, the most important step for learners is to get a clarification on the right way to begin their career. Amazon Web Services, being a leader in the globe in terms of providing cloud base solutions provides a clear description of skill validation through certifications (starting from Foundation level to Professional level).</p>
                                                <a href="https://awscloudcommunity-lpu.medium.com/aws-certifications-950dee6ad5e" class="read-more">View More</a>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12">
                                        <div class="single-blog single-column">
                                            <div class="post-thumb">
                                                <a href="https://awscloudcommunity-lpu.medium.com/aws-load-balancing-52732137bd9e"><img src="images/blog/load.jfif" class="img-responsive" alt="" /></a>
                                                <div class="post-overlay">
                                                    <span class="uppercase"><a href="#">25 <br /><small>Mar</small></a></span>
                                                </div>
                                            </div>
                                            <div class="post-content overflow">
                                                <h2 class="post-title bold"><a href="https://awscloudcommunity-lpu.medium.com/aws-load-balancing-52732137bd9e">AWS LOAD BALANCING</a></h2>
                                                <h3 class="post-author"><a href="#">Posted by Team</a></h3>
                                                <p>Every city needs a governor. Someone who can manage, solve issues and also provide solutions. Well, in the case of web services and applications, that governor needs to be a body that manages the system efficiently and makes sure that it caters to the needs of everyone and everything that is part of that system. Presenting AWS Load Balancer.</p>
                                                <a href="https://awscloudcommunity-lpu.medium.com/aws-load-balancing-52732137bd9e" class="read-more">View More</a>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12">
                                        <div class="single-blog single-column">
                                            <div class="post-thumb">
                                                <a href="https://awscloudcommunity-lpu.medium.com/amazon-simple-storage-service-c0c283641212"><img src="images/blog/awss3.jfif" class="img-responsive" alt="" /></a>
                                                <div class="post-overlay">
                                                    <span class="uppercase"><a href="#">14 <br /><small>Mar</small></a></span>
                                                </div>
                                            </div>
                                            <div class="post-content overflow">
                                                <h2 class="post-title bold"><a href="https://awscloudcommunity-lpu.medium.com/amazon-simple-storage-service-c0c283641212">Amazon Simple Storage Service</a></h2>
                                                <h3 class="post-author"><a href="#">Posted by Team</a></h3>
                                                <p>Every organization is eager to be an industry leader and to be a leader, smart work is required. Data handling is something that some organizations ignore and your first smart move in growing your organization would be choosing a dedicated server. A server that is secure, fast, cost-effective, and also easy to use. Wait! It sounds like Amazon S3 (Amazon Simple Storage Service).</p>
                                                <a href="https://awscloudcommunity-lpu.medium.com/amazon-simple-storage-service-c0c283641212" class="read-more">View More</a>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12">
                                        <div class="single-blog single-column">
                                            <div class="post-thumb">
                                                <a href="https://lnkd.in/dSfaXKW"><img src="/images/blog/EC2.jfif" class="img-responsive" alt="" /></a>
                                                <div class="post-overlay">
                                                    <span class="uppercase"><a href="#">12 <br /><small>Feb</small></a></span>
                                                </div>
                                            </div>
                                            <div class="post-content overflow">
                                                <h2 class="post-title bold"><a href="https://lnkd.in/dSfaXKW">A Guide to EC2</a></h2>
                                                <h3 class="post-author"><a href="#">Posted by Kristina</a></h3>
                                                <p>The article contains a detailed step-by-step guide on How you can Launch your EC2 instance. Moreover, it is also very well described How to work with it and terminate it gracefully once done.</p>
                                                <a href="https://lnkd.in/dSfaXKW" class="read-more">View More</a>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-12">
                                        <div class="single-blog single-column">
                                            <div class="post-thumb">
                                                <a href="https://lnkd.in/dFk8srZ"><img src="images/blog/IAM.gif" class="img-responsive" alt="" /></a>
                                                <div class="post-overlay">
                                                    <span class="uppercase"><a href="#">1 <br /><small>Feb</small></a></span>
                                                </div>
                                            </div>
                                            <div class="post-content overflow">
                                                <h2 class="post-title bold"><a href="https://lnkd.in/dFk8srZ">Guide to AWS IAM</a></h2>
                                                <h3 class="post-author"><a href="#">Posted by Kristina</a></h3>
                                                <p>As Our goal is to impart quality knowledge, Our tech blog contains up-to-date information on many Amazon Web Services which will help you to establish your projects on the cloud.</p>
                                                <a href="https://lnkd.in/dFk8srZ" class="read-more">View More</a>

                                            </div>
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

export default Blog;