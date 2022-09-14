import React from 'react';
import { Header } from '../Header/Header';
import { Items } from '../Items/Items';
import { Popup } from '../Popup/Popup';
import './App.css';
// import cardsData from '../../utils/data';

function App() {
	const [isShowPopup, setIsShowPopup] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState({});
	const [searchValue, setSearchValue] = React.useState('');

	function handleProgramsClick(card) {
		setIsShowPopup(true);
		// setSelectedCard(card);
	}

	function handleClosePopup() {
		setIsShowPopup(false);
		// setSelectedCard({});
	}

	return (
		<div className='wrapper'>
			<div className='container'>
				<Header searchValue={searchValue} setSearchValue={setSearchValue} />
				<div className='content'>
					<Items onProgramsClick={handleProgramsClick} searchValue={searchValue} onClose={handleClosePopup} />
				</div>
			</div>
			<Popup onClose={handleClosePopup} isOpen={isShowPopup} card={selectedCard} />
		</div>
	);
}

export default App;
