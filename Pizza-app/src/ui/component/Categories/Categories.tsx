import clsx from "clsx";
import { Button } from "../Button";
import { Span } from "../Span";
import styles from "./categories.module.scss";
import { useState, type FC, type ReactElement } from "react";
import { Container } from "../Container/Container";

export const Categories: FC = (): ReactElement => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const handleCategoryClick = (id: number): void => {
    setActiveCategory(id);
  };

  return (
    <nav className={clsx(styles.categories)}>
      <Container className={clsx(styles.categoriesContainer)}>
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
                type="filled"
                backgroundColor={
                  activeCategory === i ? "light-black" : "light-gray"
                }
                onClick={() => handleCategoryClick(i)}
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
      </Container>
    </nav>
  );
};
