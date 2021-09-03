import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'
function MyApp({ Component, pageProps }) {
  return(<>
      <Navigation/>
      <Component {...pageProps} /> 
      <Footer/>
      </>)
}

export default MyApp
