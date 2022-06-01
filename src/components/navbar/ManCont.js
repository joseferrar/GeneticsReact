import {
  Button,
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@material-ui/core";
import "../navbarCSS/manCont.css";
import Paper from "@mui/material/Paper";
import forms from "../../ManCont.json";
import GA from "../img&Logos/GroupArrow.png";
import view from "../../view.png";
import pencil from "../../pencil.png";
import del from "../../deleteB.png";

function ManCont() {
  return (
    <div className="content" style={{ overflow: "hidden" }}>
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
            List of Contractors
          </div>
        </h2>
      </div>
      <Grid container spacing={5}>
        <div className="fields">
          <Grid className="options" style={{ marginLeft: "10px" }}>
            <select className="sel" style={{ border: "disabled" }}>
              <option placeholder="Select Role">Select Role</option>
              <option value="Manager">Manager</option>
              <option value="Developers">Developers</option>
              <option value="Testers">Testers</option>
            </select>
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
            <Button className="button03_field" style={{ color: "white" }}>
              Add Now
            </Button>
          </Grid>
        </div>
      </Grid>

      <div className="mc_form">
        <TableContainer component={Paper}>
        <div>
          <Table sx={{ minWidth:500 }} size="medium">
            <TableHead style={{backgroundColor:'#F4F9FB'}} >
              <TableRow>
               
                <TableCell className="sno">S.No</TableCell>
                <TableCell className="thead">
                  Full Name
                  <img
                    src={GA}
                    alt=""
                    style={{ position: "absolute", left: "290px", top: "20px" }}
                    className="groupArrow"
                  />
                </TableCell>
                <TableCell className="thead">
                  CONT ID
                  <img
                    src={GA}
                    alt=""
                    style={{ position: "absolute", left: "550px", top: "20px" }}
                    className="groupArrow"
                  />
                </TableCell>
                <TableCell className="thead">
                  Phone Number
                  <img
                    src={GA}
                    alt=""
                    style={{ position: "absolute", left: "800px", top: "20px" }}
                    className="groupArrow"
                  />
                </TableCell>
                <TableCell className="thead">
                  Email Address
                  <img
                    src={GA}
                    alt=""
                    style={{
                      position: "absolute",
                      left: "1150px",
                      top: "20px",
                    }}
                    className="groupArrow"
                    
                  />
                </TableCell>
                <TableCell className="thead">
                  Address
                  <img
                    src={GA}
                    alt=""
                    style={{
                      position: "absolute",
                      left: "1460px",
                      top: "20px",
                    }}
                    className="groupArrow"
                  />
                </TableCell>
                <TableCell style={{marginRight:'180px'}} className="thead">Actions</TableCell>

              </TableRow>
            </TableHead>
            <TableBody >
              {forms.map((data) => (
                <TableRow >
                  <TableCell  >{data.id}</TableCell>
                  <TableCell >{data.name}</TableCell>
                  <TableCell >{data.CONT}</TableCell>
                  <TableCell > {data.Phone}</TableCell>
                  <TableCell >{data.email}</TableCell>
                  <TableCell >{data.address}</TableCell>
                  <TableCell>
                    <img src={view} alt="" />
                    <img src={pencil} alt="" style={{marginLeft:'10px'}}className="view_icon" />
                    <img src={del} alt="" style={{marginLeft:'10px'}} className="view_icon" />
                  </TableCell>
             
                </TableRow>
              ))}
             
            </TableBody>
          </Table>
          </div>
          <TablePagination style={{position:'absolute' , left:'1280px'}}
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}        
            />

          
        </TableContainer>
      </div>
  
    </div>
  );
}

export default ManCont;
