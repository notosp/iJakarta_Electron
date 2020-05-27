import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import appCss from '../assets/css/app.js'
import Nav from './navbar'
import Router from 'next/router'
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false
    };
  }

  render() {
    return (
      <div className="root">
        <header>
          <Nav />
        </header>
        <main>
          {this.props.children}
        </main>
        <style jsx>{appCss}</style>
      </div>
    );
  }
}
 
export default Layout;
