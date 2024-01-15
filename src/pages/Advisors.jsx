/* eslint-disable react/prop-types */
import styled from "styled-components"
import { useState } from "react";

import AdvisorList from "../ui/AdvisorList";
import FilterButton from "../ui/FilterButton";
import { useAdvisors } from "../features/advisors/useAdvisors";
import Loader from "../ui/Loader";


const AllAdvisorsWrapper = styled.div`
 width: 95%;
 margin: 0 auto;
 padding: 0 0 50px 0;
`

const CategoryButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
  @media (max-width: 600px) {
    justify-content: center;
    margin: 0 0 10px 0;
  }
`;

const CategoryLogos = styled.div`
  margin-left: 30px;
  @media (max-width: 600px) {
    display:none;
  }
`;

const AdvisorGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;


const ALL_CATEGORIES = ["ALL", "RIS-SIS", "RIS", "SIS", "IND"];



const Advisors = () => {

  const {isLoading, error, advisors} = useAdvisors();
  const [category, setCategory] = useState("ALL");
  const [selected, setSelected] = useState(true);

  function handleClick(filterCategory) {
    setCategory(filterCategory);
    setSelected(true);
  }

  // ==================== LOAD =================================
  if(isLoading) return (<Loader />)
  // ====================== ERROR =================================
  if(error) {
    console.log(error)
  }
  //=====================  DATA ===============================
  return (
    <AllAdvisorsWrapper>
      <CategoryButtonContainer>
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
        <CategoryLogos>
          <img style={{height: "80px"}} src={`images/${category}_SM.png`} />
        </CategoryLogos>
      </CategoryButtonContainer>
      <AdvisorGrid>
        <AdvisorList advisors={advisors} category={category} />
      </AdvisorGrid>
    </AllAdvisorsWrapper>
  );
};

export default Advisors;
