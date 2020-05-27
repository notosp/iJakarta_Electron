import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import appCss from "../../../assets/css/perpus.js";
import Sidebar from "./sidebar-epustaka";
import "react-web-tabs/dist/react-web-tabs.css";
import ContentLoader from "react-content-loader";
import {
  faSearch,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfiniteScroll from "react-infinite-scroll-component";
import { base_api, client_id } from "../../../config-api";
import axios from "axios";
import Router from "next/router";
import Lottie from "react-lottie";
import animationData from "../../../static/images/intro/loading2.json";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import Link from 'next/link'
import Image from "react-shimmer";
import Cookies from 'js-cookie';

class Layouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      hasMore: true,
      totalItems: 10,
      // parameter: "category",
      page: 1,
      loading: true,
      status: "",
      modal: false
    };

    this.toggleInfo = this.toggleInfo.bind(this);
  }

  componentDidMount() {
    this.fetchMoreData();
  }

  toggleInfo = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  fetchMoreData = () => {
    const token = Cookies.get('token')
    setTimeout(() => {
      axios
        .get(
          `${base_api}/libraries/sort/category/?access_token=${token}&client_id=${client_id}&&per_page=12&page=${this.state.page}&category_id=${Router.query.kategori_id}&language=id&cache_id=1`
        )
        .then(res => {
          if (res.data.meta.code === 200) {
            if (res.data.data.current_page_result <= 12) {
              const status = res.data.meta.code;
              const newBooks = res.data.data.data;
              console.log("isi:", newBooks);
              const totalItems = res.data.data.total_result;
              this.setState(prev => {
                return {
                  loading: false,
                  items: this.state.items.concat(newBooks),
                  totalItems,
                  page: prev.page + 1,
                  status
                };
              });

              console.log(this.state.page);
            }
          } else {
            this.setState({ hasMore: false });
          }
        });
    }, 500);
  };

  onChange = e => {
    this.setState({ parameter: e.target.value, loading: true });
    this.fetchMoreData();
  };
  render() {
    const defaultOptions = {
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    let isi;
    if (this.state.loading) {
      isi = (
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
      isi = (
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Lottie options={defaultOptions} height={80} width={80} />}
        >
          <div className="card-columns">
            {this.state.items.map((item, index) => (
              <div className="card border-0 pb-3" key={index}>
                <Link
                  href={{
                    pathname: "/main/detail-epus",
                      query: {
                        jenis: "epus",
                        library_id: item.Library.id,
                        namakategori: item.Library.name,
                        member: item.Statistic.total_members,
                        logo: item.Library.logo,
                        tentang: item.Library.about
                    }
                  }}
                >
                  <Image
                    src={item.Library.logo}
                    width={168}
                    height={180}
                    style={{ objectFit: "cover" }}
                    className="card-img-top"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
                <div className="card-block">
                  <Link
                    href = {
                      {
                        pathname: "/main/detail-epus",
                        query: {
                          jenis: "epus",
                          library_id: item.Library.id,
                          namakategori: item.Library.name,
                          member: item.Statistic.total_members,
                          logo: item.Library.logo,
                          tentang: item.Library.about
                        }
                      }
                    }
                  >
                    <h6 className="card-title" style={{ cursor: "pointer" }}>
                      {item.Library.name}
                    </h6>
                  </Link>
                  <div className="card-text">{item.Statistic.total_books + " Koleksi"}</div>
                </div>
                <div>
                  <span className="float-right">
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </span>
                 <span style={{ fontWeight: "bold" }}>
                    <i className=""></i>
                   <p class="card-text">
                   {item.Statistic.total_members}
                   <small class="text-muted"> Member</small></p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      );
    }

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10">
              <div className="nav-detail">
                <div className="form-row">
                  <div className="col-3">
                    <select
                      className="form-control select"
                      onChange={this.onChange}
                    >
                      <option value="populer">Popularitas</option>
                      <option value="newest">Terbaru</option>
                      <option value="">Urut Abjad</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-filter select text-left"
                      onClick={this.toggleInfo}
                    >
                      Filter Epustaka{" "}
                    </button>
                  </div>
                  <div className="col-4 ml-auto">
                    <div className="input-group">
                      <div className="iconSearch input-group-prepend">
                        <span
                          className="iconSearch input-group-text"
                          id="basic-addon1"
                        >
                          <FontAwesomeIcon
                            className="baseColor"
                            icon={faSearch}
                          />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="inputSearch form-control"
                        placeholder="Pencarian"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 pt-3" onScroll={this.handleScroll}>
                {isi}
              </div>
            </main>
          </div>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleInfo}
          className={this.props.className}
          style={{ marginTop: "10%" }}
          size="lg"
        >
          <ModalHeader toggle={this.toggleInfo}>Filter Koleksi</ModalHeader>
          <ModalBody
            style={{ padding: "1rem", paddingTop: 0, paddingBottom: 0 }}
          >
            <div className="row">
              <div
                className="col-6"
                style={{ borderRight: "1px solid #dee2e6" }}
              >
                <div className="list-group">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <div>
                        <h5 style={{fontSize:'17px'}} className="mb-0">Kategori</h5>
                        <b style={{color:'#ff6d0c'}}>
                          Temukan berdasarkan kategori
                        </b>
                      </div>
                      <div>
                        <img
                          src="../static/images/collection/ic_expand_hor.svg"
                          style={{paddingTop:'13px'}}
                        />
                      </div>
                    </div>
                  </a>
                  
                </div>
              </div>
              <div className="col-6">
                <ListGroup>
                  <ListGroupItem><Link><a href="#">Himpunan</a></Link></ListGroupItem>
                  <ListGroupItem><Link><a href="#">Komunitas</a></Link></ListGroupItem>
                  <ListGroupItem><Link><a href="#">Pemerintah</a></Link></ListGroupItem>
                  <ListGroupItem><Link><a href="#">Pendidikan</a></Link></ListGroupItem>
                  <ListGroupItem><Link><a href="#">Perguruan Tinggi</a></Link></ListGroupItem>
                  <ListGroupItem><Link><a href="#">Penerbit</a></Link></ListGroupItem>
                  <ListGroupItem><Link><a href="#">Perusahaan</a></Link></ListGroupItem>
                </ListGroup>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
             <div className="row justify-content-between col-12">
              <div className="col-6 text-left">
                <button className="btn-reset" onClick={this.toggleInfo}>
                  Atur Ulang
                </button>{" "}
              </div>
              <div className="col-6 text-right">
                <button className="btn-terapkan" onClick={this.toggleInfo}>
                  Terapkan
                </button>
              </div>
            </div>
          </ModalFooter>
        </Modal>

        <style jsx>{appCss}</style>
      </div>
    );
  }
}

export default Layouts;
