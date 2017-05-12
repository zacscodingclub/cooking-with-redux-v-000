import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedAddIngredient } from './AddIngredient';
import { unselectedIngredients, findIngredientById } from '../../reducers/ingredients';

export class AddIngredients extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render(){
    let ingredientsList = this.props.selectedIngredients && this.props.selectedIngredients.map((ingredient, index) => {
      if(ingredient) {
        return <li key={index}>{ingredient.name}</li>
      }
    });

    let addIngredientsList = this.props.unselectedIngredients && this.props.unselectedIngredients.map((ingredient, index) => {
      return <ConnectedAddIngredient key={index} {...ingredient} />
    });

    return(
      <div>
          <h2>Ingredients</h2>
          {ingredientsList}

          <h2>Add Ingredients</h2>
          {addIngredientsList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let selectedIngredients = state.recipeForm.ingredientIds.map((ingredientId) => {
    return findIngredientById(ingredientId, state.ingredients);
  })
  return {
    ingredients: state.ingredients || [],
    selectedIngredients: selectedIngredients || [],
    unselectedIngredients: unselectedIngredients(state.ingredients, state.recipeForm.ingredientIds) || []
  };
}

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients);
