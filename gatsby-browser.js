import RootWrapper from './wrap-root'
import PageWrapper from './src/components/layout'

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

export const onInitialClientRender = () => {
  if (process.env.NODE_ENV === 'production' && window.drift) {
    window.drift.SNIPPET_VERSION = '0.3.1'
    window.drift.load('46w3n56cw9as')
  }
}

export const wrapPageElement = PageWrapper
export const wrapRootElement = RootWrapper
