import React from 'react';
import {Dropdown}  from "semantic-ui-react"
export const Filterbystatus=()=>{
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
            <Dropdown 
            className="filter"
            selection
            options={status}
            placeholder="All launches"/>
    </div>
)
}