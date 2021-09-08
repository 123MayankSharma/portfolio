import ProgressBar from "../ProgressBar.js"






const Skill = () => {
    return (<>
        <h1>
            Programming Languages
        </h1>
        <div className="border-2 border-green-700 w-100 max-h-full rounded-md  sm:max-w-7xl">

            <span className="text-left ml-2">C++</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={40} /></div>
            <span className="text-left ml-2">JavaScript</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={55} /></div>
            <span className="text-left ml-2">Vimscript</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={25} /></div>
            <span className="text-left ml-2">C</span>
            <div className="ml-2 mr-2 mb-4"><ProgressBar pb={25} /></div>

        </div>



    </>)



}

export default Skill
