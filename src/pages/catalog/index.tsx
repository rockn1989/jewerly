import { useState } from 'react';
import { Layout } from '../../layout';
import { CardCatalog } from '../../components/CardCatalog';
import { Button, PromoBlock, SeoBlock } from '../../components';
import { API } from '../../api/api';
import axios from 'axios';

import styles from './catalog.module.scss';

interface CatalogPageProps {
	catalogCards: {
		title: string;
		type: string;
		price: number;
		image: string;
		slug: string;
	}[];
}

const MockPromoBlock = {
	title: 'Эксклюзивная рассылка',
	smallTitle: 'Полезные советы и персональный предложения',
};

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
				<div className='container'>
					<div className={styles.catalogList}>
						{Array(rows)
							.fill('')
							.map((_, index) => {
								if (index % 3 == 0) {
									return (
										<div className={styles.catalogRow} key={index}>
											{cardsSlice.slice(index, index + 3).map((card, index) => {
												return (
													// Тут лучше деструктуризировать, а то не ясно какие пропы передаются, может даже не все пропы передавать надо будет
													<CardCatalog {...card} key={index} />
												);
											})}
										</div>
									);
								}
							})}
					</div>

					{catalogCards &&
						catalogCards.length > 6 &&
						catalogCards.length !== cardsSlice.length && (
							<Button
								variant='black'
								className={styles.catalogButton}
								onClick={() => handleShowMore()}
							>
								Покажите еще
							</Button>
						)}
				</div>
			</section>

			<SeoBlock />

			<PromoBlock
				title={MockPromoBlock.title}
				smallTitle={MockPromoBlock.smallTitle}
				withForm={true}
			/>
		</Layout>
	);
};

export async function getStaticProps() {
	const { data: catalogData } = await axios.get(API.catalogCards.url);
	const { catalogCards } = catalogData;

	return {
		props: {
			catalogCards,
		},
	};
}

export default Catalog;
