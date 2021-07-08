import React from 'react';

import { Filterbystatus } from '../Filterbystatus';
import { LaunchList } from '../Launchlist';
import Model from '../Model/Model';
import './Dashboard.css'

function Dashboard(){
    
return (
    <>

    <Model/>
     { /*<div className="dashboard_container">


      <div className="filter_section">
           <Filterbystatus />
       </div>
       <div className="table_container">
           <LaunchList />
       </div>

</div>*/}
    </>
)
}
export default Dashboard;