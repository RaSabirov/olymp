import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { setCategoryId } from '../../redux/slices/filterSlice';
import { Categories } from '../Categories/Categories';
import { ItemsCard } from '../ItemsCard/ItemsCard';
import { Pagination } from '../Pagination/Pagination';
import Sceleton from '../Sceleton/Sceleton';
import { Sort } from '../Sort/Sort';
import axios from 'axios';
import qs from 'qs';

import './Items.css';

export const Items = ({ onProgramsClick, searchValue, categoryName }) => {
  const { categoryId, sort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [countCards, setCountCards] = React.useState(0);

  const isTabletOrLaptopQuery = useMediaQuery({ query: '(max-width: 985px)' });
  const isMobileQuery = useMediaQuery({ query: '(max-width: 546px)' });
  const itemsPerPage = isMobileQuery ? 1 : isTabletOrLaptopQuery ? 2 : 3;

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace('current', '');
    const order = sort.sortProperty.includes('current') ? 'desc' : 'asc';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://632072f39f82827dcf2d014f.mockapi.io/api/v1/items?page=${currentPage}&limit=${itemsPerPage}${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setCards(res.data.items);
        setCountCards(res.data.count);
        setIsLoading(false);
      })
      .catch((e) => console.log('Ошибка загрузки данных', e));

    document.getElementById('somediv').scrollIntoView();
  }, [currentPage, categoryId, sort.sortProperty, itemsPerPage, searchValue]);

  // React.useEffect(() => {
  // 	const queryString = qs.stringify({
  // 		categoryId,
  // 		currentPage,
  // 	});
  // 	navigate(`?${queryString}`);
  // 	console.log(queryString);ч
  // }, [currentPage, categoryId]);

  const onChangePage = (number) => {
    setCurrentPage(number);
  };

  function handleClickCategory(i) {
    dispatch(setCategoryId(i));
    setCurrentPage(1);
  }

  return (
    <div className='items'>
      <Categories value={categoryId} onClickCategory={handleClickCategory} />
      {/* <h2 className='items__title'>
        {isLoading ? 'Загрузка карточек...' : 'Все образы'}
      </h2> */}
      <Sort />
      <div className='items__container'>
        {isLoading
          ? [...new Array(itemsPerPage)].map((_, index) => (
              <Sceleton key={index} />
            ))
          : cards
              .filter((obj) =>
                obj.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((card) => (
                <ItemsCard
                  card={card}
                  key={card.id}
                  onProgramsClick={onProgramsClick}
                />
              ))}
      </div>
      <div className='paginate__container' id='somediv'>
        <Pagination
          currentPage={currentPage}
          onChangePage={onChangePage}
          itemsPerPage={itemsPerPage}
          countCards={countCards}
        />
        {isMobileQuery && (
          <div className='paginate__pageCount'>
            <p className='paginate__count'>
              <span>{currentPage} </span>/ {countCards}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
