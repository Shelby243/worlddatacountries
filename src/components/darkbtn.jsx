import React from 'react'
import { FaRegMoon } from 'react-icons/fa'
export default function Darkbtn({texto,changeBackground}) {
    const text=texto
  return (
    <div  className='switch-holder'>
        <div className='switch-label'>
          <div className='i'>
          <FaRegMoon/>
          </div>
            
          <span>{text}</span>
        </div>
        <div className='switch-toggle'>
          <input
          type="checkbox"
          id="DarkMode"
          onClick={changeBackground}
          />
          <label for="DarkMode"></label>
        </div>
    </div>
   /* <div className='position2'>
        <button onClick={changeBackground}><FaRegMoon/> {text} </button>
    </div> */
  )
}
