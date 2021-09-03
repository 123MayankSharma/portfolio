const Footer = () => {
    return (<>
        <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6"  >
            <div className="max-w-4xl px-4 mx-auto text-green-800 dark:text-white-800" >
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300 "></div>
                    <div className="flex flex-col justify-between lg:flex-row items-center">
                        <p>
Made with Next.js,Tailwind css and deployed on Vercel!
                        </p>
                        <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                            <a href="#"className={"transition-colors hover:text-pink-500"} >Twitter</a>
        
                            <a href="#"className={"transition-colors hover:text-pink-500"} >Linkedin</a>           
                            <a href="#"className={"transition-colors hover:text-pink-500"} >Github</a>
                           
                        </div>
                    </div>
                
            </div>
        </div>


    </>)




}





export default Footer
