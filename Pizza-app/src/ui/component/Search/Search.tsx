import { useContext, type FC, type ReactElement } from "react";
import styles from "./search.module.scss";
import clsx from "clsx";
import { CrossBtnIcon, SearchIcon } from "../../icons";
import { SearchContext } from "../../../App";

export const Search: FC = (): ReactElement => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

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
