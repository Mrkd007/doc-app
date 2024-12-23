import React from 'react'
import { serviceList } from '../../utils/constants'
import Cards from '../Cards'

const Body = () => {
  return (
    <div className='doc-app__bodyComp'>
      <section className='doc-app__section data-section'>
        <h1 className='doc-app__section-title'>Our results in numbers</h1>
        <ul className='doc-app__section-data'>
          <li className='doc-app__section-data-item' key={'d1'}>
            <span className='doc-app__section-data-item-title'>99%</span>
            <span className='doc-app__section-data-item-descp'>Customer satisfaction</span>
          </li>
          <li className='doc-app__section-data-item' key={'d2'}>
            <span className='doc-app__section-data-item-title'>15K</span>
            <span className='doc-app__section-data-item-descp'>Online Patients</span>
          </li>
          <li className='doc-app__section-data-item' key={'d3'}>
            <span className='doc-app__section-data-item-title'>12K</span>
            <span className='doc-app__section-data-item-descp'>Patients Recovered</span>
          </li>
          <li className='doc-app__section-data-item' key={'d4'}>
            <span className='doc-app__section-data-item-title'>240%</span>
            <span className='doc-app__section-data-item-descp'>Hospital growth</span>
          </li>
        </ul>
      </section>

      <section className='doc-app__section service-section'>
        <div>
          <h1 className='doc-app__section-title'>Services we provide</h1>
          <p className='doc-app__section-subtitle'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar <br/> elementum tempus hac tellus libero accumsan. </p>
        </div>
        <ul className='doc-app__section-list'>
          {
            serviceList.map((elm, i) => {
              return(
                <li  key={i + 'cards' + elm?.id}>
                  <Cards index={i} data={elm}/>
                </li>
              )
            })
          }
        </ul>
      </section>
    </div>
  )
}

export default Body