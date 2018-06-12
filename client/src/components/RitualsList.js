import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../adult-hand-cream-hands-1029896.jpg'
import RitualCard from '../containers/RitualCard';

const RitualsList = ({ rituals, counter, handleOnClick }) => {
  const renderRituals = rituals.map(r =>
    <RitualCard ritual={r}/>
  )

  return (
    <div>
      {renderRituals}
    </div>
  );
};

export default RitualsList;
