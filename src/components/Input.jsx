import React from 'react'

import {FaSearch} from "react-icons/fa"

export default function Input({value,onChange}) {
    const placeholder='Search for Country ... '
  return (
    <div className='position1'>
        
        <input

            
            type='text'
            name='search'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
    </div>
  )
}
