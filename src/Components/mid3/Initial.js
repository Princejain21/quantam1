import React from 'react'

export default function Initial(props) {
  return (
    <div className={`col col-md-${props.size} text-white`}>
        <img src={props.image} alt="..." className='img-fluid imge'/>
        <h3 className='mt-5' >Lorem ipsum dolor sit, amet elit. </h3><br/>
        <p>Error distinctio blanditiis fuga rerum alias impedit odit dolorum iure adipisci consequatur?Lorem ipsumError. distinctio blanditiis fuga rerum alias impedit odit dolorum iure adipisci consequatur?Lorem ipsum</p><br/>
        <button className='btn beta text-white'>Read More</button>


    </div>
  )
}
