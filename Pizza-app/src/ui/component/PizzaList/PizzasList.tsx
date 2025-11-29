import clsx from "clsx";
import { PizzaCard, PizzaCardSkeleton } from "../PizzaCard";
import styles from "./pizzas-list.module.scss";
import { Container } from "../Container/Container";
import { useEffect, useState } from "react";

export interface Pizza {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  types: string[];
  sizes: string[];
}

export const PizzaList = () => {
  const [items, setItems] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://692ae25c7615a15ff24dfd05.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json as Pizza[]);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className={clsx(styles.pizzas)}>
      <Container>
        <h1 className={clsx(styles.pizzasTitle)}>Все пиццы</h1>
        <ul className={clsx(styles.pizzasList)}>
          {isLoading
            ? [...new Array(8)].map((_, i) => <PizzaCardSkeleton key={i} />)
            : items.map((item) => (
                <li key={item.id}>
                  <PizzaCard {...item} />
                </li>
              ))}
        </ul>
      </Container>
    </section>
  );
};
