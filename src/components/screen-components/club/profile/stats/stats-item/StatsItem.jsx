import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import { APP_BACKGROUND_COLOR, BORDER_COLOR } from '../../../../../../constants/themeColors';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import Text16 from '../../../../../common-components/text/text-16/Text16';
import Text12 from '../../../../../common-components/text/text-12/Text12';
import Avatar from '../../../../shared/Avatar';
import Text24 from '../../../../../common-components/text/text-24/Text24';
import Number from '../../../../shared/Number';
import PlayerItem from './PlayerItem';

const ItemContainer = styled(ColumnWrapper)`
  align-items: center;
  width: 260px;
  margin: 30px 25px 12px;
  @media (max-width: 1100px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Wrapper = styled(ColumnWrapper)`
  align-items: center;
  border-radius: 2px;
  margin-top: 10px;
  border: 1px solid ${BORDER_COLOR};
`;

const Header = styled(RowWrapper)`
  align-items: center;
  padding: 10px;
  position: relative;
  background: ${APP_BACKGROUND_COLOR};
`;

const StatsItem = ({ players, header }) => {
  const { first, second, third, fourth, fifth } = players;
  return (
    <ItemContainer>
      <Text16 style={{ alignSelf: 'flex-start' }}>{header}</Text16>
      <Wrapper>
        <Header>
          <ColumnWrapper>
            <RowWrapper style={{ alignItems: 'center' }}>
              <Text24 style={{ fontSize: 28, fontWeight: 900, marginRight: 10 }}>1</Text24>
              <Avatar src={first.img} alt="avatar" />
              <ColumnWrapper>
                <Text14 bold>{first.name}</Text14>
                <RowWrapper>
                  <Text12>{first.position}</Text12>
                  <Number style={{ margin: '0 5px 0 10px' }}>
                    <Text16 bold style={{ color: 'white' }}>
                      {first.number}
                    </Text16>
                  </Number>
                  <img width="24" src={first.natFlag} alt="nationality" />
                </RowWrapper>
              </ColumnWrapper>
            </RowWrapper>
          </ColumnWrapper>
        </Header>
        <ColumnWrapper>
          <PlayerItem player={second} number="2" />
          <PlayerItem player={third} number="3" />
          <PlayerItem player={fourth} number="4" />
          <PlayerItem player={fifth} number="5" />
        </ColumnWrapper>
      </Wrapper>
    </ItemContainer>
  );
};

StatsItem.propTypes = {
  players: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  header: PropTypes.string.isRequired,
};

export default StatsItem;
