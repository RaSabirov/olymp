import React from 'react';
import './Categories.css';

export const Categories = ({ value, onClickCategory }) => {
	const categories = ['Все', 'Олимпиада', 'Отборы', 'Смена', 'Стандартные образы', 'Прочие'];
	return (
		<div className='categories'>
			<div className='categories__container'>
				<ul className='categories__items'>
					{categories.map((categoryName, i) => (
						<li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
							{categoryName}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
