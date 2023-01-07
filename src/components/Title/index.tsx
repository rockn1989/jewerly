
import { TitleProps } from './Title.props';
import styles from './Title.module.scss';
import cn from 'classnames';

export const Title = ({ as: Tag, text, className, ...props }: TitleProps) => {
  let variant = '';

  switch (Tag) {
    case 'h1': variant = `${styles.h1}`
      break;
    case 'h2': variant = `${styles.h2}`
      break;
    case 'h3': variant = `${styles.h3}`
      break;
    case 'h4': variant = `${styles.h4}`
      break;
    default:
      variant = `${styles.h1}`;
  }

  return (
    <Tag className={cn(className, variant)} {...props}>{text}</Tag>
  )
};