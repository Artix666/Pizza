import clsx from "clsx";
import { Span } from "../Span";
import styles from "./sort.module.scss";
import { ArrowIcon } from "../../icons";
import {
  useState,
  type Dispatch,
  type FC,
  type ReactElement,
  type SetStateAction,
} from "react";
import type { SortTypeSchema } from "../../../pages/Home";

interface SortProps {
  sortType: SortTypeSchema;
  setSortType: Dispatch<SetStateAction<SortTypeSchema>>;
}

export const Sort: FC<SortProps> = ({
  sortType,
  setSortType,
}): ReactElement => {
  const [openSelector, setOpenSelector] = useState<boolean>(false);

  const handleClick = (sortType: SortTypeSchema): void => {
    setSortType(sortType);
    setOpenSelector(!openSelector);
  };

  return (
    <div className={clsx(styles.sort)}>
      <Span className={clsx(styles.sortDesc)} color="light-black">
        <ArrowIcon className={clsx(styles.sortArrowIcon)} />
        <b>Сортировка по:</b>
      </Span>
      <div className={clsx(styles.sortSelector)}>
        <Span
          className={clsx(styles.sortSelectorValue)}
          onClick={() => setOpenSelector(!openSelector)}
        >
          {sortType.sortName}
        </Span>

        <div
          className={clsx(
            styles.sortValuesBlock,
            openSelector && styles.sortValuesBlockActive
          )}
        >
          {[
            { sortName: "популярности", sortProperty: "rating" },
            { sortName: "цене", sortProperty: "price" },
            { sortName: "алфавиту", sortProperty: "title" },
          ].map((obj, i) => (
            <Span
              key={i}
              className={clsx(
                styles.sortValuesBlockValue,
                sortType.sortProperty === obj.sortProperty &&
                  styles.sortValuesBlockValueSelected
              )}
              color={
                sortType.sortProperty === obj.sortProperty
                  ? "orange"
                  : "light-black"
              }
              onClick={() => handleClick(obj)}
            >
              {obj.sortName}
            </Span>
          ))}
        </div>
      </div>
    </div>
  );
};
