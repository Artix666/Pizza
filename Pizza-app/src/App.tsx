import { Header } from "./ui/component/Header";
import { Home } from "./pages/Home";
import { Basket } from "./pages/Basket";
import { NotFound } from "./pages/NotFound";
import { Route, Routes } from "react-router";
import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export type SearchContextType = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType>({
  searchValue: "",
  setSearchValue: () => {},
});

export function App() {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  return (
    <div className="layout">
      <SearchContext.Provider
        value={{
          searchValue,
          setSearchValue,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}
