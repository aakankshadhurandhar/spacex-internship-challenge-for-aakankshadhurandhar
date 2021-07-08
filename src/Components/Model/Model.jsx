import React, { useState } from 'react';
import ReactModal from 'react-modal'



ReactModal.setAppElement("#root");


function Model(){
    const[isOpen,setisOpen]=useState(false)
    return (
        <div>
                <button onClick={()=>setisOpen(true)}>Open Modal</button>
                <ReactModal isOpen={isOpen} 
                onRequestClose={()=>setisOpen(false)}>
                    <h2>Modal title</h2>
                    <p>Modal body</p>
                    <button onClick={()=>setisOpen(false)}></button>
                </ReactModal>
        </div>
    )
}
export default Model;