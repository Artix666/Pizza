import type { FC, ReactElement } from "react";
import { Span } from "../Span";
import styles from "./pizza-card-basket.module.scss";
import clsx from "clsx";
import { PlusBtnIcon } from "../../icons/PlusBtn";
import { MinusBtnIcon } from "../../icons/MinusBtn";
import { CrossBtnIcon } from "../../icons";

export const PizzaCardBasket: FC = (): ReactElement => {
  return (
    <div className={clsx(styles.pizzaCardBasket)}>
      <div className={clsx(styles.pizzaCardBasketInfoWrap)}>
        <img
          className={clsx(styles.pizzaCardBasketImg)}
          src="/images/pizza_1.png"
          alt="Пицца"
          width={80}
          height={80}
        />
        <div className={clsx(styles.pizzaCardBasketInfoTextWrap)}>
          <Span className={clsx(styles.pizzaCardBasketTitle)}>
            Сырный цыпленок
          </Span>
          <Span className={clsx(styles.pizzaCardBasketDesc)} color="dark-gray">
            тонкое тесто, 26 см.
          </Span>
        </div>
      </div>
      <div className={clsx(styles.pizzaCardBasketCountBtnWrap)}>
        <MinusBtnIcon className={clsx(styles.pizzaCardBasketCountBtn)} />
        <Span>2</Span>
        <PlusBtnIcon className={clsx(styles.pizzaCardBasketCountBtn)} />
      </div>
      <Span className={clsx(styles.pizzaCardBasketPrice)}>770 ₽</Span>
      <CrossBtnIcon className={clsx(styles.pizzaCardBasketDeleteBtn)} />
    </div>
  );
};
