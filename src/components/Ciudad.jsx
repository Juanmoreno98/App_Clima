import React from "react";
import styles from "./ciudad.module.css"

export default function Ciudad({ city }) { 
    return (
        <div className={styles.box}>
            <h2 className={styles.title}>{city.name}</h2>
            <div className={styles.contents}>
                <div>Temperatura{` ==> ${city.temp}`} ºC</div>
                <div>Clima: {` ==> ${city.weather}`}</div>
                <div>Viento: {` ==> ${city.wind}`} km/h</div>
                <div>Cantidad de nubes: {` ==> ${city.clouds} Und`}</div>
                <div>Latitud: {` ==> ${city.latitud}`}</div>
                <div>Longitud: {` ==> ${city.longitud}`}</div>
            </div>
        </div>
    )
}