import React from 'react';
import PropTypes from 'prop-types';
import Text24 from '../../../../../common-components/text/text-24/Text24';
import { Table, Header, TeamText } from '../sharedStyledComponents';
import ButtonEdit from '../../../../../common-components/buttons/button-edit/ButtonEdit';
import Tabs from '../../../../../common-components/tabs/Tabs';
import LineUpStats from './stats/LineUpStats';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import styled from 'styled-components';
import SummaryHighligts from './summary/SummaryHighligts';

const TabsWrapper = styled(ColumnWrapper)`
  padding: 0 25px;
`;

const DetailsTable = ({ matchInfo, onEdit }) => {
  const tabs = [
    {
      title: 'Summary & Highlights',
      children: <SummaryHighligts />,
    },
    {
      title: 'Line-up & Stats',
      children: <LineUpStats matchInfo={matchInfo} />,
    },
  ];
  return (
    <>
      <Table autoWidth>
        <Header>
          <TeamText bold>{matchInfo.teamA.name}</TeamText>
          <Text24 style={{ fontSize: '2rem', fontWeight: '900' }}>VS</Text24>
          <TeamText bold>{matchInfo.teamB.name}</TeamText>
        </Header>
        <TabsWrapper>
          <Tabs bordered={false} tabs={tabs} />
        </TabsWrapper>
      </Table>
      <ButtonEdit onClick={onEdit} />
    </>
  );
};

DetailsTable.propTypes = {
  matchInfo: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.objectOf(PropTypes.string),
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    ]),
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default DetailsTable;
