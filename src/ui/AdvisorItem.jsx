/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom';
const AdvisorItem = ({advisor}) => {
  return (
    <NavLink
    key={advisor.id}
    className="advisor-anchor"
    to={`/advisors/${advisor.id}`}
  >
    <div className="advisor-wrapper">
      <div className="advisor-img-container">
        <img className="advisor-img" src={advisor.img} />
      </div>
      <p className="advisor-name">{advisor.name}</p>
    </div>
  </NavLink>
  )
}

export default AdvisorItem