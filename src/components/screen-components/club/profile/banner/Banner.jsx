import React from 'react';
import BannerContainer from '../../../shared/banner/BannerContainer';
import ProfileImage from '../../../shared/banner/ProfileImage';
import Information from './information/Information';
import Statistics from './statistics/Statistics';

const Banner = () => (
  <BannerContainer>
    <ProfileImage
      src="https://images.unsplash.com/photo-1563299796-b729d0af54a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80"
      alt="club-image"
    />
    <Information />
    <Statistics />
  </BannerContainer>
);

export default Banner;
