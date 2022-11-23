import React, { useState } from "react";
import search from "../components/search.module.css";


export default function SearchBar({onSearch}) {

  const [city, setCity] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <div className={search.position}>
      <input 
        className={search.input}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={search.botton} type="submit" value="Agregar" />
      </div>
    </form>
    
  );
}
