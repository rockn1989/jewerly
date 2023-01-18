import Image from 'next/image';
import { useWidth } from '../../hooks/useWidth';
import { BrandsList } from '../BrandsList';
import { CustomLink } from '../CustomLink';
import { Title } from '../Title';

import styles from './HeroBanner.module.scss';

const MockHeroBanner = {
  title: 'Долго, дорого, богато!',
  buttonText: 'Каталог изделий'
};

export const HeroBanner = () => {
  const width = useWidth();

  return (
    <section className={styles.heroBanner}>
      <Image
        width={1920}
        height={950}
        src="/images/content-img/hero-bg.png"
        alt='Главный баннер'
        className={styles.heroBannerImg}
      />
      <div className={styles.greetings}>
        <Title as='h2' text={MockHeroBanner.title} />
        <CustomLink variant='black' slug='/catalog'>{MockHeroBanner.buttonText}</CustomLink>
      </div>
      {(width && width >= 768) && (
        <div className="container">
          <BrandsList />
        </div>
      )}
    </section>
  )
}