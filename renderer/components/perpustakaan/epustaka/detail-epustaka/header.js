import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import appCss from "../../../../assets/css/sidebar-detailepus";
import Sidebar from "./sidebar-detail-epusBook";
import Nav from "./navbar-epustaka"
import "react-web-tabs/dist/react-web-tabs.css";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Link from "next/link";
import Router from "next/router";
import Axios from "axios";
import { base_api, client_id, client_secret } from "../../../../config-api";
import Image from "react-shimmer";
import animationData from "../../../../static/images/intro/loading2";
import Lottie from "react-lottie";
import slick from "../../../../assets/css/slick";
import InfiniteScroll from "react-infinite-scroll-component";
import ContentLoader from "react-content-loader";
import Slider from "react-slick";

class Layouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navName : '',
      namakategori: '',
      library_id: '',

      // items: Array.from({ length: 20 }),
      // hasMore: true,
      // loading: true,
    };
  }

  componentDidMount() {
    let routeName = Router.query.navName;
    this.setState({ 
      navName: routeName,
      namakategori: Router.query.namakategori,
      library_id: Router.query.library_id,
     });
  }

  render() {
    const namakategori = this.state.namakategori;
    return ( 
    <div className="jumbotron text-white rounded" 
      style={{ marginTop: "70px", marginLeft: "238px",zIndex: 1, width: "100%" }}>
      <div className="col-md-6 px-0">
          <p className="lead mb-0 text-white font-weight-bold">Selamat Datang</p>
          <p className="lead mb-0 text-white font-weight-bold">
          Di ePustaka {namakategori}</p>
      </div>
      <style jsx>{appCss}</style>
    </div>
    );
  }
}
export default Layouts;
