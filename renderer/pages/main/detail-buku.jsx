import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import slick from "../../assets/css/slick";
import { withAuthSync } from "../../utils/auth";
import Layout from "../../components/perpustakaan/koleksi/detail-koleksi/detail-book";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Cookies from "js-cookie";
import { base_api, client_id, client_secret } from "../../config-api";
import Router from "next/router";
import ContentLoader from "react-content-loader";
import Image from "react-shimmer";
import Rating from "react-rating";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import stripHtml from "string-strip-html";
import Swal from "sweetalert2";
import ReactHtmlParser, {  processNodes, convertNodeToElement, htmlparser2 } from "react-html-parser";
import { Modal, ModalBody, ModalHeader, ModalFooter, ListGroup, ListGroupItem, Alert } from "reactstrap";
import Moment from "react-moment";
import electron from "electron";
import dl from "download-file-with-progressbar";
import Progress from 'react-progressbar';
 
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      recommended: [],
      reviews: [],
      pengguna: [],
      antrian: [],
      borrow: [],
      actionBorrow: [],
      hasBook: false,
      hasBorrow: false,
      downloadedBook: false,
      loading: true,
      modal: false,
      modalPengguna: false,
      modalAntrian: false,
      modalDipinjam: false,
      modalPinjam: false,
      modalLibrary: false,
      modalPassword: false,
      modalResend: false,
      availableCopy: 0,
      pass: false,
      show: false,
      wasDownload:false,
      downloadProcess:false,
      hasSignup:false,
      newPass: "",
      massage: "",
      password: "",
      percent: 0
    };
  }

  showPass = () => {
    const showPass = this.state.pass;
    this.setState({ pass: !showPass });
  };

  getBook = () => {
    let token = Cookies.get("token");
    axios
      .get(
        `${base_api}/books/detail?client_id=${client_id}&book_id=${Router.query.book_id}&access_token=${token}`
      )
      .then(res => {
        if (res.data.meta.code === 200) {
          const book = res.data.data;
          const availableCopy = res.data.data.Book.available_copy;
          this.setState(prevState => {
            return { item: book, loading: false, availableCopy };
          });
        }
      });
  };

  getRecommended = () => {
    let token = Cookies.get("token");
    axios
      .get(
        `${base_api}/books/recommended?client_id=${client_id}&book_id=${Router.query.book_id}&limit=10`
      )
      .then(res => {
        if (res.data.meta.code === 200) {
          const recommended = res.data.data.Book;
          this.setState({ recommended });
        }
      });
  };

  getReview = () => {
    let token = Cookies.get("token");
    axios
      .get(
        `${base_api}/reviews/index?client_id=${client_id}&key=${Router.query.book_id}&access_token=${token}&type=book`
      )
      .then(res => {
        if (res.data.meta.code === 200) {
          const reviews = res.data.data.data;
          this.setState({ reviews });
        }
      });
  };

  getPengguna = () => {
    axios
      .get(
        `${base_api}/books/has_reading?client_id=${client_id}&book_id=${Router.query.book_id}`
      )
      .then(res => {
        if (res.data.meta.code === 200) {
          const pengguna = res.data.data.data;
          this.setState({ pengguna });
        }
      });
  };

  getAntrian = () => {
    axios
      .get(
        `${base_api}/books/want?client_id=${client_id}&book_id=${Router.query.book_id}`
      )
      .then(res => {
        if (res.data.meta.code === 200) {
          const antrian = res.data.data.data;
          this.setState({ antrian });
        }
      });
  };

  getBorrow = () => {
    axios
      .get(
        `${base_api}/books/has_borrow?client_id=${client_id}&book_id=${Router.query.book_id}`
      )
      .then(res => {
        if (res.data.meta.code === 200) {
          const borrow = res.data.data.data;
          this.setState({ borrow });
        }
      });
  };

  cekBorrow = () => {
    let token = Cookies.get("token");
    axios
      .get(
        `${base_api}/books/has_book?client_id=${client_id}&book_id=${Router.query.book_id}&access_token=${token}`
      )
      .then(res => {
        if (res.data.meta.code === 200) {
          const hasBook = res.data.data.has_book;
          this.setState({ hasBook });

          const remote = electron.remote;
          const app = remote.app;
          const fs = remote.require("fs");
          const homepath = app.getPath("home");
          const namefile = `${localStorage.getItem("emailSimpan")}-ijakarta-${
            Router.query.book_id
          }`;
          fs.access(homepath + `/.iJakarta/${namefile}.zip`, err => {
            if (err) {
              this.setState({ downloadedBook: false });
            } else {
              this.setState({ downloadedBook: true });
            }
          });
        }
      });
  };

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    this.cekBorrow();
    this.getBook();
    this.getRecommended();
    this.getReview();
    this.getPengguna();
    this.getAntrian();
    this.getBorrow();
    console.log("downloaded book " + this.state.downloadedBook);
    console.log("has borrow " + this.state.hasBorrow);    
  }

  toggleInfo = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  togglePengguna = () => {
    this.setState(prevState => ({
      modalPengguna: !prevState.modalPengguna
    }));
  };

  toggleAntrian = () => {
    this.setState(prevState => ({
      modalAntrian: !prevState.modalAntrian
    }));
  };

  toggleDipinjam = () => {
    this.setState(prevState => ({
      modalDipinjam: !prevState.modalDipinjam
    }));
  };

  togglePinjam = () => {
    this.setState(prevState => ({
      modalPinjam: !prevState.modalPinjam
    }));
  };

  toggleLibrary = () => {
    this.setState(prevState => ({
      modalLibrary: !prevState.modalLibrary
    }));
  };

  togglePassword = () => {
    this.setState(prevState => ({
      modalPassword: !prevState.modalPassword
    }));
  };

  toggleResend = () => {
    this.setState(prevState => ({
      modalResend: !prevState.modalResend
    }));
  };

  actionResend = () => {
    const item = {
      pass_code: "08KAaYQ1fIjqJMggOmCiL12eQ",
      client_id: client_id,
      client_secret:client_secret,
      email: localStorage.getItem("emailSimpan"),
      confirm: "1"
    };

    axios.post(`${base_api}/users/resend_verification`, item).then(respon => {
      console.log(respon.data.meta);
      if (respon.data.meta.code === 200) {
        this.toggleResend()
        Swal.fire("", respon.data.data.message, "success");
      }else{
        Swal.fire("", "suskse", "success");
      }
    });
  }

  actionPinjam = id => {
    const item = {
      access_token: Cookies.get("token"),
      book_id: this.state.item.Book.id,
      library_id: id
    };
    const item2 = {
      access_token: Cookies.get("token"),
      book_id: this.state.item.Book.id,
      library_id: id,
      confirm: "1"
    };

    localStorage.setItem("library_id", id);

    axios.post(`${base_api}/books/borrow_book`, item).then(response => {
        this.setState({ massage: response.data.meta.error_message });
        axios.post(`${base_api}/books/borrow_book`, item2).then(respon => {
          if (respon.data.meta.code === 400) {
            if (respon.data.meta.error_code === "request_join") {
              this.togglePassword();
              this.toggleLibrary();
            } else {
              this.setState({ massage: respon.data.meta.error_message });
              this.toggleResend();
              this.toggleLibrary();
            }
          } else if (this.state.hasSignup) {
            this.setState({ hasBorrow: true });
            this.refreshList();
          } else {
            this.setState({ hasBorrow: true });
            this.toggleLibrary();
            this.refreshList();
          }
        });

    });
  };

  actionUnduh = () => {
   
    const remote = electron.remote;
    const app = remote.app;
    const homepath = app.getPath("home");
    const nameFile = `${localStorage.getItem("emailSimpan")}-ijakarta-${ Router.query.book_id }`;
    this.setState({ wasDownload: true, downloadProcess:true });
    var option = {
      filename: `${nameFile}.zip`,
      dir: `${homepath}/.iJakarta/`,
      onDone: info => {
        // console.log("done", info);
        // Swal.fire("", "Buku Terpinjam", "success");
        this.setState({ downloadProcess: false });
        this.refreshList();
      },
      onError: err => {
        console.log("error", err);
      },
      onProgress: (curr, total) => {
        this.setState({ percent: ((curr / total) * 100).toFixed(2) })
        // console.log("progress", ((curr / total) * 100).toFixed(2) + "%")
      }
    };

    var dd = dl(this.state.item.Item.out, option);

  };

  signUpPustaka = e => {
    const item = {
      access_token: Cookies.get("token"),
      password: this.state.password,
      library_id: localStorage.getItem("library_id")
    };
    axios.post(`${base_api}/students/signup_member`, item).then(respon => {
      if (respon.data.meta.code === 404) {
        Swal.fire("", respon.data.meta.error_message, "error");
      }else{
        this.actionPinjam(localStorage.getItem("library_id"));
        this.this.setState({ hasSignup : true });
        this.togglePassword();
      }
    });
  };

  getPass = e => {
    const passBaru = e.target.value;
    this.setState({ password: passBaru });
  };

  onDismiss = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      arrows: false,
      variableWidth: true
    };

    var modalError;
    if(this.state.massage.slice(0, 37) === "Anda belum melakukan verifikasi email"){
      modalError = (
        <Modal
          isOpen={this.state.modalResend}
          toggle={this.toggleResend}
          className={this.props.className}
          style={{ marginTop: "10%" }}
          size="md"
        >
          <ModalHeader
            className="mx-auto pt-4"
            style={{ fontSize: "15px", border: "none" }}
          >
            Verifikasi Email
          </ModalHeader>
          <ModalBody
            style={{
              padding: "1rem",
              paddingTop: 0,
              paddingBottom: 0,
              marginBottom: "none"
            }}
          >
            <div className="row justify-content-center text-center">
              <div className="col-10">{this.state.massage}</div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              className="btn-pinjam"
              style={{ width: "100px" }}
              onClick={() => {
                this.actionResend();
              }}
            >
              Resend
            </button>
            <button
              className="btn-pinjam"
              style={{ width: "100px", background: "#9B9B9B" }}
              onClick={this.toggleResend}
            >
              Close
            </button>
          </ModalFooter>
        </Modal>
      );
    }else{
      modalError = (
        <Modal
          isOpen={this.state.modalResend}
          toggle={this.toggleResend}
          className={this.props.className}
          style={{ marginTop: "10%" }}
          size="md"
        >
          <ModalHeader
            className="mx-auto pt-4"
            style={{ fontSize: "15px", border: "none" }}
          >
            Terjadi Kesalahan
          </ModalHeader>
          <ModalBody
            style={{
              padding: "1rem",
              paddingTop: 0,
              paddingBottom: 0,
              marginBottom: "none"
            }}
          >
            <div className="row justify-content-center text-center">
              <div className="col-10">{this.state.massage}</div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              className="btn-pinjam"
              style={{ width: "100px", background: "#9B9B9B" }}
              onClick={this.toggleResend}
            >
              Close
            </button>
          </ModalFooter>
        </Modal>
      );
    }

    let buttonPinjam;
    if (this.state.hasBook) {
      if (this.state.downloadedBook) {
        buttonPinjam = (
          <button className="btn-pinjam mr-3" style={{ background: "#50E3C2" }}>
            Baca
          </button>
        );
      } else {
        if (this.state.wasDownload) {
          buttonPinjam = (
            <button
              className="btn-pinjam mr-3"
              style={{ background: "grey" }}
              onClick={this.actionUnduh}
              disabled
            >
              {Math.round(this.state.percent)} %
            </button>
          );
        } else {
          buttonPinjam = (
            <button
              className="btn-pinjam mr-3"
              style={{ background: "#50E3C2" }}
              onClick={this.actionUnduh}
            >
              Unduh
            </button>
          );
        }
      }
    } else {
      if (this.state.availableCopy > 0) {
        buttonPinjam = (
          <button className="btn-pinjam mr-3" onClick={this.togglePinjam}>
            Pinjam
          </button>
        );
      } else {
        buttonPinjam = (
          <button className="btn-pinjam mr-3" style={{ background: "#D0021B" }}>
            Antri
          </button>
        );
      }
    }

    let content;
    if (this.state.loading) {
      content = (
        <div className="container pt-5">
          <ContentLoader
            height={600}
            width={400}
            speed={2}
            primaryColor="#d9d9d9"
            secondaryColor="#fab647"
          >
            <rect x="10" y="8" rx="0" ry="0" width="100" height="150" />
            <rect x="10" y="170" rx="0" ry="0" width="100" height="10" />
            <rect x="150" y="8" rx="0" ry="0" width="300" height="10" />
            <rect x="150" y="30" rx="0" ry="0" width="300" height="10" />
            <rect x="150" y="52" rx="0" ry="0" width="300" height="10" />
            <rect x="150" y="74" rx="0" ry="0" width="300" height="10" />
            <rect x="150" y="96" rx="0" ry="0" width="100" height="10" />
          </ContentLoader>
        </div>
      );
    } else {
      content = (
        <div className="container-fluid mt-5 pt-2">
          <div className="row pt-2 justify-content-center">
            <div className="col-4">
              <div className="ml-5">
                <div className="card text-white" style={{ width: "80%" }}>
                  <img
                    className="card-img"
                    src={this.state.item.Book.cover_origin}
                    alt="Card image"
                  />
                  <div style={{ display: this.state.downloadProcess ? '' : 'none' }}>
                    <div
                      className="card-img-overlay text-center"
                      style={{ background: "#0707076e" }}
                    >
                      <h3 style={{ marginTop: "60%", color: "white" }}>
                        Proses Unduh
                      </h3>
                      <span
                        style={{ size: "20px", marginTop: "0px" }}
                        className="font-weight-normal"
                      >
                        Tunggu Beberapa Saat..
                      </span>
                    </div>
                    <Progress completed={this.state.percent} />
                  </div>
                </div>

                <table
                  style={{ width: "80%" }}
                  className="table table-sm table-borderless text-center"
                >
                  <thead>
                    <tr>
                      <th>Ukuran File</th>
                      <th>Total Copy</th>
                      <th>Copy Tersedia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.item.Book.size}</td>
                      <td>120</td>
                      <td>{this.state.item.Book.available_copy}</td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ width: "80%" }} className="flex text-center mb-4">
                  {buttonPinjam}

                  <button className="btn-donasi">Donasi</button>
                </div>
                <div>
                  <table className="table table-sm table-borderless">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <th>Diterbitkan Oleh</th>
                      </tr>
                      <tr>
                        <td>{this.state.item.Book.publisher_name}</td>
                      </tr>
                      <tr>
                        <th>Tahun Terbit</th>
                      </tr>
                      <tr>
                        <td>
                          <Moment format="DD MMMM YYYY">
                            {this.state.item.Book.published_date}
                          </Moment>
                        </td>
                      </tr>
                      <tr>
                        <th>ISBN</th>
                      </tr>
                      <tr>
                        <td>{this.state.item.Book.isbn}</td>
                      </tr>
                      <tr>
                        <th>Kategori</th>
                      </tr>
                      <tr>
                        <td>{this.state.item.Category.name}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-8">
              <h4 className="text-white">{this.state.item.Book.title}</h4>
              <p className="text-white font-weight-lighter">
                By. {this.state.item.Book.authors}
              </p>
              <img
                src="../../static/images/collection/ic_drm.png"
                className="icon mr-3"
              />
              <Rating
                initialRating={this.state.item.Statistic.total_ratings}
                emptySymbol={
                  <img src="../../static/images/collection/ic_rate_non_active.svg" />
                }
                fullSymbol={
                  <img src="../../static/images/collection/ic_rate_active.svg" />
                }
                readonly
              />

              <Tabs defaultTab="buku">
                <TabList
                  style={{
                    width: "100%",
                    border: "none",
                    paddingTop: "60px"
                  }}
                >
                  <Tab tabFor="buku">Pratinjau</Tab>
                  <Tab tabFor="jurnal">Ulasan</Tab>
                </TabList>
                <TabPanel className="panelTabs" tabId="buku">
                  <div className="row">
                    <div className="col-4 d-flex">
                      <img src="../../static/images/collection/ic_has_read_counter.svg" />
                      <div
                        className="ml-3"
                        style={{ cursor: "pointer" }}
                        onClick={this.togglePengguna}
                      >
                        <span className="font-weight-bolder">Telah Dibaca</span>
                        <br />
                        <span className="baseColor">
                          {this.state.item.Statistic.total_reading} Pengguna
                        </span>
                      </div>
                    </div>
                    <div className="col-4 d-flex">
                      <img src="../../static/images/collection/ic_queue_counter.svg" />
                      <div
                        className="ml-3"
                        style={{ cursor: "pointer" }}
                        onClick={this.toggleAntrian}
                      >
                        <span className="font-weight-bolder">
                          Menunggu Antrian
                        </span>
                        <br />
                        <span className="baseColor">
                          {this.state.item.Statistic.total_queues} Pengguna
                        </span>
                      </div>
                    </div>
                    <div className="col-4 d-flex">
                      <img src="../../static/images/collection/ic_borrow_counter.svg" />
                      <div
                        className="ml-3"
                        style={{ cursor: "pointer" }}
                        onClick={this.toggleDipinjam}
                      >
                        <span className="font-weight-bolder">
                          Sedang Dipinjam
                        </span>
                        <br />
                        <span className="baseColor">
                          {this.state.item.Statistic.total_has_borrow} Pengguna
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-11 text-justify">
                      <span className="font-weight-bolder">
                        Sinopsis Konten
                      </span>
                      <br />
                      <span>
                        {stripHtml(this.state.item.Book.description).split(
                          "",
                          200
                        )}
                      </span>{" "}
                      <span
                        className="baseColor"
                        onClick={this.toggleInfo}
                        style={{ cursor: "pointer" }}
                      >
                        Selanjutnya
                      </span>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-11 text-justify">
                      <span className="font-weight-bolder pb-2">
                        Yang Telah Berbagi
                      </span>
                      <div className="pt-3">
                        <img
                          className="user-img"
                          src="../../static/images/user1.jpg"
                          alt=""
                        />
                        <img
                          className="user-img"
                          src="../../static/images/user3.png"
                          alt=""
                        />
                        <img
                          className="user-img"
                          src="../../static/images/user2.jfif"
                          alt=""
                        />
                        <span className="baseColor ml-3">Selanjutnya</span>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-11 text-justify">
                      <span className="font-weight-bolder">
                        Konten Yang Terkait
                      </span>
                      <div className="mt-3">
                        <Slider {...settings}>
                          {this.state.recommended.map(rec => (
                            <div key={rec.id} className="mr-3">
                              <Image
                                src={rec.cover}
                                onClick={this.handleClickImage}
                                width={100}
                                height={130}
                                style={{ objectFit: "cover" }}
                              />
                              <div className="row pl-3">
                                <p className="card-text text-justify">
                                  {rec.title.split("", 20)}
                                </p>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="panelTabs" tabId="jurnal">
                  {Object.keys(this.state.reviews).length === 0 ? (
                    <div className="card text-center mr-4">
                      <div className="card-body my-5">
                        <img
                          src="../../static/images/collection/ic_empty_review.svg"
                          alt=""
                        />
                        <h3 className="card-title text-muted">
                          Belum terdapat ulasan
                        </h3>
                        <p className="text-muted">
                          Silahkan lakukan peminjaman dan berikan ulasan anda
                        </p>
                      </div>
                    </div>
                  ) : (
                    this.state.reviews.map(rev => (
                      <div className="card mr-4 mb-3">
                        <div className="card-body">
                          <table className="table table-borderless table-sm">
                            <tbody>
                              <tr>
                                <td width="70px">
                                  <img
                                    className="user-img"
                                    src={rev.User.avatar}
                                    alt=""
                                  />
                                </td>
                                <td width="300px">
                                  <h5>{rev.User.name}</h5>
                                  <Rating
                                    initialRating={2.5}
                                    emptySymbol={
                                      <img src="../../static/images/collection/ic_rate_preview_inactive.svg" />
                                    }
                                    fullSymbol={
                                      <img src="../../static/images/collection/ic_rate_preview_active.svg" />
                                    }
                                    readonly
                                  />
                                </td>
                                <td>
                                  <span>{rev.Review.elapsed_time}</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <span>{rev.Review.content}</span>
                        </div>
                      </div>
                    ))
                  )}
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggleInfo}
            className={this.props.className}
            style={{ marginTop: "5%" }}
            size="lg"
          >
            <ModalHeader toggle={this.toggleInfo}>Sinopsis Konten</ModalHeader>
            <ModalBody
              style={{ padding: "1rem", paddingTop: 0, paddingBottom: 0 }}
            >
              <div className="row mt-4 mb-5 mx-2">
                <div className="col-12">
                  {ReactHtmlParser(this.state.item.Book.description)}
                </div>
              </div>
            </ModalBody>
          </Modal>

          <Modal
            isOpen={this.state.modalPengguna}
            toggle={this.togglePengguna}
            className={this.props.className}
            style={{ marginTop: "5%" }}
            size="lg"
          >
            <ModalHeader toggle={this.togglePengguna}>
              Telah Dibaca {this.state.item.Statistic.total_reading} Pengguna
            </ModalHeader>
            <ModalBody
              style={{ padding: "1rem", paddingTop: 0, paddingBottom: 0 }}
            >
              <div className="row mt-4 mb-5 mx-2">
                <div className="col-12">
                  {this.state.item.Statistic.total_reading === 0 ? (
                    <div className="my-5 text-center">
                      <img
                        src="../../static/images/collection/ic_has_read_list_empty.svg"
                        alt=""
                      />
                      <h4 className="text-muted">Belum Pernah Dibaca</h4>
                      <p className="text-muted">
                        Silahkan lakukan peminjaman dan berikan ulasan anda
                      </p>
                    </div>
                  ) : (
                    <table className="table">
                      <tbody>
                        {this.state.pengguna.map((res1, i) => (
                          <tr key={i}>
                            <td width="50px">
                              <img
                                className="user-img"
                                src={res1.avatar}
                                alt=""
                              />
                            </td>
                            <td>
                              <span
                                className="font-weight-bolder"
                                style={{ fontSize: "17px" }}
                              >
                                {res1.name}
                              </span>
                              <br />
                              <span>{res1.badge_name}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </ModalBody>
          </Modal>

          <Modal
            isOpen={this.state.modalAntrian}
            toggle={this.toggleAntrian}
            className={this.props.className}
            style={{ marginTop: "5%" }}
            size="lg"
          >
            <ModalHeader toggle={this.toggleAntrian}>
              Menunggu Antrian {this.state.item.Statistic.total_queues} Pengguna
            </ModalHeader>
            <ModalBody
              style={{ padding: "1rem", paddingTop: 0, paddingBottom: 0 }}
            >
              <div className="row mt-4 mb-5 mx-2">
                <div className="col-12">
                  {this.state.item.Statistic.total_queues === 0 ? (
                    <div className="my-5 text-center">
                      <img
                        src="../../static/images/collection/ic_queue_empty.svg"
                        alt=""
                      />
                      <h4 className="text-muted">Tidak Ada Antrian</h4>
                      <p className="text-muted">
                        Silahkan lakukan peminjaman dan berikan ulasan anda
                      </p>
                    </div>
                  ) : (
                    <table className="table">
                      <tbody>
                        {this.state.antrian.map((res2, i) => (
                          <tr key={i}>
                            <td width="50px">
                              <img
                                className="user-img"
                                src={res2.avatar}
                                alt=""
                              />
                            </td>
                            <td>
                              <span
                                className="font-weight-bolder"
                                style={{ fontSize: "17px" }}
                              >
                                {res2.nama}
                              </span>
                              <br />
                              <span>{res2.badge_name}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </ModalBody>
          </Modal>

          <Modal
            isOpen={this.state.modalDipinjam}
            toggle={this.toggleDipinjam}
            className={this.props.className}
            style={{ marginTop: "5%" }}
            size="lg"
          >
            <ModalHeader toggle={this.toggleDipinjam}>
              Telah di Baca {this.state.item.Statistic.total_has_borrow}{" "}
              Pengguna
            </ModalHeader>
            <ModalBody
              style={{ padding: "1rem", paddingTop: 0, paddingBottom: 0 }}
            >
              <div className="row mt-4 mb-5 mx-2">
                <div className="col-12">
                  {this.state.item.Statistic.total_has_borrow === 0 ? (
                    <div className="my-5 text-center">
                      <img
                        src="../../static/images/collection/ic_borrow_empty.svg"
                        alt=""
                      />
                      <h4 className="text-muted">Sedang Tidak Dipinjam</h4>
                      <p className="text-muted">
                        Silahkan lakukan peminjaman dan berikan ulasan anda
                      </p>
                    </div>
                  ) : (
                    <table className="table">
                      <tbody>
                        {this.state.borrow.map((res3, i) => (
                          <tr key={i}>
                            <td width="50px">
                              <img
                                className="user-img"
                                src={res3.avatar}
                                alt=""
                              />
                            </td>
                            <td>
                              <span
                                className="font-weight-bolder"
                                style={{ fontSize: "17px" }}
                              >
                                {res3.name}
                              </span>
                              <br />
                              <span>{res3.badge_name}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </ModalBody>
          </Modal>

          <Modal
            isOpen={this.state.modalPinjam}
            toggle={this.togglePinjam}
            className={this.props.className}
            style={{ marginTop: "10%" }}
            size="md"
          >
            <ModalHeader
              className="mx-auto pt-4"
              style={{ fontSize: "16px", border: "none" }}
            >
              Opsi Pinjam
            </ModalHeader>
            <ModalBody
              style={{
                padding: "1rem",
                paddingTop: 0,
                paddingBottom: 0,
                marginBottom: "none"
              }}
            >
              <div className="row ">
                <div className="list-group">
                  <div className="list-group-item flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5
                        className="mb-1 baseColor"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          this.togglePinjam();
                          this.toggleLibrary();
                        }}
                      >
                        Pinjam Pemilik
                      </h5>
                    </div>
                    <h6 className="mb-1 font-weight-normal">
                      Khusus bagi member ePustaka silahkan lakukan pendaftaran
                      dengan mengikuti syarat dan ketentuan yang berlaku.
                    </h6>
                  </div>
                  <div className="list-group-item flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1 baseColor">Berlangganan</h5>
                    </div>
                    <h6 className="mb-1 font-weight-normal">
                      Koleksi ini termasuk salah satu dari ribuan konten
                      penerbit yang dapat diakses melalui berlangganan, anda tak
                      perlu lagi pinjam atau antri dari pemilik.
                    </h6>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn-close" onClick={this.modalPinjam}>
                Batalkan
              </button>
            </ModalFooter>
          </Modal>

          <Modal
            isOpen={this.state.modalLibrary}
            toggle={this.toggleLibrary}
            className={this.props.className}
            style={{ marginTop: "10%" }}
            size="md"
          >
            <ModalHeader
              toggle={this.toggleLibrary}
              style={{ fontSize: "16px", paddingTop: "6px" }}
            >
              Pinjam Koleksi Dari
            </ModalHeader>
            <ModalBody
              style={{
                padding: "1rem",
                paddingTop: 0,
                paddingBottom: 0,
                marginBottom: "none"
              }}
            >
              <div className="row ">
                <table className="table">
                  <tbody>
                    {this.state.item.Library.map((lib, i) => (
                      <tr key={i}>
                        <td>
                          <img
                            src={lib.Library.logo}
                            style={{ width: "70px", borderRadius: "5px" }}
                          />
                        </td>
                        <td>
                          <h6>{lib.Library.name}</h6>
                          <small>
                            ePustaka, Tersedia {lib.Library.available_copy} Copy
                          </small>
                        </td>
                        <td>
                          {lib.Library.available_copy > 0 ? (
                            <button
                              className="btn-pinjam mr-3 mt-3"
                              style={{ width: "100px" }}
                              onClick={() => {
                                this.actionPinjam(lib.Library.id);
                              }}
                            >
                              Pinjam
                            </button>
                          ) : (
                            <button
                              className="btn-pinjam mr-3 mt-3"
                              style={{ width: "100px", background: "#9B9B9B" }}
                            >
                              Habis
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ModalBody>
          </Modal>

          <Modal
            isOpen={this.state.modalPassword}
            toggle={this.togglePassword}
            className={this.props.className}
            style={{ marginTop: "10%" }}
            size="md"
          >
            {/* <ModalHeader className="pt-4" style={{ fontSize: "16px" }}>
              Join ePustaka Untuk Pinjam Koleksi
            </ModalHeader> */}
            <div
              className="modal-header"
              style={{ margin: "0 auto", border: "none" }}
            >
              <h6 className="modal-title">
                Join ePustaka Untuk Pinjam Koleksi
              </h6>
            </div>
            <ModalBody
              style={{
                padding: "1rem",
                paddingTop: 0,
                paddingBottom: 0,
                borderTop: "#dee2e6 solid 1px"
              }}
            >
              <div className="row">
                <div className="col-12 px-4 pt-4">
                  <Alert
                    color="warning"
                    isOpen={this.state.show}
                    toggle={this.onDismiss}
                  >
                    {this.state.massage}
                  </Alert>
                  <span style={{ fontSize: "15px" }}>
                    Masukan kata kunci anda sebagai konfirmasi bahwa anda ingin
                    bergabung menjadi member dan meminjam koleksi kami
                  </span>
                  <div className="input-group mt-5">
                    <InputLabel
                      htmlFor="standard-adornment-password"
                      style={{ fontSize: "15px", color: "#ff6d0c" }}
                    >
                      Kata Kunci
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      style={{ width: "100%" }}
                      type={this.state.pass ? "text" : "password"}
                      placeholder="Masukan Kata Sandi Anda"
                      name="newPass"
                      onChange={this.getPass}
                      endAdornment={
                        <InputAdornment position="end">
                          <button
                            onClick={this.showPass}
                            className="btnPasswordView"
                          >
                            Tampilkan
                          </button>
                        </InputAdornment>
                      }
                    />
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                className="btn-close"
                style={{ height: "30px", padding: "0", width: "140px" }}
                onClick={this.togglePassword}
              >
                Batalkan
              </button>
              <button
                className="btn-pinjam"
                style={{ height: "30px", padding: "0", width: "140px" }}
                onClick={this.signUpPustaka}
              >
                Kirim
              </button>
            </ModalFooter>
          </Modal>

          {modalError}
          <style jsx>{slick}</style>
        </div>
      );
    }

    return <Layout>{content}</Layout>;
  }
}

export default withAuthSync(Dashboard);
