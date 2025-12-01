import clsx from "clsx";
import styles from "./header.module.scss";

import { CartIcon } from "../../icons";
import { Button } from "../Button";
import { Span } from "../Span";
import type { Dispatch, FC, ReactElement, SetStateAction } from "react";
import { Container } from "../Container/Container";
import { Link } from "react-router";
import { Search } from "../Search";

interface HeaderProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const Header: FC<HeaderProps> = ({
  searchValue,
  setSearchValue,
}): ReactElement => {
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
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
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
                  <CartIcon />3
                </Span>
              </Button>
            </div>
            <CartIcon
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
