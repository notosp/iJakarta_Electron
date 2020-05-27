import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuthSync } from "../../utils/auth";
import Layout from "../../components/perpustakaan/Layout-epus-forum";
import Router from "next/router";
import Link from "next/link"

class detailEpus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jenis:'',
      library_id:'',
      namakategori: '',
      logo: '',
    }
  }

  componentDidMount(){
    this.setState({
      jenis : Router.query.jenis,
      library_id: Router.query.library_id,
      logo: Router.query.logo,
      namakategori: Router.query.namakategori,
    })
  }
  render() {
    const jenis = this.state.jenis;
    const namakategori = this.state.namakategori;
    const library_id = this.state.library_id;
    const logo = this.state.logo;
    
    return (
      <Layout>
        <div className="container ml-3 mr-3 mt-3">
          <div className="text-left">
            <p className="recBookText">
              Induk Pembahasan 4
          </p>
          </div>
          <div className="card box-card" style={{ marginBottom: '20px', marginTop: '10px' }}>
            <div className="row justify-content-start">
              <div className="col-md-auto">
                <img src="../../static/images/epustaka/ic_discuss_empty.svg" />
              </div>
              <Link href={{
                pathname:"/main/forum",
                query: {
                  library_id: library_id,
                  namakategori: namakategori,
                  jenis: jenis,
                  logo: logo,
                  title: "Aturan dan Kebijakan"
                }}}>
                <div className="col-md-auto">
                  <div className="card-body">
                    <h5 className="card-title">Aturan dan Kebijakan</h5>
                    <small className="text-muted">Dibuat 17 Desember 2019</small>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="card box-card" style={{ marginBottom: '20px' }}>
            <div className="row justify-content-start">
              <div className="col-md-auto">
                <img src="../../static/images/epustaka/ic_discuss_empty.svg" />
              </div>
              <div className="col-md-auto">
                <div className="card-body">
                  <h5 className="card-title">Tanya Jawab</h5>
                  <small className="text-muted">Dibuat 17 Desember 2019</small>
                </div>
              </div>
            </div>
          </div>

          <div className="card box-card">
            <div className="row justify-content-start">
              <div className="col-md-auto">
                <img src="../../static/images/epustaka/ic_discuss_empty.svg" />
              </div>
              <div className="col-md-auto">
                <div className="card-body">
                  <h5 className="card-title">Permintaan Buku Baru</h5>
                  <small className="text-muted">Dibuat 17 Desember 2019</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withAuthSync(detailEpus);
