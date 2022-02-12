import React from 'react';
import {
  AppBar, Toolbar, Typography, Grid
} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './TopBar.css';
import UserMenu from "./UserMenu"
const axios = require('axios').default;

const theme = createMuiTheme({
  palette: {
    secondary: {
       main: '#a6db82'
    }
  },
});

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.view
    }
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidUpdate() {
    if (this.state.view !== this.props.view) {
      this.setState({ view: this.props.view });
    }
  }

  logoutUser() {
    let type = this.props.currentUser.type;
    this.props.changeUser(undefined, "logout");
    axios.post("/api/" + type + "/logout", {}).then(
      () => {
        console.log("Successfully log out");
      }
    ).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar className="topbar"  style={{backgroundColor: 'transparent',boxShadow: 'none'}}>
          <Toolbar style={{backgroundColor: "rgb(245 242 242 / 61%)",
    backdropFilter: "blur(5px)",paddingLeft:"20px",paddingRight:"20px"}}>
            {this.props.currentUser ?
            (<Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              
            >
              <Grid item>
                <Typography variant="h5" style={{color:"grey",fontSize:"bold",}}>
                  Hi {this.props.currentUser.userName}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" style={{color:"grey",fontSize:"bold",}}>{this.state.view}</Typography> 
              </Grid>
              <Grid item>
                <UserMenu currentUser={this.props.currentUser} logoutUser={this.logoutUser} />
              </Grid>
            </Grid>) : (<div className='header'><img src='https://play-lh.googleusercontent.com/EjQcjCDfs4uI3RQf6bzwP0S8ZcN-pPVQ6eTf2vk0bSg-cPlbuvA1zSejxlQmaLpt7vk' alt='logo' style={{height:"40px",marginRight:"10px"}}/><Typography variant="h4" color="textSecondary" ><b>Yummiest</b></Typography></div>)}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default Topbar;