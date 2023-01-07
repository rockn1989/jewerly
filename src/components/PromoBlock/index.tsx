
import { PromoBlockProps } from './PromoBlock.props';
import styles from './PromoBlock.module.scss';
import cn from 'classnames';
import { Title } from '../Title';
import { Button } from '../Button';
import { SubscribeForm } from '../SubscribeForm';

export const PromoBlock = ({ title, smallTitle, description, isForm = false, className, ...props }: PromoBlockProps) => {
  return (
    <section className={cn(className, styles.promoSection)} {...props}>
      <div className="container">
        <div className={styles.smallTitle}>{smallTitle}</div>
        <Title as='h2' text={title} className={styles.title} />

        {isForm ? (
          <div className={styles.formBar}>
            <ul className={styles.advList}>
              <li className={styles.advItem}>Личный менеджер</li>
              <li className={styles.advItem}>Доставка и оформление</li>
              <li className={styles.advItem}>Индивидуальный дизайн</li>
            </ul>

            <SubscribeForm />
          </div>
        ) : (
          <div className={styles.description}>
            <div className={styles.text}>{description}</div>
            <Button variant='white'>Наш салон</Button>
          </div>
        )}
      </div>
    </section>
  )
}