import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import slick from '../../../assets/css/slick'
import { base_api, client_id, client_secret } from "../../../config-api";
import Axios from "axios";
import Link from "next/link";
import Image from "react-shimmer";

class Epustakaup extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      epustaka: [],
      loading: true,
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    console.log(e.target.id);
  }
  

  getEpustaka = () => {
    setTimeout (() => {
      Axios.get(
        `${base_api}/libraries/sort/populer?client_id=${client_id}&per_page=20&page=1`
      )
      .then(res => {
        if (res.data.meta.code === 200) {
          const epustaka = res.data.data.data;
          this.setState({
            epustaka
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
    },500)
  }

  componentDidMount () {
    this.getEpustaka();
  }

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay:false,
      arrows:false,
      variableWidth: true,
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
          <Slider {...settings}>
            {this.state.epustaka.map((epus, i) => (
              <div key={i}>
                <div className="show1 row no-gutters border overflow-hidden  shadow-sm h-md-250 bg-dark">

                  <div className="row">
                    <div className="col-5">
                      <div className="col-auto">
                        <Link 
                          href={{
                            pathname: "/main/detail-epus",
                            query: {
                              jenis:"epus",
                              library_id: epus.Library.id,
                              namakategori: epus.Library.name,
                              member: epus.Statistic.total_members,
                              logo: epus.Library.logo,
                              tentang: epus.Library.about
                            }
                          }}
                        >
                          <Image className="img-show1"
                          id={epus.Library.id}
                          src={epus.Library.logo}
                          width= {130}
                          height= {100}
                          style={{ objectFit: "cover" }}
                          onClick={this.handleClick}
                        />
                        </Link>
                      </div>
                    </div>
                    <div className="col-7 mr-0">
                      <div className="col pt-3 flex-column">
                        <h6 className="text-white">{epus.Library.name.split("",30)} </h6>
                        <div className="mb-3 text-white">{epus.Statistic.total_books} Collection</div>
                        <div className="d-flex mt-4">
                          <Link
                            href={{
                              pathname: "/main/detail-epus",
                              query: {
                                jenis:"epus",
                                library_id: epus.Library.id,
                                namakategori: epus.Library.name,
                                member: epus.Statistic.total_members,
                                logo: epus.Library.logo,
                                tentang: epus.Library.about
                              }
                            }}
                          >
                          <button id={epus.Library.id} className="btn-antri" onClick={this.handleClick}>Lihat Detail</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </Slider>
          </div>

          <style jsx>{slick}</style>
        </div>
      </div>
    );
  }
}

export default Epustakaup;
