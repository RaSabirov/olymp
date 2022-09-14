import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

export const Pagination = ({ onChangePage }) => {
	return (
		<ReactPaginate
			className='paginate'
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={(event) => onChangePage(event.selected + 1)}
			pageRangeDisplayed={3}
			pageCount={4}
			renderOnZeroPageCount={null}
		/>
	);
};
