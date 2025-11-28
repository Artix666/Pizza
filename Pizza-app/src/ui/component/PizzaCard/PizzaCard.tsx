import type { FC, ReactElement } from "react";
import styles from "./pizza-card.module.scss";
import clsx from "clsx";
import { Span } from "../Span";
import { Button } from "../Button";

interface PizzaCardProps {
  id: number;
  title: string;
  price: number;
}

export const PizzaCard: FC<PizzaCardProps> = (pizza): ReactElement => {
  return (
    <div className={clsx(styles.pizzaCard)}>
      <img
        className={clsx(styles.pizzaCardImage)}
        src="/images/pizza.png"
        alt="Пицца"
      />
      <Span className={clsx(styles.pizzaCardTitle)}>{pizza.title}</Span>
      <div className={clsx(styles.pizzaCardBtnWrap)}>
        <div className={clsx(styles.pizzaCardBtnSelectors)}>
          <Button
            className={clsx(styles.pizzaCardBtn)}
            type="filled"
            backgroundColor="white"
          >
            <Span className={clsx(styles.pizzaCardBtnText)}>тонкое</Span>
          </Button>
          <Button className={clsx(styles.pizzaCardBtn)} type="transparent">
            <Span className={clsx(styles.pizzaCardBtnText)}>традиционное</Span>
          </Button>
        </div>
        <div className={clsx(styles.pizzaCardBtnSelectors)}>
          <Button
            className={clsx(styles.pizzaCardBtn)}
            type="filled"
            backgroundColor="white"
          >
            <Span className={clsx(styles.pizzaCardBtnText)}>26 см.</Span>
          </Button>
          <Button className={clsx(styles.pizzaCardBtn)} type="transparent">
            <Span className={clsx(styles.pizzaCardBtnText)}>30 см.</Span>
          </Button>
          <Button className={clsx(styles.pizzaCardBtn)} type="transparent">
            <Span className={clsx(styles.pizzaCardBtnText)}>40 см.</Span>
          </Button>
        </div>
      </div>
      <div className={clsx(styles.pizzaCardPriceWrap)}>
        <Span className={clsx(styles.pizzaCardPrice)}>от {pizza.price} ₽</Span>
        <Button
          className={clsx(styles.pizzaCardAddBtn)}
          type="transparent"
          backgroundColor="orange"
        >
          <Span className={clsx(styles.pizzaCardAddBtnText)} color="orange">
            + Добавить
          </Span>
          <div className={clsx(styles.pizzaCardCountWrap)}>
            <Span className={clsx(styles.pizzaCardCount)} color="white">
              2
            </Span>
          </div>
        </Button>
      </div>
    </div>
  );
};
