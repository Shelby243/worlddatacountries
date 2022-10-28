import React from 'react'

export default function Header(props) {
    const {
        title,
        text
    }=props.info
    const txt='countries.'
  return (
    <header>
        <div className='country-header'>
        <h1>{title}</h1><br/>
        <p>{text} <b>{props.number}</b> {txt} </p>
        
        
        </div>
    </header>
    
  )
}
