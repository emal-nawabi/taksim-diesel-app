import 'tailwindcss/tailwind.css'
import NProgress from 'nprogress'
import Router from 'next/router'

import '../styles/base.css'
import '../styles/grid.css'
import '../styles/main.css'
import '../styles/nprogress.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
// import 'react-multi-carousel/lib/styles.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

Router.events.on('routeChangeStart', (url) => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
