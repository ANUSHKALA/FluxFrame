import React from "react";

const PromptBox = () => {
  return (
    <div className="bg-slate-800 text-white py-4">
      <div className="flex flex-row justify-start items-center w-full">
        <div className="px-5">
          <h1 className="text-3xl">FluxFrame</h1>
        </div>
        <div className="flex flex-grow mx-5 align-middle">
          <div className="p-1 rounded-full bg-white text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 flex-grow">
            <textarea
              className="border-2 border-slate-800 rounded-full py-2 px-5 overflow-auto max-h-[35vh] outline-none w-full flex-grow flex items-center font-sans duration-200 transition-all"
              placeholder="Make a component..."
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <div className="pr-3 mx-10 my-auto w-72">
            <button className="bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded text-white">Generate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptBox;
