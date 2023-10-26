
const PromptBox = () => {
    return(
        <div className="bg-slate-800 text-white py-4">
            <div className="flex justify-between items-center">
                <div className="px-5">
                    <h1 className="text-3xl">
                        FluxFrame
                    </h1>
                </div>
                <div className="flex">
                    <div className="px-3">
                        <input />
                    </div>
                    <div className="pr-3">
                        <button>Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromptBox;