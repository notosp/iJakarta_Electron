import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import intro from '../../assets/css/intro';
import { logins } from "../../utils/auth";
import Axios from 'axios'
import {base_api, client_id, client_id_google} from '../../config-api';
import Router from 'next/router'

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      redirect:false
    };

    this.toggleInfo = this.toggleInfo.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.nextRegister = this.nextRegister.bind(this);

    this.responseGoogle = this.responseGoogle.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }


  nextRegister = () => {
    Router.push("/auth/login");
  }

  
  toggleInfo = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  toggleLogin = () => {
    this.setState(prevState => ({
      modalLogin: !prevState.modalLogin
    }));
  };

  // ========login fb=====
  
  responseFacebook = (response) => {
  // console.log(response);
  const token = response.id;
  const email = response.email;
  console.log('Successful login id: ', token, 'email: ',email);
    Axios.get(
      `${base_api}/users/has_moco_account?client_id=${client_id}&username=${email}`

      ).then(res => {
        if (res.data.data === "true"){
          logins({
            token
          });
        }else{
          localStorage.setItem("emailSimpan", email);
          Router.push('/auth/register-first');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  // ===google====

  responseGoogle = (response) => {
    const token = response.accessToken;
    const idGoogle = response.googleId;
    const email = response.profileObj.email;
    console.log('Successful login token :', token, 'Google id:', idGoogle, 'email:', email);
    
    Axios.get(
      `${base_api}/users/has_moco_account?client_id=${client_id}&username=${email}`

      ).then(res => {
        if (res.data.data === "true") {
          logins({
            token
          });
        } else {
          localStorage.setItem("emailSimpan", email);
          Router.push('/auth/register-first');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  

  render() {
   
    return (
      <div className="text-center">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <nav className="nav nav-masthead justify-content-end">
                <button className="nav-link l1" onClick={this.toggleInfo}>
                  <FontAwesomeIcon icon={faQuestionCircle} /> Info ?
                </button>
              </nav>
            </div>
          </header>

          <main role="main" className="container inner cover">
            <img className="img-logo" src="../static/images/intro/main_logo_caption.svg" />
            <p className="lead" style={{ marginTop: "30px" }}>
               <GoogleLogin
                clientId = {client_id_google}
                render={renderProps => (
                <button className="btn1" onClick={renderProps.onClick} disabled={renderProps.disabled} 
                >
                 <FontAwesomeIcon icon={faGoogle} /> <span style={{ marginLeft:'10px' }}> Gunakan akun google</span>{" "}
              </button>
                )}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </p>

            <p className="lead">
               <FacebookLogin
                appId="3507069202644467"
                autoLoad={false}
                fields="name,email,picture"
                cookie= {true}
                xfbml = {true}
                textButton={"Gunakan akun facebook"}
                callback={this.responseFacebook}
                cssClass="btn2"
                icon={<FontAwesomeIcon icon={faFacebookF} style={{ marginRight:'20px' }} />}
                
                />
            </p>
          </main>
        </div>
        <Link href="/auth/login">
          <div className="footer py-3">
            <span className="baseColor">Masuk</span>
          </div>
        </Link>
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggleInfo}
            className={this.props.className}
            style={{ marginTop: "10%" }}
          >
            <div className="modal-header text-center">
              <h6 className="modal-title w-100">Info</h6>
            </div>
            <ModalBody className="text-center">
              <p>
                Untuk terhubung dengan aplikasi ini, anda cukup memasukan email
                atau akun facebook. kemudian ketika aplikasi kami mendeteksi
                bahwa akun anda belum terdaftar maka secara otomatis anda akan
                diarahkan ke laman pendaftaran.
              </p>
            </ModalBody>
            <ModalFooter>
              <button className="btn3 mr-auto" onClick={this.toggleInfo}>
                Tutup
              </button>
            </ModalFooter>
          </Modal>
        </div>

        <div>
          <Modal
            isOpen={this.state.modalLogin}
            toggle={this.toggleLogin}
            className={this.props.className}
            style={{ marginTop: "10%" }}
          >
            <div className="modal-header text-center">
              <h6 className="modal-title w-100">Akun Anda Belum Terdaftar</h6>
            </div>
            <ModalBody className="text-center">
              <p>
               Silahkan Tekan Tombol Lanjutkan untuk melakukan pendaftaran, namun jika anda telah melakukan pendaftaran silahkan kembali dan masuk menggunakan email atau akun facebook anda yang telah terdaftar untuk terhubung.
              </p>
            </ModalBody>
            <ModalFooter>
              <button className="btnBack" onClick={this.toggleLogin}>
                Kembali
              </button>
              
              <button className="btnNext" onClick={this.nextRegister}>
                Lanjut Registrasi
              </button>
            </ModalFooter>
          </Modal>
        </div>

        <style jsx>{intro}</style>
      </div>
    );
  }
}

export default Intro;
