import React from 'react';

const Blog = (props) => {
	return(
    
        

        
        <div className="container">
            <div className="row">
                <div className="col-md-9 col-sm-7">
                    <div className="row">
                         <div className="col-sm-12 col-md-12">
                            <div className="single-blog single-column">
                                <div className="post-thumb">
                                    <a href="blogdetails.html"><img src={props.img} className="img-responsive" alt="" /></a>
                                    <div className="post-overlay">
                                       <span className="uppercase"><a href="#">{props.date} <br /><small>{props.month}</small></a></span>
                                   </div>
                                </div>
                                <div className="post-content overflow">
                                    <h2 className="post-title bold"><a href="blogdetails.html">{props.title}</a></h2>
                                    <h3 className="post-author"><a href="#">Posted by {props.name}</a></h3>
                                    <p>{props.decs}</p>
                                    <a href="#" className="read-more">View More</a>
                                    
                                </div>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    
                 </div>
                <div className="col-md-3 col-sm-5">
                    <div className="sidebar blog-sidebar">
                        
                        
                        <div className="sidebar-item tag-cloud">
                            <h3>Tags</h3>
                            <ul className="nav nav-pills">
                                <li><a href="#">Corporate</a></li>
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
    
	)
}


Features.defaultProps = {
	icon: '00.00',
	title: 'Title Here',
	desc: 'Desc Here'
}   


export default Blog;