import React from 'react';
import {Dropdown,Table}  from "semantic-ui-react"
import './Dashboard.css'
function Dashboard(){
    const status=[
        {
            key:"All Launches",
            text:"All Launches",
            value: "All Launches",
        },
        {
            key:"Upcoming Launches",
            text:"Upcoming Launches",
            value: "Upcoming Launches",
        },
        {
            key:"Successful Launches",
            text:"Successful Launches",
            value: "Successful Launches",
        },
        {
            key:"Failed Launches",
            text:"Failed Launches",
            value: "Failed Launches",
        },
        
    ]
return (
    
    <div className="dashboard_container">
       <div className="filter_section">
           
           <Dropdown 
            className="filter"
            selection
            options={status}
            placeholder="All launches"/>
       </div>
       <div className="table_container">
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
       </div>
    </div>
)
}
export default Dashboard;