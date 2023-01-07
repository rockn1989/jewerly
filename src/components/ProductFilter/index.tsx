import { ProductFilterProps } from './ProductFilter.props';
import { Title } from '../Title';
import { useState } from 'react';
import { CardProduct } from '../CardProduct';

import cn from 'classnames';
import styles from './ProductFilter.module.scss';


const MockProductFilter = {
  title: 'Настоящая красота здесь!',
  smallTitle: 'К мероприятиям',
  tabsTitle: [
    'Свадьба',
    'МУЖУ',
    'жене',
    'партнеру',
    'коллекции',
    'редкость',
  ]
}

export const ProductFilter = ({ cards, className, ...props }: ProductFilterProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className={cn(className, styles.productFilter)} {...props}>
      <div className="container">
        <header className={styles.header}>
          <div>{MockProductFilter.smallTitle}</div>
          <Title as={'h2'} text={MockProductFilter.title} />
        </header>

        <ul className={styles.tabsList}>
          {MockProductFilter.tabsTitle.map((title, index) => {
            return <li key={index} className={styles.tabsItem}>
              <span
                className={cn(styles.tabsSpan, {
                  [styles.active]: index === activeTab,
                })}
                onClick={() => setActiveTab(index)}
              >{title}</span>
            </li>
          })}
        </ul>

        <ul className={styles.tabsContent}>
          {MockProductFilter.tabsTitle.map((_, index) => {
            return <li key={index} className={cn(styles.tabsContentItem, {
              [styles.visible]: activeTab === index
            })}>
              <ul className={styles.cardsList}>
                {cards.map(({ title, image }, index) => {
                  return <li key={index} className={styles.cardsListItem}>
                    <CardProduct title={title} image={image} />
                  </li>
                })}
              </ul>
            </li>
          })}

        </ul>
      </div>
    </section>
  )
};