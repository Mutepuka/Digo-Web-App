import React from 'react';
import CountUp from 'react-countup';
import '@styles/items.css';

const CounterItems = ({item}) => {
  return (
    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
        <div className="counter-box">
            <i className={item.icon}></i>
            <CountUp start={0} end={item.end} duration={item.duration}/>
            <p>{item.name}</p>
        </div>

    </div>
  )
}

export default CounterItems