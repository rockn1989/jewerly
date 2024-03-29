import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { Search } from './Search';
import { Title } from './Title';
import { Button } from './Button';
import { CustomLink } from './CustomLink';
import { BrandsList } from './BrandsList';
import { ProductFilter } from './ProductFilter';
import { CardProduct } from './CardProduct';
import { PromoBlock } from './PromoBlock';
import { Blog } from './Blog';
import { SubscribeForm } from './SubscribeForm';
import { Input } from './Input';
import { SocialBlock } from './SocialBlock';
import { SeoBlock } from './SeoBlock';
import { Portal } from './Portal';

export {
	Logo,
	Navigation,
	Search,
	Title,
	Button,
	CustomLink,
	BrandsList,
	ProductFilter,
	CardProduct,
	PromoBlock,
	Blog,
	SubscribeForm,
	Input,
	SocialBlock,
	SeoBlock,
	Portal,
};

// Я бы не стал делать вот такой общий экспорт всех прям компонентов, они же отвечают за разные вещи по сути
// Лучше делать общий экспорт, когда, допустим, есть папка Form и в ней лежат компоненты отвечающие за форму только
