import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import slick from "../../../assets/css/slick.js";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import ContentLoader from "react-content-loader";
import { base_api, client_id } from "../../../config-api";
import Axios from "axios";
import Image from "react-shimmer";
import animationData from "../../../static/images/intro/loading2.json";
import Lottie from "react-lottie";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class Feedcenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      items: Array.from({ length: 20 }),
      hasMore: true,
      loading: true,
      page: 4
    };
  }

  getBook = () => {

    setTimeout(() => {
      Axios.get(
        `${base_api}/landing?client_id=${client_id}&language=en&per_page=10&page=${this.state.page}`
      ).then(res => {
        if (res.data.meta.code === 200) {
          const newBooks = res.data.data.data;
          this.setState(prev => {
            return {
              loading: false,
              book: this.state.book.concat(newBooks),
              page: prev.page + 3
            };
          });
          // console.log(this.state.page);
          
        } else {
          this.setState({ hasMore: false });
        }
      })
    }, 500)
  }

  componentDidMount() {
    this.getBook();
  }

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 8,
      initialSlide: 0,
      autoplay: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1216,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true
          }
        },

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true
          }
        },

        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
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
    if(this.state.loading){
      content = (
        <ContentLoader
          height={900}
          width={1360}
          speed={2}
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
    }else{
      content = (
        <InfiniteScroll
          dataLength={this.state.book.length}
          next={this.getBook}
          hasMore={this.state.hasMore}
          loader={<Lottie options={defaultOptions} height={80} width={80} />}
        >
          {this.state.book.map((books, i) => (
            <div className="container-fluid mt-4" key={i}>
              <div className="row justify-content-between">
                <div className="col-6 text-left">
                  <p className="recBookText">
                    {books.category_id === 0
                      ? "Rekomendasi Buku"
                      : books.category}
                  </p>
                </div>

                <div className="col-6 text-right">
                  <Link
                    href={{
                      pathname: "/main/koleksi-buku",
                      query: {
                        jenis: "buku",
                        kategori_id: books.category_id,
                        namakategori: books.category
                      }
                    }}
                  >
                    <a className="recBookText1">Lihat Selengkapnya</a>
                  </Link>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <Slider {...settings} className="recBook">
                    {books.data.map(buku => (
                      // console.log(buku),
                      <div key={buku.id}>
                        <Image
                          src={buku.cover}
                          onClick={this.handleClickImage}
                          width={100}
                          height={130}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="row pl-3">
                          <p className="card-text text-justify">
                            {buku.title.split("", 10)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                  <div className="mb-2" />
                  <style jsx>{slick}</style>
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
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
