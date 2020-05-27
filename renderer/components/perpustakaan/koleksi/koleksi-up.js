import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import slick from '../../../assets/css/slick'

// import { base_api, client_id, client_secret } from "../../../config-api";
// import Axios from "axios";
// import Cookies from 'js-cookie';


class Pustakaup extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      book: [],
    };
  }

  render() {
    var settings = {
      infinite: false,
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
              <div>
                <div className="show1 row no-gutters border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-dark">
                  <div className="col-auto">
                    <img
                      src="../static/images/ic_buku_placeholder.png"
                      className="img-show1"
                      alt=""
                    />
                  </div>
                  <div className="col p-4 d-flex flex-column position-static">
                    <h5 className="mb-0 text-white">Featured post</h5>
                    <div className="mb-1 text-white">Nov 12</div>
                    <div className="d-flex">
                      <img src="../static/images/collection/ic_rate_active.svg" />
                      <img src="../static/images/collection/ic_rate_active.svg" />
                      <img src="../static/images/collection/ic_rate_active.svg" />
                      <img src="../static/images/collection/ic_rate_non_active.svg" />
                      <img src="../static/images/collection/ic_rate_non_active.svg" />
                      <div className="pl-3 text-white">3.9</div>
                    </div>
                    <div className="d-flex mt-2">
                      <button className="btn-antri">Antri</button>
                      <button className="btn-donasi">Donasi</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="show1 row no-gutters border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-dark">
                  <div className="col-auto">
                    <img
                      src="../static/images/ic_buku_placeholder.png"
                      className="img-show1"
                      alt=""
                    />
                  </div>
                  <div className="col p-4 d-flex flex-column position-static">
                    <h5 className="mb-0 text-white">Featured post</h5>
                    <div className="mb-1 text-white">Nov 12</div>
                    <div className="d-flex">
                      <img src="../static/images/collection/ic_rate_active.svg" />
                      <img src="../static/images/collection/ic_rate_active.svg" />
                      <img src="../static/images/collection/ic_rate_active.svg" />
                      <img src="../static/images/collection/ic_rate_non_active.svg" />
                      <img src="../static/images/collection/ic_rate_non_active.svg" />
                      <div className="pl-3 text-white">3.9</div>
                    </div>
                    <div className="d-flex mt-2">
                      <button className="btn-antri">Antri</button>
                      <button className="btn-donasi">Donasi</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="show1 row no-gutters border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-dark">
                  <div className="col-auto">
                    <img
                      src="../static/images/ic_buku_placeholder.png"
                      className="img-show1"
                      alt=""
                    />
                  </div>
                  <div className="col p-4 d-flex flex-column position-static">
                    <h5 className="mb-0 text-white">Featured post</h5>
                    <div className="mb-1 text-white">Nov 12</div>
                    <div className="d-flex">
                      <img src="../static/images/collection/ic_rate_active.svg" />
                      <img src="../static/images/collection/ic_rate_active.svg" />
                      <img src="../static/images/collection/ic_rate_active.svg" />
                      <img src="../static/images/collection/ic_rate_non_active.svg" />
                      <img src="../static/images/collection/ic_rate_non_active.svg" />
                      <div className="pl-3 text-white">3.9</div>
                    </div>
                    <div className="d-flex mt-2">
                      <button className="btn-antri">Antri</button>
                      <button className="btn-donasi">Donasi</button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="show1 row no-gutters border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-dark">
                  <div className="col-auto">
                    <img
                      src="../static/images/ic_buku_placeholder.png"
                      className="img-show1"
                      alt=""
                    />
                  </div>
                  <div className="col p-4 d-flex flex-column position-static">
                    <h5 className="mb-0 text-white">Featured post</h5>
                    <div className="mb-1 text-white">Nov 12</div>
                    <div className="d-flex">
                      <img src="../static/images/collection/ic_rate_active.svg" />
                      <img src="../static/images/collection/ic_rate_active.svg" />
                      <img src="../static/images/collection/ic_rate_active.svg" />
                      <img src="../static/images/collection/ic_rate_non_active.svg" />
                      <img src="../static/images/collection/ic_rate_non_active.svg" />
                      <div className="pl-3 text-white">3.9</div>
                    </div>
                    <div className="d-flex mt-2">
                      <button className="btn-antri">Antri</button>
                      <button className="btn-donasi">Donasi</button>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <style jsx>{slick}</style>
        </div>
      </div>
    );
  }
}

export default Pustakaup;
