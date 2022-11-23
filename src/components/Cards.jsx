import React from 'react';
import Card from './Card';
import style from "../components/Cards.module.css"
export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if(!props.cities){
    return <p>No hay ciudades disponibles</p>
  } else {
    return  (
      <div className={style.position}>
      {   props.cities && props.cities.map(city => (
          <Card
          max={city.max}
          min={city.min}
          name={city.name} 
          img={city.img}
          onClose={() => props.onClose(city.id)}
          id={city.id}
          />
          ))
      }
    </div>
  )
 }
};