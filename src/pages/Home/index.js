import React from 'react';

import Layout from '../../components/Layout';

const Home = () => (
  <Layout>
    <h4>Video hosting</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
    <div className="content-image">
      <img src="https://wptonic.s3.amazonaws.com/wp-content/uploads/2018/05/19112847/video-hosting-sites.jpg" alt="" />
    </div>
  </Layout>
);

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
