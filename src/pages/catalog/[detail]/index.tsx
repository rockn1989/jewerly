import Image from 'next/image';
import { GetStaticPropsContext } from "next";
import { API } from "../../../api/api";
import { Layout } from "../../../layout";
import axios from "axios";

import cn from 'classnames';
import styles from './detail.module.scss';
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { Button, Portal, PromoBlock, SeoBlock, Title } from "../../../components";

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

  const [visible, setIsVisible] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);

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
                <Button
                  variant='black'
                  onClick={() => setIsVisible(!visible)}
                >
                  {MockDetailPage.buttons.buy}
                </Button>

                <Button
                  variant='white'
                  className={styles.buttonBorder}
                  onClick={() => setNotification(!notification)}
                >
                  {MockDetailPage.buttons.add}
                </Button>
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

      {
        visible && (
          <Portal
            show={visible}
            onClickForClose={() => setIsVisible(!visible)}
            className={styles.pay}
          >
            <div>
              <Title
                as="h2"
                text={"Онлайн оплата временно не доступна"}
                className={styles.payTitle}
              />
              <p className={styles.payText}>Выбрать и оплатить товар вы можете в нашем фирменном магазине</p>
              <Button
                variant='black'
                className={styles.payButton}
                onClick={() => setIsVisible(!visible)}
              >Понятно</Button>
            </div>
          </Portal>
        )
      }

      {
        notification && (
          <Portal
            show={notification}
            onClickForClose={() => setNotification(!notification)}
            className={styles.notification}
          >
            <div>
              <Title
                as="h2"
                text={"Подвеска Dolce & Gabbara (1)"}
                className={styles.notificationTitle}
              />
              <p className={styles.notificationText}>Товар добавлен в корзину</p>
            </div>
          </Portal>
        )
      }
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

  if (!card) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      ...card
    }
  }
}

export default DetailPage;