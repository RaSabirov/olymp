import React from 'react';
import './Popup.css';

export const Popup = ({ onClose, isOpen, card }) => {
	// создаем обработчик оверлея
	const handleOverlay = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	// console.log(programs, 'program');

	return (
		<section className={`popup ${isOpen ? 'popup_is-opened' : ''}`} onClick={handleOverlay}>
			<div className='popup__container'>
				<h2 className='popup__title'>
					Список ПО у образа:
					<br /> 'otbory-bakalavr2022'
				</h2>
				<ul className='popup__programs-info'>
					{/* <li className='popup__programs-item'>{card.programs}</li> */}
					<li className='popup__programs-item'>clion</li>
					<li className='popup__programs-item'>eclipse</li>
					<li className='popup__programs-item'>IntelliJ IDEA</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
					<li className='popup__programs-item'>jdk11</li>
				</ul>
				<button className='popup__close-btn' type='button' onClick={onClose} />
			</div>
		</section>
	);
};
