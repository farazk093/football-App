import React from 'react';
import styled from 'styled-components';
import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';
import Dropdown from '../../../common-components/dropdown/Dropdown';
import Button from '../../../common-components/buttons/button/Button';
import { APP_BACKGROUND_COLOR } from '../../../../constants/themeColors';
import ballIcon from '../../../../assets/icons/ball.svg';
import footballerIcon from '../../../../assets/icons/footballer.svg';
import thumbUpIcon from '../../../../assets/icons/thumb-up.svg';
import thumbDownIcon from '../../../../assets/icons/thumb-down.svg';
import arrowTopIcon from '../../../../assets/icons/arrow-top.svg';
import fireIcon from '../../../../assets/icons/fire.svg';
import hourglassIcon from '../../../../assets/icons/hourglass.svg';
import winIcon from '../../../../assets/icons/win.svg';
import lIcon from '../../../../assets/icons/L.svg';
import usersIcon from '../../../../assets/icons/people.svg';
import awardIcon from '../../../../assets/icons/award.svg';
import Text14 from '../../../common-components/text/text-14/Text14';
import teamMock from './teamMock';

const stats = [
  {
    name: 'Goals',
    icon: ballIcon,
    key: 'g',
  },
  {
    name: 'Man of the match',
    icon: footballerIcon,
    key: 'm',
  },
  {
    name: 'Best defender',
    icon: thumbUpIcon,
    key: 'bd',
  },
  {
    name: 'Worse player of the match',
    icon: thumbDownIcon,
    key: 'w',
  },
  {
    name: 'Top goal scorer award',
    icon: arrowTopIcon,
    key: 't',
  },
  {
    name: 'Best goal award',
    icon: fireIcon,
    key: 'bg',
  },
  {
    name: 'Lateness',
    icon: hourglassIcon,
    key: 'l',
  },
  {
    name: 'On the winning side',
    icon: winIcon,
    key: 'otw',
  },
  {
    name: 'On the losing side',
    icon: lIcon,
    key: 'otl',
  },
  {
    name: 'Assists',
    icon: usersIcon,
    key: 'as',
  },
  {
    name: 'Appearances',
    icon: awardIcon,
    key: 'ap',
  },
];

const Wrapper = styled.div`
  display: flex;
  min-width: 600px;
  align-self: flex-start;
`;

const StatItem = styled(RowWrapper)`
  background: ${(props) => (props.isEven ? APP_BACKGROUND_COLOR : '#F3F3F3')};
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  margin: 2px 0;
`;

const List = styled(ColumnWrapper)`
  margin-top: 50px;
`;

const Stats = () => {
  return (
    <Wrapper>
      <BorderContainer>
        <ColumnWrapper>
          <RowWrapper>
            <Dropdown data={teamMock} placeholder="Select data" />
            <Button style={{ marginLeft: 20, alignSelf: 'flex-start' }}>Search</Button>
          </RowWrapper>
          <List>
            {stats.map((item, i) => (
              <StatItem isEven={i % 2 === 0} key={item.key}>
                <RowWrapper style={{ alignItems: 'center' }}>
                  <img src={item.icon} alt={item.name} />
                  <Text14 style={{ marginLeft: 10 }}>{item.name}</Text14>
                </RowWrapper>
                <Text14 bold>{teamMock[0].stats[`${item.key}`]}</Text14>
              </StatItem>
            ))}
          </List>
        </ColumnWrapper>
      </BorderContainer>
    </Wrapper>
  );
};

export default Stats;
