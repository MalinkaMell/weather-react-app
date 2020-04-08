import React from 'react';
import Button from '../button/Button';
import { Link } from "react-router-dom";

const FiveDaysResults = props => {

  return (
    <div className="px-2 text-center">
      <h3 className="my-3">{props.city.name}, {props.city.state}</h3>
      <ul className="list-inline d-flex">
        {
          props.city.forecast.map((item, i) => {
            const date = new Date(item.Date).toDateString();

            return (
              <li className="list-inline-item flex-fill text-center results p-2" key={i}>
                <p>{date}</p>
                <p>{item.Time}</p>
                <p>Temperature: {item.temprature}</p>
                <p>{item.temprature >= 60 ? <i className="fas fa-sun fa-2x"></i> : <i className="fas fa-cloud fa-2x"></i>}</p>
                <p>Feels: {item.feels}</p>
              </li>
            )
          })
        }
      </ul>
      <Link to="/"><Button type="button" btnValue="Back" class="btn btn-primary my-4" /></Link>
    </div>
  )
}

export default FiveDaysResults;