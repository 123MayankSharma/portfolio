import About from '../components/About.js'
import Head from 'next/head'


const Home = () => {
    return (
        <> <Head>
            <title>Portfolio</title>
            </Head>
            <div className="space-y-14 lg:space-y-24">
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="max-w-4xl mx-auto mt-16 antialiased">
                    <About />
                </main>
            </div>

        </>



    )


}


export default Home
