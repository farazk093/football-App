import React from 'react';
import styled from 'styled-components';
import BorderContainer from '../../../../common-components/containers/border-container/BorderContainer';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Text24 from '../../../../common-components/text/text-24/Text24';
import pinIcon from '../../../../../assets/icons/pin.svg';
import peopleIcon from '../../../../../assets/icons/people.svg';
import priceIcon from '../../../../../assets/icons/price.svg';
import emailIcon from '../../../../../assets/icons/e-mail.svg';
import userIcon from '../../../../../assets/icons/user.svg';
import { GREY_TEXT_COLOR } from '../../../../../constants/themeColors';
import InfoItem from './info-item/InfoItem';
import Text14 from '../../../../common-components/text/text-14/Text14';
import { useFormik } from 'formik';
import Button from '../../../../common-components/buttons/button/Button';
import InputWithIcon from '../../../../common-components/input/InputWithIcon';
import Scheduler from './info-item/Scheduler';
import ButtonEdit from '../../../../common-components/buttons/button-edit/ButtonEdit';
import { Border } from '../results/sharedStyledComponents';

const SpaceWrapper = styled(ColumnWrapper)`
  margin-bottom: 20px;
`;

const Col = styled(ColumnWrapper)`
  padding: 0 50px;
  max-width: 540px;
  @media (max-width: 768px) {
    margin: 20px 0;
    padding: 0 20px;
  }
`;

const ClubInfoWrapper = styled(BorderContainer)`
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ClubInfo = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    onSubmit: () => {},
  });

  return (
    <ClubInfoWrapper>
      <Col>
        <RowWrapper style={{ justifyContent: 'space-between', marginBottom: '20px' }}>
          <Text24>Tuesday Night FC</Text24>
          <ButtonEdit onClick={() => {}} />
        </RowWrapper>
        <SpaceWrapper>
          <Text14 style={{ color: GREY_TEXT_COLOR }}>Club description</Text14>
          <Text14>
            We are a group of friends who play football every week for fun … The standard is high
            and we look forward to playing every week … On the pitch we are not friends - we are
            enemies.
          </Text14>
        </SpaceWrapper>
        <Text14 style={{ color: GREY_TEXT_COLOR }}>Club information</Text14>
        <InfoItem icon={userIcon} label="Owner" text="Mark J Whittaker" />
        <InfoItem
          icon={pinIcon}
          label="Millwall Community Trust"
          isLabelBold
          text="Lewisham Lions Centre, Bolina Rd, Sermondsey, London SE16 3Ld"
        />
        <InfoItem icon={peopleIcon} label="Aside" text="7 Aside" />
        <InfoItem icon={peopleIcon}>
          <Scheduler />
        </InfoItem>
        <InfoItem icon={priceIcon} label="Price" text="$5" />
      </Col>
      <Border />
      <Col>
        <SpaceWrapper>
          <Text14 style={{ color: GREY_TEXT_COLOR }}>Club unique code</Text14>
          <Text24 bold>WH3-QK2</Text24>
        </SpaceWrapper>
        <SpaceWrapper>
          <Text14 style={{ color: GREY_TEXT_COLOR }}>Invite player to the club</Text14>
          <Text14>
            Please enter email address of the player you would like to invite. If the player has a
            sitneName account, they will receive a notification, otherwise they will receive your
            invitation via the contact details provided below...
          </Text14>
        </SpaceWrapper>
        <SpaceWrapper>
          <Text14 style={{ color: GREY_TEXT_COLOR, marginBottom: 10 }}>Send invite</Text14>
          <InputWithIcon
            name="name"
            placeholder="Player Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            icon={userIcon}
          />
          <InputWithIcon
            name="email"
            placeholder="E-Mail Address"
            onChange={formik.handleChange}
            value={formik.values.email}
            icon={emailIcon}
          />
          <Button style={{ alignSelf: 'flex-end' }} onClick={formik.handleSubmit}>
            Send invite
          </Button>
        </SpaceWrapper>
      </Col>
    </ClubInfoWrapper>
  );
};

export default ClubInfo;
