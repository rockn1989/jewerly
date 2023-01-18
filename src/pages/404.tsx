import { Title } from '../components';
import { Layout } from '../layout';

// Тут зачем-то два экспорта, не ясно. К тому же можно не указывать тип для этого
export function Error404(): JSX.Element {
	return (
		<Layout>
			<div className='not-found'>
				<Title as='h1' text='404' className='not-found-title' />
				<p>Страница не найдена</p>
			</div>
		</Layout>
	);
}

export default Error404;
