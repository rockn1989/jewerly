import { Button } from "../Button"
import { SubscribeFormProps } from './SubscribeForm.props';

import styles from './SubscribeForm.module.scss';
import cn from 'classnames';

export const SubscribeForm = ({ className, ...props }: SubscribeFormProps) => {
  return (
    <form className={cn(className, styles.subscribeForm)} {...props}>
      <div className={styles.wrapper}>
        <input type="text" placeholder='Ваш E-mail' className={styles.input} />
        <Button variant='black' size='small' >Отправить</Button>
      </div>
    </form>
  )
}