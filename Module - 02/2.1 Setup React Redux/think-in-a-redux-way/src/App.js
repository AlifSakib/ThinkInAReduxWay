import { Provider } from "react-redux";
import Counter from "./components/Counter";
import DynamicHooksCounter from "./components/DynamicHooksCounter";
import HooksCounter from "./components/HooksCounter";
import VariableCounter from "./components/VariableCounter";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>
        <Counter name="alif" />
        <HooksCounter />
        <DynamicHooksCounter />
        <VariableCounter dynamic={true} />
        <VariableCounter />
      </div>
    </Provider>
  );
}
