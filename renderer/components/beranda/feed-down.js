import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import slick from '../../assets/css/slick';
import theme from '../../assets/css/slick-theme';
import Carousel from 'nuka-carousel';
import Link from 'next/link'
import Image from "react-shimmer";
import { base_api, client_id } from "../../config-api";
import Axios from "axios";
import Router from 'next/router';


class Feeddown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pustaka: [],
    };
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  handleClickImage = () => {
    Router.push("/main/koleksi");
  }

  getPustaka() {
    Axios.get(
    `${base_api}/libraries/sort/populer?client_id=${client_id}&per_page=20&page=1`
    )
    .then(res => {
      this.setState({ pustaka: res.data.data.data });
    })
    .catch(err => {
      console.log(err);
    });
  }


  componentDidMount() {
    this.getPustaka()
  }

  render() {  
    function NextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          src="../static/images/feeds/next_slide_epustaka.png"
          className="slick-next"
          style={{
            ...style,
            width: "20px",
            marginRight: "0px",
            top: "50px",
            width: "20px",
          }}
          onClick={onClick}
        />
      );
    }

    function PrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          src = "../static/images/feeds/prev_slide_epustaka.png"
          className = "slick-prev"
          style={{
            ...style,
            top:"50px",
            display: "block",
            width: "20px",
          }}
          onClick={onClick}
        />
      );
    }
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      variableWidth: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div className="container-fluid">
        <div className="row align-content-between">
          <div className="col-7 pl-5">
            <div className="row align-content-between">
              <div className="col-6 text-left mt-3">
                <p> ePustaka Popular </p>
              </div>
              <div className="col-6 text-right mt-3">
                <Link
                  href={{
                    pathname: "/main/koleksi-buku",
                    query: {
                      jenis: "epustaka",
                      kategori_id: 7,
                      namakategori: "ePustaka Popular"
                    }
                  }}
                >
                <a> Lihat Selengkapnya</a>
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Slider {...settings} className="epusBook2">
                  {this.state.pustaka.map((pustakas, i) => (
                    <div key={i}>
                      <Image 
                      src={pustakas.Library.logo} 
                      onClick={this.handleClickImage}
                      width={100}
                      height={100}
                      />
                      <div className="row pl-3 pt-2">
                        <p className="card-text text-left">{pustakas.Library.name.split('', 25)}</p>
                      </div>
                      <div className="row pl-3 pt-2">
                        <small className="text-muted">{pustakas.Statistic.total_members} Member</small>
                      </div>
                    </div>
                  ))}
                </Slider>
                <style jsx> {theme}</style>
                 <style jsx>{slick}</style> 
              </div>
            </div>
          </div>

          <div className="col-5 pr-5">
            <div className="row align-content-between">
              <div className="col-6 text-left mt-3">
                <p> Kabar Terkini </p>
              </div>
              <div className="col-6 text-right mt-3">
                <a href="#"> Lihat Selengkapnya </a>
              </div>
            </div>
            <Carousel 
              height='110px'
              autoplay={true}
              dragging={true}
              wrapAround={true}
              withoutControls={false}
              // speed='5000'

              renderCenterLeftControls={({ previousSlide }) => (
                <button className="buttonControl" onClick={previousSlide} >
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button className="buttonControl" onClick={nextSlide}>
                </button>
              )}
            >
              <div>
                <img src="../static/images/feeds/image1.png" />
              </div>
              <div>
                <img src="../static/images/feeds/image2.png" />
              </div>
              <div>
                <img src="../static/images/feeds/image1.png" />
              </div>
              <div>
                <img src="../static/images/feeds/image2.png" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Feeddown;
