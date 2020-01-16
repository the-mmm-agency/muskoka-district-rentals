import { SystemProps } from '@xstyled/system'
import React, { FC } from 'react'

import Box from 'elements/box'
import Link from 'elements/link'

export interface Breadcrumb {
  link: string;
  title: string;
}

interface BreadcrumbProps extends SystemProps {
  crumbs: Breadcrumb[];
  activeColor?: string;
  color?: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({
  crumbs,
  activeColor = 'textPrimary',
  color = 'textLight',
  ...props
}) => (
  <Box display="inline-block" {...props}>
    {crumbs.map(({ link, title }, index) => (
      <>
        <Link
          key={link}
          to={title}
          color={index === crumbs.length - 1 ? activeColor : color}
          fontWeight="bold"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {index !== crumbs.length - 1 && <>&nbsp; &gt; &nbsp;</>}
      </>
    ))}
  </Box>
);

export default Breadcrumb;
