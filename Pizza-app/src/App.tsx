import { Header } from "./ui/component/Header";
import { Home } from "./pages/Home";
import { Basket } from "./pages/Basket";
import { NotFound } from "./pages/NotFound";
import { Route, Routes } from "react-router";
import { useState } from "react";

export function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="layout">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
