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
import { base_api, client_id, client_secret } from "../../config-api";
import Axios from 'axios'
import Router from "next/router"
import { logins } from '../../utils/auth'
import nextCookie from "next-cookies";
import { Alert } from "reactstrap";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      pass: false,
      newPass: "",
      show: false
    };

    this.toggle = this.toggle.bind(this);
    this.showPass = this.showPass.bind(this);
  }

  showPass = () => {
    const showPass = this.state.pass;
    this.setState({ pass: !showPass });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  getPass = e => {
    const passBaru = e.target.value;
    this.setState({ newPass: passBaru });
  };

  login = () => {
    if (this.state.newPass) {
      const item = {
        client_id: client_id,
        client_secret: client_secret,
        username: localStorage.getItem("emailSimpan"),
        password: this.state.newPass,
        device_id: 2161
      };
  // .email_out.zip
      Axios.post(`${base_api}/login`, item)
        .then((response) => {
          console.log(response.data.meta);
          if (response.data.meta.code == 200) {
            const token = response.data.data.access_token;
            // localStorage.removeItem("emailSimpan");
            logins({ token });
          } else {
            this.setState({
              massage: "Kata sandi tidak sesuai.",
              show: true
            });

          }
        })
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    } else {
      this.setState({ massage: "Silahkan masukan kata sandi anda!", show: true });
    }
  };
  onDismiss = () => {
    this.setState({
      show: !this.state.show
    });
  };
  componentDidMount(ctx) {
    const { token } = nextCookie(ctx);
    if (token) {
      Router.push("/main/dashboard");
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div className="row">
            <div className="col-6">
              <Link href="/auth/login">
                <button className="mr-md-auto l1">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </Link>
            </div>
            <div className="col-6" style={{ textAlign: "right" }}>
              <button className="l1" onClick={this.login}>
                Lanjutkan <FontAwesomeIcon icon={faChevronCircleRight} />
              </button>
            </div>
          </div>
        </div>

        <main>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-5 col-md-5 col-sm-11">
                <Alert
                  color="warning"
                  isOpen={this.state.show}
                  toggle={this.onDismiss}
                >
                  {this.state.massage}
                </Alert>
                <h4 className="fontBaseColor">Kata Sandi Anda</h4>
                <p className="subtitle">
                  Pastikan kata sandi anda sesuai dengan yang sudah
                  diregistrasikan.
                </p>
                <div className="input-group">
                  <Input
                    id="adornment-password"
                    style={{ width: "100%" }}
                    type={this.state.pass ? "text" : "password"}
                    placeholder="Kata Sandi"
                    name="newPass"
                    onChange={this.getPass}
                    startAdornment={
                      <InputAdornment position="start">
                        <img src="../static/images/intro/ic_lock.svg" />
                      </InputAdornment>
                    }
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
                  <Link href="/auth/forgot">
                    <button className="btnForgot">Lupa kata sandi?</button>
                  </Link>
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
              <button className="btn3" onClick={this.toggle}>
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