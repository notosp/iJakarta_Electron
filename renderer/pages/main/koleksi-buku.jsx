import React from 'react';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuthSync } from "../../utils/auth";
import Layout from '../../components/perpustakaan/koleksi/detail-koleksi/Layout-koleksi';

class Dashboard extends React.Component {

  render() {
    return (
      <Layout/>
    );
  }
}
 
export default withAuthSync(Dashboard);
