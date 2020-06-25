import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RowWrapper from '../../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Text14 from '../../../../../../common-components/text/text-14/Text14';
import ColumnWrapper from '../../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import { List, Avatar, ScoreWrapper, TableRowWrapper } from '../../sharedStyledComponents';
import PlayGround from './PlayGround';
import RadioButton from '../../../../../../common-components/buttons/radio-button/RadioButton';

const rdBtns = [
  {
    title: 'Blue Team',
    key: '1',
    active: true,
  },
  {
    title: 'Red Team',
    key: '2',
    active: false,
  },
];

const LineUpStats = ({ matchInfo }) => {
  const [radio, setRadio] = useState(rdBtns);

  const switchRadio = (btn) => {
    const filteredList = radio.map((b) => {
      if (btn.key === b.key) {
        return { ...b, active: true };
      }
      return { ...b, active: false };
    });
    setRadio(filteredList);
  };

  return (
    <TableRowWrapper>
      <ColumnWrapper style={{ padding: 50 }}>
        <Text14 bold>Line-up</Text14>
        <ColumnWrapper style={{ marginBottom: 10 }}>
          {radio.map((btn) => (
            <RadioButton
              active={btn.active}
              title={btn.title}
              key={btn.key}
              onClick={() => switchRadio(btn)}
            />
          ))}
        </ColumnWrapper>
        <PlayGround />
      </ColumnWrapper>
      <ColumnWrapper>
        <List>
          <Text14 bold>Stats</Text14>
          <li>
            <Text14>Captions</Text14>
            <RowWrapper autoWidth>
              {matchInfo.captions.map((caption) => (
                <Avatar src={caption.image} alt={caption.name} key={caption.name} />
              ))}
            </RowWrapper>
          </li>
          <li>
            <Text14>Man of the match</Text14>
            <Avatar src={matchInfo.captions[0].image} alt={matchInfo.captions[0].name} />
          </li>
          <li>
            <Text14>Best defender</Text14>
            <Avatar src={matchInfo.captions[0].image} alt={matchInfo.captions[0].name} />
          </li>
          <li>
            <Text14>Worse player of the match</Text14>
            <Avatar src={matchInfo.captions[1].image} alt={matchInfo.captions[1].name} />
          </li>
          <li>
            <Text14>The final score</Text14>
            <RowWrapper
              style={{ justifyContent: 'space-between', alignItems: 'center', maxWidth: 120 }}>
              <ScoreWrapper isWin={matchInfo.teamA.score > matchInfo.teamB.score}>
                <Text14>{matchInfo.teamA.score}</Text14>
              </ScoreWrapper>
              <Text14>:</Text14>
              <ScoreWrapper isWin={matchInfo.teamB.score > matchInfo.teamA.score}>
                <Text14>{matchInfo.teamB.score}</Text14>
              </ScoreWrapper>
            </RowWrapper>
          </li>
          <li>
            <Text14>Goal scorers</Text14>
            <RowWrapper autoWidth>
              {matchInfo.captions.map((caption) => (
                <Avatar src={caption.image} alt={caption.name} key={caption.name} />
              ))}
            </RowWrapper>
          </li>
          <li>
            <Text14>Best goal scored</Text14>
            <Avatar src={matchInfo.captions[0].image} alt={matchInfo.captions[0].name} />
          </li>
          <li>
            <Text14>Last player to arrive</Text14>
            <Avatar src={matchInfo.captions[1].image} alt={matchInfo.captions[1].name} />
          </li>
          <li>
            <Text14>Top goal scrorer</Text14>
            <Avatar src={matchInfo.captions[0].image} alt={matchInfo.captions[0].name} />
          </li>
          <li>
            <Text14>Assists</Text14>
            <RowWrapper autoWidth>
              {matchInfo.captions.map((caption) => (
                <Avatar src={caption.image} alt={caption.name} key={caption.name} />
              ))}
            </RowWrapper>
          </li>
        </List>
      </ColumnWrapper>
    </TableRowWrapper>
  );
};

LineUpStats.propTypes = {
  matchInfo: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.objectOf(PropTypes.string),
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    ]),
  ).isRequired,
};

export default LineUpStats;
