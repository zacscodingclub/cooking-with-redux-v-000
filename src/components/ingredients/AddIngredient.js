import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { recipeFormAddIngredient } from '../../actions/ingredients';

export class AddIngredient extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick() {
    this.props.recipeFormAddIngredient(this.props.id);
  }

  render(){
    return(
      <button onClick={this.handleOnClick}>{this.props.name}</button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    recipeFormAddIngredient: recipeFormAddIngredient
  }, dispatch);
}

export const ConnectedAddIngredient = connect(null, mapDispatchToProps)(AddIngredient);
