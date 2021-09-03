import 'tailwindcss/tailwind.css'
import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }) {
    return (<>
        <ThemeProvider attribute="class" enableSystem={false}>
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>

    </>)
}

export default MyApp
