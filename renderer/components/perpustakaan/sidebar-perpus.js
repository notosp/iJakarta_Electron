import React, { Component } from "react"
import sideCss from "../../assets/css/sidebar"
import Link from "next/link"
import Router from 'next/router'

class SidebarPerpus extends Component {
  constructor(props){
    super(props)
    this.state = {
      routUrl:''
    }
  }
  render = () => {
    Router.onRouteChangeStart = url => {
      this.setState({ router:url })
    };
    return (
      <div>
        <nav className="col-lg-2 col-md-2 d-none d-md-block sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item active-sidebar">
                <Link href="/main/koleksi">
                  <a className="nav-link">
                    <span data-feather="home"></span>
                    Koleksi <span className="sr-only"></span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/main/epustaka">
                  <a className="nav-link">
                    <span data-feather="home"></span>
                    ePustaka <span className="sr-only"></span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="home"></span>
                  Rak Buku <span className="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <style jsx>{sideCss}</style>
      </div>
    );
  }
}

export default SidebarPerpus;
