---
author:
  - Brett Mandler
title: Work Summary
---

The site is built with [gastby.js](https://www.gatsbyjs.org/) a react
framework for building prerendered react sites.

## Lake search

I setup a custom search by lake feature on the homepage.

## Chatbot

The chatbot is setup to ask the user a series of questions and then
compile the answers and send an email by calling a lambda function

### Lambda Function

I setup an aws lambda function to email responses from the chatbot to
clients
[here](https://github.com/the-mmm-agency/muskoka-district-rentals/blob/develop/src/lambda/email.ts)

## Image Optimization

### Image Resizing

By optimizing all the images at build time it allows all images to be
automatically scaled to their viewport. IE: we won\'t force a client to
load a 900px image on a 300px screen. Instead we send them an image we
resized to 300px in advance.

### Webp support

[mdr](https://muskokadistrictrentals.com/) has full support for the next
generation image format known as
[webp](https://developers.google.com/speed/webp) meaning it delivers
smaller, higher quality images on compatible browsers.

## Design System

[mdr](https://muskokadistrictrentals.com) has as consistent and flexible
design system I developed from the mockups provided. The project uses
the [xstyled](https://github.com/smooth-code/xstyled) library to write
styles for React Components.

## Extra Data

The data for the concierge services, guest services, homepage rentals
component, team member bios and testimonials are all stored in \`JSON\`
[here](https://github.com/the-mmm-agency/muskoka-district-rentals/tree/develop/data)

## Page Content

The content for the remaining pages is stored in
[MDX](https://mdxjs.com/) please refer to this tutorial for writing
markdown <https://www.markdowntutorial.com/>.
