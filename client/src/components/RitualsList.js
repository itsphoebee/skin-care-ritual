import React from 'react';
import { Link } from 'react-router-dom';

const RitualsList = ({ rituals }) => {

  const renderRituals = rituals.rituals.map(r =>
    <Link style={{ marginRight: '12px' }} key={r.id} to={`/rituals/${r.id}`}> {r.name}</Link>
  );

  return (
    <div>
      {renderRituals}
    </div>
  );
};

export default RitualsList;
