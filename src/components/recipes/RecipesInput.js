import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addRecipe } from '../../actions/recipes';
import { ConnectedAddIngredients } from '../ingredients/AddIngredients';

export class RecipesInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('recipe form submitted')
    let newRecipe = Object.assign({}, this.state, { ingredientIds: this.props.selectedIngredients });
    this.props.addRecipe(newRecipe);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
              type="text"
              placeholder="some words"
              onChange={this.handleNameChange}
          />

          <ConnectedAddIngredients />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedIngredients: state.recipeForm.ingredientIds
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRecipe: addRecipe
  }, dispatch);
}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)
