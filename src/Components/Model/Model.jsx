import React from "react";
import ReactModal from "react-modal";
import {FormattedDate,Statuslabel} from '../../utils/index'
import "./Model.css"
ReactModal.setAppElement("#root");
function Model({ modalStatus, handleClose,launch }) {
	console.log(launch)
	return (
		<ReactModal
			style={{
				overlay: {
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,

				},
				content: {
					position: "absolute",
					left: "45%",
					transform: "translateX(-50%)",
					border: "1px solid #ccc",
					background: "#fff",
					overflow: "auto",
					WebkitOverflowScrolling: "touch",
					borderRadius: "6px",
					outline: "none",

					width: "544px",
					maxHeight: "740px",
					
					

					

					padding: "0px !important",
					
				},
			}}
			isOpen={modalStatus}
			onRequestClose={handleClose}
		>
			
				<div className="model_container">
					
					<div className="model_header">
					<img src={launch.links.mission_patch} alt="launchimg" className="launchimg"></img>
					<div className="model_detail">
					
					<h3 className="mission_name">{launch.mission_name}</h3>
					<h5 className="rocketname">{launch.rocket.rocket_name}</h5>
					<div className="social-links">
						<a href={launch.links.article_link}>
							<img src="../nasa.png" alt="nasa.png" className="nasa-img"></img>
						</a>
						<a href={launch.links.wikipedia}>
							<img src="../wikipedia.png" alt="wikipedia"></img>
						</a>
						<a href={launch.links.video_link}>
							<img src="../youtube.png" alt="youtube"></img>
						</a>

					</div>
					</div>
					<div className="status">
					{Statuslabel(launch.launch_success)}
					
					</div>
					
					
					</div>
					<div className="details">
						<p>{launch.details}<a href={launch.links.wikipedia}>.Wikipedia</a></p>
					</div>
					<div className="more_details">
						<div className="details1">
							<div className="heading">
							 Flight Number
							</div>
							<div className="details2">
								{launch.flight_number}
							</div>
						<hr></hr>
						</div>
						<div className="details1">
							<div className="heading">
							 Mission Name
							</div>
							<div className="details2">
								{launch.mission_name}
							</div>
						<hr></hr>
						</div>
						<div className="details1">
							<div className="heading">
							 Rocket Type
							</div>
							<div className="details2">
								{launch.rocket.rocket_type}
							</div>
						<hr></hr>
						</div>
						<div className="details1">
							<div className="heading">
							 Rocket Name
							</div>
							<div className="details2">
								{launch.rocket.rocket_name}
							</div>
						<hr></hr>
						</div>
						<div className="details1">
							<div className="heading">
							 Manufacturer
							</div>
							<div className="details2">
							{launch.rocket.second_stage.payloads[0].manufacturer}
							</div>
						<hr></hr>
						</div>
						<div className="details1">
							<div className="heading">
							 Nationality
							</div>
							<div className="details2">
							{launch.rocket.second_stage.payloads[0].nationality}
							</div>
						<hr></hr>
						</div>
						<div className="details1">
							<div className="heading">
							 Launch Date
							</div>
							<div className="details2">
							{FormattedDate(launch.launch_date_utc)}
							</div>
						<hr></hr>
						</div>
						<div className="details1">
							<div className="heading">
							 Payload type
							</div>
							<div className="details2">
							{launch.rocket.second_stage.payloads[0].payload_type}
							</div>
						<hr></hr>
						</div>
						<div className="details1">
							<div className="heading">
							 Orbit
							</div>
							<div className="details2">
							{launch.rocket.second_stage.payloads[0].orbit}
							</div>
						<hr></hr>
						</div>
						<div className="details1">
							<div className="heading">
							 Launch Site
							</div>
							<div className="details2">
							{launch.launch_site.site_name}
							</div>
						
						</div>
					</div>
				</div>
				
		</ReactModal>
	);
}

export default Model;