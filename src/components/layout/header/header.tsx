import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import DesktopHeader from './header.desktop';
import MobileHeader from './header.mobile';

import Hidden from 'components/hidden';

const Header = () => {
  const {
    site: {
      siteMetadata: { headerLinks: links },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          headerLinks
        }
      }
    }
  `);
  return (
    <>
      <Hidden up="md">
        <MobileHeader links={links} />
      </Hidden>
      <Hidden down="md">
        <DesktopHeader links={links} />
      </Hidden>
    </>
  );
};

export default Header;
