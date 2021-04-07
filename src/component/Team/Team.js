import React from 'react';

const Team = (props) => {
	return(
		<div className="col-md-4 col-sm-6 single-team">
			<div className="inner">
			    <div className="team-img">
			        <img style={{height:330}}src={props.img} alt=""/>
			    </div>
			    <div className="team-content">
			        <h4>{props.name}</h4>
			    	<span className="desg">{props.job}</span>
			        <div className="team-social">
					{props.facebook!='#'&&<a className="fa fa-facebook"target="_blank" href={props.facebook}></a>}
			        {props.twitter!="#"&&<a className="fa fa-twitter" target="_blank"href={props.twitter}></a>}
			        {props.linkedin!="#"&&<a className="fa fa-linkedin" target="_blank"href={props.linkedin}></a>}
			        {props.instagram!="#"&&<a className="fa fa-instagram" target="_blank"href={props.instagram}></a>}
			        </div>
			    </div>
			</div>
		</div>
	)
}

export default Team;