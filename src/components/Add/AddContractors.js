import React from 'react'
import { Grid , InputBase , Button , Table , TableRow , TableCell , TableHead , TableBody } from '@material-ui/core'
import "../../App.css"


function AddContractor() {
    return ( 
        <div className='content'>
            <div className="C_heading">
        <h2 
          style={{
            marginTop: "10px",
            width: "1880px",
            border: "0px solid grey",
            boxShadow: " 0px 1px 0px rgb(206, 206, 206)",
            borderRadius: "10px",
          }}
        >
          <div
            style={{ marginLeft: "25px", position: "relative", top: "-7px" }}
          >
            Add New Contractor
          </div>
        </h2>
      </div>
        </div>
     );
}

export default AddContractor;