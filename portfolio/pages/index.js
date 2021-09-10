import About from '../components/About.js'
import Head from 'next/head'
import { Transition } from '@headlessui/react'

const Home = () => {
    return (
        <> <Transition
            show={true}
            enter="transition ease-linear duration-1000 transform"
            enterFrom="translate-y-full "
            enterTo="translate-y-0"
            
        >
            <div className="space-y-14 lg:space-y-24">
                <Head>
                    <title>Portfolio</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="max-w-4xl mx-auto mt-16 antialiased">
                    <About />
                </main>
            </div>
         </Transition>
        </>



    )


}


export default Home
