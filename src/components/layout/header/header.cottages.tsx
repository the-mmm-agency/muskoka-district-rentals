import {
  MenuList,
  MenuListItem,
  MenuListItemText
} from '@material/react-menu'
import React, { FC } from 'react'

import { Lakes } from 'components/checkAvailability/lakes'
import ProductionLink from 'components/productionLink'

const Cottages: FC = () => (
  <MenuList>
    <ProductionLink to="/cottages">
      <MenuListItem>
        <MenuListItemText
          css={{
            textDecoration: 'none',
            color: 'black',
            '&:hover': { textDecoration: 'none', color: 'black ' },
          }}
          primaryText="All Cottages"
        />
      </MenuListItem>
    </ProductionLink>
    {Object.entries(Lakes).map(([lake, id]) => (
      <ProductionLink to={`/#?gp=${id}`}>
        <MenuListItem key={id}>
          <MenuListItemText
            primaryText={lake}
            css={{
              textDecoration: 'none',
              color: 'black',
              '&:hover': { textDecoration: 'none', color: 'black ' },
            }}
          />
        </MenuListItem>
      </ProductionLink>
    ))}
  </MenuList>
);

export default Cottages;
