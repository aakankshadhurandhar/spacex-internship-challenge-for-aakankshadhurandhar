import React,{useState} from 'react';

import { Filterbystatus } from '../Filterbystatus';
import { LaunchList } from '../Launchlist';
import Model from '../Model/Model';
import './Dashboard.css'

function Dashboard(){
    const[Modelisopen,setModelisopen]=useState(false)
    const[launchdetails,setlaunchdetails]=useState({})
    const handleClose=()=>setModelisopen(false)
    const handleopen=()=>setModelisopen(true)
    const modeldetails=(details)=>setlaunchdetails(details)
return (
    
    <>
    <button onClick={handleopen}>Open</button>
    {
        Modelisopen?(
            <Model
            modelstatus={Modelisopen}
            handleClose={handleClose}
            launchdetails={launchdetails}
            />
        )

        :
        (
            <div className="dashboard_container">


      <div className="filter_section">
           <Filterbystatus />
       </div>
       <div className="table_container">
           <LaunchList getmodaldetails={(x)=>modeldetails(x)} />
       </div>

</div>
        )


    }


    
     
    </>
)
}
export default Dashboard;