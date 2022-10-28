import React from 'react'
import {useState} from 'react'
import { countriesData } from './data/countries'
import Header from './header/Header'
import Main from './main/Main'
import './style/App.css'
import Nav from './nav/Nav'
export default function App() {
    const [filter,setFilter]=useState('')
    
    const info={
        title:'World Countries Data',
        text:'Currently, we have ',
    }
    const searchText=(e)=>{
        setFilter(e.target.value)
    }
    let countrySearch=countriesData.filter(item=>{
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()) 
           
            )
            
    })
    
    

  return (
    <div className='app'>
        <Header
        number={countriesData.length} 
        info={info}
        
        />
        <Nav
            filter={filter}
            handleChange={searchText.bind(this)}
        />
        <Main
            countries={countriesData}
            countrySearch={countrySearch}
        />
      
    </div>
  )
}
