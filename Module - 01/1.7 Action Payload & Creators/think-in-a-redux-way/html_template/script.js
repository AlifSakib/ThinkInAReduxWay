// select dom elements
const counterEL = document.getElementById("counter");
const incrementEL = document.getElementById("increment");
const decrementEL = document.getElementById("decrement");

//initial state

const initialState = {
  value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
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
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEL.innerText = state.value.toString();
};

render();

store.subscribe(render);

// button click listerners

incrementEL.addEventListener("click", () => {
  store.dispatch({
    type: "increment", // mandatory
    payload: 5,
  });
});

decrementEL.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
    payload: 2,
  });
});
