import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy,
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy,
  };
};

const resetCount = () => {
  return {
    type: 'RESET',
  };
};

const setCount = ({ count = 0 } = {}) => {
  return {
    type: 'SET',
    count,
  };
};

// Reducers
// 1. Reducers are pure function(that is they don't use anything from outside the function scope)
// 2. Never Change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      };
    case 'DECREMENT':
      const decrementBy = action.decrementBy > 1 ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    case 'SET':
      return {
        count: action.count,
      };
    case 'RESET':
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Increment Count
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 101 }));
