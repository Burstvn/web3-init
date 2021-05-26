import {
  MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { useWallet } from "use-wallet";
import Farm from "../../pages/Farm";
import Home from "../../pages/Home";
import ButtonConnect from "../WalletElement/ButtonConnect";
import "./Layout.scss";

import ChildrenRouter from "./ChildrenRouter"


export const PageLayout = () => {
  const {account} = useWallet()
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
 
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">HOME</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/farm">FARM</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/nft">NFT</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, color: "#fff", position: "relative" }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}

        <ButtonConnect />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path="/farm" component={ChildrenRouter} />
            <Route path="/nft" component={Home} />
            <Route path="/" component={Home} exact />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};
