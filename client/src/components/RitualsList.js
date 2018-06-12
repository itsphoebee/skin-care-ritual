import React from 'react';
import RitualCard from '../components/RitualCard';

const RitualsList = ({ rituals }) => {
  const renderRituals = rituals.map(r =>
    <RitualCard key={r.id} ritual={r} />
  );

  return (
    <div>
      {renderRituals}
    </div>
  );
};

export default RitualsList;
