import React from 'react';
import {Dropdown}  from "semantic-ui-react"
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
    
    <div>
       <div className="filter_section">
            <Dropdown 
            className="filter"
            selection
            options={status}
            placeholder="All launches"/>
       </div>
    </div>
)
}
export default Dashboard;