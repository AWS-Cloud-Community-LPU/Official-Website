import React, { Component } from 'react';


class Blog extends Component {
    componentDidMount() {

        window.history.pushState({}, '', '/')
    }

    render() {
        return (

            <div className="body">
                <section id="page-breadcrumb">
                    <div className="vertical-center sun">
                        <div className="container">
                            <div className="row">
                                <div className="action">
                                    <div className="col-sm-12">
                                        <h1 className="title">Blog</h1>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section id="blog-details" className="padding-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-sm-7">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                        <div className="single-blog blog-details two-column">
                                            <div className="post-thumb">
                                                <a href="#"><img src="images/blog/7.jpg" className="img-responsive" alt="" /></a>
                                                <div className="post-overlay">
                                                    <span className="uppercase"><a href="#">14 <br /><small>Feb</small></a></span>
                                                </div>
                                            </div>
                                            <div className="post-content overflow">
                                                <h2 className="post-title bold"><a href="#">Advanced business cards design</a></h2>
                                                <h3 className="post-author"><a href="#">Posted by micron News</a></h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br> <br>

                                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                                    <div className="post-bottom overflow">
                                                        <ul className="nav navbar-nav post-nav">
                                                            <li><a href="#"><i className="fa fa-tag"></i>Creative</a></li>
                                                            <li><a href="#"><i className="fa fa-heart"></i>32 Love</a></li>
                                                            <li><a href="#"><i className="fa fa-comments"></i>3 Comments</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="blog-share">
                                                        <span className='st_facebook_hcount'></span>
                                                        <span className='st_twitter_hcount'></span>
                                                        <span className='st_linkedin_hcount'></span>
                                                        <span className='st_pinterest_hcount'></span>
                                                        <span className='st_email_hcount'></span>
                                                    </div>
                                                    <div className="author-profile padding">
                                                        <div className="row">
                                                            <div className="col-sm-2">
                                                                <img src="images/blogdetails/1.png" alt="" />
                                                            </div>
                                                            <div className="col-sm-10">
                                                                <h3>Rodrix Hasel</h3>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                                                                <span>Website:<a href="www.jooomshaper.com"> www.jooomshaper.com</a></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="response-area">
                                                        <h2 className="bold">Comments</h2>
                                                        <ul className="media-list">
                                                            <li className="media">
                                                                <div className="post-comment">
                                                                    <a className="pull-left" href="#">
                                                                        <img className="media-object" src="images/blogdetails/2.png" alt="" />
                                                                    </a>
                                                                    <div className="media-body">
                                                                        <span><i className="fa fa-user"></i>Posted by <a href="#">Endure</a></span>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                                                        <ul className="nav navbar-nav post-nav">
                                                                            <li><a href="#"><i className="fa fa-clock-o"></i>February 11,2014</a></li>
                                                                            <li><a href="#"><i className="fa fa-reply"></i>Reply</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="parrent">
                                                                    <ul className="media-list">
                                                                        <li className="post-comment reply">
                                                                            <a className="pull-left" href="#">
                                                                                <img className="media-object" src="images/blogdetails/3.png" alt="" />
                                                                            </a>
                                                                            <div className="media-body">
                                                                                <span><i className="fa fa-user"></i>Posted by <a href="#">Endure</a></span>
                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
                                                                                <ul className="nav navbar-nav post-nav">
                                                                                    <li><a href="#"><i className="fa fa-clock-o"></i>February 11,2014</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="media">
                                                                <div className="post-comment">
                                                                    <a className="pull-left" href="#">
                                                                        <img className="media-object" src="images/blogdetails/4.png" alt="" />
                                                                    </a>
                                                                    <div className="media-body">
                                                                        <span><i className="fa fa-user"></i>Posted by <a href="#">Endure</a></span>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                                                        <ul className="nav navbar-nav post-nav">
                                                                            <li><a href="#"><i className="fa fa-clock-o"></i>February 11,2014</a></li>
                                                                            <li><a href="#"><i className="fa fa-reply"></i>Reply</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                </div>
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-5">
                                        <div className="sidebar blog-sidebar">
                                            <div className="sidebar-item  recent">
                                                <h3>Comments</h3>
                                                <div className="media">
                                                    <div className="pull-left">
                                                        <a href="#"><img src="images/portfolio/project1.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit,</a></h4>
                                                        <p>posted on  07 March 2014</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="pull-left">
                                                        <a href="#"><img src="images/portfolio/project2.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit,</a></h4>
                                                        <p>posted on  07 March 2014</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="pull-left">
                                                        <a href="#"><img src="images/portfolio/project3.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit,</a></h4>
                                                        <p>posted on  07 March 2014</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sidebar-item categories">
                                                <h3>Categories</h3>
                                                <ul className="nav navbar-stacked">
                                                    <li><a href="#">Lorem ipsum<span className="pull-right">(1)</span></a></li>
                                                    <li className="active"><a href="#">Dolor sit amet<span className="pull-right">(8)</span></a></li>
                                                    <li><a href="#">Adipisicing elit<span className="pull-right">(4)</span></a></li>
                                                    <li><a href="#">Sed do<span className="pull-right">(9)</span></a></li>
                                                    <li><a href="#">Eiusmod<span className="pull-right">(3)</span></a></li>
                                                    <li><a href="#">Mockup<span className="pull-right">(4)</span></a></li>
                                                    <li><a href="#">Ut enim ad minim <span className="pull-right">(2)</span></a></li>
                                                    <li><a href="#">Veniam, quis nostrud <span className="pull-right">(8)</span></a></li>
                                                </ul>
                                            </div>
                                            <div className="sidebar-item tag-cloud">
                                                <h3>Tag Cloud</h3>
                                                <ul className="nav nav-pills">
                                                    <li><a href="#">Corporate</a></li>
                                                    <li><a href="#">Joomla</a></li>
                                                    <li><a href="#">Abstract</a></li>
                                                    <li><a href="#">Creative</a></li>
                                                    <li><a href="#">Business</a></li>
                                                    <li><a href="#">Product</a></li>
                                                </ul>
                                            </div>
                                            <div className="sidebar-item popular">
                                                <h3>Latest Photos</h3>
                                                <ul className="gallery">
                                                    <li><a href="#"><img src="images/portfolio/popular1.jpg" alt="" /></a></li>
                                                    <li><a href="#"><img src="images/portfolio/popular2.jpg" alt="" /></a></li>
                                                    <li><a href="#"><img src="images/portfolio/popular3.jpg" alt="" /></a></li>
                                                    <li><a href="#"><img src="images/portfolio/popular4.jpg" alt="" /></a></li>
                                                    <li><a href="#"><img src="images/portfolio/popular5.jpg" alt="" /></a></li>
                                                    <li><a href="#"><img src="images/portfolio/popular1.jpg" alt="" /></a></li>
                                                </ul>
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