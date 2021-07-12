import React, { useState,useEffect } from 'react';
import { GenerateSearchterm } from '../../utils';

import { Filterbystatus } from '../Filterbystatus';
import { LaunchList } from '../Launchlist';
import Paginations from '../Pagination/Paginations';



import './Dashboard.css'

function Dashboard() {
const[launches,setlaunches]=useState([])
const[searchTerm,setSearchTerm]=useState("")
const[status,setstatus]=useState("")

const Getlaunchdetails = async () => {
    const temp = await fetch(`https://api.spacexdata.com/v3/launches${searchTerm}`)
        .then(res => res.json());

        console.log(temp);
        setlaunches(temp);
}
useEffect(() => {
    Getlaunchdetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [searchTerm]);

useEffect(() => {
   GenerateSearchterm({status,setSearchTerm})
}, [status])
    return (

        <>

            <div className="dashboard_container">


                <div className="filter_section">
                    <Filterbystatus setstatus={setstatus}/>
                </div>
                <div className="table_container">
                    <LaunchList launches={launches}/>
                    <div className="pagination-container">
               <Paginations />
                </div>
                </div>
                

            </div>








        </>
    )
}
export default Dashboard;