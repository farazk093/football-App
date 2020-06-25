import React from 'react';
import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import styled from 'styled-components';
import Text18 from '../../../common-components/text/text-18/Text18';
import Text14 from '../../../common-components/text/text-14/Text14';
import list from './mock';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';
import { useHistory } from 'react-router-dom';
import ButtonEdit from '../../../common-components/buttons/button-edit/ButtonEdit';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  align-self: flex-start;
  margin-right: 20px;
  @media (max-width: 1054px) {
    margin: 25px 0;
    align-self: unset;
    min-width: unset;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 50px;
`;

const PersonalInfo = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <BorderContainer>
        <ColumnWrapper>
          <ColumnWrapper>
            {list
              ? list.map((item, index) => (
                  <RowWrapper style={{ marginBottom: '25px' }} key={item.placeholder}>
                    <ImgWrapper>
                      <img
                        style={{
                          marginRight: '20px',
                          // alignSelf: index === 0 ? 'flex-start' : 'center',
                        }}
                        src={item.src}
                        alt={item.placeholder}
                      />
                    </ImgWrapper>
                    <ColumnWrapper>
                      <Text14 style={{ marginTop: '0' }}>{item.placeholder}</Text14>
                      <Text18>{item.value}</Text18>
                      {/* {index === 0 ? (
                        <Text12>
                          But I must explain to you how all this mistaken idea of denouncing
                          pleasure and praising pain was born and I will give you a complete account
                          of the system, and expound the actual teachings of the great explorer of
                          ...
                        </Text12>
                      ) : null} */}
                    </ColumnWrapper>
                  </RowWrapper>
                ))
              : null}
          </ColumnWrapper>
          <ButtonEdit onClick={() => history.push('/profile/edit')} />
        </ColumnWrapper>
      </BorderContainer>
    </Wrapper>
  );
};

export default PersonalInfo;
