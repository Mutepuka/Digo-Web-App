import React from 'react';
import { counterData } from '@utils/Items';
import CounterItems from './CounterItems';

const Facts = () => {
  return (
    <section className="facts" id='facts'>
      <div className="container">
      <div className="row">
          <div className="col-md-12 text-center pt-4">
              <div className="title-wrap d-flex justify-content-center">
                <div className="title-box">
                    <h2 className="title-a pt-4">Our Facts</h2>
                </div>
              </div>
          </div>
          </div>
        <div className="row">
          {counterData.map((item,index)=>(
            <CounterItems key={index} item={item}/>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Facts