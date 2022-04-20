import React from 'react'
import './mid2.css'
export default function Gola(props) {
  return (
    <div className={`col col-md-${props.size} my-2  justify-content-center `}>
    <i class={`fa fa-${props.type} text-white gola mx-1 pt-4 `}></i><br/>
    <h3 class={`${props.textcolor}`}>{props.para}</h3><br/>
    <button className='btn btn-outline-dark baten'> More </button><br/>


    </div>
  )
}
