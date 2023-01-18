import { SearchProps } from "./Search.props"
import { SearchIcon } from "../Icons";

import cn from 'classnames';
import styles from './Search.module.scss';

export const Search = ({ className, ...rest }: SearchProps): JSX.Element => {
  return (
    <form className={cn(className, styles.searchForm)} {...rest}>
      <input type="text" placeholder="Поиск" className={styles.input} />
      <button type="submit" className={styles.button}>
        <SearchIcon className={styles.icon} />
      </button>
    </form>
  )
}