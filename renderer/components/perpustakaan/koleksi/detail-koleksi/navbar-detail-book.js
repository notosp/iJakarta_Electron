import React, { Component } from "react";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navCss from "../../../../assets/css/navbar";
import Router from "next/router";
import Link from 'next/link'

class NavbarLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      jenis:'',
      namakategori:'',
      kategori_id:''
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  componentDidMount() {
    this.setState({ 
      jenis: "Buku",
      namakategori: Router.query.namakategori,
      kategori_id: Router.query.kategori_id
     });
  }
  render() {
    return (
      <div>
        <nav
          className="bg-color navbar fixed-top navbar-expand-sm navbar-light"
          style={{ padding:0 }}
        >
          <div className="container-fluid">
            <NavbarBrand style={{ cursor:'pointer' }}>
              <Link
                href={{
                  pathname: "/main/koleksi-buku",
                  query: {
                    jenis: "buku",
                    kategori_id: this.state.kategori_id,
                    namakategori: this.state.namakategori
                  }
                }}
              >
                <img src="../../../../static/images/navigation/ic_back_button_white.svg" />
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <h6 className="mt-auto mb-auto text-white">Opsi Lanjutan</h6>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    <img src="../../../../static/images/epustaka/ic_more_sidebar.svg" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <img
                        src="../../../../static/images/navigation/ic_recom@1x.svg"
                        alt=""
                      />{" "}
                      Rekomendasikan
                    </DropdownItem>
                    <DropdownItem>
                      <img
                        src="../../../../static/images/navigation/ic_mail@1x.svg"
                        alt=""
                      />{" "}
                      Email
                    </DropdownItem>
                    <DropdownItem>
                      <img
                        src="../../../../static/images/navigation/ic_facebook@1x.svg"
                        alt=""
                      />{" "}
                      Facebook
                    </DropdownItem>
                    <DropdownItem>
                      <img
                        src="../../../../static/images/navigation/ic_twitter@1x.svg"
                        alt=""
                      />{" "}
                      Twitter
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        </nav>
        <style jsx>{navCss}</style>
      </div>
    );
  }
}

export default NavbarLayout;
