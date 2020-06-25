import React, { useState } from 'react';
import styled from 'styled-components';
import { CONTAINER_BACKGROUND_COLOR, BORDER_COLOR } from '../../../constants/themeColors';
import MenuItem from './menu-item/MenuItem';
import MobileMenuItem from './mobile-menu-item/MobileMenuItem';
import hamburgerIcon from '../../../assets/icons/hamburger.svg';
import crossIcon from '../../../assets/icons/cross.svg';
import Portal from '../portal/Portal';

const Container = styled.nav`
  display: flex;
  z-index: 9;
  padding: 20px 50px;
  width: 100%;
  background: ${CONTAINER_BACKGROUND_COLOR};
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${BORDER_COLOR};
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileList = styled.ul`
  display: none;
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
  background: ${CONTAINER_BACKGROUND_COLOR};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Icon = styled.img`
  display: none;
  cursor: pointer;
  top: 20px;
  right: 20px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Container>
        <h4>Your Logo</h4>
        <List>
          <MenuItem label="Chat" to="/chat" />
          <MenuItem label="Games" to="/games" />
          <MenuItem label="My Clubs" to="/clubs" />
          <MenuItem label="Profile" to="/profile" />
        </List>
        {isExpanded ? (
          <>
            <Portal>
              <>
                <MobileList>
                  <Icon
                    style={{ position: 'absolute' }}
                    onClick={() => setIsExpanded(false)}
                    alt="cross"
                    src={crossIcon}
                  />
                  <MobileMenuItem onClick={() => setIsExpanded(false)} label="Chat" to="/chat" />
                  <MobileMenuItem onClick={() => setIsExpanded(false)} label="Games" to="/games" />
                  <MobileMenuItem
                    onClick={() => setIsExpanded(false)}
                    label="My Clubs"
                    to="/clubs"
                  />
                  <MobileMenuItem
                    onClick={() => setIsExpanded(false)}
                    label="Profile"
                    to="/profile"
                  />
                </MobileList>
              </>
            </Portal>
          </>
        ) : (
          <Icon onClick={() => setIsExpanded(true)} alt="mobile-menu" src={hamburgerIcon} />
        )}
      </Container>
    </>
  );
};

export default Menu;
