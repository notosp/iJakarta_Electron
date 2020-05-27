import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-web-tabs/dist/react-web-tabs.css";
import Link from "next/link";
import Router from "next/router";
import Image from "react-shimmer";
import animationData from "../../../../../static/images/intro/loading2";
import slick from "../../../../../assets/css/slick";
import InfiniteScroll from "react-infinite-scroll-component";
import Slider from "react-slick";

class Layouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navName: "",
      hasMore: true,
      loading: true,
      page:4
    };
  }

  componentDidMount() {
    let routeName = Router.query.navName;
    this.setState({
      navName: routeName,
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
    // const library_id = this.state.library_id;
    // console.log("library_id:", library_id)
    if (this.state.loading) {
      content = (
        <InfiniteScroll>
          <div className="container-fluid mt-4">
            <div className="row justify-content-between">
             <div className="col-6 text-left">
              <p> Karya Tulis </p>
             </div>

             <div className="col-6 text-right">
              <Link href={{ pathname: "/main/epustaka-more-buku" }}>
               <a>Lihat Selengkapnya</a>
              </Link>
             </div>
            </div>

            <div className="row">
             <div className="col-12">
              <Slider {...settings} className="book">
                <div>
                 <Link href={{ pathname: "/main/detail-buku" }}>
                  <Image
                    src="../../../../../static/images/epustaka/pdf.png"
                    width={100}
                    height={130}
                    style={{ objectFit: "cover" }}
                  />
                 </Link>
                 <div className="row pl-3">
                  <p>coba</p>
                 </div>
                </div>
                <div>
                 <Link href={{ pathname: "/main/detail-buku" }}>
                  <Image
                    src="../../../../../static/images/epustaka/pdf.png"
                    width={100}
                    height={130}
                    style={{ objectFit: "cover" }}
                  />
                 </Link>
                 <div className="row pl-3">
                  <p>coba</p>
                 </div>
                </div>
                <div>
                 <Link href={{ pathname: "/main/detail-buku" }}>
                  <Image
                    src="../../../../../static/images/epustaka/pdf.png"
                    width={100}
                    height={130}
                    style={{ objectFit: "cover" }}
                  />
                 </Link>
                 <div className="row pl-3">
                  <p>coba</p>
                 </div>
                </div>
                <div>
                 <Link href={{ pathname: "/main/detail-buku" }}>
                  <Image
                    src="../../../../../static/images/epustaka/pdf.png"
                    width={100}
                    height={130}
                    style={{ objectFit: "cover" }}
                  />
                 </Link>
                 <div className="row pl-3">
                  <p>coba</p>
                 </div>
                </div>
                <div>
                 <Link href={{ pathname: "/main/detail-buku" }}>
                  <Image
                    src="../../../../../static/images/epustaka/pdf.png"
                    width={100}
                    height={130}
                    style={{ objectFit: "cover" }}
                  />
                 </Link>
                 <div className="row pl-3">
                  <p>coba</p>
                 </div>
                </div>
                <div>
                 <Link href={{ pathname: "/main/detail-buku" }}>
                  <Image
                    src="../../../../../static/images/epustaka/pdf.png"
                    width={100}
                    height={130}
                    style={{ objectFit: "cover" }}
                  />
                 </Link>
                 <div className="row pl-3">
                  <p>coba</p>
                 </div>
                </div>
                <div>
                 <Link href={{ pathname: "/main/detail-buku" }}>
                  <Image
                    src="../../../../../static/images/epustaka/pdf.png"
                    width={100}
                    height={130}
                    style={{ objectFit: "cover" }}
                  />
                 </Link>
                 <div className="row pl-3">
                  <p>coba</p>
                 </div>
                </div>
                <div>
                 <Link href={{ pathname: "/main/detail-buku" }}>
                  <Image
                    src="../../../../../static/images/epustaka/pdf.png"
                    width={100}
                    height={130}
                    style={{ objectFit: "cover" }}
                  />
                 </Link>
                 <div className="row pl-3">
                  <p>coba</p>
                 </div>
                </div>
                <div>
                 <Link href={{ pathname: "/main/detail-buku" }}>
                  <Image
                    src="../../../../../static/images/epustaka/pdf.png"
                    width={100}
                    height={130}
                    style={{ objectFit: "cover" }}
                  />
                 </Link>
                 <div className="row pl-3">
                  <p>coba</p>
                 </div>
                </div>
              </Slider>
             <div className="mb-2" />
               <style jsx>{slick}</style>
             </div>
            </div>
          </div>
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
