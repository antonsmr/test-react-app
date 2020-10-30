import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { Layout, Menu, Breadcrumb } from 'antd';
import { oneOfType, node, arrayOf } from 'prop-types';

import { navLinks } from '../utils/navLinks';

const {
  Header, Footer, Content,
} = Layout;

const LayoutComponent = (props) => {
  const { children } = props;
  const subPaths = window.location && window.location.pathname
    ? window.location.pathname.split('/').filter((l) => l)
    : [];

  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          Video Hosting
        </div>
        <Menu theme="dark" mode="horizontal">
          {navLinks && navLinks.map((l) => (
            <Menu.Item key={l.id}>
              <Link to={l.href}>
                {l.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content>
        {!isEmpty(subPaths) && (
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <Link to="/">
                Home
              </Link>
            </Breadcrumb.Item>
            {subPaths.map((p) => (
              <Breadcrumb.Item key={p}>
                <Link className="capitalize" to={`/${p}`}>
                  {p}
                </Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        )}
        <div className="site-layout-content">
          {children}
        </div>
      </Content>
      <Footer className="footer">
        DigitalSuits ©2020
      </Footer>
    </Layout>
  );
};

LayoutComponent.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
};
LayoutComponent.defaultProps = {};

export default LayoutComponent;
