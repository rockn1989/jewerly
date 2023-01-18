import { Blog, ProductFilter, PromoBlock, SocialBlock } from '../components';
import { HeroBanner } from '../components/HeroBanner';
import { Layout } from '../layout';
import { API } from '../api/api';

import axios from 'axios';

const MockPromoBlockOne = {
	title: 'Посетите наши салоны в Москве',
	smallTitle: 'Не знаете, что выбрать?',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.',
};

const MockPromoBlockTwo = {
	title: 'Эксклюзивная рассылка',
	smallTitle: 'Полезные советы и персональный предложения',
};

interface HomeProps {
	productFilter: {
		title: string;
		image: string;
	}[];
	blog: {
		title: string;
		image: string;
	}[];
	posts: {
		video: boolean;
		image: string;
	}[];
}

// Тут лучше привести к такому же виду, как и остальное
// const Index = () => {}
// export default Index
export default function Home({ productFilter, blog, posts }: HomeProps) {
	return (
		<Layout>
			{/* Те компоненты, которые больше нигде не используются я бы в том же файле хранил, чтобы было меньше путаниц */}
			<HeroBanner />
			<ProductFilter cards={productFilter} />
			<PromoBlock
				title={MockPromoBlockOne.title}
				smallTitle={MockPromoBlockOne.smallTitle}
				description={MockPromoBlockOne.description}
			/>
			<Blog blogCards={blog} />
			<SocialBlock posts={posts} />
			<PromoBlock
				title={MockPromoBlockTwo.title}
				smallTitle={MockPromoBlockTwo.smallTitle}
				withForm={true}
			/>
		</Layout>
	);
}

export async function getStaticProps() {
	// я так думаю, что тут не статика нужна, а getServerSideProps
	try {
		const [productData, blogData, postsData] = await Promise.all([
			await axios.get(API.productFilter.url),
			await axios.get(API.blog.url),
			await axios.get(API.posts.url),
		]);

		const { productFilter } = productData['data'];
		const { blog } = blogData['data'];
		const { socialPosts: posts } = postsData['data'];

		if (productFilter.length === 0) {
			return {
				productFilter: [],
			};
		}

		if (blog.length === 0) {
			return {
				blog: [],
			};
		}

		if (posts.length === 0) {
			return {
				blog: [],
			};
		}

		return {
			props: {
				productFilter,
				blog,
				posts,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			notFound: true,
		};
	}
}
