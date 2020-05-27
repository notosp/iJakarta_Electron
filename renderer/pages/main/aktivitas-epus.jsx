import React from "react";
import { withAuthSync } from "../../utils/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../components/perpustakaan/Layout-epus-aktivitas";
import Router from 'next/router'

class detailEpus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      jenis: "",
      library_id: "",
      namakategori: "",
      logo: "",
    };
  }

  componentDidMount() {
    this.setState({
      title: Router.query.title,
      library_id: Router.query.library_id,
      namakategori: Router.query.namakategori,
      logo: Router.query.logo
    });
  }
  render() {
    const library_id = this.state.library_id;
    const namakategori = this.state.namakategori;
    const logo = this.state.logo;
    return (
     <Layout>
       <div className="container">
        <div className="card ml-4 mr-4 mb-4" style={{backgroundColor:'#F5f5f5'}}>
          <div className="card" style={{border:" 1px #fff"}}>
            <div className="card-body">
              <div className="row justify-content-between">
                <div className="col-8 text-left">
                  <div className="media">
                    <img
                      src={logo}
                      style={{width:'50px', height:'50px'}}
                    />
                    <div>
                      <p className="ml-3">{namakategori}</p>
                        <span className="ml-3 text-wrap">Menambahkan Aktivitas</span>
                    </div>
                  </div>
                </div>
                <div className="col-4 text-right">
                  <span className="text-muted">15 Menit Lalu</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
          <img src="../../static/images/epustaka/ex-news.jpg" style={{width:'100%', height:'500px'}} className="card-img-top card-body"/>
           <div className="card-body">
              <div className="input-group ml-0">
                <img src="../../static/images/epustaka/ic_like_inactive.svg" style={{marginRight:"10px", cursor:"pointer"}}/>
                <img src="../../static/images/epustaka/ic_comment_inactive.svg" style={{marginRight:"10px", cursor:"pointer"}}/>
                <img src="../../static/images/epustaka/ic_share_inactive.svg" style={{marginRight:"10px", cursor:"pointer"}}/>
              </div>
           </div>
        </div>

        <div className="card ml-4 mr-4 mb-4" style={{backgroundColor:'#F5f5f5'}}>
          <div className="card" style={{border:" 1px #fff"}}>
            <div className="card-body">
              <div className="row justify-content-between">
                <div className="col-8 text-left">
                  <div className="media">
                    <img
                      src={logo}
                      style={{width:'50px', height:'50px'}}
                    />
                    <div>
                      <p className=" ml-3">{namakategori}</p>
                    </div>
                  </div>
                </div>
                <div className="col-4 text-right">
                  <span className="text-muted">15 Menit Lalu</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
          <img src="../../static/images/epustaka/ex-news.jpg" style={{width:'100%', height:'500px'}} className="card-img-top card-body"/>
           <div className="card-body">
              <div className="input-group ml-0">
                <img src="../../static/images/epustaka/ic_like_inactive.svg" style={{marginRight:"10px", cursor:"pointer"}}/>
                <img src="../../static/images/epustaka/ic_comment_inactive.svg" style={{marginRight:"10px", cursor:"pointer"}}/>
                <img src="../../static/images/epustaka/ic_share_inactive.svg" style={{marginRight:"10px", cursor:"pointer"}}/>
              </div>
           </div>
        </div>
       </div>
     </Layout>
    );
  }
}

export default withAuthSync(detailEpus);
