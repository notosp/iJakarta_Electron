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
import Link from "./Link/index";
import navCss from "../assets/css/navbar";
import Router from "next/router";
import cookie from "js-cookie";


class NavbarLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navName: ""
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  componentDidMount() {
    let routeName = Router.query.navName;
    this.setState({ navName: routeName });
  }

  logout = () => {
    localStorage.clear();
    cookie.remove("token");
    Router.push("/intro/intro");
  };

  render() {
    return (
      <div>
        <Container>
          <div style={{ marginBottom: "50px" }}>
            <nav className="bg-color navbar fixed-top navbar-expand-sm navbar-light">
              <NavbarBrand href="/">
                <img
                  width="100px"
                  src="../static/images/navigation/logo_nav.svg"
                />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-lg-5" navbar>
                  <NavItem>
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
                        className="border-0 inputSearch form-control"
                        placeholder="Pencarian"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                  <NavItem
                    className={
                      this.state.navName === "dashboard" ? "active" : ""
                    }
                  >
                    <Link
                      href={{
                        pathname: "/main/dashboard",
                        query: {
                          navName: "dashboard"
                        }
                      }}
                    >
                      <NavLink>Beranda</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem
                    className={
                      this.state.navName === "perpustakaan" ? "active" : ""
                    }
                  >
                    <Link
                      href={{
                        pathname: "/main/koleksi",
                        query: {
                          navName: "perpustakaan"
                        }
                      }}
                    >
                      <NavLink>Perpustakaan</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem
                    className={
                      this.state.navName === "layanan" ? "active mr-4" : "mr-4"
                    }
                  >
                    <Link href="#">
                      <NavLink>Layanan</NavLink>
                    </Link>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                      <img src="../static/images/navigation/ic_ava_topbar.svg" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={this.logout}>Logout</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                      <img src="../static/images/navigation/ic_notif.svg" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </nav>
            <style jsx>{navCss}</style>
          </div>
        </Container>
      </div>
    );
  }
}

export default NavbarLayout;
