import clsx from "clsx";
import { Span } from "../Span";
import styles from "./sort.module.scss";
import { ArrowIcon } from "../../icons";
import { useState, type FC, type ReactElement } from "react";

export const Sort: FC = (): ReactElement => {
  const [openSelector, setOpenSelector] = useState<boolean>(false);
  const [activeValue, setActiveValue] = useState<number>(0);

  const handleClick = (i: number): void => {
    setActiveValue(i);
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
          {activeValue === 0 && "популярности"}
          {activeValue === 1 && "цене"}
          {activeValue === 2 && "алфавиту"}
        </Span>

        <div
          className={clsx(
            styles.sortValuesBlock,
            openSelector && styles.sortValuesBlockActive
          )}
        >
          {["популярности", "цене", "алфавиту"].map((value, i) => (
            <Span
              key={i}
              className={clsx(
                styles.sortValuesBlockValue,
                activeValue === i && styles.sortValuesBlockValueSelected
              )}
              color={activeValue === i ? "orange" : "light-black"}
              onClick={() => handleClick(i)}
            >
              {value}
            </Span>
          ))}
        </div>
      </div>
    </div>
  );
};
