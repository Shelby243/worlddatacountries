import React from 'react'
import Input from '../components/Input'
import Darkbtn from '../components/darkbtn'
export default function Nav(props) {
  return (
    <nav style={props.style}>
        <div className='nav-bar'>
        
        <Input
            
                value={props.filter}
                onChange={props.handleChange}
            />

        <Darkbtn
       
        texto={props.texto}
        changeBackground={props.changeBackground}
        />
        </div>
    </nav>
    
  )
}
