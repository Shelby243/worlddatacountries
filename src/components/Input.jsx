/* eslint-disable react/jsx-no-undef */
import React from 'react'
import SearchIcon from './icons/SearchIcon'


export default function Input({value,onChange}) {
    const placeholder='Search for Country ... '
    
  return (
    <div className='position1'>
      <SearchIcon/>
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
