import React from 'react';
import cyber from "../../images/cyber.webp";
import photo from "../../images/photo.avif";
import memory from "../../images/memory.avif";
import modernGlass from "../../images/modern-glass.webp";
const Banner = () => {
    return (
        <div className="carousel w-full" style = {{height: "400px"}}>
            <div id="slide1" className="carousel-item relative w-full">
                <img src={cyber} style = {{objectFit: "cover"}} className="w-full"/> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={photo} style = {{objectFit: "cover"}}  className="w-full"/> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={memory} style = {{objectFit: "cover"}}  className="w-full"/> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={modernGlass} style = {{objectFit: "cover"}}  className="w-full"/> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
            </div>
        </div>
    );
};

export default Banner;