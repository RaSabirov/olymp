import React from 'react';
import { Header } from '../Header/Header';
import { Items } from '../Items/Items';
import { Popup } from '../Popup/Popup';
import './App.css';

function App() {
	const [selectedCard, setSelectedCard] = React.useState({});
	const [searchValue, setSearchValue] = React.useState('');

	function handleProgramsClick(card) {
		setSelectedCard(card);
	}

	function handleClosePopup() {
		setSelectedCard([]);
	}

	return (
		<div className='wrapper'>
			<div className='container'>
				<Header searchValue={searchValue} setSearchValue={setSearchValue} />
				<div className='content'>
					<Items onProgramsClick={handleProgramsClick} searchValue={searchValue} onClose={handleClosePopup} />
				</div>
			</div>
			<Popup
				onClose={handleClosePopup}
				isOpen={!!selectedCard.title && !!selectedCard.programs}
				card={selectedCard}
			/>
		</div>
	);
}

export default App;
