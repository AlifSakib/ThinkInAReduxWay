const state = {
  value: 0,
};

function impure() {
  state.value = 6;
}

impure();
console.log(state.value);
