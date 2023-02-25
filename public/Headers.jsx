import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css"
const Headers = () => {
  return (
    <div>
      <header>
        <div className="showcase">
            <div className="left">
                <img src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg" alt="" id="img1"/>
                <img src="https://i.blogs.es/cb2ce6/spiderman-no-way-home-cartel/840_560.jpeg" alt="" id="img2" />
                <img src="https://preview.redd.it/bpk3ljgthht71.jpg?auto=webp&s=e387bfe4c459ff4a6804fd5eb38435f4a70d1007" alt="" id="img3" />
            </div>
            <div className="right">
            <iframe width="1024" height="576" src="https://www.youtube.com/embed/F478PvRt74Y" title="SPIDER-MAN: NEW HOME (2024) - FIRST TRAILER | Tom Holland | Zendaya | MCU |TeaserPRO Concept Version" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
            <Link to="/movie" href="https://youtu.be/F478PvRt74Y" target={"_blank"} id="watch">Watch Now</Link>
            </div>
        </div>
      </header>
    </div>
  );
};

export default Headers;
