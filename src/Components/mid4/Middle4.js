import React from 'react'
import image from '../../Asset/logo.png'
import './mid4.css'
import image1 from '../../Asset/ring.png'
export default function Middle4() {
    return (
        <>
            <div className='row bg5 '>
                <div className='col col-md-10 m-auto bg-dark'>
                    <div className='row'>
                        <div className='col col-md-2'>
                            <img src={image} alt="..." />
                        </div>
                        <div className='col col-md-6'>
                            <h2 className='pt-2 text-white'> Join to our Newsletter. </h2><br />
                            <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error distinctio blanditiis fuga rerum alias impedit odit dolorum iure adipisci consequatur.</p>
                        </div>
                        <div className=' col col-md-3 my-auto py-5 justify-content-center grad'>
                            <h1 className='text-center' >
                                <a href='#f' className='text-center'>Sign Up</a>
                            </h1>
                        </div>
                    </div>

                </div><br />

            </div>
            <div className='row border-top bg5'>
                <div className='col-md-10 m-auto py-5 text-center '>
                    <div className='row'>
                        <div className='col col-md-4 col-sm-6 cl2'>
                            <div className='row'>
                                <div className='col col-12  grad border border-light fonti justify-content-center text-center'>
                                    <img src={image1} alt='...' className='img-fluid' />
                                </div>
                                <div className='col col-12 text-left text-white'>
                                    <h1 className='py-3'> ABOUT US</h1>
                                    <p className='text-secondary text-left '>m ipsum dolor sit, amet consectetur adipisicing elit. Error distinctio blanditiis fuga rerum alias impedit odm ipsum dolor sit, amet consectetur adipisicing elit. Error distinctio blanditiis fuga rerum alias impedit od</p>

                                </div>
                            </div>
                        </div>
                        <div className='col col-md-4 col-sm-6'>
                            <div className='row'>
                                <div className='col col-md-12 text-white text-left'>
                                    <p className='display-4'><b>CATEGORIES</b></p>
                                </div>
                                <div className='w-100'></div>
                                <div className='col col-md-6 cl1'>
                                    <div className='list-group border-right border-secondary list-group-flush'>
                                        <a href='#f' className='list-group-item text-white list-group-item-action bg-dark'><span className='text-primary mr-2'>&#10095;</span>hello bhai</a>
                                        <a href='#f' className='list-group-item text-white list-group-item-action bg-dark'><span className='text-primary mr-2'>&#10095;</span>htiioltiis fuga </a>
                                        <a href='#f' className='list-group-item text-white list-group-item-action bg-dark'><span className='text-primary mr-2'>&#10095;</span>distinctio blanditiis fuga </a>
                                        <a href='#f' className='list-group-item text-white list-group-item-action bg-dark'><span className='text-primary mr-2'>&#10095;</span>hello bhai</a>
                                        <a href='#f' className='list-group-item text-white list-group-item-action bg-dark'><span className='text-primary mr-2'>&#10095;</span>hello  fdgdf bhai</a>
                                        <a href='#f' className='list-group-item text-white list-group-item-action bg-dark'><span className='text-primary mr-2'>&#10095;</span>hello bnsfrf bhai</a>
                                        <a href='#f' className='list-group-item text-white list-group-item-action bg-dark'><span className='text-primary mr-2'>&#10095;</span>hellog bhai</a>
                                        <a href='#f' className='list-group-item text-white list-group-item-action bg-dark'><span className='text-primary mr-2'>&#10095;</span>hello bhai</a>
                                    </div>
                                </div>
                                <div className='col col-md-6 cl2 '>
                                    <div className='list-group  list-group-flush'>
                                        <a href='#f' className='list-group-item text-white list-group-item-action bg-dark'><span className='text-primary mr-2'>&#10095;</span>hello bhai</a>
                                        <a href='#f' className='list-group-item text-white list-group-item-action bg-dark'><span className='text-primary mr-2'>&#10095;</span>hello bhai</a>
                                        <a href='#f' className='list-group-item text-white list-group-item-action bg-dark'><span className='text-primary mr-2'>&#10095;</span>hello bhai</a>
                                        <a href='#f' className='list-group-item text-white list-group-item-action bg-dark'><span className='text-primary mr-2'>&#10095;</span>hello bhai</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col col-md-4 col-sm-6'>
                            <div className='row '>
                                <div className='col col-md-12 text-white text-left'>
                                    <p className='display-4'><b>CONTACT US</b></p>
                                </div>
                                <div className='col col-12'>
                                    <div class="input-group my-3">
                                        <input type="text" class="form-control inputBackgroud" placeholder="Name" />
                                        <span>
                                            <i class="fa fa-user bg5 form-control" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div class="input-group my-3 ">
                                        <input type="email" class="form-control inputBackgroud bg5" placeholder="Email" />
                                        <span>
                                            <i class="fa fa-envelope bg5 form-control" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className='input-group my-3'>
                                        <label className="sr-only">message:</label>
                                        <textarea class="form-control bg5 inputBackground p-2" placeholder='Message' />
                                    </div>
                                    <button className='btn text-primary bg5 border border-primary'>send message</button>
                                </div>


                            </div>


                        </div>



                    </div>
                </div>

            </div>
        </>
    )
}
