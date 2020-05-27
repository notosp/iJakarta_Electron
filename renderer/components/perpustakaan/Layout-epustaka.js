import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import appCss from '../../assets/css/perpus.js'
import epusCss from '../../assets/css/epustaka'
import "../../assets/css/app.js";
import Nav from '../navbar';
import Sidebar from './sidebar-perpus'
import "react-web-tabs/dist/react-web-tabs.css";
class Layouts extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10">
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
