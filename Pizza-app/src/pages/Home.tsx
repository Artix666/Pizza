import { useEffect, useState } from "react";
import { Categories } from "../ui/component/Categories";
import { PizzaList } from "../ui/component/PizzaList";

export interface Pizza {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  types: string[];
  sizes: string[];
}
export interface SortTypeSchema {
  sortName: string;
  sortProperty: string;
}

export const Home = () => {
  const [items, setItems] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [sortType, setSortType] = useState<SortTypeSchema>({
    sortName: "популярности",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    fetch(
      `https://692ae25c7615a15ff24dfd05.mockapi.io/items?${category}&sortBy=${sortType.sortProperty}&order=desc`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json as Pizza[]);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <Categories
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        sortType={sortType}
        setSortType={setSortType}
      />
      <PizzaList items={items} isLoading={isLoading} />
    </>
  );
};
