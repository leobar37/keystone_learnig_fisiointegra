/* swiper component header */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
/*=============================================
=            header component            =
=============================================*/
const SlideHeader = () => {
  return (
    <>
      <Swiper
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        direction="horizontal"
      >
        <SwiperSlide className="slide_content video">
          <video className="video" controls loop autoPlay muted>
            <source src="img/video.MP4" type="video/mp4" />
          </video>
          <div className="about_slide">
            <div className="about_slide_first">
              <div className="content">
                <h3 className="title bg">#1 PHYSIOTHERAPY CLINIC</h3>
                <p className="paragraph">
                  Neque labore in qui quasi deleniti ex dolores aspernatur. Quam
                  eos voluptas totam quasi et. Qui laudantium nemo. Amet magnam
                  sed Neque labore in qui quasi deleniti ex dolores aspernatur.
                  Quam eos voluptas totam quasi et
                </p>
              </div>
            </div>
            <div className="about_slide_second">
              <h3 className="title">siguenos:</h3>
              <ul className="social">
                <a href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="">
                  <i className="fab fa-instagram" />
                </a>
                <a href="">
                  <i className="fab fa-whatsapp" />
                </a>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide slide_content "
          style={{ backgroundImage: 'url("img/bg_right.JPG")' }}
        >
          <div className="about_slide">
            <div className="about_slide_first">
              <div className="content">
                <h3 className="title bg">#1 PHYSIOTHERAPY CLINIC</h3>
                <p className="paragraph">
                  Neque labore in qui quasi deleniti ex dolores aspernatur. Quam
                  eos voluptas totam quasi et. Qui laudantium nemo. Amet magnam
                  sed Neque labore in qui quasi deleniti ex dolores aspernatur.
                  Quam eos voluptas totam quasi et
                </p>
              </div>
            </div>
            <div className="about_slide_second">
              <h3 className="title">siguenos:</h3>
              <ul className="social">
                <a href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a href>
                  <i className="fab fa-instagram" />
                </a>
                <a href>
                  <i className="fab fa-whatsapp" />
                </a>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide slide_content "
          style={{ backgroundImage: 'url("img/second_header.JPG")' }}
        >
          <div className="about_slide">
            <div className="about_slide_first">
              <div className="content">
                <h3 className="title bg">#1 PHYSIOTHERAPY CLINIC</h3>
                <p className="paragraph">
                  Neque labore in qui quasi deleniti ex dolores aspernatur. Quam
                  eos voluptas totam quasi et. Qui laudantium nemo. Amet magnam
                  sed Neque labore in qui quasi deleniti ex dolores aspernatur.
                  Quam eos voluptas totam quasi et
                </p>
              </div>
            </div>
            <div className="about_slide_second">
              <h3 className="title">siguenos:</h3>
              <ul className="social">
                <a>
                  <i className="fab fa-facebook-f" />
                </a>
                <a>
                  <i className="fab fa-instagram" />
                </a>
                <a>
                  <i className="fab fa-whatsapp" />
                </a>
              </ul>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <h2 className="logo">FISIOINTEGRA</h2>
          <button
            className="hamburger burguer hamburger--collapse"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <ul className="menu">
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>servicios</a>
            </li>
            <li>
              <a>encuentranos</a>
            </li>
            <li>
              <a h>contacto</a>
            </li>
          </ul>
        </nav>
      </div>
      <SlideHeader></SlideHeader>
    </header>
  );
};

export default Header;
