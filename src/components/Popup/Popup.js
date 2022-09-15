import React from 'react';
import './Popup.css';

export const Popup = ({ onClose, isOpen, card }) => {
	// создаем обработчик оверлея
	const handleOverlay = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<section className={`popup ${isOpen ? 'popup_is-opened' : ''}`} onClick={handleOverlay}>
			<div className='popup__container'>
				<h2 className='popup__title'>
					{card.title}:
					<br /> '{card.name}'
				</h2>
				<ul className='popup__programs-info'>
					<p className='popup__about-po'>Список программ:</p>
					{card.programs === undefined
						? ''
						: card.programs.map((item, index) => (
								<li key={index} className='popup__programs-item'>
									{item}
								</li>
						  ))}
				</ul>
				<button className='popup__close-btn' type='button' onClick={onClose} />
			</div>
		</section>
	);
};
