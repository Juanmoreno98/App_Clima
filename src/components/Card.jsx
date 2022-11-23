import React from 'react';
import style from '../components/Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={style.box}>
      <button className={style.botton} onClick={props.onClose}>X</button>
      <Link to={`/ciudad/${props.id}`}>
      <h4 className={style.title}>{props.name}</h4>
      </Link>
      <div>
        <section className={style.section}>
        <h5>Max</h5>
        <p>{`${props.max}°`}</p>
        </section>
        <section className={style.section}>
        <h5>Min</h5> 
        <p>{`${props.min}°`}</p>
        </section>
      </div >
      <img className={style.icon} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img"/>
    </div>
 )
};
