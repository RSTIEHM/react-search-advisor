import React, { useState } from 'react'

const FilterButton = ({text, selected, category, handleClick}) => {
    
  return (
    <button onClick={() =>handleClick(text)} className={`filter-anchor ${selected && category === text ? "selected" : ""}`} >
    {text}
  </button>
  )
}

export default FilterButton