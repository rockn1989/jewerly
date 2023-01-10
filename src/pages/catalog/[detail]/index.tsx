import Image from 'next/image';
import { GetStaticPropsContext } from "next";
import { API } from "../../../api/api";
import { Layout } from "../../../layout";
import axios from "axios";

import cn from 'classnames';
import styles from './detail.module.scss';
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button, PromoBlock, SeoBlock, Title } from "../../../components";

interface DetailPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  type: string;
  image: string;
  slug: string;
  price: number;
  description: string;
}

const MockDetailPage = {
  labels: {
    type: 'Категория',
    brand: 'Бренд'
  },
  buttons: {
    buy: 'Купить',
    add: 'Добавить в корзину'
  },
  seoTitle: 'Полное описание товара',
  promoBlock: {
    title: 'Эксклюзивная рассылка',
    smallTitle: 'Полезные советы и персональный предложения'
  }
}

const DetailPage = ({ title, type, image, price, description, className, ...props }: DetailPageProps) => {

  return (
    <Layout>
      <section className={cn(className, styles.detailPage)} {...props}>
        <div className="container">
          <div className={styles.product}>
            <div className={styles.productDescription}>
              <Title as="h1" text={`${type} ${title}`} className={styles.title} />

              <div className={styles.info}>
                <div className={styles.infoBar}><div>{MockDetailPage.labels.type}:</div> <div>{type}</div></div>
                <div className={styles.infoBar}><div>{MockDetailPage.labels.brand}:</div> <div>{title}</div></div>
              </div>

              <div className={styles.text}>{description}</div>
              <div className={styles.price}>{price}</div>

              <div className={styles.buttons}>
                <Button variant='black'>{MockDetailPage.buttons.buy}</Button>
                <Button variant='white' className={styles.buttonBorder}>{MockDetailPage.buttons.add}</Button>
              </div>
            </div>

            <div className={styles.productSlider}>
              <Image src={image} alt={title} width={540} height={430} className={styles.image} />
            </div>

          </div>
        </div>
      </section>

      <SeoBlock
        withTitle={true}
        title={MockDetailPage.seoTitle}
      />

      <PromoBlock
        title={MockDetailPage.promoBlock.title}
        smallTitle={MockDetailPage.promoBlock.smallTitle}
        withForm={true}
      />
    </Layout>
  )
}

export async function getStaticPaths() {

  const { data: catalogData } = await axios.get(API.catalogCards.url);
  const { catalogCards } = catalogData;

  const pathsCards = catalogCards.map(({ slug }: DetailPageProps) => {
    return {
      params: { detail: slug },
    }
  });


  return {
    paths: pathsCards,
    fallback: 'blocking'
  };
}

export async function getStaticProps({
  params
}: GetStaticPropsContext) {

  if (!params?.detail) throw new Error('no params detail');

  const { data: catalogData } = await axios.get(API.catalogCards.url);
  const { catalogCards } = catalogData;

  const card = catalogCards.find(({ slug }: DetailPageProps) => slug === params.detail);

  return {
    props: {
      ...card
    }
  }
}

export default DetailPage;