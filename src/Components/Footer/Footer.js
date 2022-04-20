import React from 'react'
import image from '../../Asset/logo.png'
import '../mid4/mid4.css'
import Iconlist from '../Navbar/Iconlist'
import './footer.css'

export default function Footer() {
    let obj={
        border:"8px solid black"
    }
    return (
        <>
            <div className='row bg-primary  w-100'>
                <div className='col col-md-10 m-auto'>
                    <div className='row w-100'>
                        <div className='col col-md-3 '>

                            <p className='display-4 textColo text-center'><img src={image} alt="..." className='imi ' />moon</p>

                        </div>
                        <div className='col col-md-4 text-center my-auto'><p className='textColo'> copyright@lorem akksdfjmpdkfm</p></div>
                        <div className=' col-md-5 col-sm-10 my-auto'>
                            
                        <Iconlist bord={obj}/>    
                            
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
