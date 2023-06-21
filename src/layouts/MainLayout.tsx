import React from 'react';
import type { ReactElement } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
/**
 * MainLayout
 * The base layout for the app. It contains the main navigation and the main content area.
 * @returns {ReactNode}
 */
const { Header, Footer, Content } = Layout;
const MainLayout = (): ReactElement => (
  <Layout className='main'>
    <Header className='main__header'>
      <NavBar />
    </Header>
    <Content className='main__content'>
      <Outlet />
    </Content>
    <Footer className='main__footer'></Footer>
  </Layout>
);

export default MainLayout;
