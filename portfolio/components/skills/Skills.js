import ProgressBar from "../ProgressBar.js"



const Skill = () => {
    return (<>
       
        
            <h1>
                Programming Languages
            </h1>
            <div className="border-2 border-gray-800 dark:border-green-700 mb-7  w-100 max-h-full rounded-md  sm:max-w-7xl">

                <span className="text-left ml-2">C++</span>
                <div className="ml-2 mr-2 mb-4"><ProgressBar pb={40} /></div>
                <span className="text-left ml-2">JavaScript</span>
                <div className="ml-2 mr-2 mb-4"><ProgressBar pb={55} /></div>
                <span className="text-left ml-2">Vimscript</span>
                <div className="ml-2 mr-2 mb-4"><ProgressBar pb={25} /></div>
                <span className="text-left ml-2">C</span>
                <div className="ml-2 mr-2 mb-4"><ProgressBar pb={25} /></div>

            </div>
              
        <h1>
            Tools
        </h1>
        <div className="border-2 border-gray-800 dark:border-green-700 w-100 mb-7 max-h-full rounded-md  sm:max-w-7xl">

            <span className="text-left ml-2">VS Code</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={40} /></div>
            <span className="text-left ml-2">NeoVim</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={55} /></div>

        </div>


        <h1>Frameworks and Libraries</h1>
        <div className="border-2 border-gray-800 dark:border-green-700 mb-7  w-100 max-h-full rounded-md  sm:max-w-7xl">

            <span className="text-left ml-2">React.js</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={45} /></div>
            <span className="text-left ml-2">Next.js</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={55} /></div>
            <span className="text-left ml-2">Tailwind CSS</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={30} /></div>
            <span className="text-left ml-2">Node.js</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={38} /></div>
            <span className="text-left ml-2">Git and Github</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={40} /></div>


        </div>


        <h1>Operating System</h1>
        <div className="border-2 border-gray-800 dark:border-green-700 mb-7  w-100 max-h-full rounded-md  sm:max-w-7xl">

            <span className="text-left ml-2">Linux</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={50} /></div>
            <span className="text-left ml-2">Windows</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={25} /></div>


        </div>

        <h1>Core Subjects</h1>
        <div className="border-2 border-gray-800 dark:border-green-700 mb-7  w-100 max-h-full rounded-md  sm:max-w-7xl">

            <span className="text-left ml-2">Operating System</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={45} /></div>
            <span className="text-left ml-2">Networking</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={45} /></div>
            <span className="text-left ml-2">SQL</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={60} /></div>
            <span className="text-left ml-2">DBMS</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={40} /></div>


        </div>

       
    </>)



}

export default Skill
