import React from 'react';


const Results = props => {
  return (
    <div className="px-2 text-center">
      <h3 className="my-3">{props.city.name}</h3>
      <ul className="list-inline d-flex">
        {
          props.city.forecast.map((item, i) => (
            <li className="list-inline-item flex-fill text-center results p-2" key={i}>
              <p>{item.Date}</p>
              <p>{item.Time}</p>
              <p>Temperature: {item.temprature}</p>
              <p>{item.temprature >= 60 ? <i className="fas fa-sun fa-2x"></i> : <i className="fas fa-cloud fa-2x"></i>}</p>
              <p>Feels: {item.feels}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Results;