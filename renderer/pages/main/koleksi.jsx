import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuthSync } from "../../utils/auth";
import Layout from "../../components/perpustakaan/Layout-perpus";
import KoleksiDown from "../../components/perpustakaan/koleksi/koleksi-down";
import KoleksiUp from "../../components/perpustakaan/koleksi/koleksi-up"; 
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

class Perpustakaan extends React.Component {
  render() {
    return (
      <Layout>
        <Tabs
          defaultTab="buku"
          onChange={tabId => {
          }}
        >
          <TabList
            style={{
              position: "fixed",
              background: "#fff",
              width: "100%",
              border: "none",
              zIndex: 10,
              paddingLeft: "14px",
              marginBottom: "10px"
            }}
          >
            <Tab tabFor="buku">Buku</Tab>
            <Tab tabFor="jurnal">Jurnal</Tab>
            <Tab tabFor="berita">Berita</Tab>
            <Tab tabFor="audio">Audio</Tab>
            <Tab tabFor="video">Video</Tab>
          </TabList>
          <TabPanel className="panelTabs" tabId="buku">
            <div>
              <KoleksiUp />
            </div>
            <div style={{ padding: 0, margin: 0 }}>
              <KoleksiDown />
            </div>
          </TabPanel>
          <TabPanel className="panelTabs" tabId="two">
            <p>Tab 2 content</p>
          </TabPanel>
          <TabPanel className="panelTabs" tabId="three">
            <p>Tab 3 content</p>
          </TabPanel>
        </Tabs>
      </Layout>
    );
  }
}

export default withAuthSync(Perpustakaan);
