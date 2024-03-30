import { Menu } from 'antd';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { VSpace } from './Spacer';

export const AppMenu: React.FC = () => {
  const location = useLocation();
  const history = useNavigate();
  const selectedKey = location.pathname;
  return (
    <div className="AppMenu">
      <MenuStyled
        mode="horizontal"
        onClick={(event: { key: { toString: () => any; }; }) => {
          // history.push(event.key.toString());
          console.log("Fix this: history.push thing");
        }}
        selectedKeys={[selectedKey]}
      >
        <Menu.Item key="/">Home</Menu.Item>
        <Menu.Item key="/sprites">Sprites</Menu.Item>
        <Menu.Item key="/maze">Maze</Menu.Item>
        <Menu.Item key="/way-finding">Way Finding</Menu.Item>
      </MenuStyled>
      <VSpace size="large" />
    </div>
  );
};

const MenuStyled = styled(Menu)`
  background-color: inherit;
  border-bottom: none;
  margin-left: 4px;

  .ant-menu-item {
    color: white;
  }
`;
