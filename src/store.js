import { createStore, combineReducers } from 'redux';

const CARD = {
  ADD_GOOD: 'CARD.ADD_GOOD',
  REMOVE_GOOD: 'CARD.REMOVE_GOOD',
}

const cardReducer = (state = {}, action) => {
  switch (action.type) {
    case CARD.ADD_GOOD: {
      const { id, quantity } = action;
      const count = quantity + (state[id] || 0);

      return {
        ...state,
        [id]: count >= 0 ? count : 0,
      }
    }
    case CARD.REMOVE_GOOD: {
      const { id } = action;

      const newState = {... state};
      delete newState[id];

      return newState;
    }
  }
  return state;
}

const rootReducer = combineReducers({
  card: cardReducer,
});

const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const actionAddGood = (id, quantity) => {
  return {
    type: CARD.ADD_GOOD,
    id: id,
    quantity: +quantity,
  }
}

export const actionRemoveGood = (id) => {
  return {
    type: CARD.REMOVE_GOOD,
    id: id,
  }
}

export default store;