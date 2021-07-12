import React,{useState} from 'react';
import {Table}  from "semantic-ui-react"
import Model from '../Model/Model';
export const LaunchList=({getmodaldetails})=>{
	const [ModalIsOpen, setModalIsOpen] = useState(false);
	const [launchDetails, setLaunchDetails] = useState({});
	const handleClose = () => setModalIsOpen(false);
	// const handleShow = () => setModalIsOpen(true);
	const handleEvents = (launch) => {
		setModalIsOpen(true);
		setLaunchDetails(launch);
	};

return (

    <div>

{ModalIsOpen ? (
				<Model
					modalStatus={ModalIsOpen}
					handleClose={handleClose}
					launchDetails={launchDetails}
				/>
			) : (

			
            <Table singleLine>
                    <Table.Header>
                    <Table.Row>
						<Table.HeaderCell>Header</Table.HeaderCell>
						<Table.HeaderCell>Header</Table.HeaderCell>
						<Table.HeaderCell>Header</Table.HeaderCell>
						<Table.HeaderCell>Header</Table.HeaderCell>
						<Table.HeaderCell>Header</Table.HeaderCell>
						<Table.HeaderCell>Header</Table.HeaderCell>
						<Table.HeaderCell>Header</Table.HeaderCell>
						
						
					</Table.Row>
                    </Table.Header>
                    <Table.Body>
							<Table.Row   onClick={() => handleEvents("Flight")} >
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								
							</Table.Row>
							<Table.Row>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								
							</Table.Row>
							<Table.Row>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								<Table.Cell>Cell</Table.Cell>
								
							</Table.Row>
						</Table.Body>
           </Table>
			)}
    </div>
)
}