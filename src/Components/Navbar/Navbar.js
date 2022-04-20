import React from 'react'
import Iconlist from './Iconlist'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='row bg-dark justify-content-center w-100 py-3 sticky-top'>
            <div className='col col-md-8  mx-auto '>
                <nav className="navbar   navbar-expand-lg navbar-white bg-dark ">
                    <a className="navbar-brand mx-4 py-2 text-white" href="#f"><span className='text-primary pr-2'>&#9763;</span>moon</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white">&#9776;</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="nav-item nav-link active mx-2 py-2 " href="#f">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link px-2 py-2 " href="#f">about</a>
                            <a className="nav-item nav-link px-2 py-2 " href="#f">service</a>
                            <a className="nav-item nav-link px-2 py-2 " href="#f">portfolio</a>
                            <a className="nav-item nav-link px-2 py-2 " href="#f">blog</a>
                            <a className="nav-item nav-link px-2 py-2 " href="#f">contact</a>
                           
                        </div>
                        <div className='bg-dark py-2'>
                       <Iconlist/>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}
