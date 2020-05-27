import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import login from "../../assets/css/login";
import { base_api, client_id, client_secret } from "../../config-api";
import Axios from "axios";
import Router from "next/router";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Lottie from "react-lottie";
import animationData from '../../static/images/intro/loading.json'
import { logins } from "../../utils/auth";
import nextCookie from "next-cookies";

class RegisterSecond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        password: "",
        rePassword: ""
      },
      errors: {},
      pass: false,
      rePass: false,
      setuju: false,
      loading: false
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount(ctx) {
    this.setState(prevState => ({
      fields: {
        ...prevState.fields,
        email: localStorage.getItem("emailSimpan")
      }
    }));
    const { token } = nextCookie(ctx);
    if (token) {
      Router.push("/main/dashboard");
    }
  }

  submitForm = e => {
    e.preventDefault();
    if (this.validateForm()) {

      var arr = JSON.parse(localStorage.getItem("registerFirst"));
      const item = {
        username: arr["email"],
        client_secret: client_secret,
        password: this.state.fields.password,
        device_id: "01",
        client_id: client_id,
        name: `${arr["namaDepan"]} ${arr["namaBelakang"]}`,
        confirm_password: this.state.fields.rePassword
      };
      
      this.setState({ loading: true });
      
      Axios.post(`${base_api}/v2/register2`, item)
      .then(response => {
        console.log(response);
        const token = response.data.data.access_token;
        // localStorage.removeItem("emailSimpan");
        const myVar = setInterval(() => {
          clearInterval(myVar);
          logins({ token });
        }, 600);
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }
  };

  onChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields.password) {
      formIsValid = false;
      errors.password = "Harap isi kata sandi anda.";
    }

    if (fields.password && fields.password.length <= 3) {
      formIsValid = false;
      errors["password"] = "Minimal 3 karakter.";
    }

    if (!fields.rePassword) {
      formIsValid = false;
      errors["rePassword"] = `Harap isi ulang kata sandi anda.`;
    }

    if (fields.rePassword && fields.rePassword !== fields.password) {
      formIsValid = false;
      errors["rePassword"] = "Kata sandi tidak sama";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  showPass = () => {
    const showPass = this.state.pass;
    this.setState({ pass: !showPass });
  };

  showRePass = () => {
    const showRePass = this.state.rePass;
    this.setState({ rePass: !showRePass });
  };

  setuju = () => {
    const setuju = this.state.setuju;
    this.setState({ setuju: !setuju });
  };

  render() {
    const defaultOptions = {
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <div className="container-fluid d-flex w-100 h-100 pt-3 mx-auto flex-column">
          <div className="row">
            <div className="col-6">
              <Link href="/auth/register-first">
                <button className="mr-md-auto l1">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-12">
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "-70px",
                    marginBottom: "10%"
                  }}
                >
                  <img
                    className="firstStep"
                    src="../../static/images/intro/ic_step_active.svg"
                  />
                  <img src="../../static/images/intro/ic_step_active.svg" />
                  <hr className="line-active" />
                </div>
                <h5 className="fontBaseColor">Masukan Kata Sandi Anda.</h5>
                <p className="subtitle">
                  Pastikan kata sandi anda sesuai dengan yang sudah
                  diregistrasikan (perlu revisi).
                </p>
                <FormControl style={{ width: "90%" }}>
                  <InputLabel htmlFor="adornment-password">
                    Kata Sandi
                  </InputLabel>
                  <Input
                    id="adornment-password"
                    type={this.state.pass ? "text" : "password"}
                    required
                    name="password"
                    onChange={this.onChange}
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
                  <div className="errorMsg">{this.state.errors.password}</div>
                </FormControl>

                <FormControl style={{ marginTop: "15px", width: "90%" }}>
                  <InputLabel htmlFor="adornment-password">
                    Ulangi Kata Sandi
                  </InputLabel>
                  <Input
                    id="adornment-password"
                    type={this.state.rePass ? "text" : "password"}
                    required
                    onChange={this.onChange}
                    name="rePassword"
                    endAdornment={
                      <InputAdornment position="end">
                        <button
                          onClick={this.showRePass}
                          className="btnPasswordView"
                        >
                          Tampilkan
                        </button>
                      </InputAdornment>
                    }
                  />
                  <div className="errorMsg">{this.state.errors.rePassword}</div>
                </FormControl>

                <label style={{ marginTop: "25px", display: "inline-flex" }}>
                  <div style={{ marginRight: "20px", marginTop: "7px" }}>
                    <input
                      className="inp-cbx"
                      id="cbx"
                      type="checkbox"
                      name="setuju"
                      onChange={this.setuju}
                      style={{ display: "none" }}
                    />
                    <label className="cbx" htmlFor="cbx">
                      <span>
                        <svg width="12px" height="12px">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                    </label>
                  </div>
                  <div>
                    <span>
                      Dengan ini anda menyetujui semua ketentuan dan peraturan
                      yang ada pada aplikasi smartcity iJakarta, kerahasiaan
                      data anda akan kami jamin. Lebih lanjut.
                    </span>
                  </div>
                </label>

                <div className="text-center pt-4">
                  <button
                    onClick={this.submitForm}
                    disabled={this.state.setuju ? "" : "disabled"}
                    className="btn3"
                  >
                    Daftar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={ this.state.loading ? "spinner-wrapper" : "spinner-wrapper hidden" }>
            <Lottie
              style={{
                background: "#fff",
                borderRadius: "150px",
                marginTop: "20%"
              }}
              options={defaultOptions}
              height={150}
              width={150}
            />
            <h2 className="titleSpinner">Berhasil Masuk</h2>
            <p style={{ color: "#fff", marginTop: "10px" }}>
              Info pendaftaran akan dikirimkan ke email anda.
            </p>
          </div>
        </main>
        <style jsx>{login}</style>
      </div>
    );
  }
}

export default RegisterSecond;
