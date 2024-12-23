import React from 'react'

const Cards = ({index, data}) => {
  return (
    <div className='doc-app__card' title={data.title}>
      <div className='doc-app__card-img-box'>
        <img className='doc-app__card-img' src={data.image} alt={data.title}/>
      </div>
      <h3 className={'doc-app__card-title' + (data.textAlignment === 'center' ? 'center-aligned-text' : '')}>{data.title}</h3>
      <p className='doc-app__card-desc'>{data.desc}</p>
      { data?.learnMoreBtn && <span className='doc-app__card-learnMore'>Learn more &rarr;</span>}
    </div>
  )
}

export default Cards