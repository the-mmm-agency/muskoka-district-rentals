import RootWrapper from './wrap-root'
import PageWrapper from './src/components/layout'

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

export const wrapPageElement = PageWrapper
export const wrapRootElement = RootWrapper
