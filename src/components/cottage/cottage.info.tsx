import React, { FC } from 'react'
import { Bed } from 'styled-icons/boxicons-regular/Bed'
import { PersonOutline as Guest } from 'styled-icons/material/PersonOutline'
import { HomeOutline as House } from 'styled-icons/typicons/HomeOutline'

import { Item, List } from './cottage.info.css'

interface CottageInfoProps {
  category: string;
  guests: number;
  bedrooms: number;
}

const CottageInfo: FC<CottageInfoProps> = ({ category, guests, bedrooms }) => (
  <List>
    {[
      ['Property', <House key="category" />, category],
      ['Sleeps', <Guest key="guests" />, guests],
      ['Bedrooms', <Bed key="bedrooms" />, bedrooms],
    ].map(([name, icon, value]) => (
      <Item key={name}>
        {icon}
        <span>{name}&nbsp;</span>
        <span>{value}</span>
      </Item>
    ))}
  </List>
);

export default CottageInfo;
