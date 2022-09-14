import React from 'react';
import './ItemsCard.css';

export const ItemsCard = ({ card, onProgramsClick }) => {
	function handleClick() {
		onProgramsClick();
	}
	return (
		<div className='items__block'>
			<h4 className='items__card-title'>{card.title}</h4>
			<img className='items__img' src={card.img} alt={card.title} />
			<h5 className='items__card-subtitle'>{card.name}</h5>
			<div className='items__selector'>
				<ul>
					<li className={`items__spisok ${card.os === 'Windows' && 'items__spisok_active'} `}>Windows</li>
					<li className={`items__spisok ${card.os === 'Ubuntu' && 'items__spisok_active'} `}>Ubuntu</li>
				</ul>
				<ul>
					<li className={`items__spisok ${card.ethernet === 'Доступ в интернет' && 'items__spisok_active'}`}>
						Доступ в интернет
					</li>
					<li
						className={`items__spisok ${
							card.ethernet === 'Без доступа в интернет' && 'items__spisok_active'
						}`}
					>
						Без доступа в интернет
					</li>
				</ul>
				<ul>
					<li className={`items__spisok ${card.admin === 'С админ правами' && 'items__spisok_active'}`}>
						С Админ правами
					</li>
					<li className={`items__spisok ${card.admin === 'Без админ прав' && 'items__spisok_active'}`}>
						Без админ прав
					</li>
				</ul>
				<p className='items__spisok-po' onClick={handleClick}>
					Список всех программ
				</p>
			</div>
		</div>
	);
};
