import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import splash from "../../assets/css/splash";
import Router from 'next/router'
import { auth } from "../../utils/auth";
import nextCookie from "next-cookies";


import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonPlay
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index:0
    };
  }

  startNow=(ctx)=>{
    const { token } = nextCookie(ctx);
    if (!token) {
      Router.push("/intro/intro");
    } else {
      Router.push("/main/dashboard");
    }
  }

  render() {
    return (
      <div className="text-center">
        <div>
          <main>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={50}
              totalSlides={2}
              isPlaying={15000}
              infinite={true}
            >
              <Slider className="splash">
                <Slide index={0}>
                  <div>
                    <img
                        src="../../static/images/intro/1_Content_Illustration.png"
                        className="img-intro"
                    />
                  </div>
                  <div>
                    <img src="../../static/images/intro/1_Content_Text.png" />
                  </div>
                  <div>
                    <span className="dot-active"></span><span className="dot"></span>
                  </div>
                  <ButtonNext className="btn-intro">Lanjutkan</ButtonNext>
                </Slide>

                <Slide index={1}>
                  <div>
                    <img
                        src="../../static/images/intro/2_Content_Illustration.png"
                        className="img-intro"
                    />
                  </div>
                  <div>
                    <img src="../../static/images/intro/2_Content_Text.png" />
                  </div>
                  <div>
                     <span className="dot"></span><span className="dot-active"></span>
                  </div>
                  <ButtonPlay className="btn-intro" onClick={this.startNow}>Mulai Sekarang</ButtonPlay>
                </Slide>
              </Slider>
            </CarouselProvider>
          </main>
        </div>

        <style jsx>{splash}</style>
        </div>
    );
  }
}

export default Splash;
