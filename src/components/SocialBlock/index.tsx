import Image from 'next/image';
import Link from 'next/link';
import { SocialBlockProps } from './SocialBlock.props';
import { Title } from '../Title';

import cn from 'classnames';
import styles from './SocialBlock.module.scss';


export const SocialBlock = ({ posts, className, ...props }: SocialBlockProps) => {
  return (
    <section className={styles.socialBlock} {...props}>
      <div className="container">
        <Title as="h2" text="Мы в социальных сетях" />

        <ul className={cn(className, styles.socialList)}>
          {posts.map(({ image, video }, index) => {
            return <li key={index} className={cn(styles.socialItem, {
              [styles.large]: index === 0 || index === (posts.length - 1)
            })}>

              <article className={cn(styles.socialPost, {
                [styles.video]: video && video === true,
              })}>
                <Link href="/catalog" className={styles.socialPostLink}></Link>
                <Image className={styles.socialPostImg} src={image} alt='post-image' width={278} height={300} />
              </article>

            </li>
          })}
        </ul>
      </div>
    </section>
  )
}