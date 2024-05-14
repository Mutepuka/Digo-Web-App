"use client";

import Link from "next/link";

const HeroSlide = ({slide}) => {

  return (
    <div className="carousel-item-a intro-item bg-image" style={{backgroundImage: `url(${slide.imageUrl})`}}>
        <div className="overlay overlay-a"></div>
        <div className="intro-content display-table">
            <div className="table-cell">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="intro-body">
                                <p className="intro-title-top">
                                    {slide.subtitle}
                                    <br/> {slide.code}
                                </p>
                                <h1 className="intro-title mb-4">
                                    <span className="color-b">{slide.number}</span>{' '}{slide.lineone}
                                    <br/>{slide.linetwo}
                                </h1>
                                <p className="intro-subtitle intro-price">
                                    <Link href={`/properties/${slide._id}`}>
                                    <span className="price-a">
                                    {slide.propstatus} | zmk {slide.price.toLocaleString('en-us')}
                                    </span>
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