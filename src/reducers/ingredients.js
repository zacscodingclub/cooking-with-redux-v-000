import uuidV4  from 'uuid/v4';

export default function ingredients(state = [], action){
  switch (action.type) {
    case "CREATE_INGREDIENT":
      let newIngredient = Object.assign({}, action.payload, { id: uuidV4() });
      return state.concat(newIngredient);
    default:
      return state;
  }
}

export function unselectedIngredients(ingredients, selectedIds) {
  return ingredients.filter((ingredient) => {
    return selectedIds.includes(ingredient.id);
  });
}

export function findIngredientById(id, ingredients) {
  return ingredients.find((ingredient) => {
    return ingredient.id === id;
  });
}
