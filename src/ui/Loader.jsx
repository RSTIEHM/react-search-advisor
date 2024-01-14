import React from 'react'

const Loader = () => {
  return (
    <div className='loader-container'>
      <div className='loading-overlay'>
        <img className='loading-spinner' src="/loader.gif" alt="loader" />
        {/* <h2 className='loading-text'>Loading...</h2> */}
      </div>

    </div>
  )
}

export default Loader