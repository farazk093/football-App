import React from 'react';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Text24 from '../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text14 from '../../../../common-components/text/text-14/Text14';
import Text16 from '../../../../common-components/text/text-16/Text16';
import teamLogo from '../../../../../assets/team-logo/manu.png';
import england from '../../../../../assets/icons/england.svg';
import { MAIN_THEME_COLOR } from '../../../../../constants/themeColors';
import { ShortInfoRow, ShortInfoCol, NameCol } from '../../../shared/banner/Informations';

const ProfileInformation = () => (
  <>
    <RowWrapper style={{ width: 'auto', alignSelf: 'center' }}>
      <ColumnWrapper>
        <NameCol>
          <Text14 style={{ color: MAIN_THEME_COLOR, cursor: 'pointer' }}>Follow</Text14>
          <Text24>Mark J Whittaker</Text24>
          <RowWrapper className="nationality-wrapper" style={{ alignItems: 'center' }}>
            <img style={{ marginRight: '10px' }} src={england} alt="anchor" />
            <Text14>England</Text14>
          </RowWrapper>
        </NameCol>
        <ShortInfoRow>
          <ShortInfoCol>
            <Text14>Age</Text14>
            <Text16 bold>30</Text16>
          </ShortInfoCol>
          <ShortInfoCol>
            <Text14>Weight</Text14>
            <Text16 bold>75kg</Text16>
          </ShortInfoCol>
          <ShortInfoCol>
            <Text14>Height</Text14>
            <Text16 bold>180cm</Text16>
          </ShortInfoCol>
          <ShortInfoCol>
            <Text14>Status</Text14>
            <Text16 bold style={{ color: MAIN_THEME_COLOR }}>
              ON
            </Text16>
          </ShortInfoCol>
          <ColumnWrapper>
            <Text14>Teams</Text14>
            <div style={{ width: 24 }}>
              <img style={{ objectFit: 'cover', width: '100%' }} src={teamLogo} alt="anchor" />
            </div>
          </ColumnWrapper>
        </ShortInfoRow>
      </ColumnWrapper>
    </RowWrapper>
  </>
);

export default ProfileInformation;
