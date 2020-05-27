import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import epusCss from '../../assets/css/forum'
import "react-web-tabs/dist/react-web-tabs.css";
import Router from 'next/router'

class Layouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:''
    }
  }

  componentDidMount() {
    this.setState({
      title: Router.query.title,
    })
  }

  render() {
    const title = this.state.title;
    return (
      <div>
        <nav class="navbar navbar-expand-lg nav">
           <img
            style={{ cursor: "pointer", marginLeft:"15px" }}
            onClick={() => {
              Router.push('/main/epustaka')
            }}
            src="../../static/images/navigation/ic_back_button_white.svg"
          />
          <a className="navbar-brand" href="#">{title}</a>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-12" style={{ marginTop: "10px"}}>
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
