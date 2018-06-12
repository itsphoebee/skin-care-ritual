import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../adult-hand-cream-hands-1029896.jpg'

const RitualsList = ({ rituals }) => {
  const renderRituals = rituals.map(r =>
    <div className="ritual" key={r.id}>
      <Link style={{ marginRight: '12px' }} to={`/rituals/${r.id}`}> {r.name}
        <br/><br/>
        <img className="default-photo" src={photo} width="60%" alt="default"/>
      </Link>
    </div>
  );

  return (
    <div>
      {renderRituals}
    </div>
  );
};

export default RitualsList;
