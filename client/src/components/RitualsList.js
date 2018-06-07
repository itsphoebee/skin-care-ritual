import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../adult-hand-cream-hands-1029896.jpg'

const RitualsList = ({ rituals }) => {
  const renderRituals = rituals.map(r =>
    <div className="ritualsList">
      <Link style={{ marginRight: '12px' }} key={r.id} to={`/rituals/${r.id}`}> {r.name}</Link>
      <br/>
      <img src={photo} width="80%"  alt="default"/>
    </div>
  );

  return (
    <div>
      {renderRituals}
    </div>
  );
};

export default RitualsList;
