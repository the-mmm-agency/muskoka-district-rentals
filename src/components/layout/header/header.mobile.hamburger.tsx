import React, { ButtonHTMLAttributes, FC } from 'react';

import { Button, Inner } from './header.mobile.hamburger.css';

interface HamburgerProps extends ButtonHTMLAttributes<any> {
  active: boolean;
}

const Hamburger: FC<HamburgerProps> = ({ active = false, ...props }) => (
  <Button ariaLabel="Menu" ariaControls="navigation" {...props}>
    <span>
      <Inner active={active} />
    </span>
  </Button>
);

export default Hamburger;
