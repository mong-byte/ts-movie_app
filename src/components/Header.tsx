import { ROUTES } from "@src/utils/constants";
import React from "react";
import {
  Link,
  RouteComponentProps,
  useLocation,
  withRouter,
} from "react-router-dom";
import styled from "styled-components";

interface pathnameTypes {
  pathname: string;
}

const Header: React.FC<RouteComponentProps<pathnameTypes>> = ({
  location: { pathname },
}) => {
  return (
    <HeaderContainer>
      <List>
        <Item current={pathname === ROUTES.home}>
          <SLink to={ROUTES.home}>Movies</SLink>
        </Item>
        <Item current={pathname === ROUTES.tv}>
          <SLink to={ROUTES.tv}>TV</SLink>
        </Item>
        <Item current={pathname === ROUTES.search}>
          <SLink to={ROUTES.search}>Search</SLink>
        </Item>
      </List>
    </HeaderContainer>
  );
};

export default withRouter(Header);

interface pathnameStyleTypes {
  current: boolean;
}

const HeaderContainer = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.7);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li<pathnameStyleTypes>`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
