import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { GuestServicesJson } from 'src/graphql-types'

import GuestService from './guestService'

const GuestServices: FC = () => {
  const data: {
    allGuestServicesJson: { nodes: GuestServicesJson[] };
  } = useStaticQuery(graphql`
    query GuestServices {
      allGuestServicesJson {
        nodes {
          id
          ...GuestService
        }
      }
    }
  `);
  return (
    <>
      {data.allGuestServicesJson.nodes.map(({ id, ...rest }) => (
        <GuestService key={id} {...rest} />
      ))}
    </>
  );
};

export default GuestServices;
