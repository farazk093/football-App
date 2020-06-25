import React from 'react';
import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import styled from 'styled-components';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text24 from '../../../common-components/text/text-24/Text24';
import fixutresMock from '../../../../mocks/fixturesMock';
import usersMock from '../../../../mocks/usersMock';
import LineUp from '../../club/profile/fixture/line-up/LineUp';
import MatchFixtures from '../../club/profile/fixture/match-fixtures/MatchFixtures';
import TeamStatus from '../../club/profile/fixture/team-status/TeamStatus';

const Wrapper = styled(BorderContainer)`
  @media (max-width: 1056px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CenterColumn = styled(ColumnWrapper)`
  margin: 0 50px;
`;

const Space = styled.div`
  margin: 20px 0 30px;
  @media (max-width: 1056px) {
    display: flex;
    justify-content: center;
  }
`;

const Fixture = () => {
  return (
    <Wrapper>
      <ColumnWrapper>
        <Text24>Fixtures</Text24>
        <Space>
          <MatchFixtures data={fixutresMock} />
        </Space>
      </ColumnWrapper>
      <CenterColumn>
        <Text24 style={{ alignSelf: 'center', marginLeft: '-50px' }}>Team Status</Text24>
        <Space>
          <TeamStatus data={usersMock} />
        </Space>
      </CenterColumn>
      <ColumnWrapper>
        <Text24>Line Up</Text24>
        <Space>
          <LineUp />
        </Space>
      </ColumnWrapper>
    </Wrapper>
  );
};

export default Fixture;
