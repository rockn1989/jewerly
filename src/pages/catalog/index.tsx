import { useState } from "react";
import { Layout } from "../../layout";
import { CardCatalog } from "../../components/CardCatalog";
import { Button, PromoBlock } from "../../components";
import { API } from "../../api/api";
import { CatalogPageProps } from "./catalog.props";
import axios from "axios";

import styles from './catalog.module.scss';

const MockPromoBlock = {
  title: 'Эксклюзивная рассылка',
  smallTitle: 'Полезные советы и персональный предложения',
}

const Catalog = ({ catalogCards }: CatalogPageProps) => {
  const [showCard, setShowCard] = useState<number>(6);

  const cardsSlice = catalogCards.slice(0, showCard);
  const rows = cardsSlice.length;

  const handleShowMore = () => {
    setShowCard((value) => value + 3);
  };

  return (
    <Layout>
      <section className={styles.catalog}>

        <div className="container">
          <div className={styles.catalogList}>
            {Array(rows).fill('').map((_, index) => {
              if (index % 3 == 0) {
                return <div className={styles.catalogRow} key={index}>
                  {cardsSlice.slice(index, index + 3).map((card, index) => {
                    return (
                      <CardCatalog {...card} key={index} />
                    )
                  })}
                </div>
              }
            })}

          </div>

          {
            catalogCards &&
            catalogCards.length > 6 &&
            catalogCards.length !== cardsSlice.length && (
              <Button
                variant="black"
                className={styles.catalogButton}
                onClick={() => handleShowMore()}
              >
                Покажите еще
              </Button>
            )}
        </div>

      </section>

      <PromoBlock
        title={MockPromoBlock.title}
        smallTitle={MockPromoBlock.smallTitle}
        isForm={true}
      />
    </Layout>
  )
}

export async function getStaticProps() {

  const { data: catalogData } = await axios.get(API.catalogCards.url);
  const { catalogCards } = catalogData;
  console.log(catalogCards)

  return {
    props: {
      catalogCards
    }
  }
}



export default Catalog;