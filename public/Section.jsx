import React from 'react'
import { Link } from "react-router-dom";
 
import "./css/section.css"
const Section = () => {
  return (
    <section>
        <div className="container">
      <div className="cards">

        <div className="card">
          <img src='https://img.tamindir.com/2022/01/476723/spiderman-no-way-home.jpg' className="card_img"/>
          <div className="card_title"><h4>Spiderman : NO Way Home</h4></div>
          <Link to="/movie"  className='btn btn-primary w-75'>Watch Now</Link>
        </div>
        <div className="card">
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3AF3175CB9CFF25C84C3404452D44D1248796FDD14993B324ADE0789ADB3BF5E/scale?width=1200&aspectRatio=1.78&format=jpeg' className="card_img"/>
          <div className="card_title"><h4>LOKI</h4></div>
          <Link to="/movie" className='btn btn-primary w-75'>Watch Now</Link>
        </div>
        <div className="card">
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1ABC3DB500EAB0472C2EA6EF1C3F5E925D2630A1E6E2243E9723967FD8E125F9/scale?width=1200&aspectRatio=1.78&format=jpeg' className="card_img"/>
          <div className="card_title"><h4>Spiderman: Far from Home</h4></div>
          <Link to="/movie" className='btn btn-primary w-75'>Watch Now</Link>
        </div>
        <div className="card">
          <img src='https://img.okezone.com/content/2022/12/14/206/2727175/sinopsis-film-spider-man-homecoming-tom-holland-buktikan-layak-jadi-avengers-kQUkY5cxeL.jpg' className="card_img"/>
          <div className="card_title"><h4>Spiderman: Home coming</h4></div>
          <Link to="/movie" className='btn btn-primary w-75'>Watch Now</Link>
        </div>
        <div className="card">
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/863E75A035911DBA10F8D7EE1E433A12A1BF4915670B66597AC31C585A291942/scale?width=1200&aspectRatio=1.78&format=jpeg' className="card_img"/>
          <div className="card_title"><h4>Avengers: End Game</h4></div>
          <Link to="/movie"  className='btn btn-primary w-75'>Watch Now</Link>
        </div>
        <div className="card">
          <img src='https://itc.ua/wp-content/uploads/2017/11/Thor_Ragnarok_i01.jpg' className="card_img"/>
          <div className="card_title"><h4>Tor 3: Ragnarog</h4></div>
          <Link to="/movie" className='btn btn-primary w-75'>Watch Now</Link>
        </div>
        <div className="card">
          <img src='https://images.thedirect.com/media/article_full/ant-man-quantumania-genre-mcu-marvel.jpg' className="card_img"/>
          <div className="card_title"><h4>Ant-Man : Quantumania</h4></div>
          <Link to="/movie"  className='btn btn-primary w-75'>Watch Now</Link>
        </div>
        <div className="card">
          <img src='https://images.thedirect.com/media/article_full/doctor-strange-multiverse-of-madness-review.jpg' className="card_img"/>
          <div className="card_title"><h4>Doctor Strange 3</h4></div>
          <Link to="/movie"  className='btn btn-primary w-75'>Watch Now</Link>
        </div>
        <div className="card">
          <img src='https://www.forbes.com.au/wp-content/uploads/2023/02/blackpantherwakandaforever_lob_mas_mob_04.jpg' className="card_img"/>
          <div className="card_title"><h4>Wakanda Forever</h4></div>
          <Link to="/movie"  className='btn btn-primary w-75'>Watch Now</Link>
        </div>
        </div>

      </div>
    </section>
  )
}

export default Section
