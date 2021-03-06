import React from 'react';

import {
  Typography,
  Card,
  IconButton,
  CardActions,
  Grid
      } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import "./Card.css";
const axios = require('axios').default;

class DishCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number : 0
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.removeDish = this.removeDish.bind(this);
  }

  handleAdd() {
    this.setState({number: this.state.number + 1});
    this.props.addDish("add", this.props.dish);
  }

  handleMinus() {
    this.setState({number: this.state.number - 1});
    this.props.addDish("minus", this.props.dish);
  }

  removeDish() {
    axios.post("/api/restaurant/removeDish", {
      restaurantId : this.props.currentUser.id,
      dish : this.props.dish
    }).then(
      response => {
        this.props.getAllDishes();
      }
    ).catch(err => console.log(err));
  }

  render() {
    return this.props.dish && this.props.currentUser ? (
      <Card >
        <img className="dishCardImage" style={{objectFit:"cover"}} src= {this.props.dish.imageUrl} alt={this.props.dish.dishName} />

        <div>
          <div className="dish_Details">
            <Typography variant="h5">{this.props.dish.dishName}</Typography>
            <Typography variant="h6">{"₹ " + this.props.dish.price}</Typography>
          </div>
          <CardActions style={{backgroundColor: "#649ed838",height: "12px",padding:"15px"}}>
            {this.props.currentUser.type !== "restaurant" ?
                <Grid container justify="space-evenly" alignItems="center">
                  <IconButton disabled={this.state.number === 0} onClick={this.handleMinus}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="h6">{this.state.number}</Typography>
                  <IconButton onClick={this.handleAdd}>
                    <AddIcon />
                  </IconButton>
                </Grid> :
                <Grid container justify="center" alignItems="center">
                  <IconButton onClick={this.removeDish}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
            }
          </CardActions>
        </div>
      </Card>
    ) : <div />;
  }
}

export default DishCard;