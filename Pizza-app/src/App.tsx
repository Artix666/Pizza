import { Header } from "./ui/component/Header";
import { Home } from "./pages/Home";
import { Basket } from "./pages/Basket";
import { NotFound } from "./pages/NotFound";
import { Route, Routes } from "react-router";

export function App() {
  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
