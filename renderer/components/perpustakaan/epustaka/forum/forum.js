import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-web-tabs/dist/react-web-tabs.css";
import Router from 'next/router'
import { base_api, client_id } from "../../../../config-api";
import Axios from "axios";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      items: Array.from({ length: 20 }),
      title: "",
      jenis: "",
      library_id: "",
      namakategori: "",
      logo: "",
      show: false,
    };
  }

  toggle = () => this.setState((currentState) => ({ show: !currentState.show }));

  getPustaka = () => {
    const library_id = Router.query.library_id
    setTimeout(() => {
      Axios.get(
        `${base_api}/libraries/detail?client_id=${client_id}&library_id=${library_id}`
      ).then(res => {
        if (res.data.meta.code === 200) {
          const newBooks = res.data.data;
          const data2 = res.data.data.Library.about;
          console.log(data2);
          this.setState(prev => {
            return {
              item: this.state.item.concat(newBooks),
            };
          });
          console.log(this.state.page);
        } else {
          this.setState({
            hasMore: false
          });
        }
      });
    }, 500);
  };

  componentDidMount() {
    this.getPustaka();
    this.setState({
      title: Router.query.title,
      library_id: Router.query.library_id,
      namakategori: Router.query.namakategori,
      logo: Router.query.logo
    });
  }

  render() {
    const library_id = this.state.library_id;
    const namakategori = this.state.namakategori;
    const logo = this.state.logo;
    return (
      <div className="container-fluid">
        <div className="row ml-3 mr-3 mt-3">
          <div className="text-left">
            <p className="textbold">Pembahasan Diskusi</p>
          </div>
        </div>

        <div className="row ml-3 mr-3">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <div className="media">
                <img
                  src={logo}
                  className="mr-3 mb-2"
                  style={{ width: "60px", height: "60px" }}
                />
                <div className="media-body">
                  <p className="mt-3 textbold">{namakategori}</p>
                </div>
              </div>
              <h5 className="textbold mb-1" style={{ fontSize: "20px" }}>
                Aturan Dasar Keanggotaan dan Proses Pinjam
              </h5>
              <div className="row ml-0 mb-2">
                <small className="text-muted">Minggu, 17 Desember 2019</small>
              </div>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              {this.state.item.map((data, i) => (
                <div key={i}>
                  <div className="row pl-3 pt-2">
                    <p>{data.Library.about.replace(/(<([^>]+)>)/g, "")}</p>
                  </div>
                </div>
              ))}
              <div className="input-group ml-0">
                <img src="../../../../static/images/epustaka/ic_like.svg" style={{marginRight:"10px"}}/>
                <img src="../../../../static/images/epustaka/ic_com_review_active.svg" onClick={this.toggle} style={{marginRight:"10px", cursor:"pointer"}}/>
                <p onClick={this.toggle} style={{marginTop:"15px", fontFamily:"Roboto", color:"#f47f22", cursor:"pointer" }}>
                Lihat 6 Balasan</p> 
              </div>
            </div>
          </div>

          {this.state.show && 
            <div className="row ml-0 mr-0 mb-4">
            <div className="input mt-3" style={{ width: "100%" }}>
              <input type="text" className="form-control comment" placeholder="Tambahkan komentar anda ..." aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="card mt-3" style={{ width: "100%" }} >
              <div className="card-body">
                <div className="row justify-content-between">
                  <div className="col-8 text-left">
                    <div className="media">
                      <img
                        src={logo}
                        className="avatar"
                      />
                      <div className="media-body d-flex">
                        <p className="mt-1 ml-3 textbold">Dobleh</p>
                        <span className="mt-1 ml-3 text-muted">2 Menit Lalu</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 text-right">
                    <img src="../../../../static/images/epustaka/ic_flag_not_active.svg" />
                  </div>
                </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

            <div className="card mt-3" style={{ width: "100%" }} >
              <div className="card-body">
                <div className="row justify-content-between">
                  <div className="col-8 text-left">
                    <div className="media">
                      <img
                        src={logo}
                        className="avatar"
                      />
                      <div className="media-body d-flex">
                        <p className="mt-1 ml-3 textbold">Dobleh</p>
                        <span className="mt-1 ml-3 text-muted">2 Menit Lalu</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 text-right">
                    <img src="../../../../static/images/epustaka/ic_flag_not_active.svg" />
                  </div>
                </div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            </div>          
          }
        </div>
      </div>
    );
  }
}
export default Forum;
