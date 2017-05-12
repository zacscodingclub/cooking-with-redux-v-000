import uuidV4  from 'uuid/v4';

export default function recipes(state = [], action){
  switch (action.type) {
    case "ADD_RECIPE":
      let newRecipe = Object.assign({}, action.payload, { id: uuidV4() });
      return state.concat(newRecipe);
    default:
      return state;
  }
}
