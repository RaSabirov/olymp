import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

export const Pagination = ({ onChangePage, countCards, itemsPerPage }) => {
	return (
		<ReactPaginate
			className='paginate'
			pageLinkClassName='paginate__link'
			pageClassName='paginate__li'
			nextClassName='paginate__next'
			previousClassName='paginate__prev'
			breakClassName='paginate__break'
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={(evt) => onChangePage(evt.selected + 1)}
			pageRangeDisplayed={3}
			pageCount={Math.ceil(countCards / itemsPerPage)}
			renderOnZeroPageCount={null}
		/>
	);
};
