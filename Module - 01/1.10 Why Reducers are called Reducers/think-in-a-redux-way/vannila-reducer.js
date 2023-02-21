const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((previousResult, currentValue) => {
  return previousResult + currentValue;
}, 0);

console.log(result);

const actions = [
  {
    type: "increment",
    payload: 1,
  },
  {
    type: "increment",
    payload: 1,
  },
  {
    type: "increment",
    payload: 1,
  },
  {
    type: "decrement",
    payload: 1,
  },
];

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - action.payload,
    };
  }
};

const finalResult = actions.reduce(counterReducer, initialState);
console.log(finalResult);
