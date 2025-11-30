import clsx from "clsx";
import styles from "./basket-empty-content.module.scss";

export const BasketEmptyContent = () => {
  return (
    <div className={clsx(styles.basketEmptyContent)}>
      <h1 className={clsx(styles.basketEmptyContentTitle)}>
        Корзина пустая 😕
      </h1>
      <p className={clsx(styles.basketEmptyContentDesc)}>
        Вероятней всего, вы ещё не заказывали пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img
        className={clsx(styles.basketEmptyContentImage)}
        src="/images/empty-basket-bg.png"
        alt="Человек с корзиной"
        width={300}
        height={255}
      />
    </div>
  );
};
