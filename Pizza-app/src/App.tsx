import { Header } from "./ui/component/Header";
import "./app.scss";
import { Categories } from "./ui/component/Categories";
import { PizzaList } from "./ui/component/PizzaList";

export function App() {
  return (
    <div className="layout">
      <Header />
      <Categories />
      <PizzaList />
    </div>
  );
}
