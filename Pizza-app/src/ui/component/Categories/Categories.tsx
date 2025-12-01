import clsx from "clsx";
import { Button } from "../Button";
import { Span } from "../Span";
import styles from "./categories.module.scss";
import {
  type Dispatch,
  type FC,
  type ReactElement,
  type SetStateAction,
} from "react";
import { Container } from "../Container/Container";
import { Sort } from "../Sort";
import type { SortTypeSchema } from "../../../pages/Home";

interface CategoriesProps {
  categoryId: number;
  setCategoryId: Dispatch<SetStateAction<number>>;
  sortType: SortTypeSchema;
  setSortType: Dispatch<SetStateAction<SortTypeSchema>>;
}

export const Categories: FC<CategoriesProps> = ({
  categoryId,
  setCategoryId,
  sortType,
  setSortType,
}): ReactElement => {
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
                    categoryId === i ? "light-black" : "snow-white"
                  }
                  onClick={() => setCategoryId(i)}
                >
                  <Span
                    className={clsx(styles.categoriesBtnText)}
                    color={categoryId === i ? "snow-white" : "light-black"}
                  >
                    {category}
                  </Span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Sort sortType={sortType} setSortType={setSortType} />
      </Container>
    </nav>
  );
};
