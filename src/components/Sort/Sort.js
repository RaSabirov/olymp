import React from 'react';
import './Sort.css';

export const Sort = ({ value, onChangeSort }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const sortRef = React.useRef();

	const list = [
		{ name: 'популярности', sortProperty: 'rating' },
		{ name: '2022', sortProperty: 'currentyear' },
		{ name: '2021', sortProperty: 'year' },
	];

	function onClickListItem(i) {
		onChangeSort(i);
		setIsOpen(false);
	}

	// Скрытие попапа с сортировкой при клике вне формы попапа
	React.useEffect(() => {
		// Mount
		const handleClickOutside = (event) => {
			if (!event.path.includes(sortRef.current)) {
				setIsOpen(false);
			}
		};

		document.body.addEventListener('click', handleClickOutside);

		//Unmount
		return () => {
			document.body.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div ref={sortRef} className='categories__sort'>
			<div className='categories__sort-label'>
				<div className='categories__sort-img'>
					<svg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
							fill='#2C2C2C'
						></path>
					</svg>
				</div>
				<div className='categories__text-container'>
					<p>Сортировка по:</p>
					<span onClick={() => setIsOpen(!isOpen)}>{value.name}</span>
				</div>
			</div>
			{isOpen && (
				<div className='categories__sort-popup'>
					<ul>
						{list.map((obj, i) => (
							<li
								key={i}
								onClick={() => onClickListItem(obj)}
								className={value.sortProperty === obj.sortProperty ? 'active' : ''}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
