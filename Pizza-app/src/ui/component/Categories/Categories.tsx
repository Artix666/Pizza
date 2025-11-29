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
            { id: 1, title: "Все" },
            { id: 2, title: "Мясные" },
            { id: 3, title: "Вегетарианская" },
            { id: 4, title: "Гриль" },
            { id: 5, title: "Острые" },
            { id: 6, title: "Закрытые" },
          ].map((category) => (
            <li key={category.id}>
              <Button
                className={clsx(styles.categoriesBtn)}
                type="filled"
                backgroundColor={
                  activeCategory === category.id ? "light-black" : "light-gray"
                }
                onClick={() => handleCategoryClick(category.id)}
              >
                <Span
                  className={clsx(styles.categoriesBtnText)}
                  color={
                    activeCategory === category.id ? "white" : "light-black"
                  }
                >
                  {category.title}
                </Span>
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
