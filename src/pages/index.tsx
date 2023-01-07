import { ProductFilter, PromoBlock } from '../components';
import { HeroBanner } from '../components/HeroBanner';

import { Layout } from '../layout';
import axios from 'axios';
import { API } from '../api/api';

const MockPromoBlockOne = {
  title: 'Посетите наши салоны в Москве',
  smallTitle: 'Не знаете, что выбрать?',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.'
}

const MockPromoBlockTwo = {
  title: 'Эксклюзивная рассылка',
  smallTitle: 'Полезные советы и персональный предложения',
}

interface HomeProps {
  productFilter: {
    title: string,
    image: string
  }[]
}

export default function Home({ productFilter }: HomeProps) {

  return (
    <Layout>
      <HeroBanner />
      <ProductFilter cards={productFilter} />
      <PromoBlock
        title={MockPromoBlockOne.title}
        smallTitle={MockPromoBlockOne.smallTitle}
        description={MockPromoBlockOne.description}
      />
      <PromoBlock
        title={MockPromoBlockTwo.title}
        smallTitle={MockPromoBlockTwo.smallTitle}
        isForm={true}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get(API.productFilter.url);
  const { productFilter } = data;

  if (productFilter.length === 0) {
    return {
      productFilter: []
    }
  }

  return {
    props: {
      productFilter
    },
  }
}