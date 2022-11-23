import React from "react";
import styles from "./about.module.css"


export default function About (){
    return (
        <div className={styles.box}>
             <h2 className={styles.title}> PRINCIPAL</h2>
             <p>Lograr encontar cada una de las diferentes ciudades del mundo
                con la finalidad de conocer cada una de la principales caracteristicas 
                climatologicas y geograficas de dicho pais.</p>
        </div>
    )
}