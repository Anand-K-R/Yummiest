import React from 'react';
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Divider
}
from '@material-ui/core';

class RestaurantBar extends React.Component {
  render() {
    return (
      <div>
        <List component="nav">
        <ListItem button style={{background:"#29b6f6",color:"#006064",textAlign:"center",}}>
              <ListItemText primary={"Restaurant ToolBar"} />
            </ListItem>
            <Divider />
          <Link to={"/restaurant/home"} style={{textDecoration: 'none'}} className="link">
            <ListItem button style={{color:"white",}} >
              <ListItemText primary={"Home Page"} />
            </ListItem>
            <Divider />
          </Link>
          <Link to={"/restaurant/information"} style={{textDecoration: 'none'}} className="link">
            <ListItem button style={{color:"white",}}>
              <ListItemText primary={"Restaurant Information"} />
            </ListItem>
            <Divider />
          </Link>
          <Link to={"/restaurant/menu"} style={{textDecoration: 'none'}} className="link">
            <ListItem button style={{color:"white",}}>
              <ListItemText primary={"Menu"} />
            </ListItem>
            <Divider />
          </Link>
          <Link to={"/restaurant/order"} style={{textDecoration: 'none'}} className="link">
            <ListItem button style={{color:"white",}}>
              <ListItemText primary={"My Active Orders"} />
            </ListItem>
            <Divider />
          </Link>
          <Link to={"/restaurant/history"} style={{textDecoration: 'none'}} className="link">
            <ListItem button style={{color:"white",}}>
              <ListItemText primary={"My Order History"} />
            </ListItem>
            <Divider />
          </Link>
        </List>
      </div>
    );
  }
}

export default RestaurantBar;