import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Categories.css';

export const Categories = ({ value, onClickCategory }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const categoryMediaQuery = useMediaQuery({ query: '(max-width: 590px)' });
  const categories = [
    'Все',
    'Олимпиада',
    'Отборы',
    'Смена',
    'Стандартные образы',
    'Тестирование',
    'Прочие',
  ];

  function onClickListItem(i) {
    onClickCategory(i);
    setIsOpen(false);
  }

  return (
    <div className='categories'>
      <div className='categories__container'>
        {categoryMediaQuery ? (
          <span className='categories__btn' onClick={() => setIsOpen(!isOpen)}>
            Категории
          </span>
        ) : (
          <ul className='categories__items'>
            {categories.map((categoryName, i) => (
              <li
                key={i}
                onClick={() => onClickCategory(i)}
                className={value === i ? 'active' : ''}
              >
                {categoryName}
              </li>
            ))}
          </ul>
        )}

        {isOpen && (
          <div className='categories__popup'>
            <ul>
              {categories.map((categoryName, i) => (
                <li
                  key={i}
                  onClick={() => onClickListItem(i)}
                  className={value === i ? 'active' : ''}
                >
                  {categoryName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
