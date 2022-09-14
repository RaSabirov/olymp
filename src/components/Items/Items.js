import React from 'react';
import { Categories } from '../Categories/Categories';
import { ItemsCard } from '../ItemsCard/ItemsCard';
import { Pagination } from '../Pagination/Pagination';
import Sceleton from '../Sceleton/Sceleton';
import { Sort } from '../Sort/Sort';

import './Items.css';

export const Items = ({ onProgramsClick, searchValue, onClose }) => {
	const [cards, setCards] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [categoryId, setCategoryId] = React.useState(0);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [sortType, setSortType] = React.useState({
		name: 'популярности',
		sortProperty: 'rating',
	});

	React.useEffect(() => {
		setIsLoading(true);

		const sortBy = sortType.sortProperty.replace('current', '');
		const order = sortType.sortProperty.includes('current') ? 'desc' : 'asc';
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const search = searchValue ? `search=${searchValue}` : '';
		fetch(
			`https://632072f39f82827dcf2d014f.mockapi.io/api/v1/items?page=${currentPage}&limit=3&${category}&sortBy=${sortBy}&order=${order}${search}`
		)
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setCards(arr);
				setIsLoading(false);
			})
			.catch((e) => console.log('Ошибка загрузки данных', e));
		window.scrollTo(0, 0);
	}, [categoryId, sortType, currentPage, searchValue]);

	function handleClickCategory(i) {
		setCategoryId(i);
	}

	function handleChangeSort(i) {
		setSortType(i);
	}

	return (
		<div className='items'>
			<Sort value={sortType} onChangeSort={handleChangeSort} onClick={onClose} />
			<Categories value={categoryId} onClickCategory={handleClickCategory} />
			<h2 className='items__title'>{isLoading ? 'Загрузка карточек...' : 'Все образы'}</h2>
			<div className='items__container'>
				{isLoading
					? [...new Array(3)].map((_, index) => <Sceleton key={index} />)
					: cards
							.filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
							.map((card) => <ItemsCard card={card} key={card.id} onProgramsClick={onProgramsClick} />)}
			</div>
			<Pagination onChangePage={(number) => setCurrentPage(number)} />
		</div>
	);
};
