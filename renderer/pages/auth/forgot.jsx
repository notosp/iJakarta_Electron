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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newEmail: false,
      show: false,
      email: ""
    };

    this.toggle = this.toggle.bind(this);
    this.forgotPass = this.forgotPass.bind(this);
  }

  cancelCourse = () => {
    document.getElementById("create-course-form").reset();
  };

  forgotPass = e => {
    e.preventDefault();
    const item = {
      client_id: client_id,
      username: this.state.email
    };
    if (this.state.email) {
      Axios.post(`${base_api}/users/forgot_password`, item)
        .then(response => {
          this.toggle();
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      this.setState({ show: true });
    }
  };

  inputEmail = e => {
    const user = e.target.value;
    this.setState({ email: user });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  close = () => {
    const user = "";
    this.setState({
      email: user
    });
  }

  cancelCourse = () => {
    document.getElementById("input-with-icon-adornment").reset();
  };

  onDismiss = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div>
        <Head>
          <title>Login Pages | Lupa Kata Sandi</title>
        </Head>
        <div className="container-fluid d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div className="row">
            <div className="col-6">
              <Link href="/intro/intro">
                <button className="mr-md-auto l1">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </Link>
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
                  Silahkan isi terlebih dahulu email anda
                </Alert>
                <h4 className="fontBaseColor">Lupa Kata Sandi</h4>
                <p className="subtitle">Silahkan masukan email anda.</p>
                <div className="input-group">
                  <Input
                    id="input-with-icon-adornment"
                    style={{ width: "430px" }}
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={this.inputEmail}
                    value={this.state.email}
                    startAdornment={
                      <InputAdornment position="start">
                        <img src="../static/images/intro/ic_mail.svg" />
                      </InputAdornment>
                    }
                  />
                </div>
                <p style={{ marginTop: "20px" }}>
                  Pengaturan ulang kata sandi akan dikirim ulang ke email yang
                  anda masukan, silahkan konfirmasi melalui email.
                </p>
                <div className="text-center">
                  <button onClick={this.forgotPass} className="btnSandiUlang">
                    Kirim
                  </button>
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
              <h6 className="modal-title w-100">Berhasil Terkirim Ke</h6>
            </div>
            <ModalBody className="text-center">
              <p style={{ padding: "20px" }}>
                Silahkan cek email anda untuk pengatuan ulang kata sandi anda.
              </p>
            </ModalBody>
            <ModalFooter>
              <button className="btn3 ml-auto mr-auto" onClick={this.close}>
                Tutup
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