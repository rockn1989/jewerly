import { PromoBlockProps } from './PromoBlock.props';
import { Title } from '../Title';
import { SubscribeForm } from '../SubscribeForm';
import { CustomLink } from '../CustomLink';

import cn from 'classnames';
import styles from './PromoBlock.module.scss';

export const PromoBlock = ({ title, smallTitle, description, withForm = false, className, ...rest }: PromoBlockProps) => {
  return (
    <section className={cn(className, styles.promoSection)} {...rest}>
      <div className="container">
        <div className={styles.smallTitle}>{smallTitle}</div>
        <Title as='h2' text={title} className={styles.title} />

        {withForm ? (
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
            <CustomLink variant='white' slug='/catalog'>Наш салон</CustomLink>
          </div>
        )}
      </div>
    </section>
  )
}