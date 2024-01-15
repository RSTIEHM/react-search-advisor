/* eslint-disable react/prop-types */

import AdvisorItem from './AdvisorItem';


const AdvisorList = ({advisors, category}) => {
    const filtered = advisors.filter((advisor) => {
        if(category === "ALL") return advisor
        return advisor.tag === category
    })
  return (
    <>
    {filtered.map((advisor) => {
        return (
            <AdvisorItem key={advisor.id} advisor={advisor} />
        );
      })}
      </>
  )
}

export default AdvisorList

