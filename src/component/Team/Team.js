import React from 'react';

const Team = (props) => {
	return(
		<div className="col-md-4 col-sm-6 single-team">
			<div className="inner">
			    <div className="team-img">
			        <img src={props.img} alt=""/>
			    </div>
			    <div className="team-content">
			        <h4>{props.name}</h4>
			    	<span className="desg">{props.job}</span>
			        <div className="team-social">
			            <a className="fa fa-facebook" href="{props.facebook}"></a>
			            <a className="fa fa-twitter" href="{props.twitter}"></a>
			            <a className="fa fa-linkedin" href="{props.linkedin}"></a>
			            <a className="fa fa-pinterest" href="{props.pinterest}"></a>
			        </div>
			    </div>
			</div>
		</div>
	)
}

export default Team;