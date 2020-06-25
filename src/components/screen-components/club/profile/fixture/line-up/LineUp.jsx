import React, { useState } from 'react';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Button from '../../../../../common-components/buttons/button/Button';
import styled from 'styled-components';
import ButtonEdit from '../../../../../common-components/buttons/button-edit/ButtonEdit';
import Modal from './modal/Modal';

const LineUpWrapper = styled(ColumnWrapper)`
  max-width: 300px;
  align-items: center;
`;

const ButtonWrapper = styled(RowWrapper)`
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`;

const LineUp = () => {
  const [modalHidden, setModalHidden] = useState(true);
  const [selectedPlusId, setSelectedPlusId] = useState(false);

  const handleSelectUser = (u, id) => {
    const wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    wrapper.innerHTML = `
        <img src="${u.img}" style="width: 30px; height: 30px; object-fit: cover; border-radius: 60%"></img>
    `;

    const path = document.getElementById(id);
    const dValue = path.getAttribute('d');
    const transformValue = path.getAttribute('transform');
    const group = document.getElementById('line-up');
    wrapper.setAttribute('d', dValue);
    wrapper.setAttribute('transform', transformValue);
    wrapper.setAttribute('width', '30');
    wrapper.setAttribute('height', '30');
    path.remove();
    group.appendChild(wrapper);
    setModalHidden(true);
  };

  const showModal = (id) => {
    setSelectedPlusId(id);
    setModalHidden(false);
  };

  return (
    <LineUpWrapper>
      {!modalHidden ? (
        <Modal id={selectedPlusId} onSelect={(u, id) => handleSelectUser(u, id)} />
      ) : null}
      <ColumnWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" width="298" height="473" viewBox="0 0 298 473">
          <g id="line-up" transform="translate(-7069 -3045)">
            <g
              id="Rectangle_193"
              data-name="Rectangle 193"
              transform="translate(7069 3045)"
              fill="#fff"
              stroke="#0de27e"
              strokeLinecap="square"
              strokeWidth="2">
              <rect width="298" height="473" rx="2" stroke="none" />
              <rect x="1" y="1" width="296" height="471" rx="1" fill="none" />
            </g>
            <g
              id="Ellipse_29"
              data-name="Ellipse 29"
              transform="translate(7178 3242)"
              fill="#fff"
              stroke="#e2e2e2"
              strokeWidth="1">
              <circle cx="40" cy="40" r="40" stroke="none" />
              <circle cx="40" cy="40" r="39.5" fill="none" />
            </g>
            <g
              id="Ellipse_30"
              data-name="Ellipse 30"
              transform="translate(7178 3088)"
              fill="#fff"
              stroke="#e2e2e2"
              strokeWidth="1">
              <circle cx="40" cy="40" r="40" stroke="none" />
              <circle cx="40" cy="40" r="39.5" fill="none" />
            </g>
            <g
              id="Rectangle_196"
              data-name="Rectangle 196"
              transform="translate(7069 3281)"
              fill="#fff"
              stroke="#e2e2e2"
              strokeWidth="1">
              <rect width="298" height="1" stroke="none" />
              <rect x="0.5" y="0.5" width="297" fill="none" />
            </g>
            <g
              id="Rectangle_197"
              data-name="Rectangle 197"
              transform="translate(7089 3047)"
              fill="#fff"
              stroke="#e2e2e2"
              strokeWidth="1">
              <path
                d="M0,0H258a0,0,0,0,1,0,0V90a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V0A0,0,0,0,1,0,0Z"
                stroke="none"
              />
              <path
                d="M1,.5H257a.5.5,0,0,1,.5.5V90a1.5,1.5,0,0,1-1.5,1.5H2A1.5,1.5,0,0,1,.5,90V1A.5.5,0,0,1,1,.5Z"
                fill="none"
              />
            </g>
            <g id="Group_60" data-name="Group 60" transform="translate(5837 2223)">
              <g
                id="Ellipse_31"
                data-name="Ellipse 31"
                transform="translate(1341 1172)"
                fill="#fff"
                stroke="#e2e2e2"
                strokeWidth="1">
                <circle cx="40" cy="40" r="40" stroke="none" />
                <circle cx="40" cy="40" r="39.5" fill="none" />
              </g>
              <g
                id="Rectangle_198"
                data-name="Rectangle 198"
                transform="translate(1252 1201)"
                fill="#fff"
                stroke="#e2e2e2"
                strokeWidth="1">
                <path
                  d="M2,0H256a2,2,0,0,1,2,2V92a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2A2,2,0,0,1,2,0Z"
                  stroke="none"
                />
                <path
                  d="M2,.5H256A1.5,1.5,0,0,1,257.5,2V91a.5.5,0,0,1-.5.5H1A.5.5,0,0,1,.5,91V2A1.5,1.5,0,0,1,2,.5Z"
                  fill="none"
                />
              </g>
            </g>
            <g
              id="Rectangle_194"
              data-name="Rectangle 194"
              transform="translate(7149 3047)"
              fill="#fff"
              stroke="#e2e2e2"
              strokeWidth="1">
              <rect width="138" height="49" stroke="none" />
              <rect x="0.5" y="0.5" width="137" height="48" fill="none" />
            </g>
            <g
              id="Rectangle_195"
              data-name="Rectangle 195"
              transform="translate(7149 3467)"
              fill="#fff"
              stroke="#e2e2e2"
              strokeWidth="1">
              <rect width="138" height="49" rx="2" stroke="none" />
              <rect x="0.5" y="0.5" width="137" height="48" rx="1.5" fill="none" />
            </g>
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus14')}
              id="plus14"
              d="M13,7H11v4H7v2h4v4h2V13h4V11H13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"
              transform="translate(7206 3491)"
              fill="#0de27e"
            />
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus13')}
              id="plus13"
              d="M13,7H11v4H7v2h4v4h2V13h4V11H13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"
              transform="translate(7206 3048)"
              fill="#0de27e"
            />
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus12')}
              id="plus12"
              d="M13,7H11v4H7v2h4v4h2V13h4V11H13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"
              transform="translate(7114 3145)"
              fill="#0de27e"
            />
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus11')}
              id="plus11"
              d="M13,7H11v4H7v2h4v4h2V13h4V11H13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"
              transform="translate(7297 3145)"
              fill="#0de27e"
            />
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus10')}
              id="plus10"
              d="M13,7H11v4H7v2h4v4h2V13h4V11H13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"
              transform="translate(7323 3189)"
              fill="#0de27e"
            />
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus9')}
              id="plus9"
              d="M13,7H11v4H7v2h4v4h2V13h4V11H13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"
              transform="translate(7241 3249)"
              fill="#0de27e"
            />
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus7')}
              id="plus7"
              d="M13,7H11v4H7v2h4v4h2V13h4V11H13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"
              transform="translate(7173 3291)"
              fill="#0de27e"
            />
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus6')}
              id="plus6"
              d="M13,7H11v4H7v2h4v4h2V13h4V11H13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"
              transform="translate(7323 3340)"
              fill="#0de27e"
            />
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus5')}
              id="plus5"
              d="M13,7H11v4H7v2h4v4h2V13h4V11H13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"
              transform="translate(7323 3340)"
              fill="#0de27e"
            />
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus4')}
              id="plus4"
              d="M11,7h2v4h4v2H13v4H11V13H7V11h4Zm1-5A10,10,0,1,1,2,12,10,10,0,0,1,12,2Zm0,18a8,8,0,1,0-8-8A8.011,8.011,0,0,0,12,20Z"
              transform="translate(7083 3340)"
              fill="#0de27e"
            />
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus3')}
              id="plus3"
              d="M13,7H11v4H7v2h4v4h2V13h4V11H13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"
              transform="translate(7297 3380)"
              fill="#0de27e"
            />
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus2')}
              id="plus2"
              d="M11,7h2v4h4v2H13v4H11V13H7V11h4Zm1-5A10,10,0,1,1,2,12,10,10,0,0,1,12,2Zm0,18a8,8,0,1,0-8-8A8.011,8.011,0,0,0,12,20Z"
              transform="translate(7114 3380)"
              fill="#0de27e"
            />
            <path
              style={{ cursor: 'pointer' }}
              onClick={() => showModal('plus1')}
              id="plus-1"
              d="M13,7H11v4H7v2h4v4h2V13h4V11H13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"
              transform="translate(7083 3189)"
              fill="#0de27e"
            />
          </g>
        </svg>
      </ColumnWrapper>
      <ButtonWrapper>
        <ButtonEdit onClick={() => {}} />
        <Button style={{}}>Confirm line-up</Button>
      </ButtonWrapper>
    </LineUpWrapper>
  );
};

LineUp.propTypes = {};

export default LineUp;
