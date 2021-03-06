import React from 'react';
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Divider
}
from '@material-ui/core';

class CustomerBar extends React.Component {
  render() {
    return (
      <div>
        <List component="nav">
        <ListItem button style={{border:"1px solid grey",color:"#006064", textAlign:"center"}}>
              <ListItemText primary={"Customer ToolBar"} />
            </ListItem>
            <Divider />
          <Link to={"/customer/home"} style={{textDecoration: 'none'}} className="link">
            <ListItem button style={{color:"#006064"}}>
              <ListItemText primary={"Home Page"} />
            </ListItem>
            <Divider />
          </Link>
          <Link to={"/customer/cart"} style={{textDecoration: 'none'}} className="link">
            <ListItem button style={{color:"#006064"}}>
              <ListItemText primary={"My Shopping Cart"} />
            </ListItem>
            <Divider />
          </Link>
          <Link to={"/customer/orders"} style={{textDecoration: 'none'}} className="link">
            <ListItem button style={{color:"#006064"}}>
              <ListItemText primary={"My Active Orders"} />
            </ListItem>
            <Divider />
          </Link>
          <Link to={"/customer/history"} style={{textDecoration: 'none'}} className="link">
            <ListItem button style={{color:"#006064"}}>
              <ListItemText primary={"My Order History"} />
            </ListItem>
            <Divider />
          </Link>
        </List>
      </div>
    );
  }
}

export default CustomerBar;