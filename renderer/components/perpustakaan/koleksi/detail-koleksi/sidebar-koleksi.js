import React, { Component } from "react";
import sideCss from "../../../../assets/css/sidebar";
import Router from 'next/router'

class SidebarPerpus extends Component {
  constructor(props){
    super(props)
    this.state = {
      jenis:'',
      namakategori:''
    }
  }

  componentDidMount(){
    this.setState({
      jenis : Router.query.jenis,
      namakategori : Router.query.namakategori
    })
  }
  render() {
    const jenis = this.state.jenis;
    const namakategori = this.state.namakategori;

    let sidebarName;
    if (jenis === "buku") {
      sidebarName = (
        <nav className="col-2 d-none d-md-block sidebar">
          <img
            style={{ marginTop: "-150px", cursor: "pointer" }}
            onClick={() => {
              Router.push('/main/koleksi')
            }}
            src="../static/images/navigation/ic_back_button_white.svg"
          />
          <div className="sidebar-sticky ml-3" style={{ marginTop: "-50px" }}>
            <img src="../static/images/collection/ic_book.svg" />
            <p
              style={{ fontSize: "14px", color: "white", fontWeight: "normal" }}
            >
              Berikut Koleksi Buku
            </p>
            <h5
              style={{ fontSize: "20px", marginTop: "-15px", color: "white" }}
            >
              {namakategori === "recommended" ? "Rekomendasi" : namakategori}
            </h5>
          </div>
        </nav>
      );
    } else if (jenis === "jurnal") {
      sidebarName = (
        <nav className="col-lg-2 col-md-3 d-none d-md-block sidebar">
          <img
            style={{ marginTop: "-150px", cursor: "pointer" }}
            onClick={() => {
              Router.push('/main/koleksi')
            }}
            src="../static/images/navigation/ic_back_button_white.svg"
          />
          <div className="sidebar-sticky ml-3" style={{ marginTop: "-50px" }}>
            <img src="../static/images/collection/ic_journal.svg" />
            <p
              style={{ fontSize: "14px", color: "white", fontWeight: "normal" }}
            >
              Berikut Koleksi Jurnal
            </p>
            <h5
              style={{ fontSize: "20px", marginTop: "-15px", color: "white" }}
            >
              {namakategori}
            </h5>
          </div>
        </nav>
      );
    } else if (jenis === "berita") {
      sidebarName = (
        <nav className="col-lg-2 col-md-3 d-none d-md-block sidebar">
          <img
            style={{ marginTop: "-150px", cursor: "pointer" }}
            onClick={() => {
              Router.push('/main/koleksi')
            }}
            src="../static/images/navigation/ic_back_button_white.svg"
          />
          <div className="sidebar-sticky ml-3" style={{ marginTop: "-50px" }}>
            <img src="../static/images/collection/ic_news.svg" />
            <p
              style={{ fontSize: "14px", color: "white", fontWeight: "normal" }}
            >
              Berikut Koleksi Berita
            </p>
            <h5
              style={{ fontSize: "20px", marginTop: "-15px", color: "white" }}
            >
              {namakategori}
            </h5>
          </div>
        </nav>
      );
    } else if (jenis === "audio") {
      sidebarName = (
        <nav className="col-lg-2 col-md-3 d-none d-md-block sidebar">
          <img
            style={{ marginTop: "-150px", cursor: "pointer" }}
            onClick={() => {
              Router.push('/main/koleksi')
            }}
            src="../static/images/navigation/ic_back_button_white.svg"
          />
          <div className="sidebar-sticky ml-3" style={{ marginTop: "-50px" }}>
            <img src="../static/images/collection/ic_audio.svg" />
            <p
              style={{ fontSize: "14px", color: "white", fontWeight: "normal" }}
            >
              Berikut Koleksi Audio
            </p>
            <h5
              style={{ fontSize: "20px", marginTop: "-15px", color: "white" }}
            >
              {namakategori}
            </h5>
          </div>
        </nav>
      );
    } else if (jenis === "video") {
      sidebarName = (
        <nav className="col-lg-2 col-md-3 d-none d-md-block sidebar">
          <img
            style={{ marginTop: "-150px", cursor: "pointer" }}
            onClick={() => {
              Router.push('/main/koleksi')
            }}
            src="../static/images/navigation/ic_back_button_white.svg"
          />
          <div className="sidebar-sticky ml-3" style={{marginTop:'-50px'}}>
            <img src="../static/images/collection/ic_video.svg" />
            <p
              style={{ fontSize: "14px", color: "white", fontWeight: "normal" }}
            >
              Berikut Koleksi Video
            </p>
            <h5
              style={{ fontSize: "20px", marginTop: "-15px", color: "white" }}
            >
              {namakategori}
            </h5>
          </div>
        </nav>
      );
      } else if (jenis === "epustaka") {
      sidebarName = (
        <nav className="col-lg-2 col-md-3 d-none d-md-block sidebar">
          <img
            style={{ marginTop: "-150px", cursor: "pointer" }}
            onClick={() => {
              Router.back();
            }}
            src="../static/images/navigation/ic_back_button_white.svg"
          />
          <div className="sidebar-sticky ml-3" style={{ marginTop: "-50px" }}>
            <img src="../static/images/collection/ic_audio.svg" />
            <p
              style={{ fontSize: "14px", color: "white", fontWeight: "normal" }}
            >
              Berikut Koleksi Epustaka
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
