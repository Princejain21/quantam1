import React from 'react'
import './Navbar.css'

export default function Iconlist(props) {
    return (
        <ul className='list-group   d-flex   flex-row ml-4 ' id='list1'>
            <a className={`list-group-item list-group-item-action  mx-1 rounded-circle           bg-primary  text-center `}   style={props.bord} href='
                                #foo'>
                <i class="fa fa-facebook-f text-dark   "></i>
            </a>
            <a className={`list-group-item list-group-item-action  mx-1 rounded-circle  bg-primary   text-center `} href='#foo'  style={props.bord}>
                 <i class="fa fa-instagram text-dark   "></i>
            </a>
            <a className={`list-group-item list-group-item-action  mx-1 rounded-circle           bg-primary  text-center `  } style={props.bord} href='
                                #foo'>
                <i class="fa fa-skype text-dark   "></i>
            </a>
            <a className={`list-group-item list-group-item-action  mx-1 rounded-circle           bg-primary  text-center`}   style={props.bord} href='
                                #foo'>
                <i class="fa fa-linkedin text-dark   "></i>
            </a>
            <a className={`list-group-item list-group-item-action  mx-1 rounded-circle           bg-primary  text-center`}    style={props.bord}href='
                                #foo'>
                <i class="fa fa-whatsapp text-dark   "></i>
            </a>
            <a className={`list-group-item list-group-item-action  mx-1 rounded-circle           bg-primary  text-center `}   style={props.bord} href='
                                #foo'>
                <i class="fa fa-twitter text-dark   "></i>
            </a>

        </ul>
    )
}
