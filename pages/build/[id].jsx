import Head from 'next/head'
import PromptBox from "../../components/PromptBox";
import RenderScreen from "../../components/RenderScreen";
import CodeEditor from "../../components/CodeEditor";
import {useState} from "react";


export default function Build() {
    const [code, setCode] = useState("");
    const [currentTab, setCurrentTab] = useState("output");



    const handleCode = (newCode) => {
        setCode(newCode);
    }

    console.log(code)
  return (
      <div className="continer h-screen px-24 flex justify-center mx-auto border border-blue-900">
          <div className="border border-yellow-800 my-10 w-full">


              <div
                  className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                  <div className="flex flex-wrap justify-end -mb-px">
                      <button className="me-2" onClick={() => {setCurrentTab("output")}}>
                          <div className={
                              currentTab === "output"
                                  ?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                                  :"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                          }>Output</div>
                      </button>
                      <button className="me-2" onClick={() => {setCurrentTab("code")}}>
                          <div
                              className={
                                currentTab === "code"
                                    ?"inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                                    :"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                }
                             aria-current="page">Code</div>
                      </button>
                  </div>
              </div>
              {currentTab === "output"
                  ?(
                      <div className="h-full">
                            <RenderScreen code={code} />
                      </div>
                  ):(
                      <div className="h-full">
                            <CodeEditor onChange={handleCode} code={code} />
                      </div>
                  )
              }

          </div>
      </div>
      // <div>
      //   <Head>
      //     <title>Flux Frame</title>
      //     <meta name="description" content="AI web developer" />
      //     <link rel="icon" href="/favicon.ico" />
      //   </Head>
      //
      //   <main>
      //       <div>
      //           <div className="grid grid-cols-6 h-screen">
      //               <div className="col-span-4 h-screen">
      //                   <RenderScreen />
      //               </div>
      //               <div className="col-span-2">
      //                   <CodeEditor onChange={handleCode} code={code} />
      //               </div>
      //           </div>
      //           <div className="absolute bottom-0 w-screen ">
      //                 <PromptBox />
      //           </div>
      //       </div>
      //   </main>
      // </div>
  )
}
