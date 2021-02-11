import React from 'react';

const Features = (props) => {
	return(
        <section id="features">

        <div className="container">
            <div className="row">
                <div className="single-features">
                    <div className="col-sm-5 wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                        <img src={props.imgleft} className="img-responsive" alt="" />
                    </div>
                    <div className="col-sm-6 wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                        <h2>{props.titleleft}</h2>
                        <p>{props.descleft}</p>
                    </div>
                </div>
                <div class="single-features">
                    <div class="col-sm-6 col-sm-offset-1 align-right wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">
                        <h2>{props.titleright}</h2>
                        <p>{props.descright}</p>
                    </div>
                    <div class="col-sm-5 wow fadeInRight" data-wow-duration="500ms" data-wow-delay="300ms">
                        <img src={props.imgright} class="img-responsive" alt="" />
                    </div>
                    
                </div>
                
            </div>
        </div>
        </section>
    
	)
}





export default Features;