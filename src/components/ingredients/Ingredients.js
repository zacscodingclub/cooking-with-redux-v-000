import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Ingredients extends Component {
  render(){
    let ingredientsList = this.props.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient.name}</li>
    });

    return(
        <div>
          <ul>
            {ingredientsList}
          </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ingredients: state.ingredients };
}

export const ConnectedIngredients = connect(mapStateToProps)(Ingredients);
