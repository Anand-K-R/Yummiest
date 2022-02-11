import React from 'react';
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Divider
}
from '@material-ui/core';

class DriverBar extends React.Component {
  render() {
    return (
      <div>
        <List component="nav">
        <ListItem button style={{background:"#29b6f6",color:"#006064",textAlign:"center",}}>
              <ListItemText primary={"Driver ToolBar"} />
            </ListItem>
            <Divider />
          <Link to={"/driver/home"} style={{textDecoration: 'none'}} className="link">
            <ListItem button style={{color:"white",textDecoration:"none"}}>
              <ListItemText primary={"All Pending Orders"} />
            </ListItem>
            <Divider />
          </Link>
          <Link to={"/driver/order"} style={{textDecoration: 'none'}} className="link">
            <ListItem button style={{color:"white",textDecoration:"none"}}>
              <ListItemText primary={"My Active Order"} />
            </ListItem>
            <Divider />
          </Link>
          <Link to={"/driver/history"} style={{textDecoration: 'none'}} className="link">
            <ListItem button style={{color:"white",textDecoration:"none"}}>
              <ListItemText primary={"My Order History"} />
            </ListItem>
            <Divider />
          </Link>
        </List>
      </div>
    );
  }
}

export default DriverBar;