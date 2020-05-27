import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-web-tabs/dist/react-web-tabs.css";
import Link from "next/link";
import Router from "next/router";
import Axios from "axios";
import { base_api, client_id, client_secret } from "../../../../../config-api";
import Image from "react-shimmer";
import animationData from "../../../../../static/images/intro/loading2";
import Lottie from "react-lottie";
import slick from "../../../../../assets/css/slick";
import InfiniteScroll from "react-infinite-scroll-component";
import ContentLoader from "react-content-loader";
import Slider from "react-slick";
import Cookies from 'js-cookie';

class Layouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navName: "",
      namakategori: "",
      library_id: "",
      pustaka: [],
      items: Array.from({ length: 20 }),
      hasMore: true,
      loading: true,
      page:4
    };
  }

  getBook = () => {
    const library_id = Router.query.library_id;
    const token = Cookies.get('token')
    setTimeout(() => {
      Axios.get(
        `${base_api}/landing_sort_library?client_id=${client_id}&language=en&per_page=20&page=${this.state.page}&access_token=${token}&library_id=${library_id}`
      ).then(res => {
        if (res.data.meta.code === 200) {
          const newBooks = res.data.data.data;
          console.log("isi data:", newBooks)
          this.setState(prev => {
            return {
              loading: false,
              book: this.state.pustaka.concat(newBooks),
              page: prev.page + 3
            };
          });
          console.log(this.state.page);
        } else {
          this.setState({ hasMore: false });
        }
      });
    }, 500);
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  componentDidMount() {
    this.getBook();
    let routeName = Router.query.navName;
    this.setState({
      navName: routeName,
      namakategori: Router.query.namakategori,
      library_id: Router.query.library_id
    });
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
            slidesToShow: 7,
            slidesToScroll: 7,
            infinite: true
          }
        },

        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
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
    const library_id = this.state.library_id;
    console.log("library_id:", library_id)
    if (this.state.loading) {
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
    } else {
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
                  <p>
                    {books.category_id === 8
                      ? "BSE Siswa"
                      : books.category}
                  </p>
                </div>

                <div className="col-6 text-right">
                  <Link
                  href={{
                    pathname: "/main/epustaka-more-buku",
                    query: {
                      jenis: "semua",
                      library_id: library_id,
                      kategori_id: books.category_id,
                      namakategori: books.category
                    }                  
                  }}
                >
                  <a>Lihat Selengkapnya</a>
                </Link>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <Slider {...settings} className="book">
                    {books.data.map(buku => (
                      <div key={buku.id}>
                         <Link href={{
                          pathname: "/main/detail-buku",
                          query: {
                            book_id: buku.id,
                            kategori_id: Router.query.kategori_id,
                            namakategori: Router.query.namakategori
                          } }}>
                        <Image
                            src={buku.cover}
                            width={100}
                            height={130}
                            style={{ objectFit: "cover" }}
                          />
                        </Link>
                        <div className="row pl-3">
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
export default Layouts;
