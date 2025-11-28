import clsx from "clsx";
import { PizzaCard } from "../PizzaCard";
import styles from "./pizzas-list.module.scss";
import { Container } from "../Container/Container";

const pizzas = [
  {
    id: 1,
    title: "Чизбургер-пицца",
    price: 395,
  },
  {
    id: 2,
    title: "Сырная",
    price: 450,
  },
  {
    id: 3,
    title: "Креветки по-азиатски",
    price: 290,
  },
  {
    id: 4,
    title: "Сырный цыпленок",
    price: 385,
  },
  {
    id: 5,
    title: "Чизбургер-пицца",
    price: 395,
  },
  {
    id: 6,
    title: "Сырная",
    price: 450,
  },
  {
    id: 7,
    title: "Креветки по-азиатски",
    price: 290,
  },
  {
    id: 8,
    title: "Сырный цыпленок",
    price: 385,
  },
];

export const PizzaList = () => {
  return (
    <section className={clsx(styles.pizzas)}>
      <Container>
        <h1 className={clsx(styles.pizzasTitle)}>Все пиццы</h1>
        <ul className={clsx(styles.pizzasList)}>
          {pizzas.map((pizza) => (
            <ul key={pizza.id}>
              <PizzaCard {...pizza} />
            </ul>
          ))}
        </ul>
      </Container>
    </section>
  );
};
