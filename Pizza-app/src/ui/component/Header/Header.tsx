import clsx from "clsx";
import styles from "./header.module.scss";

import { BasketIcon } from "../../icons";
import { Button } from "../Button";
import { Span } from "../Span";
import type { FC, ReactElement } from "react";

export const Header: FC = (): ReactElement => {
  return (
    <div className={clsx(styles.header)}>
      <img
        className={clsx(styles.headerLogo)}
        src="/images/logo.png"
        alt="Логотип"
        width={316}
        height={48}
      />
      <div className={clsx(styles.headerBtnWrap)}>
        <Button
          className={clsx(styles.headerBtn)}
          type="filled"
          backgroundColor="orange"
        >
          <Span color="white">520 ₽</Span>
          <Span color="white">|</Span>
          <Span className={clsx(styles.headerBtnText)} color="white">
            <BasketIcon />3
          </Span>
        </Button>
      </div>
    </div>
  );
};
