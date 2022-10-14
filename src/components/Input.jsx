import React from 'react'

export default function Input({value,onChange}) {
    const placeholder='Search Countries by name, capital, languages and currency'
  return (
    <div  >
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
