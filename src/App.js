import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Titles } from "./components/Titles/Titles";
import { Filter } from "./components/Filter/Filter";

function App() {
  const [filters, setFilters] = useState({
    term: 60,
    amount: 2_000_000,
  });

  return (
    <>
      <Header />
      <Filter setFilters={setFilters} />
      <Titles term={filters.term} amount={filters.amount} />
    </>
  );
}

export default App;
