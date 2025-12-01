import type { Dispatch, FC, ReactElement, SetStateAction } from "react";
import styles from "./search.module.scss";
import clsx from "clsx";
import { CrossBtnIcon, SearchIcon } from "../../icons";

interface SearchProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const Search: FC<SearchProps> = ({
  searchValue,
  setSearchValue,
}): ReactElement => {
  return (
    <div className={clsx(styles.search)}>
      <SearchIcon className={clsx(styles.searchIcon)} />
      <input
        className={clsx(styles.searchField)}
        type="text"
        placeholder="Поиск"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <CrossBtnIcon
          className={clsx(styles.searchIconClear)}
          width={20}
          height={20}
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
};
