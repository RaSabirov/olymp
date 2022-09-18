import React from 'react';
import { Sort } from '../Sort/Sort';
// import { Search } from '../Search/Search';
import './Header.css';

export const Header = ({ searchValue, setSearchValue }) => {
	return (
		<div className='header'>
			<div className='header__logo'>
				<div>
					<img
						width={38}
						src='https://my.university.innopolis.ru/app/static/media/logo.30f103f3.jpg'
						alt=''
					/>
				</div>
				<div>
					<div className='header__title'>Образы</div>
					<div className='header__subtitle'>для проведения мероприятий</div>
				</div>
			</div>
			{/* <Search searchValue={searchValue} setSearchValue={setSearchValue} /> */}
		</div>
	);
};
