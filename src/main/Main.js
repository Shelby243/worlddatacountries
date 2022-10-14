import React from 'react'
import Country from '../components/Country'
export default function Main(props) {
  return (
    
    <div>
     <div className='countries-wrapper'>
      {props.countrySearch.map((country)=>(<Country key={country.id} country={country} />))}
      </div>
     </div>
    
   
  )
}
