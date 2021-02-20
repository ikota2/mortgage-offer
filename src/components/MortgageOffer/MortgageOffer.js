import React, { useState } from "react";
import "./mortgageOffer.css";
import { calcMonthPayment } from "./functions/calcMonthPayment.js";
import { decoratePercent } from "./functions/decoratePercent.js";
import { toRoubles } from "./functions/toRoubles.js";

const realtyTypesTranslation = {
  flatNew: "квартира в новостройке",
  flatSecondary: "квартира во вторичке",
  houseOrTownhouse: "дом или таунхаус",
  houseBuilding: "коммерческая недвижимость",
  repair: "ремонт",
  garage: "гараж",
};

export function MortgageOffer({
  minRate,
  companyName,
  realtyTypes,
  minDeposit,
  name,
  companySiteUrl,
  companyLogoUrl,
  amount,
  term,
}) {
  const firstPayment = (amount * Number(minDeposit)) / 100;
  const { monthPayment, overpayment } = calcMonthPayment(
    amount - firstPayment,
    term,
    minRate
  );

  const [detailed, getDetails] = useState(false);
  function handleClick() {
    getDetails((prev) => !prev);
  }
  const variable = detailed
    ? "mortgage-block__footer_button-detailedOn"
    : "mortgage-block__footer_button-detailedOff";
  return (
    <>
      <div className='mortgage-block'>
        <div className='mortgage-block__logo-and-titles'>
          <img
            src={companyLogoUrl}
            alt='Логотип банка'
            className='mortgage-block__logo-and-titles_img'
          />
          <span className='mortgage-block__logo-and-titles_mortgage-name'>
            {name}
          </span>
          <span className='mortgage-block__logo-and-titles_bank-name'>
            {companyName}
          </span>
          <div className='realtyTypes'>
            {realtyTypes.map((key) => (
              <span className='realtyTypes__item' key={key}>
                {realtyTypesTranslation[key]}
              </span>
            ))}
          </div>
        </div>
        <div className='mortgage-block__calculator'>
          <div className='mortgage-block__calculator_digits-and-description'>
            <div className='mortgage-block__calculator_digits-and-description_digits'>
              {decoratePercent(minRate)}
            </div>
            <div className='mortgage-block__calculator_digits-and-description_description'>
              процентная ставка
            </div>
          </div>
          <div className='mortgage-block__calculator_digits-and-description'>
            <div className='mortgage-block__calculator_digits-and-description_digits'>
              {toRoubles(monthPayment)}
            </div>
            <div className='mortgage-block__calculator_digits-and-description_description'>
              ежемесячный платеж
            </div>
          </div>
          <div className='mortgage-block__calculator_digits-and-description'>
            <div className='mortgage-block__calculator_digits-and-description_digits mortgage-block__calculator_digits-and-description_digits-smaller'>
              {toRoubles(firstPayment)}
            </div>
            <div className='mortgage-block__calculator_digits-and-description_description'>
              первоначальный взнос
            </div>
          </div>
          <div className='mortgage-block__calculator_digits-and-description'>
            <div className='mortgage-block__calculator_digits-and-description_digits mortgage-block__calculator_digits-and-description_digits-smaller'>
              {toRoubles(amount - firstPayment)}
            </div>
            <div className='mortgage-block__calculator_digits-and-description_description'>
              сумма кредита
            </div>
          </div>
          <div className='mortgage-block__calculator_digits-and-description'>
            <div className='mortgage-block__calculator_digits-and-description_digits mortgage-block__calculator_digits-and-description_digits-smaller'>
              {toRoubles(overpayment)}
            </div>
            <div className='mortgage-block__calculator_digits-and-description_description'>
              сумма процентов
            </div>
          </div>
        </div>
        <div className='mortgage-block__footer'>
          <a
            href={companySiteUrl}
            className='mortgage-block__footer_link'
            id={variable}
            onClick={handleClick}
          >
            Подробнее
          </a>
        </div>
      </div>
    </>
  );
}
