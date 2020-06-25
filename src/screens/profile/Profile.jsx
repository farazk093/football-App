import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/common-components/menu/Menu';
import AppWrapper from '../../components/common-components/wrappers/app-wrapper/AppWrapper';
import Banner from '../../components/screen-components/profile/banner/Banner';
import PersonalInfo from '../../components/screen-components/profile/personal-info/PersonalInfo';
import RowWrapper from '../../components/common-components/wrappers/row-wrapper/RowWrapper';
import AppCardSpeaker from '../../components/screen-components/profile/app-card-speaker/AppCardSpeaker';
import Tabs from '../../components/common-components/tabs/Tabs';
import Stats from '../../components/screen-components/profile/stats/Stats';
import Fixture from '../../components/screen-components/profile/fixture/Fixture';
import Highlights from '../../components/screen-components/club/profile/highlights/Highlights';
import Results from '../../components/screen-components/profile/results/Results';



const PersonalWrapper = styled(RowWrapper)`
  justify-content: space-between;
  @media (max-width: 1054px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const tabs = [
  {
    title: 'Profile',
    children: (
      <>
        <PersonalWrapper>
          <PersonalInfo />
          <AppCardSpeaker />
        </PersonalWrapper>
      </>
    ),
  },
  {
    title: 'Highlights',
    children: <Highlights />,
  },
  {
    title: 'Fixtures',
    children: <Fixture />,
  },
  {
    title: 'Results',
    children: <Results />,
  },
  {
    title: 'stats',
    children: <Stats />,
  },
];

const Profile = () => (
  <>
    <AppWrapper>
      <Menu />
      <Banner />
      <Tabs tabs={tabs} />
    </AppWrapper>
  </>
);

export default Profile;
