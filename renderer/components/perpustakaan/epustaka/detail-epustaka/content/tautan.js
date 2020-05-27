import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-web-tabs/dist/react-web-tabs.css";
import Router from "next/router";

class Layouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navName: "",
      hasMore: true,
      loading: true,
      page:4
    };
  }

  componentDidMount() {
    let routeName = Router.query.navName;
    this.setState({
      navName: routeName,
    });
  }

  render() { 
    return (
      <main role="main">
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4">
                    <img
                      src="../../../../../static/images/epustaka/ex-news.jpg"
                      className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail">
                    </img>
                    <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Minggu, 17 Desember 2019</small>
                    </div>
                    <p className="card-text">MU Kejutkan City, Unggul 2-0 pada Babak Pertama</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                    <img
                      src="../../../../../static/images/epustaka/ex-news.jpg"
                      className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail">
                    </img>
                    <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Minggu, 17 Desember 2019</small>
                    </div>
                    <p className="card-text">MU Kejutkan City, Unggul 2-0 pada Babak Pertama</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                    <img
                      src="../../../../../static/images/epustaka/ex-news.jpg"
                      className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail">
                    </img>
                    <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Minggu, 17 Desember 2019</small>
                    </div>
                    <p className="card-text">MU Kejutkan City, Unggul 2-0 pada Babak Pertama</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                    <img
                      src="../../../../../static/images/epustaka/ex-news.jpg"
                      className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail">
                    </img>
                    <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Minggu, 17 Desember 2019</small>
                    </div>
                    <p className="card-text">MU Kejutkan City, Unggul 2-0 pada Babak Pertama</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                    <img
                      src="../../../../../static/images/epustaka/ex-news.jpg"
                      className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail">
                    </img>
                    <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Minggu, 17 Desember 2019</small>
                    </div>
                    <p className="card-text">MU Kejutkan City, Unggul 2-0 pada Babak Pertama</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                    <img
                      src="../../../../../static/images/epustaka/ex-news.jpg"
                      className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail">
                    </img>
                    <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Minggu, 17 Desember 2019</small>
                    </div>
                    <p className="card-text">MU Kejutkan City, Unggul 2-0 pada Babak Pertama</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                    <img
                      src="../../../../../static/images/epustaka/ex-news.jpg"
                      className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail">
                    </img>
                    <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Minggu, 17 Desember 2019</small>
                    </div>
                    <p className="card-text">MU Kejutkan City, Unggul 2-0 pada Babak Pertama</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                    <img
                      src="../../../../../static/images/epustaka/ex-news.jpg"
                      className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail">
                    </img>
                    <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Minggu, 17 Desember 2019</small>
                    </div>
                    <p className="card-text">MU Kejutkan City, Unggul 2-0 pada Babak Pertama</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </main>

    );
  }
}
export default Layouts;
