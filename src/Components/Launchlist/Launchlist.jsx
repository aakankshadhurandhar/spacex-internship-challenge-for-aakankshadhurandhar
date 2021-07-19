import React, { useState } from 'react';
import {  Table } from "semantic-ui-react"
import Model from '../Model/Model';
import {FormattedDate,Statuslabel} from '../../utils/index'
import './Launchlist.css'

import Paginate from '../Pagination/Paginations';
export const LaunchList = ({ 
	isLoading,
	launches,
	activePage, 
	setActivePage, 
	launchCount }) => {
	console.log(launches)
	const [ModalIsOpen, setModalIsOpen] = useState(false);
	
	const handleClose = () => setModalIsOpen(false);
	const[launch,setlaunches]=useState({})
	
	
	const handleEvents = (launch) => {
		setModalIsOpen(true);
	
		setlaunches(launch)
	};

	return (

		<>

			{ModalIsOpen ? (
				<Model
					modalStatus={ModalIsOpen}
					handleClose={handleClose}
					
					launch={launch}
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
					
				{!isLoading ?(


						
					<Table.Body>
						{launches.map((launch) => {
							return (
								<Table.Row key={launch.flight_number}
								onClick={()=>handleEvents(launch)}
								 >
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
				):
				(
					<>
						

						<img src="../loading.png" alt="loading" className="loading_img"/>
      					
    						
					</>
				
				)
	}
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