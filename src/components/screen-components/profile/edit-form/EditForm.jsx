import React, { useState } from 'react';
import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import { useFormik } from 'formik';
import styled from 'styled-components';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';
import globeIcon from '../../../../assets/icons/globe.svg';
import pinIcon from '../../../../assets/icons/pin.svg';
import footballerIcon from '../../../../assets/icons/footballer.svg';
import footIcon from '../../../../assets/icons/foot.svg';
import peopleIcon from '../../../../assets/icons/people.svg';
import switchIcon from '../../../../assets/icons/switch.svg';
import personOneIcon from '../../../../assets/icons/person-one.svg';
import personTwoIcon from '../../../../assets/icons/person-two.svg';
import docIcon from '../../../../assets/icons/doc.svg';
import rulerIcon from '../../../../assets/icons/ruler.svg';
import weightIcon from '../../../../assets/icons/weight.svg';
import tShirtIcon from '../../../../assets/icons/t-shirt.svg';
import ballIcon from '../../../../assets/icons/ball.svg';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text24 from '../../../common-components/text/text-24/Text24';
import Avatar from '../../shared/Avatar';
import ButtonText from '../../../common-components/buttons/button-text/ButtonText';
import InputWithIcon from '../../../common-components/input/InputWithIcon';
import TextAreaWithIcon from '../../../common-components/input/TextAreaWithIcon';
import DatePicker from '../../../common-components/date-picker/DatePicker';
import DropdownWithIcon from '../../../common-components/dropdown/DropdownWithIcon';
import Button from '../../../common-components/buttons/button/Button';
import UploadWrapper from '../../../common-components/upload-wrapper/UploadWrapper';
import { positionMock, footMock, statusMock, heightMock, weightMock } from './mocks';
import Selector from '../../../common-components/selector/Selector';
import ClubDropDowns from './ClubDropDowns';

const Wrapper = styled(BorderContainer)`
  ${(props) => (props.left ? 'margin-left: 20px' : 'margin-right: 20px')};
  ${(props) => (props.column ? 'flex-direction: column' : 'flex-direction: row')};
  @media (max-width: 1168px) {
    margin: 20px 0;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const BigAvatar = styled(Avatar)`
  width: 160px;
  margin: 0;
  height: 160px;
`;

const ColumnDetail = styled(ColumnWrapper)`
  ${(props) => (props.left ? 'margin-left: 16px' : 'margin-right: 16px')};
  @media (max-width: 1168px) {
    margin: 0;
  }
`;

const EditFormWrapper = styled(RowWrapper)`
  @media (max-width: 1168px) {
    flex-wrap: wrap;
  }
`;

const EditForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [profileImage, setProfileImage] = useState(
   'https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  );
  const formik = useFormik({
    initialValues: {
      description: '',
      name: '',
      team: '',
      playLike: '',
      number: '',
      nationality: '',
      hometown: '',
      position: '',
      preferredFoot: '',
      placeholder: '',
      lastname: '',
      weight:'',
      height:'',
      status:'',
      
    },
    onSubmit: (values) => {
      formik.handleReset();
      
      let d = {
        name:values.name,
        weight:values.weight,
        height:values.height
      }
      console.log("data is:"+d);
  
  },
  });



  return (
    <ColumnWrapper>
      <EditFormWrapper>
        <Wrapper>
          <ColumnWrapper>
            <Text24 style={{ marginBottom: 20 }}>Edit profile</Text24>
            <ColumnWrapper
              autoWidth
              style={{ alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center' }}>
              <BigAvatar alt="profile-img" src={profileImage} />
              <UploadWrapper
                onDrop={(f) => {
                  setProfileImage(URL.createObjectURL(f[0]));
                }}>
                <ButtonText style={{ marginTop: 10 }}>Upload profile image</ButtonText>
              </UploadWrapper>
            </ColumnWrapper>
          </ColumnWrapper>
          <ColumnWrapper>
            <InputWithIcon
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              icon={personOneIcon}
            />
            <InputWithIcon
              name="lastname"
              placeholder="Lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              icon={personTwoIcon}
            />
            <TextAreaWithIcon
              name="description"
              placeholder="Description"
              onChange={formik.handleChange}
              value={formik.values.description}
              icon={docIcon}
            />
            <InputWithIcon
              name="nationality"
              placeholder="Nationality"
              onChange={formik.handleChange}
              value={formik.values.nationality}
              icon={globeIcon}
            />
            <InputWithIcon
              name="hometown"
              placeholder="Home Town"
              onChange={formik.handleChange}
              value={formik.values.hometown}
              icon={pinIcon}
            />
          </ColumnWrapper>
        </Wrapper>
        <Wrapper column left>
          <RowWrapper>
            <Text24 style={{ marginBottom: 20 }}>Details</Text24>
          </RowWrapper>
          <EditFormWrapper>
            <ColumnDetail>
              <DatePicker
                name="dob"
                value={selectedDate}
                onChange={(d) => setSelectedDate(d)}
                placeholder="Date of birth" 
              />
              <DropdownWithIcon name="weight" onSelect={(i)=>{alert(i.value)}} data={weightMock} placeholder="Weight" icon={weightIcon} />
              <DropdownWithIcon name="height" data={heightMock} placeholder="Height" icon={rulerIcon} />
              <DropdownWithIcon name="status" data={statusMock} placeholder="Status" icon={switchIcon} />
              <ClubDropDowns />
              <InputWithIcon
                name="number"
                onChange={formik.handleChange}
                value={formik.values.number}
                placeholder="Favourite Number"
                icon={tShirtIcon}
              />
            </ColumnDetail>
            <ColumnDetail left>
              <DropdownWithIcon data={positionMock} placeholder="Position" icon={footballerIcon} />
              <DropdownWithIcon data={footMock} placeholder="Best Foot" icon={footIcon} />
              <InputWithIcon
                name="playLike"
                onChange={formik.handleChange}
                value={formik.values.playLike}
                placeholder="Who Do You Play Like"
                icon={peopleIcon}
              />
              <Selector data={positionMock} setmyData={(i)=>{alert(i)}} icon={ballIcon} placeholder="Playable positions" />
            </ColumnDetail>
          </EditFormWrapper>
        </Wrapper>
      </EditFormWrapper>
      <Button type="submit" style={{ alignSelf: 'flex-end', margin: '20px 0' }}>Save</Button>
    </ColumnWrapper>
  );
};

export default EditForm;
