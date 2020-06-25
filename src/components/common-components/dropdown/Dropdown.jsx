import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BORDER_COLOR, MAIN_THEME_COLOR } from '../../../constants/themeColors';
import ColumnWrapper from '../wrappers/column-wrapper/ColumnWrapper';
import Text12 from '../text/text-12/Text12';
import arrowDown from '../../../assets/icons/arrow-down.svg';
import arrowRight from '../../../assets/icons/arrow-right.svg';

const Bar = styled.div`
  border: 1px solid ${BORDER_COLOR};
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  transition: 0.2s ease-in-out all;
`;

const ListItem = styled.div`
  background: ${(props) => (props.white ? '#FFFFFF' : '#F2F2F2')};
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  &:focus {
    opacity: 0.9;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  display: flex;
  max-height: 100px;
  overflow: hidden;
`;

const Dropdown = ({ placeholder, data, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [item, setItem] = useState(null);

  const selectItem = (item) => {
    setItem(item);
    setIsExpanded(false);
    onSelect(item);
  };

  return (
    <>
      <ColumnWrapper>
        <Bar
          onClick={() => setIsExpanded(!isExpanded)}
          style={isExpanded ? { borderColor: MAIN_THEME_COLOR } : { borderColor: BORDER_COLOR }}>
          <Text12>{item ? item.value : placeholder}</Text12>
          <img src={isExpanded ? arrowDown : arrowRight} alt="arrow" />
        </Bar>
        <Wrapper>
          {isExpanded && data && data.length ? (
            <List>
              {data.map((item, i) => (
                <ListItem key={item.key} onClick={() => selectItem(item)} white={i % 2 === 0}>
                  <Text12>{item.value}</Text12>
                </ListItem>
              ))}
            </List>
          ) : null}
        </Wrapper>
      </ColumnWrapper>
    </>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.objectOf(PropTypes.string),
        PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
      ]),
    ),
  ),
};

Dropdown.defaultProps = {
  data: [],
  onSelect: (item) => {},
};

export default Dropdown;
