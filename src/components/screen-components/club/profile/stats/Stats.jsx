import React from 'react';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import styled from 'styled-components';
import Text24 from '../../../../common-components/text/text-24/Text24';
import engFlag from '../../../../../assets/icons/england.svg';
import StatsItem from './stats-item/StatsItem';
import BorderContainer from '../../../../common-components/containers/border-container/BorderContainer';

const Container = styled(RowWrapper)`
  align-items: center;
  align-self: center;
  flex-wrap: wrap;
`;

const Wrapper = styled(BorderContainer)`
  flex-direction: column;
`;

const playerMockUp = {
  first: {
    name: 'Mark J Whittaker',
    img:
      'https://images.unsplash.com/photo-1523913507744-1970fd11e9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    position: 'Defender',
    natFlag: engFlag,
    number: '3',
  },
  second: {
    name: 'Peter Jones',
    img:
      'https://images.unsplash.com/photo-1579983926774-399a9cb765c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    natFlag: engFlag,
    number: '18',
  },
  third: {
    name: 'David Guy',
    img:
      'https://images.unsplash.com/photo-1535467221272-12fb327de525?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    natFlag: engFlag,
    number: '12',
  },
  fourth: {
    name: 'Paul Williams',
    img:
      'https://images.unsplash.com/photo-1529112403919-76c387f7ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    natFlag: engFlag,
    number: '9',
  },
  fifth: {
    name: 'Curtis Smith',
    img:
      'https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    natFlag: engFlag,
    number: '5',
  },
};

const Stats = () => {
  return (
    <Wrapper>
      <Text24>Stats</Text24>
      <Container>
        <StatsItem players={playerMockUp} header="Goals" />
        <StatsItem players={playerMockUp} header="Assists" />
        <StatsItem players={playerMockUp} header="Man of the match" />
        <StatsItem players={playerMockUp} header="Best Goal Award" />
        <StatsItem players={playerMockUp} header="Best Defender Award" />
        <StatsItem players={playerMockUp} header="Worse player Award" />
        <StatsItem players={playerMockUp} header="Most Wins" />
        <StatsItem players={playerMockUp} header="Most Loses" />
        <StatsItem players={playerMockUp} header="Late player award" />
      </Container>
    </Wrapper>
  );
};

export default Stats;
