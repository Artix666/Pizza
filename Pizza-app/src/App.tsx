import { Header } from "./ui/component/Header";
import "./app.css";
import { Categories } from "./ui/component/Categories";

export function App() {
  return (
    <div className="container">
      <Header />
      <Categories />
    </div>
  );
}
