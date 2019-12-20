import React from 'react';

import Desktop from './ourTeam.desktop';
import Mobile from './ourTeam.mobile';
import { useTeam } from './outTeam.useTeams';

import Hidden from 'components/hidden';

const OurTeam: React.FC = () => {
  const team = useTeam();
  return (
    <>
      <Hidden up="md">
        <Mobile team={team} />
      </Hidden>
      <Hidden down="md">
        <Desktop team={team} />
      </Hidden>
    </>
  );
};

export default OurTeam;
