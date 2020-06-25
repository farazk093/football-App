import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import { MAIN_THEME_COLOR, APP_BACKGROUND_COLOR } from '../../../../../../constants/themeColors';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';

const Wrapper = styled(RowWrapper)`
  padding: 15px 25px;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  background: ${(props) => (!props.isEven ? '#F3F3F3' : APP_BACKGROUND_COLOR)};
  border: 1px solid ${(props) => (props.isFirst ? MAIN_THEME_COLOR : 'transparent')};
`;

const MatchFixtureItem = ({ date, time, day, isFirst, isEven }) => {
  return (
    <>
      {isFirst ? <Text14 style={{ color: MAIN_THEME_COLOR }}>Next game</Text14> : null}
      <Wrapper isFirst={isFirst} isEven={isEven}>
        <Text14>{date}</Text14>
        <Text14>{time}</Text14>
        <Text14>{day}</Text14>
      </Wrapper>
    </>
  );
};

MatchFixtureItem.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  isFirst: PropTypes.bool,
  isEven: PropTypes.bool.isRequired,
};

MatchFixtureItem.deafultProps = {
  isFirst: false,
};

export default MatchFixtureItem;
