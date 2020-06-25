import React from 'react'
import { MAIN_THEME_COLOR } from '../../../../constants/themeColors';
import Avatar from '../../shared/Avatar';
import arsenal from '../../../../assets/team-logo/arsenal-logo-vector.png'
import aston from '../../../../assets/team-logo/Aston.png'
import chel from '../../../../assets/team-logo/chel.png'
import ever from '../../../../assets/team-logo/Aston.png'
import liv from '../../../../assets/team-logo/live.png'
import manc from '../../../../assets/team-logo/manc.png'
import manu from '../../../../assets/team-logo/manu.png'
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';

const footMock = [{
  value: 'Left',
  key: 'left'
}, {
  value: 'Right',
  key: 'right'
}, {
  value: 'Both',
  key: 'both'
}];

const returnSpan = (color, shortCut, text) => {
  return <><span style={{ color, marginRight: 10, fontWeight: 'bold' }}>{shortCut.toUpperCase()}</span>{text}</>
}

const positionMock = [{
  value: returnSpan('#C70027', 'cf', 'Centre Forward'),
  key: 'cf'
},
{
  value: returnSpan('#C70027', 'SS', 'Second Striker'),
  key: 'ss'
},
{
  value: returnSpan('#C70027', 'LWF', 'Left Wing Forward'),
  key: 'lwf'
},
{
  value: returnSpan('#C70027', 'rwf', 'Right Wing Forward`'),
  key: 'rwf'
},
{
  value: returnSpan('#C70027', 'amf', 'Attacking Midfielder'),
  key: 'amf'
}, {
  value: returnSpan(MAIN_THEME_COLOR, 'lmf', 'Left Midfielder'),
  key: 'lmf'
},
{
  value: returnSpan(MAIN_THEME_COLOR, 'rmf', 'Right Midfielder'),
  key: 'rmf'
}, {
  value: returnSpan(MAIN_THEME_COLOR, 'cmf', 'Centre Midfielder'),
  key: 'cmf'
}, {
  value: returnSpan(MAIN_THEME_COLOR, 'dmf', 'Defensive Midfielder'),
  key: 'dmf'
},
{
  value: returnSpan('#0073C7', 'lb', 'Left Back'),
  key: 'lb'
},
{
  value: returnSpan('#0073C7', 'rb', 'Right Back'),
  key: 'rb'
},
{
  value: returnSpan('#0073C7', 'cb', 'Centre Back'),
  key: 'cb'
},
{
  value: returnSpan('#DA9E0A', 'gk', 'Goalkeeper'),
  key: 'gk'
}
];

const statusMock = [{
  value: 'Fit',
  key: 'fit'
},
{
  value: 'Injured',
  key: 'Injured'
},
{
  value: 'Retired',
  key: 'Retired'
},
{
  value: 'Abroad',
  key: 'Abroad'
},
{
  value: 'Resting',
  key: 'Resting'
}];

const heightMock = [{
  value: '165 cm',
  key: '165'
},
{
  value: '170 cm',
  key: '170'
},
{
  value: '175 cm',
  key: '175'
},
{
  value: '180 cm',
  key: '180'
},
{
  value: '185 cm',
  key: '185'
},
{
  value: '190 cm',
  key: '190'
},
];

const weightMock = [{
  value: '65 kg',
  key: '65'
},
{
  value: '70 kg',
  key: '70'
},
{
  value: '75 kg',
  key: '75'
},
{
  value: '80 kg',
  key: '80'
},
{
  value: '85 kg',
  key: '85'
},
{
  value: '90 kg',
  key: '90'
},
];

const countryMock = [{
  value: 'England',
  key: 'England'
}];

const leagueMock = [{
  value: 'Premiership',
  key: 'Premiership'
}];

const returnTeam = (img, name) => {
  return <RowWrapper style={{ alignItems: 'center' }}><Avatar small src={img} />{name}</RowWrapper>
}

const teamMock = [{
  value: returnTeam(arsenal, 'Arsenal'),
  key: 'ar'
},
{
  value: returnTeam(aston, 'Aston Villa'),
  key: 'ast'
},
{
  value: returnTeam(chel, 'Chelsea'),
  key: 'chel'
},
{
  value: returnTeam(ever, 'Everton'),
  key: 'Everton'
},
{
  value: returnTeam(liv, 'Liverpool'),
  key: 'Liverpool'
},
{
  value: returnTeam(manc, 'Manchaster City'),
  key: 'manc'
},
{
  value: returnTeam(manu, 'Manchaster United'),
  key: 'manu'
}];

export { footMock, positionMock, statusMock, heightMock, weightMock, countryMock, leagueMock, teamMock };