import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import appCss from '../../assets/css/app'
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import Carousel from 'nuka-carousel';
import { Tabs, Button } from 'antd';
import 'antd/dist/antd.css';
import { Card } from 'reactstrap';

class Feedup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapseOpen: false,
      tabIndex: 0,
      modal:false
    };
     this.callback = this.callback.bind(this);
     this.more = this.more.bind(this);
  }

  callback = (key) => {
    console.log(key);
  }

  more = () => {
    console.log('klik')
  };

  render() { 
    const { TabPane } = Tabs;
    const operations = <Button onClick={this.more} style={{paddingRight:30, border:'none'}}><img src="../static/images/feeds/ic_more_horiz.svg"/></Button>;

    return (
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-6 pl-5">
            <Carousel
              autoplay={true}
              cellAlign="center"
              dragging={true}
              wrapAround={true}
              // speed='5000'
              renderCenterLeftControls={({ previousSlide }) => (
                <button className="buttonControl" onClick={previousSlide} >
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button className="buttonControl" onClick={nextSlide}>
                </button>
              )}
            >
              <div>
                <img src="../static/images/feeds/image1.png" />
              </div>
              <div>
                <img src="../static/images/feeds/image2.png" />
              </div>
              <div>
                <img src="../static/images/feeds/image1.png" />
              </div>
              <div>
                <img src="../static/images/feeds/image2.png" />
              </div>
            </Carousel>
          </div>

          <div className=" col-6 pr-5">
            <Card className="slideSaldo">
              <Tabs tabBarExtraContent={operations} defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="Saldo" key="1">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                      <div className="col-6 text-left mt-3">
                        <img src="../static/images/feeds/ic_wallet_orange.svg" />
                        <b className="amount">Rp. 20.000,-</b>
                      </div>
                      <div className="col-6 text-right mt-3">
                        <button className="btnTopup">Top Up</button>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Beasiswa" key="2">
                   <div className="container-fluid">
                    <div className="row justify-content-between">
                      <div className="col-6 text-left mt-3">
                        <img src="../static/images/feeds/ic_beasiswa_orange.svg" />
                        <b className="amount">Layanan Masyarakat</b>
                      </div>
                      <div className="col-6 text-right mt-3">
                        <button className="btnTopup">Tampilkan</button>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Pelatihan" key="3">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                      <div className="col-6 text-left mt-3">
                        <img src="../static/images/feeds/ic_pelatihan_orange.svg" />
                        <b className="amount">Pelatihan</b>
                      </div>
                      <div className="col-6 text-right mt-3">
                        <button className="btnTopup">Tampilkan</button>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Wirausaha" key="4">
                  <div className="container-fluid">
                    <div className="row justify-content-between">
                      <div className="col-6 text-left mt-3">
                        <img src="../static/images/feeds/ic_modal_kerja_orange.svg" />
                        <b className="amount">Kewirusahaan</b>
                      </div>
                      <div className="col-6 text-right mt-3">
                        <button className="btnTopup">Tampilkan</button>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </Card>
          </div>
          <style jsx>{appCss}</style>
        </div>
      </div>
    );
  }
}
 
export default Feedup;
