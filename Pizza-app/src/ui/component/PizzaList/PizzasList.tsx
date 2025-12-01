import clsx from "clsx";
import { PizzaCard, PizzaCardSkeleton } from "../PizzaCard";
import styles from "./pizzas-list.module.scss";
import { Container } from "../Container/Container";
import type { Pizza } from "../../../pages/Home";
import type { FC } from "react";
interface PizzaListProps {
  items: Pizza[];
  isLoading: boolean;
}

export const PizzaList: FC<PizzaListProps> = ({ items, isLoading }) => {
  return (
    <section className={clsx(styles.pizzas)}>
      <Container>
        <h1 className={clsx(styles.pizzasTitle)}>Все пиццы</h1>
        <ul className={clsx(styles.pizzasList)}>
          {isLoading
            ? [...new Array(items.length)].map((_, i) => <PizzaCardSkeleton key={i} />)
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
