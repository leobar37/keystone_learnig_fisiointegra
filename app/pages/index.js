import React , { useState , useEffect , useRef} from 'react'
import Head from 'next/head';

import  Header from '../components/landing/header';
import Footer from '../components/landing/Footer';
import RowGalery from '../components/landing/rowgalery';
import Menufixed from '../components/menufixed';

const Main = ()=>{
     return   <main className="main">
        <h2 className="title md text-center subtitle">Nuestros servicios</h2>
        <section className="one_section">
          <div className="one_section_left">
            <img src="/img/header_png.png" alt="" />
          </div>
          <div className="one_section_right">
            <article className="card_info">
              <h3 className="title text-left">Terapia Física</h3>
              <div className="content_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Suscipit, quia?
                  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Suscipit, quia?
                </p> 
                <p>
                  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Suscipit, quia?
                  adipisicing elit. Suscipit, quia?
                  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Suscipit, quia?
                  adipisicing elit. Suscipit, quia?
                </p> 
              </div>
            </article>
          </div>
        </section>
        <div className="row_social">
          <h1 className="title">
            check more videos in youtube 
          </h1>
          <div className="icon">
            <i className="fab fa-youtube" />
          </div>
        </div>
        <section className="two_section">
          <div className="rectangle">
          </div>
          <article className="card_info">
            <h3 className="title text-left">Terapia Física</h3>
            <div className="content_text">
              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Suscipit, quia?
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Suscipit, quia?
              </p> 
              <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Suscipit, quia?
                adipisicing elit. Suscipit, quia?
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Suscipit, quia?
                adipisicing elit. Suscipit, quia?
              </p> 
            </div>
          </article>
        </section>
        <section className="section_three">
          <h2 className="title bg">PHYSIOTHERAPY ADVANTAGES</h2>
          <div className="cards">
            <div className="card">
              <div className="contain_icon">
                <img src="/img/icons/hearticon.png" alt="" />                
              </div>
              <div className="content">
                <h3 className="title">FULLY PERSONALIZE
                  APPROACH</h3>
                <p className>
                  Reiciendis et unde aut qui dolorem provident eaque.
                  Error exercitationem vitae modi dolores. 
                  Et laborum quibusdam ad velit ea culpa beatae.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="contain_icon">
                <img src="/img/icons/hearticon.png" alt="" />                
              </div>
              <div className="content">
                <h3 className="title">FULLY PERSONALIZE
                  APPROACH</h3>
                <p >
                  Reiciendis et unde aut qui dolorem provident eaque.
                  Error exercitationem vitae modi dolores. 
                  Et laborum quibusdam ad velit ea culpa beatae.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="contain_icon">
                <img src="/img/icons/hearticon.png" alt="" />                
              </div>
              <div className="content">
                <h3 className="title">FULLY PERSONALIZE
                  APPROACH</h3>
                <p className>
                  Reiciendis et unde aut qui dolorem provident eaque.
                  Error exercitationem vitae modi dolores. 
                  Et laborum quibusdam ad velit ea culpa beatae.
                </p>
              </div>
            </div>
          </div> 
        </section>
       {/* row galery */}
       <RowGalery>

       </RowGalery>
        <div className="row_social space_top_row_social" style={{marginTop: '0.2rem'}}>
          <h1 className="title">
            check more videos in instagram 
          </h1>
          <div className="icon">
            <i className="fab fa-instagram" />
          </div>
        </div>
        <section className="meet_us">
          <h1 className="title text-center bg">
            Encuentranos
          </h1>
          <div className="meet_us_contact">
            <div className="content">
              <i className="fas fa-map-marker-alt" />
              <h3 className>Av. Elvira García y García 847, Lambayeque 14009</h3>
            </div>
            <div className="content">
              <i className="fas fa-phone-alt" />
              <h3 className>+51961061791</h3>
            </div>
          </div>
          <div className="map">
            <iframe onload="console.log('load map')" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.983178474665!2d-79.85422834209221!3d-6.773949335288759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef18df4245c3%3A0x256fc6bd1e70ebe5!2sJean%20Paul%20Coach!5e0!3m2!1ses-419!2spe!4v1604080831680!5m2!1ses-419!2spe" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
          </div>
        </section>
      </main>
}
function Index(props) {
    //  const  count =  setCountm();
    return (
      <>
       <Head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous" />
     </Head>

      <Header />
     <Main />
     <Footer />
      <Menufixed   />
      </> 
    )
}




export default Index;
