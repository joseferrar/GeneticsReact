import React from 'react'
import {Grid , Table, TableBody,TableHead , TableCell, TableRow , InputBase, Button} from "@material-ui/core";




function ManPhy() {

    const [addPhy , setAddPhy] = React.useState(false)

    const addPhyClick = () =>{
        setAddPhy(true)
    }

  return (
    <div>
      <div className="content">
        <div className="E_heading">
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
              List of Physicians
            </div>
          </h2>
        </div>
  

        
                
      <Grid container spacing={5}>
        <div className="fields">
          <Grid className="namee" style={{ marginLeft: "5px" }}>
          <InputBase
              placeholder="Name"
              style={{ left: "30px" }}
              className="namefield"
            />
          </Grid>
          <Grid className="namee" style={{ marginLeft: "30px" }}>
            <InputBase
              placeholder="Name"
              style={{ left: "30px" }}
              className="namefield"
            />
          </Grid>
          <Grid className="id" style={{ marginLeft: "50px" }}>
            <select
              placeholder="ID"
              style={{ left: "30px" }}
              className="id_field"
            >
              <option placeholder="ID">ID</option>
              <option value="001">001</option>
              <option value="002">002</option>
              <option value="003">003</option>
            </select>
          </Grid>
          <Grid className="email" style={{ marginLeft: "70px" }}>
            <InputBase
              type='email'
              placeholder="Email Address"
              style={{ left: "30px" }}
              className="email_field"
            />
          </Grid>

          <Grid className="button01" style={{ marginLeft: "90px" }}>
            <Button className="button01_field" style={{ color: "white" }}>
              filter
            </Button>
          </Grid>

          <Grid className="button02" style={{ marginLeft: "110px" }}>
            <Button className="button02_field" style={{ color: "white" }}>
              Reset
            </Button>
          </Grid>

          <Grid className="button03" style={{ marginLeft: "150px" }}>
            <Button className="button03_field" style={{ color: "white" }} onClick={addPhyClick}>
              Add Now
            </Button>
          </Grid>
        </div>
      </Grid>
   


      </div>
    </div>
  );
}

export default ManPhy;
