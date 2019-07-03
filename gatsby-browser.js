import RootWrapper from './src/components/rootWrapper'
import PageWrapper from './src/components/pageWrapper'

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

export const wrapPageElement = PageWrapper
export const wrapRootElement = RootWrapper