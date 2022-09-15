import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

export const Pagination = ({ onPageChange, countCards, itemsPerPage }) => {
	return (
		<ReactPaginate
			className='paginate'
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={onPageChange}
			pageRangeDisplayed={3}
			pageCount={Math.ceil(countCards / itemsPerPage)}
			renderOnZeroPageCount={null}
		/>
	);
};
