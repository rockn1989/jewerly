import { SearchProps } from "./Search.props"
import { SearchIcon } from "../Icons";

import cn from 'classnames';
import styles from './Search.module.scss';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  return (
    <form className={cn(className, styles.searchForm)} {...props}>
      <input type="text" placeholder="Поиск" className={styles.input} />
      <button type="submit" className={styles.button}>
        <SearchIcon className={styles.icon} />
      </button>
    </form>
  )
}