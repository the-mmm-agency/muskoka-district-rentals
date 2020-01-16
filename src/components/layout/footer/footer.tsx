import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Facebook } from 'styled-icons/boxicons-logos/Facebook'
import { Instagram } from 'styled-icons/boxicons-logos/Instagram'
import { Youtube } from 'styled-icons/boxicons-logos/Youtube'
import { Send } from 'styled-icons/boxicons-regular/Send'

import {
  Copyright,
  Hr,
  Info,
  Logo,
  SignUp,
  SocialIcons,
  StyledFooter
} from './footer.css'
import FooterList from './footerList'

import Flex from 'elements/flex'
import Input from 'elements/input'

const Footer = () => {
  const { logo, links } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fixed(width: 160, height: 50) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      links: site {
        siteMetadata {
          footerLinks
        }
      }
    }
  `);

  return (
    <StyledFooter>
      <Flex
        col={1 / 4}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        minWidth="100%"
      >
        {links.siteMetadata.footerLinks.map(list => (
          <FooterList links={list} key={list[0]} />
        ))}
        <SignUp>
          <span>Sign up for our newsletter</span>
          <span>
            <Input placeholder="Your email..." />
            <Send />
          </span>
        </SignUp>
      </Flex>
      <Hr />
      <Flex width={1}>
        <Info>
          <Logo fixed={logo.childImageSharp.fixed} />
          <Copyright>
            © {new Date().getFullYear()} Muskoka District Rentals
          </Copyright>
        </Info>
        <SocialIcons>
          <a href="https://www.youtube.com/channel/UC4-N2Z720dir5HcOxu2hsqA">
            <Youtube />
          </a>
          <a href="https://instagram.com/muskokadistrictrentals">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/muskokadistrictrentals/">
            <Facebook />
          </a>
        </SocialIcons>
      </Flex>
    </StyledFooter>
  );
};

export default Footer;
