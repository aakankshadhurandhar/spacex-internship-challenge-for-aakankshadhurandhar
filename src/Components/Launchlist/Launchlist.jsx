import React from 'react';
import {Table}  from "semantic-ui-react"
export const LaunchList=({getmodaldetails})=>{


return (
    <div>
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
							<Table.Row  onClick={() => getmodaldetails("flight no 4")} >
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
)
}