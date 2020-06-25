import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import commentIcon from '../../../../../assets/icons/comment.svg';
import labelIcon from '../../../../../assets/icons/label.svg';
import userAddIcon from '../../../../../assets/icons/user-add.svg';
import { useFormik } from 'formik';
import Text12 from '../../../../common-components/text/text-12/Text12';
import InputWithIcon from '../../../../common-components/input/InputWithIcon';
import TextAreaWithIcon from '../../../../common-components/input/TextAreaWithIcon';
import ButtonText from '../../../../common-components/buttons/button-text/ButtonText';
import {
  Container,
  Header,
  InfoWrapper,
  Column,
  SubmitButton,
  OwnerItem,
} from '../ClubCommonComponents';

const ClubInformation = ({ functions }) => {
  const [owner, setOwner] = useState('');
  const [ownerList, setOwnerList] = useState([]);
  const ownerRef = useRef();

  const formik = useFormik({
    initialValues: {
      clubName: '',
      description: '',
    },
    onSubmit: () => {},
  });

  const addOwner = () => {
    setOwnerList([...ownerList, owner]);
    ownerRef.current.clear();
  };

  return (
    <>
      <Container>
        <Header>Club information</Header>
        <InfoWrapper>
          <Column right onSubmit={formik.handleSubmit}>
            <InputWithIcon
              name="clubName"
              placeholder="Club Name"
              onChange={formik.handleChange}
              value={formik.values.clubName}
              icon={labelIcon}
            />
            <TextAreaWithIcon
              name="description"
              placeholder="Description"
              onChange={formik.handleChange}
              value={formik.values.description}
              icon={commentIcon}
            />
          </Column>
          <Column onSubmit={formik.handleSubmit}>
            <InputWithIcon
              ref={ownerRef}
              name="addOwner"
              placeholder="Add Owner"
              onChange={({ target: { value } }) => setOwner(value)}
              value={owner}
              icon={userAddIcon}
            />
            <ButtonText
              onClick={addOwner}
              disabled={!owner}
              style={{ marginBottom: '20px', padding: 0, alignSelf: 'flex-end' }}>
              Add Owner
            </ButtonText>
            <div>
              {ownerList.map((item, i) => (
                <OwnerItem key={`${i}{item}`} normal={i % 2 === 0}>
                  <Text12>{item}</Text12>
                </OwnerItem>
              ))}
            </div>
          </Column>
        </InfoWrapper>
        <SubmitButton onClick={functions.handleNextStep}>Next step</SubmitButton>
      </Container>
    </>
  );
};

ClubInformation.propTypes = {
  functions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default ClubInformation;
