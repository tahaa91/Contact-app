import React, { useContext } from 'react';
import './head_style.css';
import Affichage from './Affichage'
import { test } from './Context';

export default function Paff() {

  const {sortedArray} = useContext(test)


  return (
    <div>
      <h1 className='titre'>CONTACT LIST</h1>
      <div className='bar'>
        <input type="button" value="trier contact" className='tri'/>
        <div className='search-container'>
          <form >
            <input type="text" placeholder="Search.." onClick={()=>sortedArray} className='p' name="search"/>
          </form>
        </div>
      </div>

      <Affichage />
    </div>
  )
}

