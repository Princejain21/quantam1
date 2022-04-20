import React from 'react'
import Initial from './Initial'
import './mid3.css'
import image2 from '../../Asset/pic2.jpg'
import image3 from '../../Asset/pic2.jpg'


export default function Middle3() {
  return (
 <div className='row bg-primary py-4 justify-content-center'>
<Initial size="3" image={image2}/>
<Initial size="3" image={image2}/>
<Initial size="3" image={image3}/>
    </div>
  )
}
