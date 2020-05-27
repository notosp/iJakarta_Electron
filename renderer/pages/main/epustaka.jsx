import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuthSync } from "../../utils/auth";
import Layout from "../../components/perpustakaan/Layout-epustaka";
import Epustakaup from "../../components/perpustakaan/epustaka/epustaka-up";
import Epustakadown from "../../components/perpustakaan/epustaka/epustaka-down";
// import { Tabs, Tab, TabPanel,TabList } from "react-web-tabs";
import slicktheme from "../../assets/css/slick-theme.js";

class Epustaka extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <Epustakaup />
        </div>
        <div style={{ padding: 0, margin: 0 }}>
          <Epustakadown />
        </div>
        <style jsx>{slicktheme}</style>
      </Layout>
    );
  }
}

export default withAuthSync(Epustaka);
