import { FluidObject } from 'gatsby-image';

export interface Member {
  id: string;
  title: string;
  name: string;
  bio: string;
  picture: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface OurTeamProps {
  team: Member[];
}
