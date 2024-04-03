import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


const Card = (props) => {
    
    return (
      <>
        <div className='box btn_shadow '>
          <div className='img'>
            <img src={props.image} alt=''  />
          </div>
          <div className='category d_flex'>
            <span >{props.category}</span>

          </div>
          <div className='title'>
            <h2 >{props.title}</h2>
            <a href='#popup' className='arrow' >
              <i class='fas fa-arrow-right'><FontAwesomeIcon icon={faArrowRight}/></i>
            </a>
          </div>
        </div>
  
        
      </>
    )
  }
  
  export default Card