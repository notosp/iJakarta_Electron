import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import slick from '../../assets/css/slick'
import theme from '../../assets/css/slick-theme';
import Link from "next/link";
import { base_api, client_id } from "../../config-api";
import Axios from "axios";
import Cookies from 'js-cookie';
import ContentLoader from "react-content-loader";
import Image from "react-shimmer";
import animationData from "../../static/images/intro/loading2";
import Router from 'next/router'

class Feedcenter extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      book: [],
      items: Array.from({ length: 20 }),
      loading: true,
    };
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  handleClickImage = () => {
    console.log('click img');
  }

  getBook = () => {
    const token = Cookies.get('token')
    setTimeout(() => {
      Axios.get(
        `${base_api}/books/sort/recommended?client_id=${client_id}&access_token=${token}&limit=20`
      ).then(res => {
        if (res.data.meta.code === 200) {
          const newBooks = res.data.data.data;
          this.setState(prev => {
            return {
              loading: false,
              book: this.state.book.concat(newBooks),
            };
          });
          console.log(this.state.page);
          
        } else {
          this.setState({ hasMore: false });
        }
      })
    }, 500)
  }

  componentDidMount() {
    this.getBook()
  }

  render() {
    function NextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <img
          src="../static/images/feeds/next_slide_book.png"
          className={className}
          style={{
            ...style,
            width: "20px",
            marginRight: "0px",
            top: "65px",
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
          src = "../static/images/feeds/prev_slide_book.png"
          className={className}
          style={{
            ...style,
            top:"65px",
            width: "20px",
            color: "White",
          }}
          onClick={onClick}
        />
      );
    }
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      initialSlide: 0,
      autoplay:false,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      
      variableWidth: true,
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
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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

    const defaultOptions = {
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    let content; 

    if(this.state.loading) {
      content = (
        <ContentLoader
          height={900}
          width={1360}
          primaryColor="#e0e0e0"
          secondaryColor="#fab647"
        >
          <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
        </ContentLoader>
      );
    } else {
      content = (
        <div className="container-fluid mt-4">
          <div className="row justify-content-between">
            <div className="col-6 text-left">
              <p className="recBookText">Rekomendasi Buku</p>
            </div>

            <div className="col-6 text-right">
              <Link
                href={{
                  pathname: "/main/koleksi-buku",
                  query: {
                    jenis: "buku",
                    kategori_id: 0,
                    namakategori: "recommended"
                  }
                }}>
                <a style= {{color:'white'}}>Lihat Selengkapnya</a>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Slider {...settings} className="recBook">
              {this.state.book.map((books, i) => (
                <div key={i}>
                <Link 
                  href={{
                    pathname: "/main/detail-buku",
                    query: {
                      book_id: books.Book.id,
                      // kategori_id: Router.query.kategori_id,
                      // namakategori: Router.query.namakategori
                    } }}>
                  <Image 
                  src={books.Book.cover} 
                  onClick={this.handleClickImage} 
                  style={{ objectFit: "cover"}}
                  width={100}
                  height={130} />
                </Link>
                  <div className="row pl-3 pt-2">
                    <p className="card-text text-left">{books.Book.title.split('',28 )}</p>
                  </div>
                </div>
              ))}
              </Slider>
              <style jsx>{slick}</style>
              <style jsx>{theme}</style>
            </div>
          </div>
        </div>
      );
    }
  return (
      <div>
        {content}
      </div>
    );
  }
}


export default Feedcenter;
