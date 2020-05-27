import React, { Component } from "react";
import sideCss from "../../../../assets/css/sidebar-detailepus.js";
import Router from 'next/router'
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from 'react-bootstrap';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { withRouter, browserHistory } from "react-router";

class SidebarPerpus extends Component {
  constructor(props){
    super(props)
    this.state = {
      jenis:'',
      namakategori:'',
      logo:'',
      member:'',
      tentang: '',
    };
  }


  componentDidMount(){
    this.setState({
      jenis : Router.query.jenis,
      namakategori : Router.query.namakategori,
      logo: Router.query.logo,
      member: Router.query.member,
      tentang: Router.query.tentang
    })
  }
  render() {
    const jenis = this.state.jenis;
    const namakategori = this.state.namakategori;
    const logo = this.state.logo;
    const member = this.state.member;
    const tentang = this.state.tentang;

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <a href="" ref={ref}
        onClick={e => {
          e.preventDefault();
          onClick(e);
        }}>
        {children}
      </a>
    ));

    const CustomMenu = React.forwardRef(
      ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
          <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
          >
            <FormControl
              autoFocus
              className="mx-3 my-2 w-auto"
              placeholder="Type to filter..."
              onChange={e => setValue(e.target.value)}
              value={value}
            />
            <ul className="list-unstyled">
              {React.Children.toArray(children).filter(
                child =>
                  !value || child.props.children.toLowerCase().startsWith(value),
              )}
            </ul>
          </div>
        );
      },
    );


    let sidebarName;
    if (jenis === "epus") {
      sidebarName = (
        <div>
          <nav className="col-3 d-flex d-none d-md-block sidebar" style={{width: "250px"}}>
          <img
            style={{ marginTop: "-150px", cursor: "pointer" }}
            onClick={() => {
              Router.push('/main/epustaka')
            }}
            src="../static/images/navigation/ic_back_button_white.svg"
          />
          <div className="sidebar-sticky pl-3 ml-4" style={{ marginTop: "-50px" }}>
            <div className="row">
              <div className="col mr-3 pr-5">
                <div>
                  <img src={logo} style={{width:"160px", height:"160px"}} />
                  <p className= "mt-2" style={{ fontSize: "14px", color: "white", fontWeight: "10" }} >
                    ePustaka
                  </p>
                  <h6 style={{ fontSize: "16px", marginTop: "-15px", color: "white", textAlign:"justify" }} >
                    {namakategori}
                  </h6>
                  <p style={{ fontSize: "14px", color: "white", fontWeight: "10" }} >
                    {member} Member
                  </p>

                  <div className="row justify-content-between">
                    <div className="col-4">
                      <button className="btn-join">Gabung</button>
                    </div>
                    <div className="col-4">
                      <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-basic" className="btn-more">
                          <img src="../static/images/epustaka/ic_more_sidebar.svg" className="ml-2"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Blog Pribadi</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Bagikan</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>

                  <div>
                    <p className="mt-2" style={{ fontSize: "14px", color: "white", fontWeight: "20" }} >
                    Tentang ePustaka
                    </p>
                    <p style={{ fontSize: "14px", color: "white", fontWeight: "10", textAlign:"left" }}>{tentang.replace(/(<([^>]+)>)/g,"").split('', 300)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        </div>
      );
    } 
    
    return (
      <div>
        {sidebarName}
        <style jsx>{sideCss}</style>
      </div>
    );
  }
}

export default SidebarPerpus;
