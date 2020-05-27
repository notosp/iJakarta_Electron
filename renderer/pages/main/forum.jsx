import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuthSync } from "../../utils/auth";
import Layout from "../../components/perpustakaan/Layout-forum";

import Forum from "../../components/perpustakaan/epustaka/forum/forum"
class detailEpus extends React.Component {
    
  render() {
    return (
      <Layout>
        <Forum />
      </Layout>
    );
  }
}

export default withAuthSync(detailEpus);
