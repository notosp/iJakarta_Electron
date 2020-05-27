import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faChevronCircleRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import login from "../../assets/css/login";
import TextField from '@material-ui/core/TextField';
import Router from "next/router";
import nextCookie from "next-cookies";

class RegisterFirst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        namaDepan: "",
        namaBelakang: "",
        dd: "",
        mm: "",
        yyyy: "",
        email: ""
      },
      errors: {}
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
      localStorage.setItem("registerFirst", JSON.stringify(this.state.fields));
      Router.push("/auth/register-second");
    }
  };

  handleEnter = e => {
    if (event.key === "Enter") {
      this.submitForm();
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

    if (!fields["namaDepan"]) {
      formIsValid = false;
      errors["namaDepan"] = "Harap isi nama depan anda.";
    }

    if (typeof fields["namaDepan"] !== "undefined") {
      if (!fields["namaDepan"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["namaDepan"] = "Hanya dapat di isi menggunakan huruf alfabet";
      }
    }

    if (!fields["namaBelakang"]) {
      formIsValid = false;
      errors["namaBelakang"] = "Harap isi nama belakang anda.";
    }

    if (typeof fields["namaBelakang"] !== "undefined") {
      if (!fields["namaBelakang"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["namaBelakang"] = "Hanya dapat di isi menggunakan huruf alfabet";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Harap isi email anda.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "Format email tidak valid";
      }
    }

    if (!fields["dd"] || !fields["mm"] || !fields["yyyy"]) {
      formIsValid = false;
      errors["dd"] = "Masukan tanggal lahir anda";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div>
        <div className="container-fluid d-flex w-100 h-100 pt-3 mx-auto flex-column">
          <div className="row">
            <div className="col-6">
              <Link href="/intro/intro">
                <button className="mr-md-auto l1">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </Link>
            </div>
            <div className="col-6" style={{ textAlign: "right" }}>
              <button className="l1" onClick={this.submitForm}>
                Lanjutkan <FontAwesomeIcon icon={faChevronCircleRight} />
              </button>
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
                  <img src="../../static/images/intro/ic_step_non_active.svg" />
                  <hr className="line" />
                </div>
                <h5 className="fontBaseColor">Registrasikan Akun Anda.</h5>
                <p className="subtitle">
                  Pastikan informasi yang anda masukan sudah benar dan valid
                  sebelum melanjutkan.
                </p>

                <div className="input-group" style={{ marginTop: "-20px" }}>
                  <TextField
                    id="standard-name"
                    label="Nama Depan"
                    style={{ width: "90%", marginBottom: "10px" }}
                    type="text"
                    name="namaDepan"
                    required
                    onChange={this.onChange}
                  />
                  <div className="errorMsg">{this.state.errors.namaDepan}</div>
                </div>
                <div className="input-group">
                  <TextField
                    id="standard-name"
                    label="Nama Belakang"
                    style={{ width: "90%", marginBottom: "10px" }}
                    type="text"
                    name="namaBelakang"
                    required
                    onChange={this.onChange}
                  />
                  <div className="errorMsg">
                    {this.state.errors.namaBelakang}
                  </div>
                </div>
                <div className="input-group">
                  <TextField
                    id="standard-name"
                    label="dd"
                    style={{ width: "70px" }}
                    type="number"
                    name="dd"
                    required
                    onChange={this.onChange}
                  />
                  <TextField
                    id="standard-name"
                    label="mm"
                    style={{ width: "70px", marginLeft: "30px" }}
                    type="number"
                    name="mm"
                    required
                    onChange={this.onChange}
                  />
                  <TextField
                    id="standard-name"
                    label="yyyy"
                    style={{
                      width: "70px",
                      marginLeft: "30px",
                      marginBottom: "10px"
                    }}
                    type="text"
                    name="yyyy"
                    inputProps={{ maxLength: 4 }}
                    required
                    onChange={this.onChange}
                  />
                  <div className="errorMsg">{this.state.errors.dd}</div>
                </div>
                <div className="input-group">
                  <TextField
                    id="standard-name"
                    label="Email"
                    style={{ width: "90%" }}
                    type="text"
                    name="email"
                    required
                    value={this.state.fields.email}
                    onChange={this.onChange}
                  />
                  <div className="errorMsg">{this.state.errors.email}</div>
                </div>
                <p className="subtitleBottom">
                  Semua informasi yang berkaitan dengan promosi, survey, email
                  layanan, sms dan kontak handphone akan dikirimkan ke email
                  yang teregistrasi.
                </p>
              </div>
            </div>
          </div>
        </main>
        <style jsx>{login}</style>
      </div>
    );
  }
}

export default RegisterFirst;
