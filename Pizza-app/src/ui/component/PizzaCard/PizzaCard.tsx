import { useState, type FC, type ReactElement } from "react";
import styles from "./pizza-card.module.scss";
import clsx from "clsx";
import { Span } from "../Span";
import { Button } from "../Button";

interface PizzaCardProps {
  id: number;
  title: string;
  price: number;
}

export const PizzaCard: FC<PizzaCardProps> = ({
  title,
  price,
}): ReactElement => {
  const [countAddedPizza, setCountAddedPizza] = useState(0);
  return (
    <div className={clsx(styles.pizzaCard)}>
      <img
        className={clsx(styles.pizzaCardImage)}
        src="/images/pizza.png"
        alt="Пицца"
      />
      <Span className={clsx(styles.pizzaCardTitle)}>{title}</Span>
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
        <Span className={clsx(styles.pizzaCardPrice)}>от {price} ₽</Span>
        <Button
          className={clsx(styles.pizzaCardAddBtn)}
          type="transparent"
          backgroundColor="orange"
          onClick={() => setCountAddedPizza(countAddedPizza + 1)}
        >
          <Span className={clsx(styles.pizzaCardAddBtnText)} color="orange">
            + Добавить
          </Span>
          {countAddedPizza !== 0 && (
            <div className={clsx(styles.pizzaCardCountWrap)}>
              <Span className={clsx(styles.pizzaCardCount)} color="white">
                {countAddedPizza}
              </Span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};
