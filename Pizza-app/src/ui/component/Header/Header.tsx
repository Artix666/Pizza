import clsx from "clsx";
import styles from "./header.module.scss";

import { BasketIcon } from "../../icons";
import { Button } from "../Button";
import { Span } from "../Span";
import type { FC, ReactElement } from "react";
import { Container } from "../Container/Container";
import { Link } from "react-router";

export const Header: FC = (): ReactElement => {
  return (
    <header className={clsx(styles.header)}>
      <Container>
        <div className={clsx(styles.headerContent)}>
          <Link to="/">
            <img
              className={clsx(styles.headerLogo)}
              src="/images/logo.png"
              alt="Логотип"
              width={316}
              height={48}
            />
          </Link>
          <Link className={clsx(styles.headerBasketLink)} to="/basket">
            <div className={clsx(styles.headerBtnWrap)}>
              <Button
                className={clsx(styles.headerBtn)}
                variant="filled"
                backgroundColor="orange"
              >
                <Span className={clsx(styles.headerBtnText)} color="white">
                  520 ₽
                </Span>
                <Span className={clsx(styles.headerBtnText)} color="white">
                  <BasketIcon />3
                </Span>
              </Button>
            </div>
            <BasketIcon
              className={clsx(styles.headerBasketLinkAdaptive)}
              color="orange"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </Container>
    </header>
  );
};
