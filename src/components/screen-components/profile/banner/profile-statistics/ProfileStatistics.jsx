import React from 'react';
import Text24 from '../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text14 from '../../../../common-components/text/text-14/Text14';
import { Wrapper, Row } from '../../../shared/banner/Stats';

const ProfileStatistics = () => (
  <>
    <Wrapper>
      <Row>
        <ColumnWrapper style={{ margin: '0 25px' }}>
          <Text24 style={{ margin: '0' }} bold>
            128
          </Text24>
          <Text14 style={{ margin: '0' }}>Following</Text14>
        </ColumnWrapper>
        <ColumnWrapper style={{ margin: '0 25px' }}>
          <Text24 style={{ margin: '0' }} bold>
            567
          </Text24>
          <Text14 style={{ margin: '0' }}>Followers</Text14>
        </ColumnWrapper>
        <ColumnWrapper style={{ margin: '0 25px' }}>
          <Text24 style={{ margin: '0' }} bold>
            6.7k
          </Text24>
          <Text14 style={{ margin: '0' }}>Likes</Text14>
        </ColumnWrapper>
      </Row>
    </Wrapper>
  </>
);

export default ProfileStatistics;
