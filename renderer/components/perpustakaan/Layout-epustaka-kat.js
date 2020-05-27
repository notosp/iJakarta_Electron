import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import epusCss from '../../assets/css/sidebar-detailepus'
import "../../assets/css/app.js";
import Sidebar from "../perpustakaan/epustaka/detail-epustaka/sidebar-detail-epusBook";
import Header from "../perpustakaan/epustaka/detail-epustaka/header";
import Nav from "../perpustakaan/epustaka/detail-epustaka/navbar-epustaka";
import "react-web-tabs/dist/react-web-tabs.css";

class Layouts extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Sidebar />
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10" style={{ marginTop: "248px"}}>
              {this.props.children}
            </main>
          </div>
        </div>
        <style jsx>{epusCss}</style> 
      </div>
    );
  }
}
 
export default Layouts;
