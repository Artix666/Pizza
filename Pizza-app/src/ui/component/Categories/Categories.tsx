import clsx from "clsx";
import { Button } from "../Button";
import { Span } from "../Span";
import styles from "./categories.module.scss";
import { useState, type FC, type ReactElement } from "react";
import { Container } from "../Container/Container";
import { Sort } from "../Sort";

export const Categories: FC = (): ReactElement => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <nav className={clsx(styles.categories)}>
      <Container className={clsx(styles.categoriesContainer)}>
        <div className={clsx(styles.categoriesListWrap)}>
          <ul className={clsx(styles.categoriesList)}>
          {[
            "Все",
            "Мясные",
            "Вегетарианская",
            "Гриль",
            "Острые",
            "Закрытые",
          ].map((category, i) => (
            <li key={i}>
              <Button
                className={clsx(styles.categoriesBtn)}
                variant="filled"
                backgroundColor={
                  activeCategory === i ? "light-black" : "light-gray"
                }
                onClick={() => setActiveCategory(i)}
              >
                <Span
                  className={clsx(styles.categoriesBtnText)}
                  color={activeCategory === i ? "white" : "light-black"}
                >
                  {category}
                </Span>
              </Button>
            </li>
          ))}
        </ul>
        </div>
        <Sort />
      </Container>
    </nav>
  );
};
