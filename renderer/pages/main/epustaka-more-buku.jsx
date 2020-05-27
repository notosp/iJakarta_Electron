import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuthSync } from "../../utils/auth";
import Layout from '../../components/perpustakaan/epustaka/Layout-moreEpusbook';

class MoreEpusbuku extends React.Component {
    render() {
    return (
      <Layout />
    );
 }
}

export default withAuthSync(MoreEpusbuku);
