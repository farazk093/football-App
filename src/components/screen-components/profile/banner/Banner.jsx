import React from 'react';
import ProfileStatistics from './profile-statistics/ProfileStatistics';
import ProfileInformation from './profile-information/ProfileInformation';
import ProfileImage from '../../shared/banner/ProfileImage';
import BannerContainer from '../../shared/banner/BannerContainer';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text14 from '../../../common-components/text/text-14/Text14';
import { MAIN_THEME_COLOR } from '../../../../constants/themeColors';
import styled from 'styled-components';

const ImageWrapper = styled(ColumnWrapper)`
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  @media (max-width: 1054px) {
    margin: 0;
  }
`;

const Banner = () => (
  <BannerContainer>
    <ImageWrapper autoWidth>
      <ProfileImage
        style={{ margin: 0 }}
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="profile-image"
      />
      <Text14 style={{ color: MAIN_THEME_COLOR, marginTop: 10 }}>Defender</Text14>
    </ImageWrapper>
    <ProfileInformation />
    <ProfileStatistics />
  </BannerContainer>
);

export default Banner;
