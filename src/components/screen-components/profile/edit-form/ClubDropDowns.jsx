import React, { useState } from 'react';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import DropdownWithIcon from '../../../common-components/dropdown/DropdownWithIcon';
import usersIcon from '../../../../assets/icons/users.svg';
import { countryMock, leagueMock, teamMock } from './mocks';

const ClubDropDowns = () => {
  const [country, setCountry] = useState('');
  const [league, setLeague] = useState('');
  const [team, setTeam] = useState('');

  return (
    <ColumnWrapper>
      <DropdownWithIcon
        onSelect={(i) => setCountry(i)}
        data={countryMock}
        placeholder="Favourite Team Country"
        icon={usersIcon}
      />
      {country ? (
        <DropdownWithIcon
          onSelect={(i) => setLeague(i)}
          data={leagueMock}
          placeholder="Favourite Team League"
          icon={usersIcon}
        />
      ) : null}
      {league ? (
        <DropdownWithIcon
          onSelect={(i) => setTeam(i)}
          data={teamMock}
          placeholder="Favourite Team"
          icon={usersIcon}
        />
      ) : null}
    </ColumnWrapper>
  );
};

export default ClubDropDowns;
