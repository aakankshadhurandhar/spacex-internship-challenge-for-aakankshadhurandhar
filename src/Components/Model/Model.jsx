import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");
function Model({ modalStatus, handleClose, launchDetails }) {
	return (
		<ReactModal
			style={{
				overlay: {
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
<<<<<<< HEAD
					backgroundColor: "rgba(210,212,215,0.6)",
=======
					backgroundColor: "transparent",
>>>>>>> d7be4a0761570f99184675105ee73292fdf87171
					zIndex: 1000,
				},
				content: {
					position: "absolute",
					left: "50%",
					transform: "translateX(-50%)",
					border: "1px solid #ccc",
					background: "#fff",
					overflow: "auto",
					WebkitOverflowScrolling: "touch",
					borderRadius: "6px",
					outline: "none",
<<<<<<< HEAD
					width: "800px",
					maxHeight: "600px",
=======
					width: "700px",
					height: "500px",
>>>>>>> d7be4a0761570f99184675105ee73292fdf87171
					padding: "0px !important",
					margin: "0 auto",
				},
			}}
			isOpen={modalStatus}
			onRequestClose={handleClose}
		>
			<div className="modal-container">
				<div className="modal-header">
					<p className="mission-heading">Flight</p>
					<button onClick={handleClose}>X</button>
				</div>
				<h2>{launchDetails}</h2>
				<p>Modal Body</p>
			</div>
		</ReactModal>
	);
}

export default Model;