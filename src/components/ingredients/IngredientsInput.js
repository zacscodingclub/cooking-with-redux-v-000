import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addIngredient } from '../../actions/ingredients';

export class IngredientsInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      calories: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCaloriesChange = this.handleCaloriesChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleCaloriesChange(e) {
    this.setState({
      calories: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addIngredient(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
              type="text"
              id="name"
              placeholder="some name"
              onChange={this.handleNameChange}
          />
          <input
              type="text"
              id="calories"
              placeholder="some calories"
              onChange={this.handleCaloriesChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addIngredient: addIngredient
  }, dispatch);
}

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput);
