import { graphql, useStaticQuery } from 'gatsby'
import React, { AnchorHTMLAttributes } from 'react'

interface ProductionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
}
interface Response {
  site: {
    siteMetadata: {
      productionUrl: string
    }
  }
}
const ProductionLink: React.FC<ProductionLinkProps> = ({ to, ...rest }) => {
  const {
    site: {
      siteMetadata: { productionUrl },
    },
  }: Response = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          productionUrl
        }
      }
    }
  `)
  return <a {...rest} href={`${productionUrl}/${to}`} />
}

export default ProductionLink
