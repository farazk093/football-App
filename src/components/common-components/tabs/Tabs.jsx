import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';
import { BORDER_COLOR, MAIN_THEME_COLOR } from '../../../constants/themeColors';
import ColumnWrapper from '../wrappers/column-wrapper/ColumnWrapper';
import Text16 from '../text/text-16/Text16';

const StyledWrapper = styled(RowWrapper)`
  padding: 25px 0;
  margin: 50px 0;
  border-top: ${(props) => (props.bordered ? `1px solid ${BORDER_COLOR}` : 'none')};
`;

const TabLink = styled(Text16)`
  text-transform: capitalize;
  margin: 0 50px 35px 0;
  cursor: pointer;
  @media (max-width: 600px) {
    margin: 0 10px 35px;
  }
`;

const TabLinkWrapper = styled(RowWrapper)`
  @media (max-width: 1054px) {
    justify-content: center;
  }
  @media (max-width: 468px) {
    flex-direction: column;
  }
`;

const Tabs = ({ tabs, bordered }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <StyledWrapper bordered={bordered}>
      <ColumnWrapper>
        <TabLinkWrapper>
          {tabs.map((tab) => (
            <TabLink
              bold={currentTab.title === tab.title}
              style={{ color: currentTab.title === tab.title ? MAIN_THEME_COLOR : '#404040' }}
              onClick={() => setCurrentTab(tab)}
              key={tab.title}>
              {tab.title}
            </TabLink>
          ))}
        </TabLinkWrapper>
        <RowWrapper>{currentTab.children}</RowWrapper>
      </ColumnWrapper>
    </StyledWrapper>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        children: PropTypes.node,
      }),
    ),
  ]).isRequired,
  bordered: PropTypes.bool,
};

Tabs.defaultProps = {
  bordered: true,
};

export default Tabs;
