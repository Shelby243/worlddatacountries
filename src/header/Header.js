import React from 'react'
import Input from '../components/Input'
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
        
        <Input
                value={props.filter}
                onChange={props.handleChange}
            />
        </div>
    </header>
    
  )
}
