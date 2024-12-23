import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import HeaderComp from '../../components/Header';
import HeroArea from '../../components/HeroArea';
import Body from '../../components/Body';
const { Content, Footer } = Layout;
const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout breakpoints="md">
      <HeaderComp />
      <Content
        className='doc-app__body'
        style={{
          padding: '0 48px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <HeroArea />
        <Body />
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Home;