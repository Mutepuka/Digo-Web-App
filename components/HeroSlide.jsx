"use client";

import Link from "next/link";

const HeroSlide = ({slide}) => {
    console.log('gb image', slide.imageUrl)

  return (
    <div className="carousel-item-a intro-item bg-image" style={{backgroundImage:`url(${slide.bgImg})`}}>
        <div className="overlay overlay-a"></div>
        <div className="intro-content display-table">
            <div className="table-cell">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="intro-body">
                                <p className="intro-title-top">{slide.subtitle}
                                <br/>{slide.code}
                                </p>
                                <h1 className="intro-title mb-4">
                                    <span className="color-b">{slide.number}</span>{' '}{slide.lineone}<br/>{slide.linetwo}
                                </h1>
                                <p className="intro-subtitle intro-price">
                                    <Link href={`/properties/${slide.slug}`}>
                                        <span className="price-a">{slide.type} | ZMW {slide.price.toLocaleString('en-US')}</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default HeroSlide