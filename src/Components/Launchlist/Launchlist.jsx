import React, { useState } from 'react';
import {  Table } from "semantic-ui-react"
import Model from '../Model/Model';
import {FormattedDate,Statuslabel} from '../../utils/index'
import './Launchlist.css'

import Paginate from '../Pagination/Paginations';
export const LaunchList = ({ launches,activePage, setActivePage, launchCount }) => {
	console.log(launches)
	const [ModalIsOpen, setModalIsOpen] = useState(false);
	const [launchDetails, setLaunchDetails] = useState({});
	const handleClose = () => setModalIsOpen(false);
	
	const handleEvents = (launch) => {
		setModalIsOpen(true);
		setLaunchDetails(launch);
	};

	return (

		<>

			{ModalIsOpen ? (
				<Model
					modalStatus={ModalIsOpen}
					handleClose={handleClose}
					launchDetails={launchDetails}
				/>
			) : (
							""
			)}
				
				<div className="table-container">
				<Table singleLine>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>No:</Table.HeaderCell>
							<Table.HeaderCell>Launched(UTC)</Table.HeaderCell>
							<Table.HeaderCell>Location</Table.HeaderCell>
							<Table.HeaderCell>Mission</Table.HeaderCell>
							<Table.HeaderCell>Orbit</Table.HeaderCell>
							<Table.HeaderCell>Launch Status</Table.HeaderCell>
							<Table.HeaderCell>Rocket</Table.HeaderCell>


						</Table.Row>
					</Table.Header>
					<Table.Body>
						{launches.map((launch) => {
							return (
								<Table.Row onClick={() => handleEvents("Flight")} >
									<Table.Cell>{launch.flight_number}</Table.Cell>
									<Table.Cell>{FormattedDate(launch.launch_date_utc)}</Table.Cell>
									<Table.Cell>{launch.launch_site.site_name}</Table.Cell>
									<Table.Cell>{launch.mission_name}</Table.Cell>
									<Table.Cell>{
										launch.rocket.second_stage.payloads[0].orbit}</Table.Cell>
									<Table.Cell>{ Statuslabel(  launch.launch_success)}
									</Table.Cell>
									<Table.Cell>{launch.rocket.rocket_name}</Table.Cell>

								</Table.Row>
							)
						})

						}

					</Table.Body>
				</Table>
				
				</div>
				<div className="pagination-container">
				<Paginate 
				launches={launches}
				activePage={activePage}
				setActivePage={setActivePage}
				launchCount={launchCount} />
				</div>
				
			
		</>
	)
}