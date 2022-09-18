import React from 'react';
import { useMediaQuery } from 'react-responsive';
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
	const [countCards, setCountCards] = React.useState(0);

	const isTabletOrLaptopQuery = useMediaQuery({ query: '(max-width: 985px)' });
	const isMobileQuery = useMediaQuery({ query: '(max-width: 546px)' });
	const itemsPerPage = isMobileQuery ? 1 : isTabletOrLaptopQuery ? 2 : 3;

	const [sortType, setSortType] = React.useState({
		name: 'популярности',
		sortProperty: 'rating',
	});

	// 1 https://632072f39f82827dcf2d014f.mockapi.io/api/v1/items?page=1&limit=3&sortBy=rating&order=asc

	// 2 https://632072f39f82827dcf2d014f.mockapi.io/api/v1/items?page=1&limit=3&category=1&sortBy=rating&order=asc

	// 3 https://632072f39f82827dcf2d014f.mockapi.io/api/v1/items?page=1&limit=3&sortBy=rating&order=asc

	React.useEffect(() => {
		setIsLoading(true);

		const sortBy = sortType.sortProperty.replace('current', '');
		const order = sortType.sortProperty.includes('current') ? 'desc' : 'asc';
		const category = categoryId > 0 ? `&category=${categoryId}` : '';
		fetch(
			`https://632072f39f82827dcf2d014f.mockapi.io/api/v1/items?page=${currentPage}&limit=${itemsPerPage}${category}&sortBy=${sortBy}&order=${order}`
		)
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setCards(arr.items);
				setCountCards(arr.count);
				setIsLoading(false);
			})
			.catch((e) => console.log('Ошибка загрузки данных', e));
		document.getElementById('somediv').scrollIntoView();
	}, [currentPage, categoryId, sortType, itemsPerPage]);

	const handlePageClick = (event) => {
		setCurrentPage(event.selected + 1);
	};

	function handleClickCategory(i) {
		setCategoryId(i);
		setCurrentPage(1);
	}

	function handleChangeSort(i) {
		setSortType(i);
	}

	return (
		<div className='items'>
			<Categories value={categoryId} onClickCategory={handleClickCategory} />
			<h2 className='items__title'>{isLoading ? 'Загрузка карточек...' : 'Все образы'}</h2>
			<Sort value={sortType} onChangeSort={handleChangeSort} onClick={onClose} />
			<div className='items__container'>
				{isLoading
					? [...new Array(itemsPerPage)].map((_, index) => <Sceleton key={index} />)
					: cards
							.filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
							.map((card) => <ItemsCard card={card} key={card.id} onProgramsClick={onProgramsClick} />)}
			</div>
			<div className='paginate__container' id='somediv'>
				<Pagination
					currentPage={currentPage}
					onPageChange={handlePageClick}
					itemsPerPage={itemsPerPage}
					countCards={countCards}
				/>
				{isMobileQuery && (
					<div className='paginate__pageCount'>
						<p className='paginate__count'>
							<span>{currentPage} </span>/ {countCards}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
