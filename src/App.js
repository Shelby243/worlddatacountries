import React from 'react'
import {useState} from 'react'
import { countriesData } from './data/countries'
import Header from './header/Header'
import Main from './main/Main'
import './style/App.css'
import Nav from './nav/Nav'
export default function App() {
    const [filter,setFilter]=useState('')
    
    const[loggin,setLoggin]=useState(false)

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
    
    const changeBackground=()=>{
       
        // eslint-disable-next-line no-const-assign
        
        setLoggin(!loggin)
    }
    let texto

    if(loggin){
        
        texto='Dark Mode'
    }
    else texto='Light Mode'

  return (
    <div style={{backgroundColor:loggin ?"#202c37":"#fafafa"}} className='app'>
        <Header

        number={countriesData.length} 
        info={info}
        
        />
        <Nav
             style={{backgroundColor:loggin ?"#202c37":"#fafafa"}}
            filter={filter}
            handleChange={searchText.bind(this)}
            texto={texto}
            changeBackground={changeBackground.bind(this)}
        />
        <Main
             style={{backgroundColor:loggin ?"#202c37":"#fafafa"}}
            countries={countriesData}
            countrySearch={countrySearch}
            style1={{backgroundColor:loggin?"#2b3945":"#ffffff" 
                    }}
        
            
        />
      
    </div>
  )
}
