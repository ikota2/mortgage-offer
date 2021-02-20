import React from "react";
import "./header.css";

export function Header() {
  return (
    <div className='header'>
      <span className='header__title-1'>Своя квартира ещё ближе</span>
      <span className='header__title-2'>
        Узнай одобренную сумму и процентную ставку
      </span>
      <div className='header__link-and-button'>
        <button className='header__link-and-button_button'>
          Сумма и ставка
        </button>
        <a className='header__link-and-button_link' href='cian.ru' download>
          Единая онлайн анкета в топовые банки
        </a>
      </div>
    </div>
  );
}
