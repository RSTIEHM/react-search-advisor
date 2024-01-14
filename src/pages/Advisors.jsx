/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import AdvisorList from "./AdvisorList";
import FilterButton from "../ui/FilterButton";
import { useAdvisors } from "../features/advisors/useAdvisors";
import Loader from "../ui/Loader";


const Advisors = () => {

  const {isLoading, error, advisors} = useAdvisors();
  const [category, setCategory] = useState("ALL");
  const [selected, setSelected] = useState(true);

  const ALL_CATEGORIES = ["ALL", "RIS-SIS", "RIS", "SIS", "IND"];

  function handleClick(filterCategory) {
    setCategory(filterCategory);
    setSelected(true);
  }


  // LOAD
  if(isLoading) return (<Loader />)
  // ERR
  if(error) {
    console.log(error)
  }
  // DATA
  return (
    <div className="all-advisor-wrapper">
      <div className="button-container">
        {ALL_CATEGORIES.map((btn) => (
          <FilterButton
            key={btn}
            text={btn}
            selected={selected}
            category={category}
            setCategory={setCategory}
            handleClick={handleClick}
          />
        ))}
        <div className="filter-category-logo">
          <img src={`images/${category}_SM.png`} />
        </div>
      </div>
      <div id="result">
        <AdvisorList advisors={advisors} category={category} />
      </div>
    </div>
  );
};

export default Advisors;
