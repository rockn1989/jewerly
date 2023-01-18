import { DetailedHTMLProps, HTMLAttributes } from 'react';

// Слишком переусложнил интерфейс
// Не думаю, что тебе потребуется прям очень много пропсов для компонента, поэтому их лучше перечислить и типизировать отдельно
export interface BlogProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	blogCards: {
		title: string;
		image: string;
	}[];
}
