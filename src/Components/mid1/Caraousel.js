import React from 'react'
import image from '../../Asset/moon.jpg'
import './carous.css'

export default function Caraousel() {
  return ( 
   <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner text-center">

                <div className="carousel-item active" data-interval="1000">
                    <img className="d-block w-100" src={image} alt="..."/>
                    <div className="carousel-caption  d-sm-block">
                        <h1 className="text-center">Minimalstic PSD Template</h1>
                        <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error distinctio blanditiis fuga rerum alias impedit odit dolorum iure adipisci consequatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quisquam quod illo reprehenderit fugit quos!.</p> <br/>
                        <button  className=' buttan btn btn-dark text-primary border border-primary'>Learn More</button>
                    </div>
                </div>
                <div className="carousel-item " data-interval="1000">
                    <img className="d-block w-100" src={image} alt="..."/>
                    <div className="carousel-caption  d-sm-block">
                        <h1 className="">cool nature</h1>
                        <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error distinctio blanditiis fuga rerum alias impedit odit dolorum iure adipisci consequatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quisquam quod illo reprehenderit fugit quos!</p> <br/>
                        <button  className=' buttan btn  text-primary border border-primary'>Learn More</button>
                    </div>
                </div>
                <div className="carousel-item" data-interval="1000">
                    <img className="d-block w-100" src={image} alt="..."/>
                    <div className="carousel-caption d-sm-block">
                        <h1 className="text-center">cool nature</h1>
                        <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error distinctio blanditiis fuga rerum alias impedit odit dolorum iure adipisci consequatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quisquam quod illo reprehenderit fugit quos!</p> <br/>
                        <button  className=' buttan btn text-primary border border-primary'>Learn More</button>
                    </div>
                </div>

                <a href="#myCarousel" className="carousel-control-prev " data-slide="prev">
                    <span className="carousel-control-prev-icon border border-primary p-2"></span>
                </a>
                <a href="#myCarousel" className="carousel-control-next " data-slide="next">
                    <span className="carousel-control-next-icon border border-primary p-2"></span>
                </a>
    </div>
</div>
  )
}
