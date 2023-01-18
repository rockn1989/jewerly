import { Title } from '../Title';
import { CardProduct } from '../CardProduct';
import { CustomLink } from '../CustomLink';

import cn from 'classnames';
import styles from './Blog.module.scss';

interface BlogProps {
  className?: string,
  blogCards: {
    title: string,
    image: string
  }[]
}

const MockBlog = {
  smallTitle: 'Полезные статьи',
  title: 'Лучшие советы по подбору дорогих подарков',
  button: 'читать наш блог'
}

export const Blog = ({ blogCards, className }: BlogProps) => {
  return (
    <section className={cn(className, styles.blogSection)}>
      <div className="container">
        <div className={styles.smallTitle}>{MockBlog.smallTitle}</div>
        <Title as="h2" text={MockBlog.title} />

        <ul className={styles.blogList}>
          {blogCards.map(({ title, image }, index) => {
            return <li key={index} className={styles.blogItem}>
              <CardProduct variant='vertical' title={title} image={image} />
            </li>
          })}
        </ul>

        <CustomLink slug='/catalog' variant="black">{MockBlog.button}</CustomLink>
      </div>
    </section>
  )
}