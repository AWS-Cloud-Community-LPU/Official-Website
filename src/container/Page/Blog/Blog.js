import React, {Component} from 'react';


class Blog extends Component {
	render(){
		return(
          
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
                                        <a href="blogdetails.html"><img src="images/blog/EC2.jfif" class="img-responsive" alt="" /></a>
                                        <div class="post-overlay">
                                           <span class="uppercase"><a href="#">12 <br/><small>Feb</small></a></span>
                                       </div>
                                    </div>
                                    <div class="post-content overflow">
                                        <h2 class="post-title bold"><a href="blogdetails.html">A Guide to EC2</a></h2>
                                        <h3 class="post-author"><a href="#">Posted by Kristina</a></h3>
                                        <p>The article contains a detailed step-by-step guide on How you can Launch your EC2 instance. Moreover, it is also very well described How to work with it and terminate it gracefully once done.</p>
                                        <a href="https://lnkd.in/dSfaXKW" class="read-more">View More</a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12">
                                <div class="single-blog single-column">
                                    <div class="post-thumb">
                                        <a href="blogdetails.html"><img src="images/blog/IAM.gif" class="img-responsive" alt="" /></a>
                                        <div class="post-overlay">
                                           <span class="uppercase"><a href="#">1 <br /><small>Feb</small></a></span>
                                       </div>
                                    </div>
                                    <div class="post-content overflow">
                                        <h2 class="post-title bold"><a href="blogdetails.html">Guide to AWS IAM</a></h2>
                                        <h3 class="post-author"><a href="#">Posted by Kristina</a></h3>
                                        <p>As Our goal is to impart quality knowledge, Our tech blog contains up-to-date information on many Amazon Web Services which will help you to establish your projects on the cloud.</p>
                                        <a href="https://lnkd.in/dFk8srZ" class="read-more">View More</a>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                     </div>
                    <div class="col-md-3 col-sm-5">
                        <div class="sidebar blog-sidebar">
                            
                            
                            <div class="sidebar-item tag-cloud">
                                <h3>Tag Cloud</h3>
                                <ul class="nav nav-pills">
                                    <li><a href="#">Corporate</a></li>
                                    <li><a href="#">Joomla</a></li>
                                    <li><a href="#">Abstract</a></li>
                                    <li><a href="#">Creative</a></li>
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Product</a></li>
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