import React from 'react';
import {Table}  from "semantic-ui-react"
import { Filterbystatus } from '../Filterbystatus';
import './Dashboard.css'

function Dashboard(){
    
return (
    
    <div className="dashboard_container">
       <div className="filter_section">
           <Filterbystatus />
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