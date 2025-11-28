import clsx from "clsx";
import { Button } from "../Button";
import { Span } from "../Span";
import styles from "./categories.module.scss";
import { useState, type FC, type ReactElement } from "react";
import { Container } from "../Container/Container";

export const Categories: FC = (): ReactElement => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <nav className={clsx(styles.categories)}>
      <Container className={clsx(styles.categoriesContainer)}>
        <ul className={clsx(styles.categoriesList)}>
          <li>
            <Button
              className={clsx(styles.categoriesBtn, {})}
              type="filled"
              backgroundColor={
                activeCategory === "all" ? "light-black" : "light-gray"
              }
              onClick={() => handleCategoryClick("all")}
            >
              <Span
                className={clsx(styles.categoriesBtnText)}
                color={activeCategory === "all" ? "white" : "light-black"}
              >
                Все
              </Span>
            </Button>
          </li>
          <li>
            <Button
              className={clsx(styles.categoriesBtn, {})}
              type="filled"
              backgroundColor={
                activeCategory === "meat" ? "light-black" : "light-gray"
              }
              onClick={() => handleCategoryClick("meat")}
            >
              <Span
                className={clsx(styles.categoriesBtnText)}
                color={activeCategory === "meat" ? "white" : "light-black"}
              >
                Мясные
              </Span>
            </Button>
          </li>
          <li>
            <Button
              className={clsx(styles.categoriesBtn, {})}
              type="filled"
              backgroundColor={
                activeCategory === "vegan" ? "light-black" : "light-gray"
              }
              onClick={() => handleCategoryClick("vegan")}
            >
              <Span
                className={clsx(styles.categoriesBtnText)}
                color={activeCategory === "vegan" ? "white" : "light-black"}
              >
                Вегетарианская
              </Span>
            </Button>
          </li>
          <li>
            <Button
              className={clsx(styles.categoriesBtn, {})}
              type="filled"
              backgroundColor={
                activeCategory === "grill" ? "light-black" : "light-gray"
              }
              onClick={() => handleCategoryClick("grill")}
            >
              <Span
                className={clsx(styles.categoriesBtnText)}
                color={activeCategory === "grill" ? "white" : "light-black"}
              >
                Гриль
              </Span>
            </Button>
          </li>
          <li>
            <Button
              className={clsx(styles.categoriesBtn, {})}
              type="filled"
              backgroundColor={
                activeCategory === "sharp" ? "light-black" : "light-gray"
              }
              onClick={() => handleCategoryClick("sharp")}
            >
              <Span
                className={clsx(styles.categoriesBtnText)}
                color={activeCategory === "sharp" ? "white" : "light-black"}
              >
                Острые
              </Span>
            </Button>
          </li>
          <li>
            <Button
              className={clsx(styles.categoriesBtn, {})}
              type="filled"
              backgroundColor={
                activeCategory === "close" ? "light-black" : "light-gray"
              }
              onClick={() => handleCategoryClick("close")}
            >
              <Span
                className={clsx(styles.categoriesBtnText)}
                color={activeCategory === "close" ? "white" : "light-black"}
              >
                Закрытые
              </Span>
            </Button>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
