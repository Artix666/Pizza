import clsx from "clsx";
import styles from "./basket-content.module.scss";
import { BasketIcon, CartIcon } from "../../icons";
import { Button } from "../Button";
import { Span } from "../Span";
import { PizzaCardBasket } from "../PizzaCardBasket";
import { Link } from "react-router";

export const BasketContent = () => {
  return (
    <div className={clsx(styles.basketContent)}>
      <div className={clsx(styles.basketContentHeading)}>
        <h1 className={clsx(styles.basketContentTitle)}>
          <CartIcon
            className={clsx(styles.basketContentHeadingIcon)}
            color="light-black"
            width={30}
            height={30}
          />
          Корзина
        </h1>
        <Button
          className={clsx(styles.basketContentClearBtn)}
          variant="transparent"
        >
          <BasketIcon />
          <Span className={clsx(styles.basketContentClearBtnText)} color="gray">
            Очистить корзину
          </Span>
        </Button>
      </div>
      <ul className={clsx(styles.basketContentList)}>
        {[...new Array(3)].map((_, i) => (
          <li key={i}>
            <PizzaCardBasket />
          </li>
        ))}
      </ul>
      <div className={clsx(styles.basketContentPaymentWrap)}>
        <div className={clsx(styles.basketContentCheckWrap)}>
          <Span className={clsx(styles.basketContentCheckText)}>
            Всего пицц:<b>3 шт.</b>
          </Span>
          <Span className={clsx(styles.basketContentCheckText)}>
            Сумма заказа:{" "}
            <b className={clsx(styles.basketContentCheckTextAccent)}>900 ₽</b>
          </Span>
        </div>
        <div className={clsx(styles.basketContentPaymentBtnWrap)}>
          <Link to='/' className={clsx(styles.basketContentPaymentHomeLink)}>
            <Button
              className={clsx(styles.basketContentPaymentBtn)}
              variant="transparent"
              bordered={true}
              borderColor="gray"
            >
              <Span
                className={clsx(styles.basketContentPaymentBtnText)}
                color="gray"
              >
                Вернуться назад
              </Span>
            </Button>
          </Link>
          <Button
            className={clsx(styles.basketContentPaymentBtn)}
            variant="filled"
            backgroundColor="orange"
          >
            <Span color="white">Оплатить сейчас</Span>
          </Button>
        </div>
      </div>
    </div>
  );
};
