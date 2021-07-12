import React, { useState,useEffect } from 'react';
import { GenerateSearchterm } from '../../utils';
import axios from "axios";
import { Filterbystatus } from '../Filterbystatus';
import { LaunchList } from '../Launchlist';




import './Dashboard.css'

function Dashboard() {
const[launches,setlaunches]=useState([])
const[searchTerm,setSearchTerm]=useState(`?limit=12`)
const[status,setstatus]=useState("")
const [activePage, setActivePage] = useState(1);
const [launchCount, setLaunchCount] = useState("");

const Getlaunchdetails = async () => {
    try {
        const res = await axios.get(
            `https://api.spacexdata.com/v3/launches${searchTerm}`
        );
        console.log(searchTerm)
        setLaunchCount(res.headers["spacex-api-count"]);
        setlaunches(res.data);
    } catch (error) {
        console.log(error.data);
    }
};
useEffect(() => {
    Getlaunchdetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [searchTerm]);

useEffect(() => {
   GenerateSearchterm({status,setSearchTerm,activePage,})
}, [status,activePage])
    return (

        <>

            <div className="dashboard_container">


                <div className="filter_section">
                    <Filterbystatus setstatus={setstatus}/>
                </div>
                <div className="table_container">
                    <LaunchList launches={launches}
                        launchCount={launchCount}
                        setActivePage={setActivePage}
                        activePage={activePage}
                        
                    
                    />
                    
                </div>
                

            </div>








        </>
    )
}
export default Dashboard;