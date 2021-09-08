const ProgressBar = ({ pb }) => {
    return (
        <>

            <div className="h-3 relative max-w-screen rounded-full overflow-hidden">
                <div className="w-screen h-screen bg-gray-400 absolute"></div>
                <div id='progress-bar' className="h-full w-full bg-red-500 absolute" style={{ width: `${pb}%` }}></div>
            </div>
            {/* <h1>{Math.ceil(pb)}% Done!</h1> */}

        </>
    )
}

export default ProgressBar
