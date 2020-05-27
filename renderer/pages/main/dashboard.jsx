import React from 'react';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuthSync } from "../../utils/auth";
import Layout from '../../components/Layout';
import Feedup from "../../components/beranda/feed-up";
import Feedcenter from "../../components/beranda/feed-center";
import Feeddown from "../../components/beranda/feed-down";

class Dashboard extends React.Component {

  render() {
    return (
      <Layout>
        <Feedup />
        <div
          style={{
            marginTop: "30px",
            paddingLeft: "30px",
            paddingRight: "30px"
          }}
        >
          <Feedcenter />
        </div>
        <Feeddown />
      </Layout>
    );
  }
}
 
export default withAuthSync(Dashboard);
