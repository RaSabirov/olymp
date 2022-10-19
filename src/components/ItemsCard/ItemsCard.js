import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import './ItemsCard.css';

export const ItemsCard = ({ card, onProgramsClick }) => {
  const { title, img, name, os, ethernet, language } = card;

  function handleClick() {
    onProgramsClick(card);
  }

  const osWin = `items__spisok ${os === 'Windows' && 'items__spisok_active'}`;
  const osUbuntu = `items__spisok ${os === 'Ubuntu' && 'items__spisok_active'}`;
  const dualOs = `items__spisok ${os === 'DualOS' && 'items__spisok_active'}`;

  const languageRu = `items__spisok ${
    language === 'Russian' && 'items__spisok_active'
  }`;
  const languageEn = `items__spisok ${
    language === 'English' && 'items__spisok_active'
  }`;

  const eth = `items__spisok ${
    ethernet === 'Полный доступ в интернет' && 'items__spisok_active'
  }`;
  const noEth = `items__spisok ${
    ethernet === 'Ограниченный доступ в интернет' && 'items__spisok_active'
  }`;

  const adminAccess = `items__spisok ${
    card.admin === 'С админ правами' && 'items__spisok_active'
  }`;
  const noAdminAccess = `items__spisok ${
    card.admin === 'Без админ прав' && 'items__spisok_active'
  }`;

  const ethAccess = ethernet === 'Ограниченный доступ в интернет';

  return (
    <div className='items__block'>
      <h4 className='items__card-title'>{title}</h4>
      <img className='items__img' src={img} alt={title} />
      <h5 className='items__card-subtitle'>{name}</h5>
      <div className='items__selector'>
        <ul>
          <li className={languageRu}>Russian</li>
          <li className={languageEn}>English</li>
        </ul>
        <ul>
          {os === 'DualOS' ? (
            <li className={dualOs}>DualOS Windows + Ubuntu</li>
          ) : (
            <>
              <li className={osWin}>Windows</li>
              <li className={osUbuntu}>Ubuntu</li>
            </>
          )}
        </ul>
        <ul>
          <li className={eth}>Полный доступ в интернет</li>
          <li
            className={noEth}
            data-tooltip={
              ethAccess
                ? 'Дополнительно оставьте в заявке список сайтов, к которым нужен доступ'
                : 'В этом образе полный доступ к интернету'
            }
          >
            Ограниченный доступ в интернет
            {ethAccess && <BsInfoCircle size={20} className='info__img' />}
          </li>
        </ul>
        <ul>
          <li className={adminAccess}>С Админ правами</li>
          <li className={noAdminAccess}>Без админ прав</li>
        </ul>
        {os === 'DualOS' ? (
          <div className='items__spisok-po-container'>
            <>
              <p className='items__spisok-po' onClick={handleClick}>
                Список программ на Windows
              </p>
              <p className='items__spisok-po' onClick={handleClick}>
                Список программ на Ubuntu
              </p>
            </>
          </div>
        ) : os === 'Windows' ? (
          <p className='items__spisok-po' onClick={handleClick}>
            Список программ на Windows
          </p>
        ) : (
          <p className='items__spisok-po' onClick={handleClick}>
            Список программ на Ubuntu
          </p>
        )}
      </div>
    </div>
  );
};
