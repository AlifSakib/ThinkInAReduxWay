import { DDECREMENT, DINCREMENT } from "./actionTypes";

const dynamicCounterInitialState = {
  value: 0,
};

export const dynamicCounterReducer = (
  state = dynamicCounterInitialState,
  action
) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};
