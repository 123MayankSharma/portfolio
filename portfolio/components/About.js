import Image from 'next/image'
import profile from '../public/profile.jpg'






const About = () => {
    return (<>
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 mt-12">
                    <h1 className="text-2xl font-serif text-grey-800 lg:text-5xl dark:text-white"> Hey there!
                    </h1>
                    <div className="mt-6 text-grey-800 dark:text-white">
                        <p className="mb-4 font-mono">
                            My Name is Mayank Sharma and I am a Computer Science engineering Student at NSUT East Campus.My Main Interests lie in Linux/Unix, WebDevelopment,and In general learning New things on Various topics.
                            Given below is the Link to my socials! Feel free to contact me!
                        </p>

                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />

                </div>
            </div>

        </div>


    </>)



}

export default About;
