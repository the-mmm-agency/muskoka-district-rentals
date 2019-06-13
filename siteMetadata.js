module.exports = {
  title: `Muskoka District Rentals`,
  description: `MDR offers turn-key cottage rental agency services for owners seeking a trusted partner to safely manage the cottage rental process on their behalf`,
  author: `@brettm12345`,
  headerLinks: [
    '/cottages',
    '/guest-services',
    '/about-us',
    '/rent-your-cottage',
    '/buy-or-sell',
    '/private-fleet',
  ],
  footerLinks: [
    ['/site-map', '/terms-and-conditions', '/privacy-policy', '/help'],
    ['/our-rentals', '/guest-concierge', '/about', '/contact'],
    ['/faqs', '/blog', '/our-blog', '/press'],
  ],
  manifest: {
    name: `Muskoka District Rentals`,
    short_name: `mdr`,
    start_url: `/`,
    background_color: `#eaecef`,
    theme_color: `#eaecef`,
    display: `standalone`,
    icon: `src/images/muskoka-icon.png`,
  },
}