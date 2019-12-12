import { FluidObject } from 'gatsby-image';

export interface Member {
  id: string;
  title: string;
  name: string;
  picture: FluidObject;
}

export interface OurTeamProps {
  team: Member[];
}
