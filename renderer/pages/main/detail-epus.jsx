import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuthSync } from "../../utils/auth";
import Layout from "../../components/perpustakaan/Layout-epustaka-kat";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Buku from "../../components/perpustakaan/epustaka/detail-epustaka/content/buku";
import Arsip from "../../components/perpustakaan/epustaka/detail-epustaka/content/arsip";
import Tautan from "../../components/perpustakaan/epustaka/detail-epustaka/content/tautan";

class detailEpus extends React.Component {
  render() {
    return (
      <Layout>
        <Tabs
          defaultTab="buku"
          onChange={tabId => {
            console.log(tabId);
          }}
        >
          <TabList
            style={{
              marginTop: "10px",
              textAlign: "center",
              background: "#fff",
              width: "85%",
              border: "none",
              zIndex: 10,
              position: "fixed",
            }}
          >
            <Tab tabFor="buku">Buku</Tab>
            <Tab tabFor="arsip">Arsip</Tab>
            <Tab tabFor="tautan">Tautan</Tab>
            <Tab tabFor="audio">Audio</Tab>
            <Tab tabFor="video">Video</Tab>
          </TabList>
          <TabPanel className="panelTabs" tabId="buku">
            <div>
              <Buku />
            </div>
            <div style={{ padding: 0, margin: 0 }}></div>
          </TabPanel>
          <TabPanel className="panelTabs" tabId="arsip">
            <div>
              <Arsip/>
            </div>
          </TabPanel>
          <TabPanel className="panelTabs" tabId="tautan">
            <div>
              <Tautan/>
            </div>
          </TabPanel>
          <TabPanel className="panelTabs" tabId="audio">
            <div>jaja</div>
          </TabPanel>
          <TabPanel className="panelTabs" tabId="video">
            <p>Tab 3 content</p>
          </TabPanel>
        </Tabs>
      </Layout>
    );
  }
}

export default withAuthSync(detailEpus);
