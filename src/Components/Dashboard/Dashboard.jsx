import React, { useState,useEffect } from 'react';

import { Filterbystatus } from '../Filterbystatus';
import { LaunchList } from '../Launchlist';

import './Dashboard.css'

function Dashboard() {
const[launches,setlaunches]=useState([])
const Getlaunchdetails = async () => {
    const temp = await fetch(`https://api.spacexdata.com/v3/launches`)
        .then(res => res.json());

        console.log(temp);
        setlaunches(temp);
}
useEffect(() => {
    Getlaunchdetails();
}, []);
    return (

        <>

            <div className="dashboard_container">


                <div className="filter_section">
                    <Filterbystatus />
                </div>
                <div className="table_container">
                    <LaunchList launches={launches}/>
                </div>

            </div>








        </>
    )
}
export default Dashboard;