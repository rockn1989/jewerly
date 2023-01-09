import Image from 'next/image';
import { SeoBlockProps } from './SeoBlock.props';
import { Button } from '../Button';

import cn from 'classnames';
import styles from './SeoBlock.module.scss';
import { useState } from 'react';

const MockSeoBlock = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo porttitor erat. Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.',
  buttonText: 'Читать полностью',
  adv: [
    {
      image: '/images/icon-svg/drive.svg',
      label: 'Бесплатная доставка',
      width: 62,
      height: 41
    },
    {
      image: '/images/icon-svg/check-list.svg',
      label: 'Индивидуальный дизайн',
      width: 44,
      height: 70
    },
    {
      image: '/images/icon-svg/for-free.svg',
      label: 'Бесплатная примерка',
      width: 70,
      height: 70
    },
    {
      image: '/images/icon-svg/for-client.svg',
      label: 'Личный подход',
      width: 70,
      height: 70
    }
  ]
}

export const SeoBlock = ({ className, ...props }: SeoBlockProps) => {
  const [show, setIsShow] = useState<boolean>(false);

  return (
    <section className={cn(className, styles.seoBlock)} {...props}>

      <div className={styles.description}>
        <div className={styles.seoText}>
          <div className={cn(styles.shortText, {
            [styles.showed]: show
          })}>{MockSeoBlock.text}</div>
          <Button
            onClick={() => setIsShow(!show)}
            className={styles.seoButton}>{MockSeoBlock.buttonText}</Button>
        </div>
        <div className={styles.seoAdv}>
          {MockSeoBlock.adv.map(({ image, label, width, height }, index) => {
            return <div key={index}>
              <div className={styles.advImage}>
                <Image src={image} alt={label} width={width} height={height} />
              </div>
              <div className={styles.advLabel}>{label}</div>
            </div>
          })}
        </div>
      </div>

    </section>
  )
}