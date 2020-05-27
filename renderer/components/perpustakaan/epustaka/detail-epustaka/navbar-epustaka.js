import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import appCss from "../../../../assets/css/sidebar-detailepus";
import "react-web-tabs/dist/react-web-tabs.css";
import Link from "next/link";
import Router from "next/router";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Layouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navName : '',
      namakategori: "",
      library_id: "",
      logo:'',
      member:'',
      tentang: '',
    };
  }

  componentDidMount() {
    this.setState({
      jenis: Router.query.jenis,
      namakategori: Router.query.namakategori,
      library_id: Router.query.library_id,
      logo: Router.query.logo,
      member: Router.query.member,
      tentang: Router.query.tentang
    })
  }
  
  render() {
    const jenis = this.state.jenis;
    const namakategori = this.state.namakategori;
    const library_id = this.state.library_id;
    const logo = this.state.logo;
    const member =  this.state.member;
    const tentang = this.state.tentang;

    return (
      <nav className="navbar navbar-expand-lg topnav fixed-top" style={{ marginLeft: "240px" }}>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link activeClassName='active' href={{pathname:"main/detail-epus"}}><a className="nav-link active" href="">Koleksi</a></Link>
            </li>
            <li className="nav-item">
              <Link activeClassName='active' href={{
                pathname:"/main/forum-epus",
                query: {
                  library_id: library_id,
                  namakategori: namakategori,
                  jenis: jenis,
                  logo: logo,
                  member: member,
                  tentang:tentang
                }
              }}>
                <a className="nav-link">Forum</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName='active' 
                href={{
                  pathname:"/main/aktivitas-epus",
                  query: {
                    library_id: library_id,
                    namakategori: namakategori,
                    jenis: jenis,
                    logo: logo,
                    member: member,
                    tentang: tentang
                  }
                }}>
                <a className="nav-link">Aktivitas</a>
              </Link>
            </li>
          </ul>
          <div className="form-group has-search">
            <span className="form-control-feedback" id="basic-addon1">
              <FontAwesomeIcon className="baseColor" icon={faSearch} />
            </span>
            <input type="text" className="form-control search" placeholder="Pencarian" />
          </div>
        </div>
        <style jsx>{appCss}</style>
      </nav>
    );
  }
}
export default Layouts;
