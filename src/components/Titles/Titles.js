import React from "react";
import { MortgageOffer } from "../MortgageOffer/MortgageOffer.js";
import mortgageData from "./mortgageData.json";

export function Titles({ term, amount }) {
  return mortgageData.map((title) => (
    <MortgageOffer
      amount={amount}
      term={term}
      minRate={title.minRate}
      companyName={title.companyName}
      realtyTypes={title.realtyTypes}
      maxAmount={title.maxAmount}
      minDeposit={title.minDeposit}
      name={title.name}
      termTo={title.termTo}
      companySiteUrl={title.companySiteUrl}
      companyLogoUrl={title.companyLogoUrl}
      key={title.id}
    />
  ));
}
