import React, { Component } from "react";
import sideCss from "../../../assets/css/sidebar";
import Router from 'next/router';
import Link from 'next/link'

class SidebarPerpus extends Component {
  constructor(props){
    super(props)
    this.state = {
      jenis:'',
      namakategori:'',
      library_id:''
    }
  }

  componentDidMount(){
    this.setState({
      jenis : Router.query.jenis,
      namakategori : Router.query.namakategori,
      library_id: Router.query.library_id
    })
  }
  render() {
    const jenis = this.state.jenis;
    const namakategori = this.state.namakategori;
    const library_id = this.state.library_id

    let sidebarName;
    if (jenis === "semua") {
      sidebarName = (
        <nav className="col-2 d-none d-md-block sidebar">
          <Link
          href = {
            {
              pathname: "/main/epustaka",
              query: {
                jenis: "semua",
                library_id: library_id,
                namakategori: namakategori
              }
            }
          }
          >
            <img
            style={{ marginTop: "-150px", cursor: "pointer" }}
            src="../static/images/navigation/ic_back_button_white.svg"
          />
          </Link>

          <div className="sidebar-sticky ml-3" style={{ marginTop: "-50px" }}>
            <img src="../static/images/collection/ic_book.svg" />
            <p
              style={{ fontSize: "14px", color: "white", fontWeight: "normal" }}
            >
              Berikut Daftar Buku Epustaka
            </p>
            <h5
              style={{ fontSize: "20px", marginTop: "-15px", color: "white" }}
            >
              {namakategori === "recommended" ? "Rekomendasi" : namakategori}
            </h5>
          </div>
        </nav>
      );
    } else if (jenis === "pemerintah") {
      sidebarName = (
        <nav className="col-lg-2 col-md-3 d-none d-md-block sidebar">
          <img
            style={{ marginTop: "-150px", cursor: "pointer" }}
            onClick={() => {
              Router.push('/main/epustaka')
            }}
            src="../static/images/navigation/ic_back_button_white.svg"
          />
          <div className="sidebar-sticky ml-3" style={{ marginTop: "-50px" }}>
            <img src="../static/images/collection/ic_journal.svg" />
            <p
              style={{ fontSize: "14px", color: "white", fontWeight: "normal" }}
            >
              Berikut Epustaka Pemerintah
            </p>
            <h5
              style={{ fontSize: "20px", marginTop: "-15px", color: "white" }}
            >
              {namakategori}
            </h5>
          </div>
        </nav>
      );
    } else if (jenis === "tokoh") {
      sidebarName = (
        <nav className="col-lg-2 col-md-3 d-none d-md-block sidebar">
          <img
            style={{ marginTop: "-150px", cursor: "pointer" }}
            onClick={() => {
              Router.push('/main/epustaka')
            }}
            src="../static/images/navigation/ic_back_button_white.svg"
          />
          <div className="sidebar-sticky ml-3" style={{ marginTop: "-50px" }}>
            <img src="../static/images/collection/ic_news.svg" />
            <p
              style={{ fontSize: "14px", color: "white", fontWeight: "normal" }}
            >
              Berikut Epustaka Tokoh
            </p>
            <h5
              style={{ fontSize: "20px", marginTop: "-15px", color: "white" }}
            >
              {namakategori}
            </h5>
          </div>
        </nav>
      );
    } else if (jenis === "pendidikan") {
      sidebarName = (
        <nav className="col-lg-2 col-md-3 d-none d-md-block sidebar">
          <img
            style={{ marginTop: "-150px", cursor: "pointer" }}
            onClick={() => {
              Router.push('/main/epustaka')
            }}
            src="../static/images/navigation/ic_back_button_white.svg"
          />
          <div className="sidebar-sticky ml-3" style={{ marginTop: "-50px" }}>
            <img src="../static/images/collection/ic_audio.svg" />
            <p
              style={{ fontSize: "14px", color: "white", fontWeight: "normal" }}
            >
              Berikut Epustaka Pendidikan
            </p>
            <h5
              style={{ fontSize: "20px", marginTop: "-15px", color: "white" }}
            >
              {namakategori}
            </h5>
          </div>
        </nav>
      );
    } else if (jenis === "komunitas") {
      sidebarName = (
        <nav className="col-lg-2 col-md-3 d-none d-md-block sidebar">
          <img
            style={{ marginTop: "-150px", cursor: "pointer" }}
            onClick={() => {
              Router.push('/main/epustaka')
            }}
            src="../static/images/navigation/ic_back_button_white.svg"
          />
          <div className="sidebar-sticky ml-3" style={{marginTop:'-50px'}}>
            <img src="../static/images/collection/ic_video.svg" />
            <p
              style={{ fontSize: "14px", color: "white", fontWeight: "normal" }}
            >
              Berikut Epustaka Komunitas
            </p>
            <h5
              style={{ fontSize: "20px", marginTop: "-15px", color: "white" }}
            >
              {namakategori}
            </h5>
          </div>
        </nav>
      );
      } 
    return (
      <div>
        {sidebarName}
        <style jsx>{sideCss}</style>
      </div>
    );
  }
}

export default SidebarPerpus;
