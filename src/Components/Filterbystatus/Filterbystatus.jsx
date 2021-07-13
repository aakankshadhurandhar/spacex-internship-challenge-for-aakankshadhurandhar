import React from 'react';
import {Dropdown}  from "semantic-ui-react"
export const Filterbystatus=({setstatus})=>{
    const status=[
        {
            key:"All Launches",
            text:"All Launches",
            value: "All Launches",
        },
        {
            key:"Upcoming Launches",
            text:"Upcoming Launches",
            value: "upcoming",
        },
        {
            key:"Successful Launches",
            text:"Successful Launches",
            value: true,
        },
        {
            key:"Failed Launches",
            text:"Failed Launches",
            value: false,
        },
        
    ]
    const handleChange = (e, { value }) => {
        console.log(value)
		setstatus(value);
	};
return (
    <div>
            <Dropdown 
            className="filter"
            selection
            defaultValue="All Launches"
            options={status}
            
            onChange={handleChange}/>
    </div>
)
}