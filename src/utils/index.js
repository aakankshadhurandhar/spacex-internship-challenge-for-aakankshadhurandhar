import React from 'react';
import {Button} from "semantic-ui-react"
import moment from 'moment'
import "./index.css"
const FormattedDate=(utcdate)=>{
    return moment(utcdate).utc().format("DD MMMM YYYY HH:mm");
}

const Statuslabel=(launch_success)=>{
        if(launch_success)
        return(
            <Button style={{backgroundColor: '#def7ec', borderRadius: 20,color:"#03543f",width:72,height:30,fontSize:"12px",Align:"center"}} >
                <div>
                Success
                </div>
               
                
                
            </Button>
        )

        else if(launch_success==null)
        return(
            <Button style={{backgroundColor: '#fef3c7', borderRadius: 20,color:"#a66231",width:82,height:30,fontSize:"12px",textAlign:"center"}}>
                Upcoming
            </Button>
        )
        else
        return(
            <Button style={{backgroundColor: '#fde2e1', borderRadius: 20,color:"#981b1c",width:72,height:30,fontSize:"12px",textAlign:"center"}}>
                Failed
            </Button>
        )
}

const GenerateSearchterm=({status,setSearchTerm})=>{
    
    if (status === true) {
		
        return setSearchTerm(`?launch_success=true`)
	} else if (status === false) {

		return setSearchTerm(`?launch_success=false`);

	} 
    else if(status==="Upcoming Launches"){
        return setSearchTerm("/upcoming")
    }
    else
    return setSearchTerm("")
    
    
    
}


export {FormattedDate,Statuslabel,GenerateSearchterm};