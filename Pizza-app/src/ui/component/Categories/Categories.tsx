import clsx from "clsx";
import { Button } from "../Button";
import { Span } from "../Span";
import styles from "./categories.module.scss";
import { useState, type FC, type ReactElement } from "react";

export const Categories: FC = (): ReactElement => {
  const [active, setActive] = useState(false);
  return (
    <div className={clsx(styles.categories)}>
      <ul className={clsx(styles.categoriesList)}>
        <li>
          <Button
            className={clsx(styles.categoriesBtn)}
            type="filled"
            backgroundColor={active ? "light-black" : "light-gray"}
            onClick={() => setActive(!active)}
          >
            <Span
              className={clsx(styles.categoriesBtnText)}
              color={active ? "white" : "light-black"}
            >
              Все
            </Span>
          </Button>
        </li>
        <li>
          <Button
            className={clsx(styles.categoriesBtn)}
            type="filled"
            backgroundColor={active ? "light-black" : "light-gray"}
            onClick={() => setActive(!active)}
          >
            <Span
              className={clsx(styles.categoriesBtnText)}
              color="light-black"
            >
              Мясные
            </Span>
          </Button>
        </li>
        <li>
          <Button
            className={clsx(styles.categoriesBtn)}
            type="filled"
            backgroundColor={active ? "light-black" : "light-gray"}
            onClick={() => setActive(!active)}
          >
            <Span
              className={clsx(styles.categoriesBtnText)}
              color="light-black"
            >
              Вегетарианская
            </Span>
          </Button>
        </li>
        <li>
          <Button
            className={clsx(styles.categoriesBtn)}
            type="filled"
            backgroundColor={active ? "light-black" : "light-gray"}
            onClick={() => setActive(!active)}
          >
            <Span
              className={clsx(styles.categoriesBtnText)}
              color="light-black"
            >
              Гриль
            </Span>
          </Button>
        </li>
        <li>
          <Button
            className={clsx(styles.categoriesBtn)}
            type="filled"
            backgroundColor={active ? "light-black" : "light-gray"}
            onClick={() => setActive(!active)}
          >
            <Span
              className={clsx(styles.categoriesBtnText)}
              color="light-black"
            >
              Острые
            </Span>
          </Button>
        </li>
        <li>
          <Button
            className={clsx(styles.categoriesBtn)}
            type="filled"
            backgroundColor={active ? "light-black" : "light-gray"}
            onClick={() => setActive(!active)}
          >
            <Span
              className={clsx(styles.categoriesBtnText)}
              color="light-black"
            >
              Закрытые
            </Span>
          </Button>
        </li>
      </ul>
    </div>
  );
};
