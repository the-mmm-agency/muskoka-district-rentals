import { Link } from 'gatsby';
import React, { FC } from 'react';

import ProductionLink from 'components/productionLink';

interface MobileNavigationItemProps {
  href?: string;
  icon: React.ReactNode;
  to?: string;
  production?: boolean;
}

const MobileNavigationItem: FC<MobileNavigationItemProps> = ({
  href,
  to,
  icon,
  production = false,
}) =>
  to ? (
    production ? (
      <ProductionLink to={to} />
    ) : (
      <Link activeClassName="active" to={to}>
        {icon}
      </Link>
    )
  ) : (
    <a href={href}>{icon}</a>
  );

export default MobileNavigationItem;
