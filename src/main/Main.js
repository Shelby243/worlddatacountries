import React from 'react'
import Country from '../components/Country'
export default function Main(props) {
  return (
    
    <div style={props.style}>
     <div className='countries-wrapper'>
      {props.countrySearch.map((country)=>(<Country  key={country.id} country={country} style={props.style1} />))}
      </div>
     </div>
    
   
  )
}
