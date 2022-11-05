import React from 'react'

export default function Country({country:{name,capital,population,flag,currency,languages}},props) {
    const formatLanguage=languages.length>1?'Languages ': 'Language'
  return (
    <div style={props.style} className='country'>
       <div className='country_flag'> <img src={flag} alt={name} /></div>
      <h2>{name.toUpperCase()} </h2>
      <p><span>Capital:</span>{capital} </p>
      <p><span>Population:</span>{population} </p>
      <p><span>{formatLanguage}:</span>{languages.join()}</p>
      <p> <span>Currency:</span>{currency} </p>
    </div>
  )
}
