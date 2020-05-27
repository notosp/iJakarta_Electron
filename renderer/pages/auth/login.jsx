import React, { useState } from 'react';
import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import {
  faChevronCircleRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import login from '../../assets/css/login';
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import {base_api, client_id} from '../../config-api'
import Axios from 'axios'
import Router from "next/router";
import { Alert } from "reactstrap";
import nextCookie from "next-cookies";

const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      newEmail: false,
      show: false,
      massage: ""
    };

    this.toggle = this.toggle.bind(this);
    this.cekUser = this.cekUser.bind(this);
  }

  componentDidMount(ctx) {
    const { token } = nextCookie(ctx);
    if (token) {
      Router.push("/main/dashboard");
    }
  }
  
  cekUser = e => {
    if (this.state.email) {
      if (!validateEmail(this.state.email)) {
        this.setState({ massage: "Format email salah", show: true });
      } else {
        Axios.get(
          `${base_api}/users/has_moco_account?client_id=${client_id}&username=${this.state.email}`
        )
          .then(res => {
            const newEmail = res.data.data;

            localStorage.setItem("emailSimpan", this.state.email);

            if (newEmail === "true") {
              this.setState({ newEmail: true, modal: false });
              Router.push("/auth/insert-password");
            } else {
              this.setState({ newEmail: false, modal: true });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    } else {
      this.setState({ massage: "Silahkan masukan email anda!", show: true });
    }
  };

  inputEmail = e => {
    const user = e.target.value;
    this.setState({ email: user });
  };

  handleEnter = e => {
    if (event.key === "Enter") {
      this.cekUser();
    }
  };
  
  goToRegister = () => {
    localStorage.setItem("emailSimpan", this.state.email);
    Router.push("/auth/register-first");
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onDismiss = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        <div className="container-fluid d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div className="row">
            <div className="col-6">
              <Link href="/intro/intro">
                <button className="mr-md-auto l1">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </Link>
            </div>
            <div className="col-6" style={{ textAlign: "right" }}>
              <button className="l1" type="submit" onClick={this.cekUser}>
                Lanjutkan <FontAwesomeIcon icon={faChevronCircleRight} />
              </button>
            </div>
          </div>
        </div>

        <main>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <Alert
                  color="warning"
                  isOpen={this.state.show}
                  toggle={this.onDismiss}
                >
                  {this.state.massage}
                </Alert>
                <h4 className="fontBaseColor">Email Anda</h4>
                <p className="subtitle">
                  Masukan email yang terdaftar dalam aplikasi, dan nikmati
                  berbagai fitur layaran, koleksi buku dan informasi terbaru
                </p>

                <div className="input-group">
                  <Input
                    id="input-with-icon-adornment"
                    style={{ width: "430px" }}
                    placeholder="Email"
                    type="email"
                    name="email"
                    onKeyPress={this.handleEnter}
                    autoComplete="email"
                    required
                    onChange={this.inputEmail}
                    startAdornment={
                      <InputAdornment position="start">
                        <img src="../static/images/intro/ic_mail.svg" />
                      </InputAdornment>
                    }
                  />
                  <button type="submit" hidden />
                </div>
              </div>
            </div>
          </div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
            style={{ marginTop: "10%" }}
          >
            <div className="modal-header text-center">
              <h6 className="modal-title w-100">Akun Anda Belum Terdaftar</h6>
            </div>
            <ModalBody className="text-center">
              <p style={{ padding: "20px" }}>
                Silahkan tekan tombol lanjutkan untuk melakukan pendaftaran,
                namun jika anda telah melakukan pendaftaran silahkan kembali dan
                masuk menggunakan email atau akun facebook anda yang telah
                terdaftar untuk terhubung.
              </p>
            </ModalBody>
            <ModalFooter>
              <button className="btn2" onClick={this.toggle}>
                Kembali
              </button>
              <button onClick={this.goToRegister} className="btn3">
                Lanjut Registrasi
              </button>
            </ModalFooter>
          </Modal>
        </main>
        <style jsx>{login}</style>
      </div>
    );
  }
}

export default Login;