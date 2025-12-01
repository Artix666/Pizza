import { useState, type FC, type ReactElement } from "react";
import styles from "./pizza-card.module.scss";
import clsx from "clsx";
import { Span } from "../Span";
import { Button } from "../Button";
import type { Pizza } from "../PizzaList";

type PizzaCardProps = Pizza;

export const PizzaCard: FC<PizzaCardProps> = ({
  title,
  imgUrl,
  price,
  types,
  sizes,
}): ReactElement => {
  const [countAddedPizza, setCountAddedPizza] = useState<number>(0);
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);
  return (
    <div className={clsx(styles.pizzaCard)}>
      <img className={clsx(styles.pizzaCardImage)} src={imgUrl} alt="Пицца" />
      <Span className={clsx(styles.pizzaCardTitle)}>{title}</Span>
      <div className={clsx(styles.pizzaCardBtnWrap)}>
        <div className={clsx(styles.pizzaCardBtnSelectors)}>
          {types.map((type, i) => (
            <Button
              key={i}
              className={clsx(
                styles.pizzaCardBtn,
                i === activeType && styles.pizzaCardBtnActive
              )}
              variant={i === activeType ? "filled" : "transparent"}
              backgroundColor="white"
              onClick={() => setActiveType(i)}
            >
              <Span className={clsx(styles.pizzaCardBtnText)}>{type}</Span>
            </Button>
          ))}
        </div>
        <div className={clsx(styles.pizzaCardBtnSelectors)}>
          {sizes.map((size, i) => (
            <Button
              key={i}
              className={clsx(
                styles.pizzaCardBtn,
                i === activeSize && styles.pizzaCardBtnActive
              )}
              variant={i === activeSize ? "filled" : "transparent"}
              backgroundColor="white"
              onClick={() => setActiveSize(i)}
            >
              <Span className={clsx(styles.pizzaCardBtnText)}>{size}</Span>
            </Button>
          ))}
        </div>
      </div>
      <div className={clsx(styles.pizzaCardPriceWrap)}>
        <Span className={clsx(styles.pizzaCardPrice)}>от {price} ₽</Span>
        <Button
          className={clsx(styles.pizzaCardAddBtn)}
          variant="transparent"
          bordered={true}
          borderColor="orange"
          onClick={() => setCountAddedPizza(countAddedPizza + 1)}
        >
          <Span className={clsx(styles.pizzaCardAddBtnText)} color="orange">
            + Добавить
          </Span>
          <Span
            className={clsx(styles.pizzaCardAddBtnTextAdaptive)}
            color="orange"
          >
            Добавить
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
