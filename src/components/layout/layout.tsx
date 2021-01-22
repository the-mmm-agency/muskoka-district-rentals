import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@xstyled/emotion';

import MobileNavigation from './mobileNavigation';
import Footer from './footer';
import Header from './header';
import Transition from './transition';

import Box from 'elements/box';

const Layout = ({
  element,
  props: {
    location: { pathname },
  },
}) => (
  <>
    <Box>
      <div>
        <aside style={{ padding: '20px 80px', textAlign: 'center' }}>
          <a
            href="https://blogmuskoka.com/covid-cancellation-policy/"
            target="_blank"
          >
            <span>Covid cancelation policy</span>
          </a>
        </aside>
      </div>
    </Box>
    <Header />
    <Box
      css={css`
        max-width: 100vw;
        margin: 0 auto;
        padding-top: 0;
        overflow-x: hidden;
      `}
    >
      <Transition pathname={pathname}>{element}</Transition>
      <MobileNavigation />
      <Footer />
    </Box>
  </>
);

Layout.propTypes = {
  element: PropTypes.element.isRequired,
  props: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Layout;
